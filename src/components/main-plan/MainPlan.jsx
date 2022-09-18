import React from 'react'

import ProgressPlan from '../progress-plan/ProgressPlan'
import ResumePlan from '../resume-plan/ResumePlan'
import PreviewAmountPlan from '../preview-amount-plan/PreviewAmountPlan'
import ToppingsPlan from '../toppings-plan/ToppingsPlan'
import { MainPlanStyled } from './styles/plan-main'

function MainPlan() {
  return (
    <MainPlanStyled>
      <ProgressPlan />
      <ResumePlan />
      <PreviewAmountPlan />
      <ToppingsPlan />
    </MainPlanStyled>
  )
}

export default MainPlan