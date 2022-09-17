import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PlanStyled } from './styles/plan'

import ProgressPlan from '../../components/progress-plan/ProgressPlan'
import ResumePlan from '../../components/resume-plan/ResumePlan'
import PreviewMountPlan from '../../components/preview-mount-plan/PreviewMountPlan'
import ToppingsPlan from '../../components/toppings-plan/ToppingsPlan'
import SiderbarPlan from '../../components/sidebar-plan/SiderbarPlan'

function Plan() {
  const user     = useSelector(({ user }) => user)
  const progress = useSelector(({ progress }) => progress)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(!user) {
      navigate('/')
    }else {
      dispatch({
        type: 'SET_PROGRESS',
        currentProgress: progress + 1
      })
    }
  }, [ user ])

  {

    if(user) return (
      <PlanStyled>
        <SiderbarPlan />
        <ProgressPlan />
        <ResumePlan />
        <PreviewMountPlan />
        <ToppingsPlan />
      </PlanStyled>
    )
  }
}

export default Plan