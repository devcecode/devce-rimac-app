import React, { useState } from 'react'
import { Title, ToppingName, ToppingsContainer, ToppingsTop, ToppingsPlanStyled, Header, Left, Right, Icon, HeaderTitle, Content, ToppingsMiddle, TotalAmount, GoToButton, FooterMobile, ToggleMobileContainer, ToggleMobileElement, TotalAmountContainerMobile, ToggleMobileAdd, ShowOrHideMobile, FooterDesktop } from './styles/toppings-plan'

import icon1 from '../../assets/icon1.svg'
import icon2 from '../../assets/icon2.svg'
import icon3 from '../../assets/icon3.svg'

const toppings = {
  "Protege a tu auto": [
    {
      title: "Llanta Robada",
      content: "He salido de casa a las cuatro menos cinco para ir a la academia de ingles de mi pueblo (Sant Cugat, al lado de Barcelona) con mi bici, na llego a la academia que está en el centro del pueblo en una plaza medio-grande y dejo donde siempre la bici atada con una pitón a un sitio de esos de poner las bicis",
      image: icon1,
      amount: 15
    },
    {
      title: "Choque y/o pasarse la luz roja",
      image: icon2,
      amount: 20
    },
    {
      title: "Atropello en vía de evitamiento",
      image: icon3,
      amount: 50
    }
  ],
  "Protege a lo que te rodean": [
    {
      title: "otro",
      image: ""
    }
  ],
  "Mejora tu Plan": [
    {
      "title": "hola",
      image: ""
    }
  ]
}

function ToppingsPlan() {
  
  const toppinsNames                = Object.keys(toppings)
  const [ tabActive, setTabActive ] = useState(toppinsNames[0])

  const handleChangeTabActive = e => {
    e.preventDefault()
    setTabActive(toppinsNames[e.target.id])
  }

  return (
    <ToppingsPlanStyled>
      <ToppingsContainer>
        <Title>Agrega o quita coberturas</Title>
        <ToppingsTop>
          {
            toppinsNames.map((t, i) => (
              <ToppingName key={i} style={toppinsNames[i] === tabActive ? {color: 'red', borderBottom: '2px solid #EF3340'}: {}} onClick={handleChangeTabActive} id={i}>{t.toUpperCase()}</ToppingName>
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
                  <ShowOrHideMobile>
                    <ion-icon name="chevron-up-outline" style={{color: '#EF3340'}}></ion-icon>
                  </ShowOrHideMobile>
                </Header>
                <Content>{t.content}</Content>
                <FooterMobile>
                  VER MÁS <ion-icon name="chevron-up-outline" style={{marginLeft: '11px', fontWeight: '400'}}></ion-icon>
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
          <GoToButton>LO QUIERO</GoToButton>
        </TotalAmountContainerMobile>
      </ToppingsContainer>
    </ToppingsPlanStyled>
  )
}

export default ToppingsPlan