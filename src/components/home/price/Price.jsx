import React from 'react'
import "./Price.scss"
import { price } from '../../../dummydata'
export const Price = ({page}) => {
  return (
    <div className={`priceContainer ${page === "Pricing" && "pade"}`}>
       {page === "Home" && (
         <div className="priceTitle">
         <h3>OUR PRICING</h3>
         <h1>Pricing & Packages</h1>
     </div>
       )}
        <div className="priceCards">
         {price.map((price)=>{
            return(
                <div className="priceCard" key={price.name}>
                    <div className="priceName">{price.name}</div>
                    <div className="amount"><span>$</span>{price.price}</div>
                        <div className="priceDetails">{price.desc}</div>
                    <button className='priceBtn'>GET STARTED</button>
                    </div>
           
            )
         })}
        </div>
    </div>
  )
}
