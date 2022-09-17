import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { HeaderContactDesktop, 
         HeaderContactMobile, 
         HeaderContainer, 
         HeaderLeft, 
         HeaderLogo, 
         HeaderRight, 
         HeaderStyled 
       } from './styles/header'

import logo from '../../assets/logo/Logo RIMAC.svg'
import icPhone from '../../assets/ic_phone.svg'
import icPhoneMobile from '../../assets/ic_phone_mobile.svg'

function Header() {

  const navigate = useNavigate()

  const mode         = useSelector(({ mode }) => mode)
  const { pathname } = useLocation()

  return (
    <HeaderStyled background={mode.primaryBackgroundColor} style={pathname !== '/' ? {borderBottom: '1px solid #E4E8F7', backgroundColor: '#ffffff'} : {border: 'none'}}>
      <HeaderContainer>
        <HeaderLeft onClick={e => navigate('/')}>
          <HeaderLogo src={logo}/>
        </HeaderLeft>
        <HeaderRight>
          <HeaderContactMobile>
            <img src={icPhoneMobile} style={{marginRight: '8.8px'}}/>
            Llámanos
          </HeaderContactMobile>
          <HeaderContactDesktop>
            <span style={{color: '#676F8F'}}>¿Tienes alguna Duda?</span>
            <img src={icPhone} style={{marginRight: '8px', marginLeft: '23px'}}/>
            {/* <ion-icon name="call" style={{marginRight: '8px', marginLeft: '23px', fontSize: '20px', transform: 'translateY(1.5px)'}}></ion-icon> */}
            (051) 985574152
          </HeaderContactDesktop>
        </HeaderRight>
      </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header