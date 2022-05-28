import React from "react";

function Header() {
    return (
      <div>
        <nav>
          <img src={"/images/Troll Face.png"} alt="troll face" className="nav--image"/>
          <h1 className="nav--text">Meme Generator</h1>
        </nav>
      </div>
    );
  }
  
  export default Header;