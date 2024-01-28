import React from "react";

export const Header = (props)=>{
    return(
        <div>
            <div className="add-to-cart">
                <button>Add cart <span>{ props.data.length }</span></button>
            </div>
        </div>
    )
}
