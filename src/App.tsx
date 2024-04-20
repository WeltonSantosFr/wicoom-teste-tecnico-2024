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


        <div className='w-11/12 h-[112px]  mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23.5" stroke="#CF215B" />
              <path d="M37.2266 22.8503L35.6516 18.9128C35.5356 18.6198 35.334 18.3687 35.0731 18.1921C34.8122 18.0155 34.5042 17.9216 34.1891 17.9228H30.075V16.8C30.075 16.621 30.0039 16.4493 29.8773 16.3227C29.7507 16.1961 29.579 16.125 29.4 16.125H12.3C11.8823 16.125 11.4817 16.2909 11.1863 16.5863C10.8909 16.8817 10.725 17.2823 10.725 17.7V30.3C10.725 30.7177 10.8909 31.1183 11.1863 31.4137C11.4817 31.7091 11.8823 31.875 12.3 31.875H14.3925C14.5474 32.6379 14.9613 33.3239 15.5641 33.8166C16.1669 34.3092 16.9215 34.5784 17.7 34.5784C18.4785 34.5784 19.2331 34.3092 19.8359 33.8166C20.4387 33.3239 20.8526 32.6379 21.0075 31.875H26.9925C27.1474 32.6379 27.5613 33.3239 28.1641 33.8166C28.7669 34.3092 29.5215 34.5784 30.3 34.5784C31.0785 34.5784 31.8331 34.3092 32.4359 33.8166C33.0387 33.3239 33.4526 32.6379 33.6075 31.875H35.7C36.1177 31.875 36.5183 31.7091 36.8137 31.4137C37.1091 31.1183 37.275 30.7177 37.275 30.3V23.1C37.2749 23.0144 37.2584 22.9297 37.2266 22.8503ZM30.075 19.275H34.1903C34.2353 19.275 34.2794 19.2884 34.3167 19.3137C34.354 19.339 34.3828 19.3749 34.3995 19.4168L35.6033 22.425H30.075V19.275ZM12.075 17.7C12.075 17.6403 12.0987 17.5831 12.1409 17.5409C12.1831 17.4987 12.2403 17.475 12.3 17.475H28.725V25.125H12.075V17.7ZM17.7 33.225C17.2995 33.225 16.908 33.1062 16.575 32.8837C16.242 32.6612 15.9824 32.345 15.8291 31.9749C15.6759 31.6049 15.6358 31.1978 15.7139 30.8049C15.7921 30.4121 15.9849 30.0513 16.2681 29.7681C16.5513 29.4849 16.9121 29.292 17.3049 29.2139C17.6978 29.1358 18.1049 29.1759 18.4749 29.3291C18.845 29.4824 19.1612 29.742 19.3837 30.075C19.6062 30.408 19.725 30.7995 19.725 31.2C19.725 31.7371 19.5117 32.2521 19.1319 32.6319C18.7521 33.0117 18.2371 33.225 17.7 33.225ZM26.9925 30.525H21.0075C20.8526 29.7621 20.4387 29.0761 19.8359 28.5834C19.2331 28.0908 18.4785 27.8216 17.7 27.8216C16.9215 27.8216 16.1669 28.0908 15.5641 28.5834C14.9613 29.0761 14.5474 29.7621 14.3925 30.525H12.3C12.2403 30.525 12.1831 30.5013 12.1409 30.4591C12.0987 30.4169 12.075 30.3597 12.075 30.3V26.475H28.725V28.2165C28.284 28.4499 27.9 28.7778 27.6005 29.1769C27.301 29.576 27.0934 30.0363 26.9925 30.525ZM30.3 33.225C29.8995 33.225 29.508 33.1062 29.175 32.8837C28.842 32.6612 28.5824 32.345 28.4291 31.9749C28.2759 31.6049 28.2358 31.1978 28.3139 30.8049C28.3921 30.4121 28.5849 30.0513 28.8681 29.7681C29.1513 29.4849 29.5121 29.292 29.9049 29.2139C30.2978 29.1358 30.7049 29.1759 31.0749 29.3291C31.445 29.4824 31.7612 29.742 31.9837 30.075C32.2062 30.408 32.325 30.7995 32.325 31.2C32.325 31.7371 32.1117 32.2521 31.7319 32.6319C31.3521 33.0117 30.8371 33.225 30.3 33.225ZM35.925 30.3C35.925 30.3597 35.9013 30.4169 35.8591 30.4591C35.8169 30.5013 35.7597 30.525 35.7 30.525H33.6075C33.4509 29.7632 33.0364 29.0786 32.4339 28.5868C31.8314 28.0949 31.0778 27.8259 30.3 27.825C30.2246 27.825 30.1493 27.825 30.075 27.8329V23.775H35.925V30.3Z" fill="#CF215B" />
            </svg>
            <span className='text-dark-grey text-base'>Frete Grátis p/ Sudeste</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23.5" stroke="#CF215B" />
              <path d="M35.1138 21.1335C35.4696 21.0611 35.7895 20.8681 36.0193 20.587C36.2491 20.306 36.3747 19.9542 36.375 19.5911V16.8C36.375 16.3823 36.209 15.9817 35.9137 15.6863C35.6183 15.3909 35.2177 15.225 34.8 15.225H13.2C12.7823 15.225 12.3816 15.3909 12.0863 15.6863C11.7909 15.9817 11.625 16.3823 11.625 16.8V19.5911C11.6252 19.9542 11.7509 20.306 11.9807 20.587C12.2105 20.8681 12.5303 21.0611 12.8861 21.1335C13.5498 21.2655 14.1471 21.6236 14.5764 22.1467C15.0056 22.6698 15.2402 23.3256 15.2402 24.0022C15.2402 24.6789 15.0056 25.3346 14.5764 25.8577C14.1471 26.3808 13.5498 26.7389 12.8861 26.871C12.5311 26.9432 12.2118 27.1355 11.9821 27.4157C11.7524 27.6958 11.6262 28.0466 11.625 28.4089V31.2C11.625 31.6177 11.7909 32.0183 12.0863 32.3137C12.3816 32.609 12.7823 32.775 13.2 32.775H34.8C35.2177 32.775 35.6183 32.609 35.9137 32.3137C36.209 32.0183 36.375 31.6177 36.375 31.2V28.4089C36.3747 28.0458 36.2491 27.694 36.0193 27.4129C35.7895 27.1319 35.4696 26.9388 35.1138 26.8665C34.4502 26.7344 33.8528 26.3763 33.4236 25.8532C32.9943 25.3301 32.7597 24.6744 32.7597 23.9977C32.7597 23.3211 32.9943 22.6653 33.4236 22.1422C33.8528 21.6191 34.4502 21.261 35.1138 21.129V21.1335ZM12.975 31.2V28.4089C12.9752 28.3573 12.993 28.3074 13.0256 28.2675C13.0581 28.2276 13.1034 28.2 13.1538 28.1895C14.1202 27.9932 14.9891 27.4689 15.6131 26.7054C16.2372 25.9419 16.5781 24.9861 16.5781 24C16.5781 23.0139 16.2372 22.0581 15.6131 21.2945C14.9891 20.531 14.1202 20.0067 13.1538 19.8105C13.1025 19.7997 13.0565 19.7714 13.0238 19.7303C12.9911 19.6892 12.9739 19.638 12.975 19.5855V16.8C12.975 16.7403 12.9987 16.6831 13.0409 16.6409C13.0831 16.5987 13.1403 16.575 13.2 16.575H19.725V31.425H13.2C13.1403 31.425 13.0831 31.4013 13.0409 31.3591C12.9987 31.3169 12.975 31.2596 12.975 31.2ZM34.8461 28.1895C34.8965 28.2 34.9418 28.2276 34.9743 28.2675C35.0069 28.3074 35.0248 28.3573 35.025 28.4089V31.2C35.025 31.2596 35.0013 31.3169 34.9591 31.3591C34.9169 31.4013 34.8596 31.425 34.8 31.425H21.075V16.575H34.8C34.8596 16.575 34.9169 16.5987 34.9591 16.6409C35.0013 16.6831 35.025 16.7403 35.025 16.8V19.5911C35.0261 19.6436 35.0088 19.6948 34.9761 19.7359C34.9435 19.777 34.8975 19.8054 34.8461 19.8161C33.8797 20.0123 33.0109 20.5366 32.3868 21.3002C31.7627 22.0637 31.4218 23.0195 31.4218 24.0056C31.4218 24.9917 31.7627 25.9475 32.3868 26.711C33.0109 27.4746 33.8797 27.9989 34.8461 28.1951V28.1895Z" fill="#CF215B" />
            </svg>
            <span className='text-dark-grey text-base'>R$ 20 off na 1º compra</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23.5" stroke="#CF215B" />
              <path d="M29.1648 30.2403L25.9079 33.4987L25.9076 33.4989C25.3955 34.012 24.7016 34.2999 23.9784 34.2999C23.2553 34.2999 22.5614 34.012 22.0492 33.4989L22.049 33.4987L18.8273 30.2757C19.2635 30.2076 19.6154 30.0997 19.9063 29.9671C20.4069 29.739 20.6928 29.4518 20.8817 29.2622C20.8869 29.2569 20.892 29.2517 20.8971 29.2466L24.1292 26.0045L27.3505 29.2358C27.9216 29.8088 28.5246 30.1031 29.1648 30.2403ZM18.856 17.7278L22.0813 14.5012L22.0815 14.501C22.5937 13.9879 23.2876 13.7 24.0107 13.7C24.7339 13.7 25.4278 13.9879 25.9399 14.501L25.9402 14.5012L29.193 17.7554C28.5348 17.8906 27.9022 18.1877 27.3254 18.7892L24.1292 21.9954L20.8971 18.7533C20.8894 18.7455 20.8815 18.7375 20.8733 18.7292C20.7009 18.5558 20.4221 18.275 19.9352 18.0471C19.6454 17.9114 19.2931 17.799 18.856 17.7278Z" stroke="#CF215B" />
              <path d="M33.4896 22.1843L33.4911 22.1857C34.0096 22.6727 34.2966 23.3269 34.2999 24.0034C34.3033 24.6795 34.0231 25.3356 33.5102 25.8268C33.5099 25.8271 33.5096 25.8274 33.5093 25.8277L31.2261 27.9898H30.0647C29.5954 27.9898 29.1574 27.8126 28.8419 27.5152L25.5915 24.4507C25.3727 24.2444 25.1177 24.0959 24.8477 24.0032C25.1137 23.9103 25.3648 23.763 25.5807 23.5595L28.8203 20.5052L28.8204 20.5053L28.8297 20.4961C29.1273 20.2003 29.5799 20.0204 30.0431 20.0204H31.2045L33.4896 22.1843ZM22.6984 23.5657C22.9147 23.7623 23.1689 23.9104 23.443 24.0044C23.1742 24.0971 22.9204 24.2453 22.7025 24.4507L19.4438 27.523C19.1139 27.825 18.6736 28 18.2185 28H16.8195L14.4912 25.7953L14.4906 25.7948C13.9805 25.3133 13.7 24.6671 13.7 24C13.7 23.3329 13.9805 22.6867 14.4906 22.2052L14.4912 22.2047L16.8195 20H18.2077C18.6768 20 19.1147 20.1771 19.4302 20.4743C19.4303 20.4744 19.4304 20.4746 19.4305 20.4747L22.6911 23.5589L22.6911 23.559L22.6984 23.5657Z" stroke="#CF215B" />
            </svg>
            <span className='text-dark-grey text-base'>Pague via PIX</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23.5" stroke="#CF215B" />
              <path d="M34.8 15.225H13.2C12.7823 15.225 12.3817 15.3909 12.0863 15.6863C11.7909 15.9817 11.625 16.3823 11.625 16.8V31.2C11.625 31.6177 11.7909 32.0183 12.0863 32.3137C12.3817 32.609 12.7823 32.775 13.2 32.775H34.8C35.2177 32.775 35.6183 32.609 35.9137 32.3137C36.2091 32.0183 36.375 31.6177 36.375 31.2V16.8C36.375 16.3823 36.2091 15.9817 35.9137 15.6863C35.6183 15.3909 35.2177 15.225 34.8 15.225ZM13.2 16.575H34.8C34.8597 16.575 34.9169 16.5987 34.9591 16.6409C35.0013 16.6831 35.025 16.7403 35.025 16.8V19.725H12.975V16.8C12.975 16.7403 12.9987 16.6831 13.0409 16.6409C13.0831 16.5987 13.1403 16.575 13.2 16.575ZM34.8 31.425H13.2C13.1403 31.425 13.0831 31.4013 13.0409 31.3591C12.9987 31.3169 12.975 31.2596 12.975 31.2V21.075H35.025V31.2C35.025 31.2596 35.0013 31.3169 34.9591 31.3591C34.9169 31.4013 34.8597 31.425 34.8 31.425ZM32.775 28.5C32.775 28.679 32.7039 28.8507 32.5773 28.9773C32.4507 29.1039 32.279 29.175 32.1 29.175H28.5C28.321 29.175 28.1493 29.1039 28.0227 28.9773C27.8961 28.8507 27.825 28.679 27.825 28.5C27.825 28.321 27.8961 28.1493 28.0227 28.0227C28.1493 27.8961 28.321 27.825 28.5 27.825H32.1C32.279 27.825 32.4507 27.8961 32.5773 28.0227C32.7039 28.1493 32.775 28.321 32.775 28.5ZM25.575 28.5C25.575 28.679 25.5039 28.8507 25.3773 28.9773C25.2507 29.1039 25.079 29.175 24.9 29.175H23.1C22.921 29.175 22.7493 29.1039 22.6227 28.9773C22.4961 28.8507 22.425 28.679 22.425 28.5C22.425 28.321 22.4961 28.1493 22.6227 28.0227C22.7493 27.8961 22.921 27.825 23.1 27.825H24.9C25.079 27.825 25.2507 27.8961 25.3773 28.0227C25.5039 28.1493 25.575 28.321 25.575 28.5Z" fill="#CF215B" />
            </svg>
            <span className='text-dark-grey text-base'>Parcele em até 6x sem juros</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
