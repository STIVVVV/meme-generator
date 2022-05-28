import React from "react";
import memesData from "../../memesData";

function Meme() {

    function getMemeImage()
    {
        const memeArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomNumber].url;
        console.log(url);
    }

    return (
      <main>
        <form className="form">
            <input type="text" className="form--input" placeholder="Top text"/>
            <input type="text" className="form--input" placeholder="Bottom Text"/>
            <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
        </form>
      </main>
    );
  }
  
  export default Meme;