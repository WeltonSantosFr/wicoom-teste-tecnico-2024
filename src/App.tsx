import './App.css'
import Carousel from './components/carousel';
import Header from './components/header'
import image1 from './assets/image 1.png'
import image3 from './assets/image 3.png'
import image19 from './assets/image 19.png'
import image20 from './assets/image 20.png'
import image21 from './assets/image 21.png'
import image22 from './assets/image 22.png'
import image23 from './assets/image 23.png'
import image24 from './assets/image 24.png'
import rectangle79 from './assets/Rectangle 79.png'
import image16 from './assets/image 16.png'
import image12 from './assets/image 12.png'
import image14 from './assets/image 14.png'
import image15 from './assets/image 15.png'
import FavoritesCarousel from './components/favoritesCarousel';
import image52 from './assets/image 52.png'
import image53 from './assets/image 53.png'
import logoSapatella from './assets/logo_SAPATELLA_preto 1.png'
import visa from './assets/VISA.png'
import mastercard from './assets/MASTERCARD.png'
import hipercard from './assets/HIPERCARD.png'
import pix from './assets/PIX.png'
import amex from './assets/AMEX.png'
import elo from './assets/ELO.png'
import boleto from './assets/BOLETO.png'
import image27 from './assets/image 27.png'
import group830 from './assets/Group 830.png'
import logoWicomm from './assets/Logo_Wicomm_WhiteBlue 1.png'
import logoVtex from './assets/VTEX_pink_RGB.png'
import { CarouselCards, favoritesCarouselCards } from './mocks/cardsMocks';

