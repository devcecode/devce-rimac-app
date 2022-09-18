import styled from 'styled-components'

export const HeaderStyled = styled.div`
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 10000;
`

export const HeaderContainer = styled.div`
margin: 0 32px;
height: 56px;
display: flex;
justify-content: space-between;
align-items: center;
@media(min-width: 600px) {
  height: 64px;
}
@media(min-width: 1200px) {
  margin: 0 5%;
}

@media(min-width: 1600px) {
  margin: 0 12.5%;
}
`

export const HeaderLeft  = styled.div`
`
export const HeaderRight = styled.div``

export const HeaderLogo  = styled.img``

export const HeaderContactMobile = styled.p`
display: flex;
align-items: center;
color: #6464FA;
font-size: 14px;
@media(min-width: 600px) {
  display: none;
}
`

export const HeaderContactDesktop = styled.p`
color: #6464FA;
font-size: 14px;
display: none;
@media(min-width: 600px) {
  display: flex;
  align-items: center;
}
`