import styled from "styled-components";

export const TotalAmountPLanStyled   = styled.div`
position: sticky;
top: 96px;
height: 500px;
margin-top: 150px;
margin-right: 32px;
display: none;
@media(min-width: 1200px) {
  margin-right: 5vw;;
  display: block;
}

@media(min-width: 1600px) {
  margin-right: 12.5vw;
}
`

export const TotalAmountPLanContainer = styled.div`
width: 300px;
`

export const TotalAmountTitle = styled.h2`
font-size: 12px;
line-height: 16px;
font-weight: 400;
color: #494F66;
margin-bottom: 4px;
font-weight: 700;
`

export const TotalAmountSubtitle = styled.h4`
font-size: 12px;
line-height: 20px;
letter-spacing: 0.2px;
color: #676F8F;
font-weight: 400;
margin-bottom: 19px;
`
export const OrderDescription = styled.h4`
border-top: 1px solid #E4E8F7;
`
export const OrderDescriptionTitle = styled.h4`
font-weight: 400;
margin-top: 24px;
margin-bottom: 12px;
font-size: 16px;
line-height: 24px;
letter-spacing: 0.2px;

color: #494F66;
`

export const OrderList = styled.ul`
list-style: none;
`

export const Descrition = styled.li`
font-weight: 400;
font-size: 14px;
line-height: 24px;
display: flex;
display: flex;
align-items: center;
color: #676F8F;
margin-bottom: 8px;
`

export const Button = styled.button`
width: 100%;
border: none;
height: 48px;
text-align: center;
color: #ffffff;
background-color: #EF3340;
border-radius: 8px;
margin-top: 24px;
`