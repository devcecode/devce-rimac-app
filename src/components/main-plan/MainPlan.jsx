import React from 'react'

import ProgressPlan from '../progress-plan/ProgressPlan'
import ResumePlan from '../resume-plan/ResumePlan'
import PreviewAmountPlan from '../preview-amount-plan/PreviewAmountPlan'
import ToppingsPlan from '../toppings-plan/ToppingsPlan'

function MainPlan() {
  return (
    <div>
      <ProgressPlan />
      <ResumePlan />
      <PreviewAmountPlan />
      <ToppingsPlan />
    </div>
  )
}

export default MainPlan