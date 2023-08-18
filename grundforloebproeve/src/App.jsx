import HeroMain from './components/Hero/Hero.jsx'
import './App.css'
import NavHeader from './components/Nav/Nav.jsx'
import MyContent from './components/MainContent/MainContent.jsx'
import MyGallery from './components/Gallery/Gallery.jsx'
import MainFigure from './components/Figures/Figures.jsx'
import MyForm from './components/Form/Form.jsx'
import MyFooter from './components/Footer/Footer.jsx'

const App = () => {
  return (
<div className='App'>
  
  <HeroMain/>
  <NavHeader/>
  <MyContent/>
  <MyGallery/>
  <MainFigure/>
  <MyForm/>
  <MyFooter/>

</div>
  )
}
export default App