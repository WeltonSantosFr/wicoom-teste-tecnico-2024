import './App.css'
import Carousel from './components/carousel';
import Header from './components/header'

function App() {

  return (
    <div className='font-DMSans'>
      <Header />
      <div className='w-full h-[680px] flex'>

        <div className='w-full h-full flex justify-center z-0 relative'>
          <img src="src/assets/image 1.png" alt="image1" className='w-full h-full' />
          <img src="src/assets/image 3.png" alt="image1" className='w-full h-full' />
          <Carousel />
        </div>
      </div>
    </div>
  )
}

export default App
