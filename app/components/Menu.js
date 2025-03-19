'use client'
import "../../font-awesome-v6.6"
import "./menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faScissors, faFile } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";


function Menu() {
    const [open, setOpen] = useState(false);
    

    return (
        <div className="menuSup">
            <div className="menuContainer">
                <div>
                    <button onClick={()=>{setOpen(!open)}}><FontAwesomeIcon icon={faBars} /></button>
                </div>
                {
                    open == true &&
                    
                <div className="dropdownMenu">
                    <ul>
                        <DropdownItem icon={faHouse} text={" Home"}/>
                        <DropdownItem icon={faScissors} text={" Cortes"}/>
                        <DropdownItem icon={faFile} text={" Relatório"}/>

                    </ul>

                </div>
                }
            </div>
            <img src="https://placehold.co/100x40" />
            <div></div>
        </div>
    );
}
function DropdownItem(e){
    return(
        <li className="dropdownItem">
            <FontAwesomeIcon icon={e.icon} />
            <a>{e.text}</a>
        </li>
    )
}

export default Menu;