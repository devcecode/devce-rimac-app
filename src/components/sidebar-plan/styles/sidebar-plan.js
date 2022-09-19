import styled from "styled-components";

export const SidebarPlanStyled = styled.div`
display: none;
@media(min-width: 800px) {
  display: block;
  background-color: #F7F8FC;
  width: 30%;
  left: 0;
  position: fixed;
  height: calc(100vh - 64px);
}
`

export const SidebarContainer = styled.div`
user-select: none;
margin-top: 50px;
position: relative;
height: calc(100vh - 212px);
`
export const Gutter = styled.div`
border-left: 1px dashed #E4E8F7;
height: calc((${({ h }) => h}px) - 24px);
top: 0;
position: absolute;
width: 200px;
left: 44px;
top: 24px;

@media(min-width: 1200px) {
  left: calc(5vw + 12px);
}

@media(min-width: 1600px) {
  left: calc(12.5vw + 12px);
}
`

export const ProgressContainer = styled.p`
display: flex;
color: #A3ABCC;
height: 100%;
margin-left: 32px;
position: absolute;
top: ${( {move} ) => move}px;
@media(min-width: 1200px) {
  margin-left: 5vw;
}
@media(min-width: 1600px) {
  margin-left: 12.5vw;
}
`

export const Progress = styled.p`
width: 24px;
height: 24px;
border-radius: 50%;
border: 1px solid #C5CBE0;
font-size: 12px;
line-height: 16px;

display: flex;
align-items: center;
justify-content: center;
margin-right: 16px;

`

export const Name = styled.p`

`