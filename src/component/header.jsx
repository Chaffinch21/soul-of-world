import React from "react";
import { AUTHORIZATION_URL } from "../const";

export const Header = () =>{
  // const handlerBtn =() => {

  // }
     return(
       <header className="header">
         <div className="container">
            <a href="#" className="logo">
            
            </a>
         </div>
         <a className="userBtn" href={AUTHORIZATION_URL}>
         </a>
         {/* <button className="userBtn" onClick={handlerBtn}>
        
         </button> */}
       </header>
     ) 
  }
 export default Header;