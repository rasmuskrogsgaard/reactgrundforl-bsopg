import HeroMain from './components/Hero/Hero.jsx'
import './App.css'
import NavHeader from './components/Nav/Nav.jsx'
import MyContent from './components/TopContent/Tcontent.jsx'
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