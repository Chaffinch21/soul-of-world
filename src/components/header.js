import React from "react";

 class Header extends React.Component {
   render(){
     return(
       <header className="header">
         <div className="container">
            {/* <h1 className="visibility-hidden">soul-of-world</h1> */}
            <img src="../img/logo.png" alt="лого" />
         </div>
       </header>
     ) 
    
     }
 }
 export default Header;