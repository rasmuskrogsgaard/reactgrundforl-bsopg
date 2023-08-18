import logo from '../../assets/ColorWheel.png';
import style from './hero.module.scss';
const HeroMain =() => {
return(

<div className={style.h_frame}>

<img src={logo}></img>
<div className={style.h_container}>
<h1>The Global Goals </h1>
<span className={style.title}>For Sustainable Development</span>    
</div>
</div>
)}

export default HeroMain;
