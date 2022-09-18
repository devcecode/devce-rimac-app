import React, { useState } from 'react'

import { DecreaseMount, 
         IncreaseMount, 
         Mount, 
         MountActions, 
         PreviewMountContainer, 
         PreviewMountMinMax, 
         PreviewMountStyled, 
         PreviewMountTitle 
       } from './styles/preview-amount-plan'

function PreviewMountPlan() {

  const [ previewMount, setPreviewMount ]           = useState(0)
  const [ totalPreviewMount, setTotalPreviewMount ] = useState(0)
  const [ addedTopings, setAddedTopings ]           = useState(null)

  return (
    <PreviewMountStyled>
      <PreviewMountContainer>
        <div>
          <PreviewMountTitle>Indica la suma Asegurada</PreviewMountTitle>
          <PreviewMountMinMax>MIN $12.500 <span style={{color: '#E4E8F7', margin: '0px 12px'}}>|</span> MAX $16,500</PreviewMountMinMax>
        </div>
        <MountActions>
          <DecreaseMount>
            <ion-icon name="remove-outline" style={{fontSize: '14px', color: '#6F7DFF'}}></ion-icon>
          </DecreaseMount>
          <Mount>$ 14,300</Mount>
          <IncreaseMount>
          <ion-icon name="add-outline" style={{fontSize: '14px', color: '#6F7DFF'}}></ion-icon>
          </IncreaseMount>
        </MountActions>
      </PreviewMountContainer>
    </PreviewMountStyled>
  )
}

export default PreviewMountPlan