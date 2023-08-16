import HeroMain from './components/Hero/Hero.jsx'
import './App.css'
import NavHeader from './components/Nav/Nav.jsx'
import TContent from './components/TopContent/TContent.jsx'
const App = () => {
  return (
<div className='App'>
  
  <HeroMain/>
  <NavHeader/>
  <TopContent/>
  

</div>
  )
}
export default App