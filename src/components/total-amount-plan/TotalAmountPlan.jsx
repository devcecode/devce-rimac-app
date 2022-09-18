import React from 'react'
import { Button, Descrition, OrderDescription, OrderDescriptionTitle, OrderList, TotalAmountPLanContainer, TotalAmountPLanStyled, TotalAmountSubtitle, TotalAmountTitle } from './styles/total-amount-plan'

function TotalAmountPlan() {
  return (
    <TotalAmountPLanStyled>
      <TotalAmountPLanContainer>
        <TotalAmountTitle>MONTO <br /><span style={{fontSize: '28px', lineHeight: '36px', letterSpacing: '0.2px', fontWeight: '400', marginTop: '10px', display: 'inline-block'}}>$35.00</span></TotalAmountTitle>
        <TotalAmountSubtitle>Mensuales</TotalAmountSubtitle>
        <OrderDescription>
          <OrderDescriptionTitle>El precio incluye:</OrderDescriptionTitle>
          <OrderList>
            <Descrition><ion-icon name="checkmark-outline" style={{marginRight: '19.42px', color: '#43B748'}}></ion-icon> Llanta de repuesto</Descrition>

            <Descrition><ion-icon name="checkmark-outline" style={{marginRight: '19.42px', color: '#43B748'}}></ion-icon> Analisis de Motor</Descrition>

            <Descrition><ion-icon name="checkmark-outline" style={{marginRight: '19.42px', color: '#43B748'}}></ion-icon> Aros Gratis</Descrition>
          </OrderList>
          <Button>LO QUIERO</Button>
        </OrderDescription>
      </TotalAmountPLanContainer>
    </TotalAmountPLanStyled>
  )
}

export default TotalAmountPlan