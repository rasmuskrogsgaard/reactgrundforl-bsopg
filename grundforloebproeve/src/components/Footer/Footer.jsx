import img1 from '../../assets/Partner-UNDP-Full.png'
import style from './footer.module.scss';
const MyFooter = () => {
return(
<div className={style.Footer_Container}>
<footer>

<h2>Eksterne Links: <p>https://www.verdensmaalene.dk/
https://www.globalgoals.org/
https://www.un.org/sustainabledevelopment/
https://worldslargestlesson.globalgoals.org/
https://www.unenvironment.org/
https://ve.dk/klimaberegner/</p></h2>


<div>
<h2>Ressourcer:<p>Bliver Verden Bedre
Spotlight Rapport</p></h2>


</div>

<img src={img1}></img>
</footer>
</div>
)
}

export default MyFooter;