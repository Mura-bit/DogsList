import { useState } from 'react';
import './App.css';

function App() {

  const [dogImg, setDogImg] = useState("");

  const [dogList, setDogList] = useState([]);

  // const onClickHandler = () => {
  //   fetch("https://dog.ceo/api/breeds/image/random")
  //     .then((res) => res.json())
  //     .then((data) => setDogImg(data.message))
  //     .catch((err) => console.log(err));
  // }

  //async function (async/await);

  const showDogList = dogList.map((el, index) => {
    return <img className='dog-img' key={index} src={el} alt="Dogs" />
  })

  const onClickHandler = async () => {
    try {
      const res = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await res.json();
      setDogList([...dogList, data.message]);
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="App">
      <h1>Taking to the Moon</h1>
      <button onClick={onClickHandler}>Click</button>
      <div>
        {/* {dogImg && <img src={dogImg} alt="dog" width="400p" />} */}
        {showDogList}
      </div>
    </div>
  );
}

export default App;
