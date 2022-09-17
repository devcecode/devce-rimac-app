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

`