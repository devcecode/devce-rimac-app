import React from 'react'

import { BannerContent, 
         BannerContentContainer, 
         BannerDesktopImage, 
         BannerHomeContainer, 
         BannerHomeStyled, 
         BannerImage, 
         BannerImageContainer, 
         CopyRight, 
         Paragraph, 
         Subtitle, 
         Title, 
         TitleSpan 
       } from './styles/banner-home'

import bannerImage from '../../assets/group.svg'
import bannerDesktopBackgroundImage from '../../assets/mask-group.svg'
import bannerDesktopImage from '../../assets/mask-group-image.svg'

function BannerHome() {
  return (
    <BannerHomeStyled>
      <BannerHomeContainer>
        <BannerImageContainer backImage={bannerDesktopBackgroundImage}>
          <BannerImage src={bannerImage}/>
          <BannerDesktopImage src={bannerDesktopImage} />
        </BannerImageContainer>
        <BannerContent>
          <BannerContentContainer>
            <Subtitle>¡NUEVO!</Subtitle>
            <Title>Seguro <TitleSpan>Vahivular</TitleSpan> <br/><span style={{color: '#FF1C44'}}>Tracking</span></Title>
            <Paragraph>Cuentanos donde le haras Seguimiento a tu seguro</Paragraph>
          </BannerContentContainer>
        </BannerContent>
      </BannerHomeContainer>
      <CopyRight>© 2021 RIMAC Seguros y Reaseguros.</CopyRight>
    </BannerHomeStyled>
  )
}

export default BannerHome