import React from 'react'
import Product from "./Product"
import "./Home.css"

function Home() {
    return <div className="home">
        <img className="home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MWJkMjYwNzAt/MWJkMjYwNzAt-NGVmZmRlNjEt-w1500._CB405404417_.jpg" alt="banner of tv" />

        {/* Product id, title, price, rating, image */}
        <div className="home__row">
            <Product
                id="123213341"
                title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            />
            <Product
                id="453820100"
                title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
                price={497.99}
                rating={3}
                image="https://m.media-amazon.com/images/I/71RiQZ0J2SL._AC_UY218_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
                id="928737456"
                title="Nikon Z 5 Camera Body, Black"
                price={1396.95}
                rating={5}
                image="https://m.media-amazon.com/images/I/91QOsoaw2rL._AC_UY218_.jpg"
            />
            <Product
                id="987437928"
                title="Can't Hurt Me: Master Your Mind and Defy the Odds"
                price={17.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41TEUEznIOL._SX331_BO1,204,203,200_.jpg"
            />
            <Product
                id="537465128"
                title="The Human Condition [2 LP]"
                price={21.91}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71zd8kc7YCL._SY355_.jpg"
            />
        </div>

        <div className="home__row">
            <Product
                id="749830274"
                title="Nikon Z 24-70mm F/2.8 S"
                price={2296.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/81i-xl6hgKL._AC_UY218_.jpg"
            />
        </div>

    </div>
}

export default Home