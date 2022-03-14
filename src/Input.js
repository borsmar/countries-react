import React from "react";

const Input = (props) => {
    return (
        <input type='text' name='searchInput' onChange={props.onChange} placeholder='Type country'/>
    );
};

export default Input;