import styled from "styled-components";

export const ResumePlanStyled = styled.div`
background-color: #F7F8FC;
padding: 32px;
@media(min-width: 600px) {
  background-color: #ffffff;
}
`

export const MobileTitle  = styled.h2`
font-size: 28px;
line-height: 36px;
margin-bottom: 8px;
color: #494F66;
font-weight: 400;
@media(min-width: 600px) {
  display: none;
}
`
export const DesktopTitle = styled.h2`
color: #494F66;
font-size: 40px;
line-height: 48px;
font-weight: 400;
display: none;
@media(min-width: 600px) {
  display: block;
}
`

export const Subtitle     = styled.h4`
margin-bottom: 24px;
font-weight: 400;
color: #676F8F;
margin-top: 8px;
@media(min-width: 600px) {
  margin-bottom: 44px;
}
`



export const CarResume     = styled.div`
background-color: #ffffff;
border-radius: 12px;
position: relative;
display: flex;
align-items: center;
height: 148px;
padding: 24px;
box-shadow: 0px 0px 10px rgba(163, 171, 204, 0.12);
@media(min-width: 600px) {
  box-shadow: none;
  border: 3px solid #F0F2FA;
}
`
export const CarResumeContainer = styled.div`
`

export const CarSubtitle     = styled.h4`
font-size: 12px;
line-height: 20px;
color: #A3ABCC;
`

export const CarTitle     = styled.h2`
font-size: 16px;
line-height: 24px;
font-weight: 400;
width: 150px;
color: #494F66;
letter-spacing: 0.2px;
`


export const Picture     = styled.img`
position: absolute;
right: 0px;
bottom: 0;
`