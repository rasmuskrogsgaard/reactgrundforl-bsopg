import style from './gallery.module.scss';
import logo from '../../assets/Goal-No-Poverty.png';

const MyGallery = () => {
return (
<div className={style.gallery_container}>
<h2>DELMÅLENE</h2>
<p>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.

Se eksempler på enkelte delmål her:</p>
<article>
<img src={logo}></img>
<img src={logo}></img>
<img src={logo}></img>
<img src={logo}></img>
<img src={logo}></img>
</article>

</div>

)


}

export default MyGallery