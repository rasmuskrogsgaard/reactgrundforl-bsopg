import style from './hero.module.scss';
const HeroMain =() => {
return(

<div className={style.h_frame}>

<img src="assets/hero/ColorWheel.png"></img>

<div className={style.h_container}>
<h1>The Global Goals </h1>
<span>For Sustainable Development</span>    
</div>
</div>
)}

export default HeroMain;
