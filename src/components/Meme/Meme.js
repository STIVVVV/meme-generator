import React from "react";
import memesData from "../../memesData";

function Meme() 
{
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"         
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImage()
  {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    const url = memeArray[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  return (
    <main>
      <div className="form">
          <input type="text" className="form--input" placeholder="Top text"/>
          <input type="text" className="form--input" placeholder="Bottom Text"/>
          <button className="form--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
      </div>
      <img src={meme.randomImage} className="meme--image" alt="meme-image"/>
    </main>
  );
}
  
export default Meme;