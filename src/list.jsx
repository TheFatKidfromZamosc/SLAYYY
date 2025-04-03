import React, { useState } from "react"; 
import styled from "styled-components"; 
import propTypes from 'prop-types';
import ListItems from "./ListItems.jsx";
const StyledList=(props) => { 
    const items= props.i;
    const head = props.h;
    return(<>
        <ul> 
            {items.map((item,index) => ( 
                <ListItems key={index} i={item}/>
        
            ))} 
        </ul> 
    </>
    )}
    



export default StyledList; 