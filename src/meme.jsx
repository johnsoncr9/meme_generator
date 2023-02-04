import { useEffect, useState } from "react";
import "./meme.css";

function Meme(props) {
  // const imageArray = props.item.map((url) => props.item.url);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value, type } = event.target;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  return (
    <main className="main">
      <section className="main--section">
        <input
          type="text"
          className="main--firstInput"
          placeholder="Shut up"
          onChange={handleChange}
          name="topText"
          value={meme.topText}
        />
        <input
          type="text"
          className="main--secondInput"
          placeholder="and take my money"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
        />
        <button className="main--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <div className="meme">
          <img
            className="meme--image"
            src={meme.randomImage}
            alt="Meme Image"
          />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </section>
    </main>
  );
}

export default Meme;
