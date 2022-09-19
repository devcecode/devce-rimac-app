import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Title, 
         ToppingName, 
         ToppingsContainer, 
         ToppingsTop, 
         ToppingsPlanStyled, 
         Header, 
         Left, 
         Right, 
         Icon, 
         HeaderTitle, 
         Content, 
         ToppingsMiddle, 
         TotalAmount, 
         GoToButton, 
         FooterMobile, 
         ToggleMobileContainer, 
         ToggleMobileElement, 
         TotalAmountContainerMobile, 
         ToggleMobileAdd,
         FooterDesktop, 
         ShowOrHideDesktop
       } from './styles/toppings-plan'       

import { toppings } from './toppings'

function ToppingsPlan() {
  
  const navigate = useNavigate()
  const toppingsProperty                = Object.keys(toppings)
  const [ tabActive, setTabActive ]     = useState(toppingsProperty[0])

  const handleChangeTabActive = e => {
    e.preventDefault()
    setTabActive(toppingsProperty[e.target.id])
  }

  const newObject = {}
  toppingsProperty.map((tp, ti) => {
    let newArray = []
    toppings[tp].map((t, i) => {
      if(i===0) {
        newArray.push({...t, state: true, add: true})
      }else {
        newArray.push({...t, state: false, add: false})
      }
    })
    newObject[tp] = newArray
  })

  const [ Alltoppings, setAllToppings ] = useState(newObject)


  const updateStateOfAllTopings = e => {
    const i      = e.target.id
    const global = {...Alltoppings}
    global[tabActive][i].state = !global[tabActive][i].state
    setAllToppings(global)
  }

  const updateAddStateOfAllTopings = e => {
    const i      = e.target.id
    const global = {...Alltoppings}
    global[tabActive][i].add = !global[tabActive][i].add
    setAllToppings(global)
  }

  return (
    <ToppingsPlanStyled>
      <ToppingsContainer>
        <Title>Agrega o quita coberturas</Title>
        <ToppingsTop>
          {
            toppingsProperty.map((t, i) => (
              <ToppingName key={i} style={toppingsProperty[i] === tabActive ? {color: 'red', borderBottom: '2px solid #EF3340'}: {}} onClick={handleChangeTabActive} id={i}>{t.toUpperCase()}</ToppingName>
            ))
          }
        </ToppingsTop>
        {
          Alltoppings[tabActive].map((t,i) => (
            <ToppingsMiddle key={i}>
              <Left>
                <Icon src={t.image}/>
              </Left>
              <Right>
                <Header>
                  <HeaderTitle>{t.title}</HeaderTitle>
                  <ToggleMobileAdd onClick={updateAddStateOfAllTopings}>
                    <ToggleMobileContainer>
                      <ToggleMobileElement></ToggleMobileElement>
                    </ToggleMobileContainer>
                  </ToggleMobileAdd>
                  <ShowOrHideDesktop onClick={updateStateOfAllTopings} id={i}>
                    {
                      t.state === true ? (<ion-icon name="chevron-up-outline" style={{color: '#EF3340', userSelect: 'none'}} id={i}></ion-icon>) : (<ion-icon name="chevron-down-outline" style={{color: '#EF3340', userSelect: 'none'}} id={i}></ion-icon>)
                    }
                  </ShowOrHideDesktop>
                </Header>
                {
                  t.state === true ? (<Content className='topping-active' key={i}>{t.content}</Content>) : (<Content key={i}>{t.content}</Content>)
                }

                {
                  t.state === true ? (
                    <FooterMobile onClick={updateStateOfAllTopings} id={i}>
                      VER MENOS <ion-icon name="chevron-up-outline" style={{marginLeft: '11px', fontWeight: '400'}} id={i}></ion-icon>
                    </FooterMobile>
                  ) : (
                    <FooterMobile onClick={updateStateOfAllTopings} id={i}>
                      VER MÁS <ion-icon name="chevron-down-outline" style={{marginLeft: '11px', fontWeight: '400'}} id={i}></ion-icon>
                    </FooterMobile>
                  )
                }
                <FooterDesktop>
                  <ion-icon name="add-circle-outline" style={{fontSize: '28px', marginRight: '12px'}}></ion-icon> AGREGAR
                </FooterDesktop>
              </Right>
            </ToppingsMiddle>
          ))
        }
        <TotalAmountContainerMobile>
          <TotalAmount>$35.00 <span style={{fontSize: '10px', lineHeight: '16px', color: '#494F66'}}>MENSUAL</span></TotalAmount>
          <GoToButton onClick={e => navigate('/bien-venida')}>LO QUIERO</GoToButton>
        </TotalAmountContainerMobile>
      </ToppingsContainer>
    </ToppingsPlanStyled>
  )
}

export default ToppingsPlan