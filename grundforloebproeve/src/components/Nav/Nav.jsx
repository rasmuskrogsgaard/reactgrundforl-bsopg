import style from './nav.module.scss';
const NavHeader = () => {
return(
<nav className={style.main_navbar}>
    <li><a href="#home">Verdensmålene</a></li>
    <li><a href="#home">Delmålene</a></li>
    <li><a href="#home">Udfordringer</a></li>
    <li><a href="#home">Kontakt</a></li>
        
</nav>



)

}

export default NavHeader;