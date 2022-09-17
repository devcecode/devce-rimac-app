import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { DdiContainer, 
         DdiInput, 
         Form, 
         FormElement, 
         Input, 
         Left, 
         LoginFormContainer, 
         LoginFormHomeStyled, 
         Right, 
         Title,
         Button, 
         A, 
         CheckBox, 
         Li, 
         PoliticsMessage, 
         PoliticsMessageContainer,
         SelectBody, SelectDocType,
         SelectHeader, 
         SelectContent, 
         CheckedContainer, 
         Link,
         InputError,
         Ddi,
         Message} from './styles/login-form-home'

import { getUser } from '../../helpers/UserApi'

function LoginFormHome() {

  const docs = ['DNI', 'C. EXTRANJERÍA', 'PASAPORTE']
  const [ select, setSelect ]               = useState('DNI')
  const [ selectVisible, setSelectVisible ] = useState(false)
  const [ isChecked, setIsChecked ]         = useState(false)
  
  const [ doc, setDoc ]                   = useState('')
  const [ phone, setPhone ]               = useState('')
  const [ licencePlate, setLicencePlate ] = useState('')
  
  const [ docError, setDocError ]                   = useState('')
  const [ phoneError, setPhoneError ]               = useState('')
  const [ licencePlateError, setLicencePlateError ] = useState('')
  const [ checkedError, setCheckedError ]           = useState('')

  const [ success, setSuccess ] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDocs = e => {
    setSelect(e.target.id)
    setSelectVisible(!selectVisible)
  }

  const validateData = async e => {
    e.preventDefault()

    let docError          = ''
    let phoneError        = ''
    let licencePlateError = ''
    let checkedError      = ''

    if(!doc) docError                   = 'El documento de identidad es requerida'
    if(!phone) phoneError               = 'Agraga un número telefónico'
    if(!licencePlate) licencePlateError = 'Ingrese la placa de su auto'
    if(!isChecked) checkedError         = 'Debes aceptar las políticas de privacidad'

    if(docError || phoneError || licencePlateError || checkedError) {
      setDocError(docError)
      setPhoneError(phoneError)
      setLicencePlateError(licencePlateError)
      setCheckedError(checkedError)
      setSuccess(false)
    }else {
      setSuccess(true)
    }
  }

  useEffect(() => {
    if(success) {
      const addUser = async () => {
        const users = await getUser()
        const user  = users[Math.floor(Math.random() * users.length)]

        dispatch({
          type: 'SET_USER',
          currentUser: {...user, doc, phone, licencePlate}
        })

        navigate('/plan')
        
      }
      addUser()
    }
  }, [success])


  return (
    <LoginFormHomeStyled>
      <LoginFormContainer>
        <Title>Déjanos tus datos</Title>
        <Form>
          {/* Ddi -> Documento de identidad */}
          <Ddi>
            <DdiContainer>
              <Left>
                <SelectDocType>
                  <SelectHeader onClick={e => setSelectVisible(!selectVisible)}>
                    {select}
                    <ion-icon name="chevron-down-outline" style={{marginLeft: '11.8px', color: '#EF3340'}}></ion-icon>
                  </SelectHeader>
                  {
                    selectVisible && (
                      <SelectBody onClick={e => setSelectVisible(!selectVisible)} id="select-body">
                        <SelectContent>
                          {docs.map((d, i) => (<Li><A href="#" onClick={handleDocs} id={d} style={d === select ? {color: '#6769FF'} : {color: '#494F66'}}>{d}</A></Li>))}
                        </SelectContent>
                      </SelectBody>
                    )
                  }
                  
                </SelectDocType>
              </Left>
              <Right>
                <DdiInput type="text" placeholder="Nro. de doc" value={doc} onChange={e => {setDoc(e.target.value); setDocError('')}}/>
              </Right>
            </DdiContainer>
            {docError && <InputError>{docError}</InputError>}
          </Ddi>
          <FormElement>
            <Input type="text" placeholder="Celular" value={phone} onChange={e => {setPhone(e.target.value); setPhoneError('')}}/>
            {phoneError && <InputError>{phoneError}</InputError>}
          </FormElement>
          <FormElement>
            <Input type="text" placeholder="Placa" value={licencePlate} onChange={e => {setLicencePlate(e.target.value); setLicencePlateError('')}}/>
            {licencePlateError && <InputError>{licencePlateError}</InputError>}
          </FormElement>

          <PoliticsMessage>
            <PoliticsMessageContainer>
              <CheckedContainer onClick={e => {setIsChecked(!isChecked), setCheckedError('')}}>
                {isChecked && (<CheckBox><ion-icon name="checkmark-outline" style={{color: '#ffffff'}}></ion-icon></CheckBox>)}
              </CheckedContainer>
              <Message onClick={e => {setIsChecked(!isChecked), setCheckedError('')}}>
                Acepto la <Link href="#">Política de Proteccion de Datos Personales</Link> y los <Link href="#">Términos y Condiciones.</Link>
              </Message>
            </PoliticsMessageContainer>
            {checkedError && <InputError>{checkedError}</InputError>}
          </PoliticsMessage>



          <Button onClick={validateData}>COTÍZALO</Button>
        </Form>
      </LoginFormContainer>
    </LoginFormHomeStyled>
  )
}

export default LoginFormHome