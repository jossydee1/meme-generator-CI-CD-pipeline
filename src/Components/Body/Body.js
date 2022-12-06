import React from "react";
import "./Body.css";
import Picture from "../../Resources/image.png";
import Email from "../../Resources/Email fav.png";
import LinkedIn from "../../Resources/LinkedIn fav.png";

function Body() {
  const [memeData, setMemeData] = React.useState({
    firstText: "",
    secondText: "",
    randomImage: "https://i.imgflip.com/7383sx.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((meme) => setAllMemes(meme.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMemeData((prev) => ({
      ...prev,
      randomImage: url,
    }));
  }
  console.log(memeData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMemeData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <div className="body">
      <div>
        <input
          type="text"
          name="firstText"
          placeholder="firstText"
          value={memeData.firstText}
          onChange={handleChange}
        />
        <input
          type="text"
          name="secondText"
          placeholder="secondText"
          value={memeData.secondText}
          onChange={handleChange}
        />
      </div>
      <button onClick={getMemeImage}>Get Meme Image</button>
      <div>
        <img src={memeData.randomImage} alt="" />
        <h3>aschkcu</h3>
        <h3>csacjkhsagccahs</h3>
      </div>
    </div>
  );
}

export default Body;
