import React from "react";

const Props=({useDetails})=>{
    console.log(useDetails)
    return(
        <div>
            <p>Name: {useDetails}</p>
            <p>Age : </p>
        </div>
    );
}
export default Props;