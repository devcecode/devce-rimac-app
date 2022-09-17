import React from 'react'
import BannerHome from '../../components/banner-home/BannerHome'
import LoginFormHome from '../../components/login-form-home/LoginFormHome'
import { HomeContainer, HomeStyled } from './styles/home'

function Home() {
  return (
    <HomeStyled>
      <HomeContainer>
        <BannerHome />
        <LoginFormHome />
      </HomeContainer>
    </HomeStyled>
  )
}

export default Home