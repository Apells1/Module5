// import React, { Component } from 'react';
// we dont need 'component' any longer right?
import React from 'react';
const Medal = (props) => {
const { country, medal, onIncrement, onReduction } = props;
    
        return (
            <div style={{textTransform: 'capitalize'}}>
                { medal.name } Medals:  {country[medal.name] }
                <button onClick={ () => onIncrement(country.id, medal.name) }>+</button>
                <button disabled={ country[medal.name] === 0 } onClick={ () => onReduction(country.id, medal.name) }>-</button>
            </div>
        );
        }


export default Medal;
