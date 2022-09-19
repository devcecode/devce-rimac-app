import styled from "styled-components"

export const ToppingsPlanStyled = styled.div`
@media(min-width: 600px) {
  margin-top: 44px;
}
`

export const ToppingsContainer = styled.div`
@media(min-width: 600px) {
  border-top: 1px solid #E4E8F7;
  margin: 0 32px;
  padding-top: 55px;
}
@media(min-width: 1200px) {
  margin-left: 64px;
  margin-right: 64px;
}
@media(min-width: 1600px) {
  margin-left: 92px;
  margin-right: 92px;
}
`

export const Title = styled.h2`
font-size: 20px;
line-height: 28px;
font-weight: 400;
color: #494F66;
margin-bottom: 16px;
padding: 0 32px;
@media(min-width: 600px) {
  padding: 0;
}
`

export const ToppingsTop = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 16px;
border-bottom: 1px solid #E4E8F7;
`

export const ToppingName    = styled.button`
width: 33.333%;
height: 80px;
border: none;
font-size: 10px;
line-height: 16px;
color: #494F66;
background-color: #ffffff;
padding: 16px;
cursor: pointer;
`

export const ToppingsMiddle   = styled.div`
padding: 32px;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #E4E8F7;
@media(min-width: 600px) {
  padding: 32px 0;
}
@media(min-width: 800px) {
  display: flex;
}
`

export const Left = styled.div`
margin-right: 18.61px;
`
export const Icon = styled.img``

export const Right = styled.div`
flex: 1;
`

export const Header  = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const HeaderTitle = styled.div`
max-width: 150px;
font-size: 16px;
line-height: 24px;
color: #494F66;
letter-spacing: 0.2px;
`

export const ToggleMobileAdd = styled.div`
cursor: pointer;
@media(min-width: 600px) {
  display: none;
}
`
export const ToggleMobileContainer = styled.div`
width: 51px;
height: 31px;
background-color: #E4E8F7;
border-radius: 18px;
position: relative;
`
export const ToggleMobileElement = styled.div`
background-color: #ffffff;
position: absolute;
width: 28px;
height: 28px;
border-radius: 14px;
top: 1px;
left: 1px;
`

export const ShowOrHideDesktop = styled.div`
cursor: pointer;
display: none;
@media(min-width: 600px) {
  display: block;
}
`

export const Content = styled.p`
margin-top: 11px;
color: #676F8F;
font-size: 14px;
line-height: 24px;
margin-bottom: 21px;
display: none;

&.topping-active {
  display: block;
}
`

export const FooterMobile  = styled.div`
margin-top: 12px;
color: #6F7DFF;
font-size: 10px;
line-height: 16px;
letter-spacing: .8PX;
font-weight: 700;

display: flex;
align-items: center;
cursor: pointer;
@media(min-width: 600px) {
  display: none;
}
`

export const FooterDesktop = styled.div`
color: #939DFF;
margin-top: 12px;
font-weight: 700;
font-size: 12px;
line-height: 16px;
display: none;
letter-spacing: 0.6px;
cursor: pointer;

@media(min-width: 600px) {
  display: flex;
  align-items: center;
}
`

export const TotalAmountContainerMobile = styled.div`
margin-top: 106px;
box-shadow: 0px 1px 4px rgba(163, 171, 204, 0.06), 0px 8px 30px rgba(20, 43, 127, 0.1);
display: flex;
justify-content: space-between;
padding: 14px 32px;
align-items: center;

@media(min-width: 600px) {
  box-shadow: none;
  padding: 14px 0;
}

@media(min-width: 1200px) {
  display: none;
}
`

export const TotalAmount       = styled.p`
font-size: 24px;
line-height: 32px;
letter-spacing: 0.2px;
font-size: 24px;
line-height: 32px;
letter-spacing: 0.2px;
color: #494F66;

display: flex;
flex-direction: column;
`
export const GoToButton = styled.button`
width: 168PX;
border-radius: 6px;
text-align: center;
color: #ffffff;
background-color: #EF3340;
border: none;
outline: none;
height: 44px;
font-size: 12px;
line-height: 16px;
cursor: pointer;
letter-spacing: 0.8px;
`

export const TotalAmountContainerDesktop = styled.div`
display: none;
@media(min-width: 600px) {
  display: block;
  position: fixed;
  top: 200px;
  right: 10px;
}
`

export const TotalAmountTitle = styled.h2``

export const OrderDescription = styled.div``

export const DescriptionTitle = styled.h2``

export const DescriptionList = styled.ul`
list-style: none;
`

export const Description = styled.li``