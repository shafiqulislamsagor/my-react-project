import './App.css'
import Banner from './Componant/Banner'
import Nav from './Componant/Nav'
import OurResipes from './Componant/OurResipes'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <div className='w-[95%] lg:w-5/6 mx-auto'>
        <Nav></Nav>
        <Banner></Banner>
        <OurResipes></OurResipes>
      </div>
    </>
  )
}

export default App
