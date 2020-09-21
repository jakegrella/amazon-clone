import React from 'react'
import { useStateValue } from "./StateProvider"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from "./Subtotal"
import "./Checkout.css"

function Checkout() {
    const [{ basket }] = useStateValue();

    return <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__ad" src="https://m.media-amazon.com/images/G/01/shazam/Sep20-Beyond-HouseAds-1940x500-smaller-YpeRV._V404963907_.jpg" alt="" />
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty.</h2>
                    <p>You have no items in your basket. To buy one or more items click "Add To Basket" next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2 className="checkout__title">Your Shopping Basket</h2>

                    {/* list all of products in user's basket */}
                    {basket?.map((item) => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout_right">
                <Subtotal />
            </div>
        )}
    </div>
}

export default Checkout
