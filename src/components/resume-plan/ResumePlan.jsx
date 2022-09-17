import React from 'react'

import { CarResume,
         CarResumeContainer,
         CarSubtitle,
         CarTitle,
         DesktopTitle,
         MobileTitle,
         Picture,
         ResumePlanStyled,
         Subtitle
      } from './styles/resume-plan'

import picture from '../../assets/picture.svg'
import { useSelector } from 'react-redux'

function ResumePlan() {

  const user = useSelector(({ user }) => user)

  console.log( user )
  return (
    <ResumePlanStyled>
      <MobileTitle>Mira las coberturas</MobileTitle>
      <DesktopTitle>¡Hola, <span style={{color: '#FF1C44'}}>{user.name}</span>!</DesktopTitle>
      <Subtitle>Conoce las coberturas para tu plan</Subtitle>
      <CarResume>
        <CarResumeContainer>
          <CarSubtitle>Placa: {user.licencePlate}</CarSubtitle>
          <CarTitle>Wolkswagen 2019 Golf</CarTitle>
        </CarResumeContainer>
        <Picture src={picture}/>
      </CarResume>
    </ResumePlanStyled>
  )
}

export default ResumePlan