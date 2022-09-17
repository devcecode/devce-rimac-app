import styled from "styled-components"

export const PreviewMountStyled = styled.div`
margin-top: 44px;
@media(min-width: 600px) {
  margin-top: 0;
}
`
export const PreviewMountContainer = styled.div`
margin: 0 32px;

@media(min-width: 600px) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
`

export const PreviewMountTitle = styled.p`
margin-bottom: 4px;
font-size: 16px;
line-height: 24px;
color: #494F66;
`

export const PreviewMountMinMax = styled.p`
color: #676F8F;
font-size: 12px;
line-height: 16px;
margin-bottom: 16px;
@media(min-width: 600px) {
  margin-bottom: 0px;
}
`

export const MountActions = styled.div`
height: 56px;
display: flex;
align-items: center;
justify-content: space-between;
padding: 19px;
border: 1px solid #C5CBE0;
border-radius: 4px;
margin-bottom: 36px;
min-width: 160px;

@media(min-width: 600px) {
  border-radius: 8px;
  margin-bottom: 0px;
}
`

export const IncreaseMount = styled.span`
`
export const Mount = styled.p``
export const DecreaseMount = styled.span``
