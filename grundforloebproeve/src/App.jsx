import HeroMain from './components/Hero/Hero.jsx'
import './App.css'
import NavHeader from './components/Nav/Nav.jsx'
import MyContent from './components/MainContent/MainContent.jsx'
import MyGallery from './components/Gallery/Gallery.jsx'

const App = () => {
  return (
<div className='App'>
  
  <HeroMain/>
  <NavHeader/>
  <MyContent/>
  <MyGallery/>
  

</div>
  )
}
export default App