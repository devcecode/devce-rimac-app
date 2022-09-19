import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Button,
         CopyRight,
         Email,
         Gretting,
         GrettingContainer,
         Paragraph,
         Span,
         ThumbnailPictureDesktop, 
         ThumbnailPictureMobile, 
         Title, 
         WelcomeContainer, 
         WelcomeStyled, 
         WelcomeThumbnail 
       } from './styles/welcome'

import Picture1 from '../../assets/welcome-thumbnail-picture-mobile.svg'
import Picture2 from '../../assets/welcome-thumbnail-picture-desktop.svg'
import { useNavigate } from 'react-router-dom'

function Welcome() {

  const user = useSelector(({ user }) => user)
  const totalAmount = useSelector(({ totalAmount }) => totalAmount)
  const navigate = useNavigate()

  useEffect(() => {
    if(!user) {
      navigate('/')
    }
  }, [ user ])

  if(user) return (
    <WelcomeStyled>
      <WelcomeContainer>
        <WelcomeThumbnail>
          <ThumbnailPictureMobile src={Picture1}/>
          <ThumbnailPictureDesktop src={Picture2}/>
        </WelcomeThumbnail>
        <Gretting>
          <GrettingContainer>
            <Title><Span style={{color: "#FF1C44"}}>¡Te damos la BienVenida!</Span> Cuenta con nosotros para proteger tu Vehículo</Title>
            <Paragraph>Enviaremos la confirmación de compra de tu Plan Vehícular Tracking a tu correo: <Email>{user.email}</Email></Paragraph>
            <p style={{marginTop: '16px', color: '#676F8F'}}>Total Amount by Month: <span style={{fontWeight: '700'}}>${totalAmount}</span></p>
            <Button>CÓMO USAR MI SEGURO</Button>
            <CopyRight>© 2021 RIMAC Seguros y Reaseguros.</CopyRight>
          </GrettingContainer>
        </Gretting>
      </WelcomeContainer>
    </WelcomeStyled>
  )
}

export default Welcome