import React, { useState } from 'react'
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
  
  const [ toppingsActive, setToppingsActive ] = useState([toppings[toppingsProperty[0]][0].title])

  const handleChangeTabActive = e => {
    e.preventDefault()
    setTabActive(toppingsProperty[e.target.id])
  }


  const handleShowOrHideTopping = e => {
    const current = e.target.id
    const result = toppingsActive.find(x => x === current)

    if(!result) {
      setToppingsActive(x => [...x, current])
    }else {
      toppingsActive.find((x, i) => {
        const lol = toppingsActive
        if(current === x) {
          const filter =lol.filter(e => e !== x)
          setToppingsActive(filter)
        }
      })
    }
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
          toppings[tabActive].map((t,i) => (
            <ToppingsMiddle key={i}>
              <Left>
                <Icon src={t.image}/>
              </Left>
              <Right>
                <Header>
                  <HeaderTitle>{t.title}</HeaderTitle>
                  <ToggleMobileAdd>
                    <ToggleMobileContainer>
                      <ToggleMobileElement></ToggleMobileElement>
                    </ToggleMobileContainer>
                  </ToggleMobileAdd>
                  <ShowOrHideDesktop onClick={handleShowOrHideTopping} id={t.title}>
                    <ion-icon name="chevron-up-outline" style={{color: '#EF3340', userSelect: 'none'}} id={t.title}></ion-icon>
                  </ShowOrHideDesktop>
                </Header>
                {
                  toppingsActive.map((ta, i) => (
                    t.title === ta ? (<Content className='topping-active' key={i}>{t.content}</Content>) : (<Content key={i}>{t.content}</Content>)
                  ))
                }
                <FooterMobile onClick={handleShowOrHideTopping} id={t.title}>
                  VER MÁS <ion-icon name="chevron-up-outline" style={{marginLeft: '11px', fontWeight: '400'}} id={t.title}></ion-icon>
                </FooterMobile>
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