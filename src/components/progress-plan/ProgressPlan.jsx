import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ProgressPlanStyled, ProgressCount, ProgressBarContainer, ProgressBar, BackLinkDesktop, BackLinkMobile } from './styles/progress-plan'

function ProgressPlan() {

  const navigate = useNavigate()
  const progress = useSelector(({ progress }) => progress)
  return (
    <ProgressPlanStyled>
      <BackLinkMobile onClick={e =>  navigate('/')}>
        <ion-icon name="arrow-back-circle-outline" style={{fontSize: 'em'}}></ion-icon>
      </BackLinkMobile>
      <BackLinkDesktop onClick={e =>  navigate('/')}>
        <ion-icon name="arrow-back-circle-outline" style={{fontSize: 'em'}}></ion-icon>
        <span style={{fontSize: '12px', lineHeight: '16px', letterSpacing: '0.6px', marginLeft: '16px', color: '#A9AFD9'}}>VOLVER</span>
      </BackLinkDesktop>
      <ProgressCount>PASO {progress} DE {progress}</ProgressCount>
      <ProgressBarContainer>
        <ProgressBar progress={progress}></ProgressBar>
      </ProgressBarContainer>
    </ProgressPlanStyled>
  )
}

export default ProgressPlan