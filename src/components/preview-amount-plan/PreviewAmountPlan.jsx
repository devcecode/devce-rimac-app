import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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
  const dispatch = useDispatch()
  const previewAmount = useSelector(({ previewAmount }) => previewAmount)
  const totalAgregates = useSelector(({ totalAgregates }) => totalAgregates)

  const [ total, setTotal ] = useState(0)

  useEffect(() => {
    setTotal(previewAmount + totalAgregates)
  }, [previewAmount, totalAgregates])

  useEffect(() => {
    dispatch({
      type: 'SET_TOTAL_AMOUNT',
      currentTotalAmount: Math.ceil(total / 12)
    })
  }, [ total ])


  const handleDecrease = e => {
    const currentAmount = ((total - (total * 10 / 100)))
    if(currentAmount >= 12500) {
      setTotal(Math.ceil(currentAmount))
    }
  }

  const handleIncrease = e => {
    const currentAmount = (total + (total * 10 / 100))
    if(currentAmount <= 16000) {
      setTotal(Math.ceil(currentAmount))
    }
  }


  return (
    <PreviewMountStyled>
      <PreviewMountContainer>
        <div>
          <PreviewMountTitle>Indica la suma Asegurada</PreviewMountTitle>
          <PreviewMountMinMax>MIN $12.500 <span style={{color: '#E4E8F7', margin: '0px 12px'}}>|</span> MAX $16,500</PreviewMountMinMax>
        </div>
        <MountActions>
          <DecreaseMount onClick={handleDecrease}>
            <ion-icon name="remove-outline" style={{fontSize: '14px', color: '#6F7DFF'}}></ion-icon>
          </DecreaseMount>
          <Mount>$ {total}</Mount>
          <IncreaseMount onClick={handleIncrease}>
          <ion-icon name="add-outline" style={{fontSize: '14px', color: '#6F7DFF'}}></ion-icon>
          </IncreaseMount>
        </MountActions>
      </PreviewMountContainer>
    </PreviewMountStyled>
  )
}

export default PreviewMountPlan