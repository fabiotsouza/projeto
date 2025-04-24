'use client'

import "./menu.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHouse, faScissors, faFile, faDoorClosed } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { redirect } from "next/navigation";


function Menu() {
    const [open, setOpen] = useState(false);
    
    function deslogar(){

        localStorage.removeItem("usuario")
    }

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
                        {DropdownItem()}
                    </ul>

                </div>
                }
            </div>
            <img src="https://placehold.co/100x40" />
            <div></div>
        </div>
    );
    function DropdownItem(){
        return(
            <li className="dropdownItem">
                <div>
                    <button onClick={()=> window.location.href="./home_barbeiro"}><FontAwesomeIcon icon={faHouse} /></button>
                    <a onClick={()=> window.location.href="./home_barbeiro"}>Home</a>
                </div>
                <br/>
                <div>
                    <button onClick={()=> window.location.href="../Jose"}><FontAwesomeIcon icon={faScissors}/></button>
                    <a onClick={()=> window.location.href="../Jose"}>Cortes</a>
                </div>
                <br/>
                <div>
                    <button  onClick={()=> {deslogar(), window.location.href = "./"}}><FontAwesomeIcon icon={faDoorClosed}/></button>
                    <a>Deslogar</a>
                </div>
            </li>
        )
    }
}

export default Menu;