function App() {



  return (
    <div className='font-DMSans'>
      <Header />
      <div className='w-full h-[680px] flex'>
        <div className='w-full h-full flex justify-center z-0 relative'>
          <img src={image1} alt="landing image" className='w-full h-full' />
          <img src={image3} alt="landing image" className='w-full h-full' />
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

      <div className='w-full h-[420px] flex items-center justify-center'>
        <div className='w-11/12 flex flex-col items-center gap-6'>
          <h4 className='font-normal text-2xl text-dark-grey'>Compre por categoria</h4>
          <div className='w-full h-[220px] flex gap-9'>
            <div className='w-[162px] h-[220px] flex flex-col items-center justify-evenly'>
              <img src={image19} alt="section image" />
              <span className='text-base font-normal text-dark-grey'>Bolsas</span>
            </div>

            <div className='w-[162px] h-[220px] flex flex-col items-center justify-evenly'>
              <img src={image20} alt="section image" />
              <span className='text-base font-normal text-dark-grey'>Tênis</span>
            </div>

            <div className='w-[162px] h-[220px] flex flex-col items-center justify-evenly'>
              <img src={image21} alt="section image" />
              <span className='text-base font-normal text-dark-grey'>Rasteiras</span>
            </div>

            <div className='w-[162px] h-[220px] flex flex-col items-center justify-evenly'>
              <img src={image22} alt="section image" />
              <span className='text-base font-normal text-dark-grey'>Plataformas</span>
            </div>

            <div className='w-[162px] h-[220px] flex flex-col items-center justify-evenly'>
              <img src={image23} alt="section image" />
              <span className='text-base font-normal text-dark-grey'>Botas</span>
            </div>

            <div className='w-[162px] h-[220px] flex flex-col items-center justify-evenly'>
              <img src={image24} alt="section image" />
              <span className='text-base font-normal text-dark-grey'>Sapatilhas</span>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-[466px] flex items-center justify-center bg-[#f5f5f5]'>
        <div className='w-11/12 flex items-start justify-evenly'>
          <div className='w-[313px] h-[230px] mt-[40px] flex flex-col justify-between'>
            <div className='w-[313px] h-[4px] flex gap-3'>
              <div className='h-full w-[151px] flex'>
                <div className='w-[40px] h-full bg-pink'></div>
                <div className='w-[111px] h-full bg-white'></div>
              </div>
              <div className='h-full w-[150px] bg-white'></div>
            </div>

            <div className='flex flex-col gap-4 mt-[10px]'>
              <h4 className='text-dark-grey text-xl font-normal'>Pra brilhar no verão</h4>
              <p className='w-[273px] text-xs text-dark-grey font-normal'>As Sandálias Birkens são uma escolha de calçado atemporal e icônica, conhecido por seu conforto, qualidade e design diferenciado</p>
            </div>
            <button className='bg-pink text-white font-normal text-base w-[156px] h-[48px]'>É a minha cara</button>
          </div>

          <img src={rectangle79} alt="sandals image" className='w-[574px] h-[402px]' />

        </div>
      </div>

      <div className='w-full h-[599px] flex flex-col justify-start items-center z-0 relative'>
      <span className='text-2xl text-dark-grey font-normal mt-[72px]'>Favoritos da Semana</span>
        <FavoritesCarousel slides={favoritesCarouselCards} highlightPrice={false}/>
      </div>

      <div className='w-full h-[596px] flex items-center justify-center bg-[#f5f5f5]'>
        <div className='w-11/12 h-[504px] flex items-start justify-between'>

          <div className='flex flex-col h-[456px] justify-between'>
            <div className='flex flex-col gap-2 items-start'>
              <span className='text-dark-grey text-xl font-normal'>Rasteiras & Birkens</span>
              <p className='text-dark-grey text-xs font-normal w-[228px]'>A categoria de Sandália Rasteira da Sapatella é um verdadeiro paraíso para os amantes de conforto e estilo. </p>
            </div>
            <button className='text-dark-grey text-base font-normal flex items-center gap-4'>Eu quero <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" d="M20 12H4m10 6 5.938-5.938a.088.088 0 0 0 0-.124L14 6" /></svg></button>
            <img src={image16} alt="image" className='w-[376px] h-[302px]' />
          </div>

          <div className='flex flex-col h-[504px] justify-between'>
            <img src={image12} alt="image" className='w-[376px] h-[456px]' />

            <button className='text-dark-grey text-base font-normal flex items-center gap-4'>Sandálias <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" d="M20 12H4m10 6 5.938-5.938a.088.088 0 0 0 0-.124L14 6" /></svg></button>
          </div>

          <div className='flex flex-col h-[504px] items-center justify-between'>
            <img src={image14} alt="image" className='w-[376px] h-[354px]' />
            <div className='flex flex-col gap-2 items-center'>
              <span className='text-dark-grey text-xl font-normal'>Tênis</span>
              <p className='text-dark-grey text-xs font-normal w-[250px] text-center'>Os tênis femininos se tornaram um item básico na moda e nos calçados do dia a dia. </p>
            </div>
            <button className='text-dark-grey text-base font-normal flex items-center gap-4'>Conferir <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black"><path stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" d="M20 12H4m10 6 5.938-5.938a.088.088 0 0 0 0-.124L14 6" /></svg></button>
          </div>

        </div>
      </div>

      <div className='w-full h-[629px] flex items-center justify-start gap-5'>
        <img src={image15} alt="image" />
        <div className='w-[630px] h-[599px] flex justify-center z-0 relative '>

          <FavoritesCarousel slides={CarouselCards} highlightPrice={true} />
        </div>
      </div>

      <div className='w-full h-[486px]'>
        <img src={image52} alt="image" />
      </div>

      <div className='w-full h-[484px] flex items-center justify-center'>
        <div className='w-[970px] h-[340px] flex items-center justify-between'>
          <div className='flex flex-col h-[340px] justify-center gap-4'>
            <span className='text-dark-grey text-2xl font-normal'>Sobre a Sapatella</span>
            <p className='text-dark-grey text-sm font-normal w-[461px]'>
              Oi, a gente já se conhece? Muito prazer, Sapatella! Somos uma Marca de moda que oferece sapatos e acessórios feitos para te encantar. Aqui tem atenção de verdade, produtos com o seu jeito e ritmo. Chega mais, fique à vontade. Queremos ver você confortável e livre para ser como quiser e ocupar o espaço que bem entender. O que nos une e contagia é a vontade de brilhar e ser feliz.
              Mais que mulheres, somos amigas. Sapatella. Vamos juntas?
            </p>
          </div>

          <div className='w-[376px] h-[320px] shadow-[20px_20px_0px_0px_#f5f5f5]'>
            <img src={image53} alt="image" />
          </div>
        </div>

      </div>

      <div className='w-full h-[148px] flex flex-col justify-center items-center gap-3 bg-[#f5f5f5]'>
        <span className='text-dark-grey text-xl font-normal'>Cadastre-se e ganhe <span className='text-pink font-bold'>R$20 OFF </span>na sua primeira compra!</span>
        <form className='flex gap-5'>
          <input type="text" placeholder='Nome' className='placeholder:text-black-2 outline-none text-sm font-normal border border-black pl-2 w-[277px] h-[40px]' />
          <input type="text" placeholder='Email' className='placeholder:text-black-2 outline-none text-sm font-normal border border-black pl-2 w-[277px] h-[40px]' />
          <button className='bg-pink w-[178px] h-[40px] text-white text-sm font-regular'>Cadastrar</button>
        </form>
      </div>

      <div className='w-full h-[360px] flex flex-col items-center justify-center'>
        <div className='w-11/12 flex justify-start items-center'>

          <div className='w-full flex items-start justify-start gap-[60px]'>

            <div className='w-[170px] h-[96px] flex flex-col justify-between'>
              <img src={logoSapatella} alt="logo" />
              <div className='flex gap-8'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 7.6875C11.1471 7.6875 10.3133 7.94042 9.6041 8.41429C8.89492 8.88815 8.34217 9.56167 8.01577 10.3497C7.68937 11.1377 7.60397 12.0048 7.77036 12.8413C7.93676 13.6779 8.34749 14.4463 8.9506 15.0494C9.55372 15.6525 10.3221 16.0632 11.1587 16.2296C11.9952 16.396 12.8623 16.3106 13.6503 15.9842C14.4383 15.6578 15.1118 15.1051 15.5857 14.3959C16.0596 13.6867 16.3125 12.8529 16.3125 12C16.311 10.8567 15.8562 9.76067 15.0478 8.95225C14.2393 8.14382 13.1433 7.68899 12 7.6875ZM12 15.1875C11.3696 15.1875 10.7533 15.0006 10.2291 14.6503C9.70494 14.3001 9.29639 13.8022 9.05513 13.2198C8.81388 12.6374 8.75076 11.9965 8.87375 11.3781C8.99674 10.7598 9.30032 10.1919 9.7461 9.7461C10.1919 9.30032 10.7598 8.99674 11.3781 8.87375C11.9965 8.75076 12.6374 8.81388 13.2198 9.05513C13.8022 9.29639 14.3001 9.70494 14.6503 10.2291C15.0006 10.7533 15.1875 11.3696 15.1875 12C15.1875 12.8454 14.8517 13.6561 14.2539 14.2539C13.6561 14.8517 12.8454 15.1875 12 15.1875ZM16.5 2.4375H7.5C6.1578 2.43899 4.871 2.97284 3.92192 3.92192C2.97284 4.871 2.43899 6.1578 2.4375 7.5V16.5C2.43899 17.8422 2.97284 19.129 3.92192 20.0781C4.871 21.0272 6.1578 21.561 7.5 21.5625H16.5C17.8422 21.561 19.129 21.0272 20.0781 20.0781C21.0272 19.129 21.561 17.8422 21.5625 16.5V7.5C21.561 6.1578 21.0272 4.871 20.0781 3.92192C19.129 2.97284 17.8422 2.43899 16.5 2.4375ZM20.4375 16.5C20.4375 17.5443 20.0227 18.5458 19.2842 19.2842C18.5458 20.0227 17.5443 20.4375 16.5 20.4375H7.5C6.45571 20.4375 5.45419 20.0227 4.71577 19.2842C3.97734 18.5458 3.5625 17.5443 3.5625 16.5V7.5C3.5625 6.45571 3.97734 5.45419 4.71577 4.71577C5.45419 3.97734 6.45571 3.5625 7.5 3.5625H16.5C17.5443 3.5625 18.5458 3.97734 19.2842 4.71577C20.0227 5.45419 20.4375 6.45571 20.4375 7.5V16.5ZM17.8125 7.125C17.8125 7.31042 17.7575 7.49168 17.6545 7.64585C17.5515 7.80002 17.4051 7.92018 17.2338 7.99114C17.0625 8.06209 16.874 8.08066 16.6921 8.04449C16.5102 8.00831 16.3432 7.91902 16.2121 7.78791C16.081 7.6568 15.9917 7.48975 15.9555 7.3079C15.9193 7.12604 15.9379 6.93754 16.0089 6.76623C16.0798 6.59493 16.2 6.44851 16.3542 6.3455C16.5083 6.24248 16.6896 6.1875 16.875 6.1875C17.1236 6.1875 17.3621 6.28627 17.5379 6.46209C17.7137 6.6379 17.8125 6.87636 17.8125 7.125Z" fill="#4F4F4F" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5013 13.7466L14.5013 12.2466C14.4126 12.2025 14.314 12.1826 14.2152 12.1888C14.1165 12.1951 14.0211 12.2273 13.9387 12.2822L12.4688 13.2619C11.7246 12.8809 11.1191 12.2754 10.7381 11.5312L11.7188 10.0622C11.7736 9.97985 11.8058 9.88448 11.8121 9.78572C11.8184 9.68696 11.7984 9.58829 11.7544 9.49969L10.2544 6.49969C10.2077 6.40583 10.1358 6.32687 10.0467 6.27171C9.95757 6.21655 9.85481 6.18738 9.75 6.1875C8.80517 6.1875 7.89903 6.56283 7.23093 7.23093C6.56283 7.89903 6.1875 8.80517 6.1875 9.75C6.18998 11.8875 7.04022 13.9368 8.55169 15.4483C10.0632 16.9598 12.1125 17.81 14.25 17.8125C15.1948 17.8125 16.101 17.4372 16.7691 16.7691C17.4372 16.101 17.8125 15.1948 17.8125 14.25C17.8125 14.1454 17.7834 14.043 17.7284 13.954C17.6735 13.8651 17.5948 13.7933 17.5013 13.7466ZM14.25 16.6875C12.4107 16.6853 10.6475 15.9536 9.34691 14.6531C8.04636 13.3525 7.31473 11.5893 7.3125 9.75C7.31255 9.16172 7.52536 8.5933 7.91166 8.14962C8.29797 7.70594 8.83169 7.41694 9.41438 7.33594L10.6013 9.70969L9.62719 11.1703C9.57601 11.2473 9.54461 11.3358 9.53578 11.4279C9.52695 11.5199 9.54096 11.6128 9.57656 11.6981C10.0938 12.9279 11.0721 13.9062 12.3019 14.4234C12.3872 14.459 12.4801 14.473 12.5721 14.4642C12.6642 14.4554 12.7527 14.424 12.8297 14.3728L14.2903 13.3988L16.6641 14.5856C16.5831 15.1683 16.2941 15.702 15.8504 16.0883C15.4067 16.4746 14.8383 16.6874 14.25 16.6875ZM12 2.4375C10.3423 2.43715 8.71298 2.86774 7.2719 3.68703C5.83081 4.50632 4.62746 5.68616 3.77989 7.11081C2.93233 8.53545 2.46967 10.156 2.43732 11.8133C2.40496 13.4707 2.80401 15.108 3.59531 16.5647L2.50594 19.8337C2.42882 20.065 2.41762 20.3132 2.47362 20.5504C2.52961 20.7877 2.65057 21.0047 2.82295 21.1771C2.99533 21.3494 3.21231 21.4704 3.44957 21.5264C3.68683 21.5824 3.93499 21.5712 4.16625 21.4941L7.43531 20.4047C8.71498 21.0991 10.1363 21.4922 11.591 21.5539C13.0456 21.6156 14.4952 21.3444 15.8291 20.7608C17.1629 20.1772 18.346 19.2968 19.2879 18.1866C20.2299 17.0764 20.9059 15.7657 21.2644 14.3546C21.6229 12.9435 21.6544 11.4691 21.3566 10.044C21.0588 8.61879 20.4395 7.28044 19.5459 6.13097C18.6523 4.98149 17.508 4.05125 16.2003 3.41117C14.8926 2.77108 13.456 2.43806 12 2.4375ZM12 20.4375C10.5168 20.4379 9.05974 20.0472 7.77563 19.305C7.69002 19.2558 7.59312 19.2296 7.49438 19.2291C7.43385 19.2294 7.37375 19.2392 7.31625 19.2581L3.81094 20.4263C3.7779 20.4373 3.74245 20.4389 3.70856 20.4309C3.67466 20.4229 3.64366 20.4056 3.61904 20.381C3.59441 20.3563 3.57713 20.3253 3.56913 20.2914C3.56113 20.2576 3.56273 20.2221 3.57375 20.1891L4.74188 16.6875C4.76715 16.6118 4.77604 16.5317 4.76796 16.4523C4.75988 16.3729 4.73501 16.2962 4.695 16.2272C3.7643 14.6195 3.3902 12.7495 3.63074 10.9075C3.87128 9.06544 4.71301 7.35428 6.02534 6.03945C7.33767 4.72463 9.04724 3.87965 10.8888 3.63562C12.7304 3.39159 14.601 3.76213 16.2105 4.68978C17.82 5.61742 19.0784 7.05031 19.7904 8.76612C20.5024 10.4819 20.6282 12.3848 20.1484 14.1794C19.6685 15.9741 18.6098 17.5602 17.1365 18.6917C15.6632 19.8232 13.8577 20.4369 12 20.4375Z" fill="#4F4F4F" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.4375C10.1087 2.4375 8.25991 2.99833 6.68736 4.04907C5.11482 5.09981 3.88917 6.59327 3.16541 8.34059C2.44164 10.0879 2.25227 12.0106 2.62125 13.8656C2.99022 15.7205 3.90096 17.4244 5.2383 18.7617C6.57564 20.099 8.27951 21.0098 10.1345 21.3788C11.9894 21.7477 13.9121 21.5584 15.6594 20.8346C17.4067 20.1108 18.9002 18.8852 19.9509 17.3126C21.0017 15.7401 21.5625 13.8913 21.5625 12C21.5595 9.46478 20.5511 7.03425 18.7584 5.24158C16.9658 3.44891 14.5352 2.44048 12 2.4375ZM12.5625 20.4188V14.0625H15C15.1492 14.0625 15.2923 14.0032 15.3978 13.8977C15.5032 13.7923 15.5625 13.6492 15.5625 13.5C15.5625 13.3508 15.5032 13.2077 15.3978 13.1023C15.2923 12.9968 15.1492 12.9375 15 12.9375H12.5625V10.5C12.5625 10.0524 12.7403 9.62323 13.0568 9.30676C13.3732 8.99029 13.8025 8.8125 14.25 8.8125H15.75C15.8992 8.8125 16.0423 8.75324 16.1478 8.64775C16.2532 8.54226 16.3125 8.39918 16.3125 8.25C16.3125 8.10082 16.2532 7.95774 16.1478 7.85225C16.0423 7.74676 15.8992 7.6875 15.75 7.6875H14.25C13.5041 7.6875 12.7887 7.98382 12.2613 8.51126C11.7338 9.03871 11.4375 9.75408 11.4375 10.5V12.9375H9C8.85082 12.9375 8.70775 12.9968 8.60226 13.1023C8.49677 13.2077 8.4375 13.3508 8.4375 13.5C8.4375 13.6492 8.49677 13.7923 8.60226 13.8977C8.70775 14.0032 8.85082 14.0625 9 14.0625H11.4375V20.4188C9.25334 20.2728 7.21138 19.2837 5.74285 17.6604C4.27432 16.037 3.49419 13.9064 3.5672 11.7186C3.64021 9.53079 4.56064 7.45698 6.13413 5.93513C7.70761 4.41328 9.81097 3.56252 12 3.56252C14.189 3.56252 16.2924 4.41328 17.8659 5.93513C19.4394 7.45698 20.3598 9.53079 20.4328 11.7186C20.5058 13.9064 19.7257 16.037 18.2572 17.6604C16.7886 19.2837 14.7467 20.2728 12.5625 20.4188Z" fill="#4F4F4F" />
                </svg>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div>
                <span className='text-dark-grey text-base font-normal'>SOBRE NÓS</span>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <span className='text-dark-grey text-sm font-normal'><a href="">Quem Somos</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Mapa do site</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Casas Sapatella</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Seja um parceiro</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Seja um Franqueado</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Seja um afiliado</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Trabalhe com a gente</a></span>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div>
                <span className='text-dark-grey text-base font-normal'>MINHA CONTA</span>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <span className='text-dark-grey text-sm font-normal'><a href="">Meus Dados</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Meus Pedidos</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Login</a></span>
              </div>
            </div>

            <div className='flex flex-col gap-5'>
              <div>
                <span className='text-dark-grey text-base font-normal'>SUPORTE E POLÍTICAS</span>
              </div>
              <div className='flex flex-col gap-[14px]'>
                <span className='text-dark-grey text-sm font-normal'><a href="">Trocas e Devoluções</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Dúvidas Frequentes</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Fale Conosco</a></span>
                <span className='text-dark-grey text-sm font-normal'><a href="">Super Natal</a></span>
              </div>
            </div>

            <div className='flex flex-col gap-12'>
              <div className='flex flex-col gap-5'>
                <span className='text-dark-grey text-base font-normal'>FORMAS DE PAGAMENTO</span>
                <div className='flex gap-2 flex-wrap w-[188px]'>
                  <img src={visa} alt="visa" />
                  <img src={mastercard} alt="mastercard" />
                  <img src={hipercard} alt="hipercard" />
                  <img src={pix} alt="pix" />
                  <img src={amex} alt="amex" />
                  <img src={elo} alt="elo" />
                  <img src={boleto} alt="boleto" />
                </div>
              </div>

              <div className='flex flex-col gap-5'>
                <span className='text-dark-grey text-base font-normal'>SEGURANÇA</span>
                <div className='flex gap-4 flex-wrap w-[188px]'>
                  <img src={image27} alt="vtex pci certified" />
                  <img src={group830} alt="lets encrypt" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className='w-full h-[1px] bg-black-2'></div>

      <div className='w-full h-[148px] flex flex-col items-center justify-center gap-6'>
        <span className='text-dark-grey text-xs font-normal w-[567px] h-[36px] text-center'>Somos Sonho LTA - Estrada do Campo D'areia, 182 - Pechincha - Rio de Janeiro/RJ - CEP: 22.743-310
          CNPJ:28.445.729/0081-75 | © 2024 Todos dos direitos reservados</span>
        <div className='flex gap-10'>
          <img src={logoWicomm} alt="wicomm" />
          <img src={logoVtex} alt="vtex" />
        </div>
      </div>

    </div>
  )
}

export default App
