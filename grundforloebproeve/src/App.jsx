import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroMain from './components/Hero/Hero.jsx'
import './App.css'
import NavHeader from './components/Nav/Nav.jsx'
import MyContent from './components/MainContent/MainContent.jsx'
import MyGallery from './components/Gallery/Gallery.jsx'
import MainFigure from './components/Figures/Figures.jsx'
import MyForm from './components/Form/Form.jsx'
import MyFooter from './components/Footer/Footer.jsx'
import Udfordringer from './components/Pages/Udfordringer.jsx'
import Verdensmålene from './components/Pages/Verdensmålene.jsx'
import Layout from './components/Layout/Layout.jsx';
import Delmålene from './components/Pages/Delmålene.jsx';
import Kontakt from './components/Pages/Kontakt.jsx';


const App = () => {
  return (
<div className='App'>
  <Router>
  <Routes>
   <Route path="/" element= {<Layout/>}>
    <Route index element={<Verdensmålene/>}/>
    <Route path="Udfordringer" element={<Udfordringer/>}/>
    <Route path="delmålene" element={<Delmålene/>}/>
    <Route path="kontakt" element={<Kontakt/>}/>
    </Route>
  </Routes>
  </Router>  
  
  
  {/* <HeroMain/>
  <NavHeader/>
  <MyContent/>
  <MyGallery/>
  <MainFigure/>
  <MyForm/>
  <MyFooter/> */}

</div>
  )
}
export default App