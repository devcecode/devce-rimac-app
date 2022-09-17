import styled from "styled-components";


export const ProgressPlanStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 48px;
margin: 0 32px;
@media(min-width: 600px) {
  justify-content: space-between;
  margin-top: 48px;
  height: auto;
}
/* @media(min-width: 1600px) {
  margin-left: 92px;
} */
`

export const BackLinkMobile = styled.a`
cursor: pointer;
color: #F0F2FA;
font-size: 24px;
margin-right: 12px;

display: flex;
align-items: center;
justify-content: space-between;

&:hover {
  color: #6769FF;
}

@media(min-width: 600px) {
  display: none;
}
`

export const BackLinkDesktop = styled.a`
display: none;

@media(min-width: 600px) {
  cursor: pointer;
  color: #FF1C44;
  font-size: 24px;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`


export const ProgressCount = styled.div`
margin-right: 16px;
font-size: 10px;
line-height: 16px;
@media(min-width: 600px) {
  display: none;
}
`

export const ProgressBarContainer = styled.div`
flex: 1;
@media(min-width: 600px) {
  display: none;
}
`

export const ProgressBar = styled.div`
height: 6px;
background-color: #6769FF;
border-radius: .4em;
width: calc((100% * 2) / 100%);
`