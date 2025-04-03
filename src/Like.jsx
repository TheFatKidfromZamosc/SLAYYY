import React, { useState } from "react"; 
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
const Like = ({ onClick, initialState }) => { 
    const [liked, setLiked] = useState(initialState); 
    const toggleLike = () => { 
        setLiked(!liked); 
        if (onClick) { 
            onClick(); 
        } 
    }; 
    return ( 
        <div onClick={toggleLike} style={{ cursor: "pointer", fontSize: "24px", color: liked ? "red" : "black" }}> 
            {liked ? <AiFillHeart size={120}/> : <AiOutlineHeart />} 
        </div> 
    ); 
}; 
export default Like; 

 