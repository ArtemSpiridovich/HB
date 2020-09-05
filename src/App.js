import React, {useEffect} from 'react';
import s from './App.module.sass';
import audio from './assets/zvuk-saljuta.mp3'

export const App = () => {
  useEffect(() => {
    new Audio(audio).play()
  }, [])
  return (
    <div className={s.app}>
      <h1 className={s.text}>
        <span style={{'--i': 1}} className={s.text__symbol}>H</span>
        <span style={{'--i': 2}} className={s.text__symbol}>A</span>
        <span style={{'--i': 3}} className={s.text__symbol}>P</span>
        <span style={{'--i': 4}} className={s.text__symbol}>P</span>
        <span style={{'--i': 5}} className={s.text__symbol}>Y</span>
        <span className={s.text__space}>{' '}</span>
        <span style={{'--i': 6}} className={s.text__symbol}>B</span>
        <span style={{'--i': 7}} className={s.text__symbol}>I</span>
        <span style={{'--i': 8}} className={s.text__symbol}>R</span>
        <span style={{'--i': 9}} className={s.text__symbol}>T</span>
        <span style={{'--i': 10}} className={s.text__symbol}>H</span>
        <span style={{'--i': 11}} className={s.text__symbol}>D</span>
        <span style={{'--i': 12}} className={s.text__symbol}>A</span>
        <span style={{'--i': 13}} className={s.text__symbol}>Y</span>
      </h1>
      <div className={s.gifs}>
        <img
          src='https://media3.giphy.com/media/toofSlHbXSfZHjxxCR/200w.webp?cid=790b76118c840d981d54954e41b9a0e3798a9d8b90e32925&rid=200w.webp'
          className={s.gif1}
        />
        <img
          src='https://media0.giphy.com/media/sIoUUXfh3W51K/200w.webp?cid=790b761196d7410ff2a394470419ea6dc19085ed588b7309&rid=200w.webp'
          className={s.gif2}
        />
        <img
          src='https://media0.giphy.com/media/sAeeVA8kfVzUY/200w.webp?cid=790b7611dc8feb3de9cec4ec79e9ebcd9577c0b7afd6b6db&rid=200w.webp'
          className={s.gif3}
        />
        <img
          src='https://media0.giphy.com/media/l0XQbzGsATrRXXmjUD/200w.webp?cid=790b76117d85cb2d60f06201d658dfda15b64bc816eb4323&rid=200w.webp'
          className={s.gif4}
        />
        <img
          src='https://media1.giphy.com/media/fiSOwmsa55BXW/200w.webp?cid=790b761145a77c4cf0fb156eaa40d3ce714ec6f1fbfab56b&rid=200w.webp'
          className={s.gif5}
        />
        <img
          src='https://media4.giphy.com/media/IVYasKwukeumA/200w.webp?cid=790b761127ccc29591cafb98b30b66d6651ec2505c337bd0&rid=200w.webp'
          className={s.gif6}
        />
      </div>
    </div>
  );
}


