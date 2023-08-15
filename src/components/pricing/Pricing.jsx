

import React from 'react'
import { Heros } from '../common/heros/Heros'
import { Price } from '../home/price/Price'
import { Faq } from './Faq'
import "./Pricing.scss"
export const Pricing = () => {
  return (
    <div className="pricingContainer">
        <Heros title="Choose The Right Plan" section="HOME / PRICING"/>
        <Price page="Pricing"/>
        <Faq/>
    </div>
  )
}
