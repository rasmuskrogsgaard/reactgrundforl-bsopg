import { Outlet } from "react-router-dom"
import MyFooter from "../Footer/Footer"
import NavHeader from "../Nav/Nav"
import Verdensmålene from "../Pages/Verdensmålene"
import Udfordringer from "../Pages/Udfordringer"
import Delmålene from "../Pages/Delmålene"
const Layout = () =>{
    return(
        <div>
        <NavHeader></NavHeader>
        <Outlet><Verdensmålene></Verdensmålene>
        <Udfordringer></Udfordringer>
        <Delmålene></Delmålene>
        <Kontakt></Kontakt>
        
        </Outlet>
        <MyFooter></MyFooter>
        </div>
    )
}


export default Layout