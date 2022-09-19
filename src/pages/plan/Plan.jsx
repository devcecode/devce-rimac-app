import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PlanStyled, PlanContainer } from './styles/plan'

import SiderbarPlan from '../../components/sidebar-plan/SiderbarPlan'
import TotalAmountPlan from '../../components/total-amount-plan/TotalAmountPlan'
import MainPlan from '../../components/main-plan/MainPlan'

function Plan() {
  const user     = useSelector(({ user }) => user)
  const progress = useSelector(({ progress }) => progress)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(!user) {
      navigate('/')
    }else {
      
    }
  }, [ user ])

  {

    if(user) return (
      <PlanStyled>
        <SiderbarPlan />
        <PlanContainer>
          <MainPlan />
          <TotalAmountPlan />
        </PlanContainer>
      </PlanStyled>
    )
  }
}

export default Plan