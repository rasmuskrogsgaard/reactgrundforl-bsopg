import style from './gallery.module.scss';
import logo1 from '../../assets/Goal-No-Poverty.png';
import logo2 from '../../assets/Goal-No-Hunger.png';
import logo3 from '../../assets/Goal-Good-Health.png';
import logo4 from '../../assets/Goal-Good-Education.png';
import logo5 from '../../assets/Goal-Gender-Equality.png';
import logo6 from '../../assets/Goal-Clean-Water.png';
import logo7 from '../../assets/Goal-Clean-Energy.png';
import logo8 from '../../assets/Goal-Decent-Work.png';
import logo9 from '../../assets/Goal-Institutions.png';
import logo10 from '../../assets/Goal-Industry.png';
import logo11 from '../../assets/Goal-Inequalities.png';
import logo12 from '../../assets/Goal-Sustainable-Cities.png';
import logo13 from '../../assets/Goal-Responsible-Consumption.png';
import logo14 from '../../assets/Goal-Climate-Action.png';
import logo15 from '../../assets/Goal-Life-Water.png';
import logo17 from '../../assets/Goal-Partnership.png';
import logo18 from '../../assets/Goal-Life-Land.png';
import logogoals from '../../assets/Global-Goals.png';
const MyGallery = () => {
return (
<div className={style.gallery_container}>
<h2>DELMÅLENE</h2>
<p>FN's 17 Verdensmål er opdelt i 169 delmål. Delmålene er mere konkrete mål for, hvordan Verdensmålene skal opfyldes. For at måle på hvert delmål har FN formuleret en række indikatorer for de enkelte delmål.

Se eksempler på enkelte delmål her:</p>
<main>
<img src={logo1}></img>
<img src={logo2}></img>
<img src={logo3}></img>
<img src={logo4}></img>
<img src={logo5}></img>
<img src={logo6}></img>
<img src={logo7}></img>
<img src={logo8}></img>
<img src={logo10}></img>
<img src={logo11}></img>
<img src={logo12}></img>
<img src={logo13}></img>
<img src={logo14}></img>
<img src={logo15}></img>
<img src={logo18}></img>
<img src={logo9}></img>
<img src={logo17}></img>
<img src={logogoals}></img>
</main>

</div>

)


}

export default MyGallery