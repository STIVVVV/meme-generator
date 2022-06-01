import React from "react";
import memesData from "../../memesData";

function Meme() 
{
  const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

  function getMemeImage()
  {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    setMemeImage(memeArray[randomNumber].url)
  }

  return (
    <main>
      <div className="form">
          <input type="text" className="form--input" placeholder="Top text"/>
          <input type="text" className="form--input" placeholder="Bottom Text"/>
          <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <img src={memeImage} className="meme--image" alt="meme-image"/>
    </main>
  );
}
  
export default Meme;