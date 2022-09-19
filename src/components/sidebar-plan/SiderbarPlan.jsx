import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Gutter, Name, Progress, ProgressContainer, SidebarContainer, SidebarPlanStyled } from './styles/sidebar-plan'

function SiderbarPlan() {

  let { pathname } = useLocation()
  pathname = pathname.slice(1,pathname.length)

  const progress = useSelector(({ progress }) => progress)
  const progressArray = []
  
  for(let i = 1; i<=progress; i++) {progressArray.push(i)}

  return (
    <SidebarPlanStyled>
      <SidebarContainer>
        <Gutter h={progress * 72 - 72}></Gutter>
        {
          progressArray.map((p, i) => (
            <ProgressContainer style={p === progress ? { color: '#494F66' } : {}} move={p * 72 - 72}>
              <Progress style={p === progress ? {backgroundColor: '#6F7DFF', borderColor: '#6F7DFF', color: '#ffffff'} : {}}>{p}</Progress>
              <Name>{p === 1 ? 'datos': pathname}</Name>
            </ProgressContainer>
          ))
        }
      </SidebarContainer>
    </SidebarPlanStyled>
  )
}

export default SiderbarPlan