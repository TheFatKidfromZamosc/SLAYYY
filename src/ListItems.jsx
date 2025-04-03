import React, { useState } from "react"; 
import { FaSun, FaMoon } from "react-icons/fa"; 
const ToggleIcon = () => { 
    const [isDay, setIsDay] = useState(false); 
    return ( 
        <div> 
            {isDay ? <FaSun size={40} color="gold" /> : <FaMoon size={40} color="gray" />} 
            <button onClick={() => setIsDay(!isDay)}>Zmień ikonę</button> 
        </div> 
    );
}; 

export default ToggleIcon; 