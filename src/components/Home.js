import React from "react";

export const Home = (props)=>{
    console.log(props);
    return(
        <div>
            <h2>Home Container</h2>
            <div className="cart-wrapper">
                <div className="cart-image item">
                    <img src="iphone.png" style={{width:'50px'}} />
                </div>
                <div className="price-wrapper item">
                    <span><b>Price:</b></span> <span><i>$1000</i></span>
                </div>
                <div className="button-wrapper item">
                    <button className="beautiful-button" 
                    onClick={()=>{ props.addToCartHandler({price:1000,name:'Iphone-11'}) }}>Add To Cart</button>
                </div>
                <div className="button-wrapper item">
                    <button className="beautiful-button" 
                    onClick={()=>{ props.removeToCartHandler({price:1000,name:'Iphone-11'}) }}>Remove To Cart</button>
                </div>
            </div>
        </div>
    )
}
