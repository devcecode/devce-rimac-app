import React from 'react'
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
import { useDispatch } from 'react-redux'

function Header() {

  const dispatch = useDispatch()

  const navigate     = useNavigate()
  const { pathname } = useLocation()

  return (
    <HeaderStyled style={pathname !== '/' ? {borderBottom: '1px solid #E4E8F7'} : {border: 'none'}}>
      <HeaderContainer>
        <HeaderLeft onClick={e => {
          dispatch({
            type: 'SET_PROGRESS',
            currentProgress: 1
          })
          navigate('/')
        }}>
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
            (01) 4116001
          </HeaderContactDesktop>
        </HeaderRight>
      </HeaderContainer>
    </HeaderStyled>
  )
}

export default Header