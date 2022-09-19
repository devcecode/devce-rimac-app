import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Title, 
         ToppingName, 
         ToppingsContainer, 
         ToppingsTop, 
         ToppingsPlanStyled, 
         Header, 
         Left, 
         Right, 
         Icon, 
         HeaderTitle, 
         Content, 
         ToppingsMiddle, 
         TotalAmount, 
         GoToButton, 
         FooterMobile, 
         ToggleMobileContainer, 
         ToggleMobileElement, 
         TotalAmountContainerMobile, 
         ToggleMobileAdd,
         FooterDesktop, 
         ShowOrHideDesktop
       } from './styles/toppings-plan'       

import { toppings } from './toppings.js'

function ToppingsPlan() {
  const totalAmount = useSelector(({ totalAmount }) => totalAmount)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const toppingsProperty                = Object.keys(toppings)
  const [ tabActive, setTabActive ]     = useState(toppingsProperty[0])

  const handleChangeTabActive = e => {
    e.preventDefault()
    setTabActive(toppingsProperty[e.target.id])
  }  
  
  // Por lo general, no se recomienda mutar datos, pero en este caso lo quise hacer así. asi entonces obtendríamos cualquier dato del lado del backend, que en este caso es 'toppings' que es un objeto la cual  se importa del  archivo toppings.js en el cual se hace una llamada a la API y se obtienen los datos. Entonces para hacer más fácil la tarea de mostrar o no el contido de cada cobertura o topping y agregar o eliminar montos quise mutar el objeto y agregarles las propiedades (state y add). Así entonces cada objeto de la data tendría estos dos propiedades adicionales las cuales se pueden manipular y cambiar facilmente y dependiendo de eso mostrar o no un elemento y agregar o eliminar un monto.

  const newObject = {}
  toppingsProperty.map((property, ti) => {
    let newArray = []
    toppings[property].map((t, i) => {
      if(i===0) {
        newArray.push({...t, state: true, add: true})
      }else {
        newArray.push({...t, state: false, add: false})
      }
    })
    newObject[property] = newArray
  })
  
  const [ Alltoppings, setAllToppings ] = useState(newObject)
  const [ agregates, setAgregates ]     = useState([Alltoppings[tabActive][0]])
  const [ totalAgregates, seTotalAgregates ] = useState()


  useEffect(() => {
    const base = 20
    let result = 0
    agregates.map((a, i) => result+=a.amount)
    seTotalAgregates(base + result)
  }, [agregates])

  useEffect(() => {
    dispatch({
      type: 'SET_AGREGATES',
      currentAgregates: agregates
    })
    dispatch({
      type: 'SET_TOTAL_AGREGATES',
      currentTotalAgregates: totalAgregates
    })
  }, [ agregates, totalAgregates ])


  const updateStateOfAllTopings = e => {
    const i      = e.target.id
    const global = {...Alltoppings}
    global[tabActive][i].state = !global[tabActive][i].state
    setAllToppings(global)
  }

  const updateAddStateOfAllTopings = e => {
    const i      = e.target.id
    const global = {...Alltoppings}
    global[tabActive][i].add = !global[tabActive][i].add
    setAllToppings(global)

    if(global[tabActive][i].add === true ) {
      setAgregates(e => [...e, global[tabActive][i]])
    }else {
      setAgregates(current => {
        return current.filter(x => x.title !== global[tabActive][i].title)
      })
    }
  }

  return (
    <ToppingsPlanStyled>
      <ToppingsContainer>
        <Title>Agrega o quita coberturas</Title>
        <ToppingsTop>
          {
            toppingsProperty.map((t, i) => (
              <ToppingName key={i} style={toppingsProperty[i] === tabActive ? {color: 'red', borderBottom: '2px solid #EF3340'}: {}} onClick={handleChangeTabActive} id={i}>{t.toUpperCase()}</ToppingName>
            ))
          }
        </ToppingsTop>
        {
          Alltoppings[tabActive].map((t,i) => (
            <ToppingsMiddle key={i}>
              <Left>
                <Icon src={t.image}/>
              </Left>
              <Right>
                <Header>
                  <HeaderTitle>{t.title}</HeaderTitle>
                  <ToggleMobileAdd>
                    <ToggleMobileContainer onClick={updateAddStateOfAllTopings} id={i} background={t.add === true ? '#7CC954' : '#E4E8F7'}>
                      <ToggleMobileElement left={t.add === true ? 22 : 1} id={i}></ToggleMobileElement>
                    </ToggleMobileContainer>
                  </ToggleMobileAdd>
                  <ShowOrHideDesktop onClick={updateStateOfAllTopings} id={i}>
                    {
                      t.state === true ? (<ion-icon name="chevron-up-outline" style={{color: '#EF3340', userSelect: 'none'}} id={i}></ion-icon>) : (<ion-icon name="chevron-down-outline" style={{color: '#EF3340', userSelect: 'none'}} id={i}></ion-icon>)
                    }
                  </ShowOrHideDesktop>
                </Header>
                {
                  t.state === true ? (<Content className='topping-active' key={i}>{t.content}</Content>) : (<Content key={i}>{t.content}</Content>)
                }

                {
                  t.state === true ? (
                    <FooterMobile onClick={updateStateOfAllTopings} id={i}>
                      VER MENOS <ion-icon name="chevron-up-outline" style={{marginLeft: '11px', fontWeight: '400'}} id={i}></ion-icon>
                    </FooterMobile>
                  ) : (
                    <FooterMobile onClick={updateStateOfAllTopings} id={i}>
                      VER MÁS <ion-icon name="chevron-down-outline" style={{marginLeft: '11px', fontWeight: '400'}} id={i}></ion-icon>
                    </FooterMobile>
                  )
                }

                {
                  t.add === true ? (
                    <FooterDesktop onClick={updateAddStateOfAllTopings} id={i}>
                      <ion-icon name="remove-circle-outline" style={{fontSize: '28px', marginRight: '12px'}} id={i}></ion-icon> QUITAR
                    </FooterDesktop>
                  ) : (
                    <FooterDesktop onClick={updateAddStateOfAllTopings} id={i}>
                      <ion-icon name="add-circle-outline" style={{fontSize: '28px', marginRight: '12px'}} id={i}></ion-icon> AGREGAR
                    </FooterDesktop>
                  )
                }
              </Right>
            </ToppingsMiddle>
          ))
        }
        <TotalAmountContainerMobile>
          <TotalAmount>${totalAmount} <span style={{fontSize: '10px', lineHeight: '16px', color: '#494F66'}}>MENSUAL</span></TotalAmount>
          <GoToButton onClick={e => navigate('/bien-venida')}>LO QUIERO</GoToButton>
        </TotalAmountContainerMobile>
      </ToppingsContainer>
    </ToppingsPlanStyled>
  )
}

export default ToppingsPlan