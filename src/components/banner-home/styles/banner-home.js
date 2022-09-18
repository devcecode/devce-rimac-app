import styled from 'styled-components'

export const BannerHomeStyled = styled.div`
background-color: #F7F8FC;
position: relative;
padding-top: 56px;
@media(min-width: 600px) {
  width: 40%;
  height: 100vh;
  background-color: #eceeff;
  padding-top: 0px;
}
`

export const BannerHomeContainer = styled.div`
padding-top: 40px;
height: 252px;
margin: 0 32px;
@media(min-width: 600px) {
  padding-top: 0;
  height: auto;
  margin: 0;
}
`

export const BannerContent = styled.div`
@media(min-width: 600px) {
  position: relative;
  z-index: 10000000;
  padding: 0 16px;
  margin-top: -70px;
}
@media(min-width: 960px) {
  display: flex;
  justify-content: center;
  padding-left: 10%;
  margin-top: -10px;
}

@media(min-width: 1200px) {
  margin-top: 10px;
}
`

export const BannerContentContainer = styled.div`
@media(min-width: 960px) {
  /* min-width: 320px; */
}
`

export const Subtitle = styled.h4`
font-weight: 400;
font-size: 10px;
margin-bottom: 8px;
line-height: 16px;
color: #494F66;

@media(min-width: 600px) {
  font-size: 12px;
}
`

export const Title = styled.h1`
font-weight: 400;
font-size: 28px;
line-height: 36px;
margin-bottom: 12px;
color: #494F66;

@media(min-width: 600px) {
  font-size: 36px;
  line-height: 48px;
}
`

export const Paragraph = styled.p`
color: #676F8F;
font-size: 14px;
line-height: 24px;
width: 183px;

@media(min-width: 960px) {
  width: 288px;
}
`

export const BannerImageContainer = styled.div`
position: absolute;
right: 0;
bottom: -27px;

@media(min-width: 600px) {
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${({ backImage}) => backImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
  height: 50vh;
  padding-left: 10%;
}

@media(min-width: 960px) {
  padding-top: 100px;
}

@media(min-width: 1200px) {
  padding-top: 180px;
}
`

export const BannerImage = styled.img`
@media(min-width: 600px) {
  display: none;
}
`


export const BannerDesktopImage = styled.img`
display: none;
@media(min-width: 600px) {
  display: block;
}

@media(min-width: 960px) {
  width: 340px;
}
`

export const CopyRight = styled.p`
display: none;
@media(min-width: 600px) {
display: block;
color: #A3ABCC;
font-size: 12px;
font-weight: 300;
line-height: 20px;

position: fixed;
bottom: 60px;
left: 32px;
@media(min-width: 1200px) {
  left: 5%;
}
@media(min-width: 1600px) {
  left: 12.5%;
}
}
`

export const TitleSpan = styled.span`
@media(min-width: 600px) {
  color: #FF1C44;
} 
`