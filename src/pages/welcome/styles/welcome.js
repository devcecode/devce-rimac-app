import styled from "styled-components"

export const WelcomeStyled = styled.div`
margin-top: 56px;

@media(min-width: 800px) {
  margin-top: 64px;
}
`

export const WelcomeContainer = styled.div`
@media(min-width: 1200px) {
  display: flex;
  justify-content: space-between;
}
`

export const WelcomeThumbnail = styled.div`
@media(min-width: 1200px) {
  height: calc(100vh - 64px);
  background-color: #F7F8FC;
  width: 30%;
  position: relative;
}
`

export const ThumbnailPictureMobile = styled.img`
width: 100%;
@media(min-width: 1200px) {
  display: none;
}
`

export const ThumbnailPictureDesktop = styled.img`
display: none;
@media(min-width: 1200px) {
  display: block;
  position: relative;
  margin-top: 106px;
  position: absolute;
  right: -95px;
}
`
export const Gretting = styled.div`
margin: 0 32px;
margin-top: 45px;

@media(min-width: 800px) {
  margin-top: 96px;
  margin-right: 5vw;
  width: 70%;
}
`

export const GrettingContainer = styled.div`
@media(min-width: 800px) {
  max-width: 480px;
  margin: 0 auto;
}

@media(min-width: 1600px) {
  transform: translateX(-50px);
}
`

export const Title = styled.h2`
font-weight: 400;
font-size: 28px;
line-height: 36px;
letter-spacing: -0.6px;
color: #494F66;

@media(min-width: 800px) {
  display: block;
  font-size: 36px;
  line-height: 48px;
}
`

export const Span = styled.span`
@media(min-width: 600px) {
  display: block;
}
`

export const Paragraph = styled.p`
margin-top: 16px;
font-weight: 300;
font-size: 16px;
line-height: 28px;
color: #676F8F;
`

export const Email = styled.span`
display: block;
font-weight: 400;
`

export const Button = styled.button`
margin-top: 40px;
font-weight: 700;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.8px;
color: #FFFFFF;
height: 56px;
width: 100%;
border: none;
outline: none;
cursor: pointer;
border-radius: 8px;
background-color: #EF3340;
margin-bottom: 100px;
user-select: none;

@media(min-width: 800px) {
  width: 255px;

}
`

export const CopyRight = styled.p`
margin-top: 56px;
font-weight: 300;
font-size: 12px;
line-height: 20px;
display: flex;
align-items: center;
letter-spacing: 0.2px;
color: #A3ABCC;
border-top: 1px solid #E4E8F7;
height: 76px;
position: fixed;
bottom: 0;
width: 100%;
left: 0;
padding: 0 32px;
background-color: #ffffff;

@media(min-width: 800px) {
  padding: 0;
  display: block;
  position: relative;
  border-top: none;
  width: 100%;
}

@media(min-width: 1200px) {
  display: none;
}
`