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
      <div className='w-full h-[112px] bg-[#f5f5f5]'>
        <div className='w-11/12 h-[112px] mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
              <circle cx="24" cy="24" r="23.5" stroke="#CF215B" />
              <path fill="#CF215B" d="m37.227 22.85-1.575-3.937a1.567 1.567 0 0 0-1.463-.99h-4.114V16.8a.675.675 0 0 0-.675-.675H12.3a1.575 1.575 0 0 0-1.575 1.575v12.6a1.575 1.575 0 0 0 1.575 1.575h2.092a3.375 3.375 0 0 0 6.616 0h5.985a3.375 3.375 0 0 0 6.615 0H35.7a1.575 1.575 0 0 0 1.575-1.575v-7.2a.674.674 0 0 0-.048-.25Zm-7.152-3.575h4.115a.225.225 0 0 1 .21.142l1.203 3.008h-5.528v-3.15Zm-18-1.575a.225.225 0 0 1 .225-.225h16.425v7.65h-16.65V17.7ZM17.7 33.225a2.025 2.025 0 1 1 0-4.05 2.025 2.025 0 0 1 0 4.05Zm9.293-2.7h-5.985a3.375 3.375 0 0 0-6.615 0H12.3a.225.225 0 0 1-.225-.225v-3.825h16.65v1.741a3.386 3.386 0 0 0-1.733 2.309Zm3.307 2.7a2.025 2.025 0 1 1 0-4.05 2.025 2.025 0 0 1 0 4.05Zm5.625-2.925a.225.225 0 0 1-.225.225h-2.093a3.38 3.38 0 0 0-3.307-2.7c-.075 0-.15 0-.225.008v-4.058h5.85V30.3Z" />
            </svg>
            <span className='text-dark-grey text-base'>Frete Grátis p/ Sudeste</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
              <circle cx="24" cy="24" r="23.5" stroke="#CF215B" />
              <path fill="#CF215B" d="M35.114 21.134a1.575 1.575 0 0 0 1.261-1.543V16.8a1.575 1.575 0 0 0-1.575-1.575H13.2a1.575 1.575 0 0 0-1.575 1.575v2.791a1.575 1.575 0 0 0 1.261 1.543 2.925 2.925 0 0 1 0 5.737 1.575 1.575 0 0 0-1.261 1.538V31.2a1.575 1.575 0 0 0 1.575 1.575h21.6a1.575 1.575 0 0 0 1.575-1.575v-2.791a1.576 1.576 0 0 0-1.261-1.543 2.925 2.925 0 0 1 0-5.737v.005ZM12.975 31.2v-2.791a.225.225 0 0 1 .179-.22 4.275 4.275 0 0 0 0-8.378.225.225 0 0 1-.179-.226V16.8a.225.225 0 0 1 .225-.225h6.525v14.85H13.2a.225.225 0 0 1-.225-.225Zm21.871-3.01a.225.225 0 0 1 .179.219V31.2a.225.225 0 0 1-.225.225H21.075v-14.85H34.8a.225.225 0 0 1 .225.225v2.791a.225.225 0 0 1-.179.225 4.275 4.275 0 0 0 0 8.38v-.007Z" />
            </svg>
            <span className='text-dark-grey text-base'>R$ 20 off na 1º compra</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
              <circle cx="24" cy="24" r="23.5" stroke="#CF215B" />
              <path stroke="#CF215B" d="M29.165 30.24 25.908 33.5a2.726 2.726 0 0 1-3.859 0l-3.222-3.223a4.11 4.11 0 0 0 1.08-.309c.5-.228.786-.515.975-.705l.015-.015 3.232-3.242 3.221 3.23c.572.574 1.175.868 1.815 1.005ZM18.856 17.728l3.225-3.227a2.726 2.726 0 0 1 3.859 0l3.253 3.254a3.47 3.47 0 0 0-1.868 1.034l-3.196 3.206-3.232-3.242a86.331 86.331 0 0 0-.024-.024c-.172-.173-.45-.454-.938-.682a4.066 4.066 0 0 0-1.079-.32ZM33.49 22.184l.001.002c.519.487.806 1.14.809 1.817a2.507 2.507 0 0 1-.79 1.824l-2.284 2.163h-1.161c-.47 0-.908-.177-1.223-.475l-3.25-3.064a2.053 2.053 0 0 0-.744-.448c.266-.093.517-.24.733-.444l3.24-3.054.009-.009c.297-.296.75-.476 1.213-.476h1.162l2.285 2.164Zm-10.792 1.382c.217.196.47.344.745.438-.269.093-.523.241-.74.447l-3.26 3.072c-.33.302-.77.477-1.225.477H16.82l-2.329-2.205A2.468 2.468 0 0 1 13.7 24c0-.667.28-1.313.79-1.795h.001L16.82 20h1.388c.469 0 .907.177 1.222.474l3.261 3.085.007.007Z" />
            </svg>
            <span className='text-dark-grey text-base'>Pague via PIX</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none">
              <circle cx="24" cy="24" r="23.5" stroke="#CF215B" />
              <path fill="#CF215B" d="M34.8 15.225H13.2a1.575 1.575 0 0 0-1.575 1.575v14.4a1.575 1.575 0 0 0 1.575 1.575h21.6a1.575 1.575 0 0 0 1.575-1.575V16.8a1.575 1.575 0 0 0-1.575-1.575Zm-21.6 1.35h21.6a.225.225 0 0 1 .225.225v2.925h-22.05V16.8a.225.225 0 0 1 .225-.225Zm21.6 14.85H13.2a.225.225 0 0 1-.225-.225V21.075h22.05V31.2a.225.225 0 0 1-.225.225ZM32.775 28.5a.675.675 0 0 1-.675.675h-3.6a.675.675 0 1 1 0-1.35h3.6a.675.675 0 0 1 .675.675Zm-7.2 0a.675.675 0 0 1-.675.675h-1.8a.675.675 0 1 1 0-1.35h1.8a.675.675 0 0 1 .675.675Z" />
            </svg>
            <span className='text-dark-grey text-base'>Parcele em até 6x sem juros</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
