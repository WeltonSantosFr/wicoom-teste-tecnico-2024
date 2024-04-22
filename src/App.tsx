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
import { CarouselCards, favoritesCarouselCards } from './mocks/cardsMocks';
import Footer from './components/footer';
import TruckIcon from './components/icons/truckIcon';
import TicketIcon from './components/icons/ticketIcon';
import PixIcon from './components/icons/pixIcon';
import CreditCardIcon from './components/icons/creditCardIcon';
import ArrowRightIcon from './components/icons/arrowRightIcon';
import ArrowRightFilledIcon from './components/icons/arrowRightFilledIcon';

function App() {



  return (
    <div className='font-DMSans w-[1280px] mx-auto'>
      <Header />

      {/* Highlights Section */}
      <section aria-label='Sessão de destaques' className='w-full h-[680px] flex'>
        <div className='w-full h-full flex justify-center z-0 relative'>
          <img src={image1} alt="Modelo Feminina calçando Plataforma Branca" className='w-full h-full' loading='eager' />
          <img src={image3} alt="Modelo Feminina calçando Rasteira Carvalho" className='w-full h-full' loading='eager' />
          <Carousel />
        </div>
      </section>

      {/* Benefits Section */}
      <section aria-label='Sessão de beneficios' className='w-full h-[112px] bg-[#f5f5f5]'>
        <div className='w-11/12 h-[112px] mx-auto flex items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <TruckIcon />
            <span className='text-dark-grey text-base'>Frete Grátis p&#47; Sudeste</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <TicketIcon/>
            <span className='text-dark-grey text-base'>R&#36; 20 off na 1º compra</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <PixIcon/>
            <span className='text-dark-grey text-base'>Pague via PIX</span>
          </div>
          <div className='flex items-center gap-[10px]'>
            <CreditCardIcon/>
            <span className='text-dark-grey text-base'>Parcele em até 6x sem juros</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section aria-label='Sessão de categorias' className='w-full h-[420px] flex items-center justify-center'>
        <div className='w-11/12 flex flex-col items-center gap-6'>
          <h4 className='font-normal text-2xl text-dark-grey'>Compre por categoria</h4>
          <ul aria-label='lista de categorias' className='w-full h-[220px] flex gap-9 justify-center'>
            <li aria-label='Bolsas' className='w-[162px] h-[220px] flex flex-col items-center justify-evenly cursor-pointer'>
              <img src={image19} alt="Bolsa" />
              <span className='text-base font-normal text-dark-grey'>Bolsas</span>
            </li>
            <li aria-label='Tênis' className='w-[162px] h-[220px] flex flex-col items-center justify-evenly cursor-pointer'>
              <img src={image20} alt="Tênis" />
              <span className='text-base font-normal text-dark-grey'>Tênis</span>
            </li>
            <li aria-label='Rasteiras' className='w-[162px] h-[220px] flex flex-col items-center justify-evenly cursor-pointer'>
              <img src={image21} alt="Rasteira" />
              <span className='text-base font-normal text-dark-grey'>Rasteiras</span>
            </li>
            <li aria-label='Plataformas' className='w-[162px] h-[220px] flex flex-col items-center justify-evenly cursor-pointer'>
              <img src={image22} alt="Plataforma" />
              <span className='text-base font-normal text-dark-grey'>Plataformas</span>
            </li>
            <li aria-label='Botas' className='w-[162px] h-[220px] flex flex-col items-center justify-evenly cursor-pointer'>
              <img src={image23} alt="Bota" />
              <span className='text-base font-normal text-dark-grey'>Botas</span>
            </li>
            <li aria-label='Sapatilhas' className='w-[162px] h-[220px] flex flex-col items-center justify-evenly cursor-pointer'>
              <img src={image24} alt="Sapatilha" />
              <span className='text-base font-normal text-dark-grey'>Sapatilhas</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Product Highlight Section */}
      <section aria-label='Sessão de highlight de produto' className='w-full h-[466px] flex items-center justify-center bg-[#f5f5f5]'>
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
              <p className='w-[273px] text-xs text-dark-grey font-normal'>As Sandálias Birkens são uma escolha de calçado atemporal e icônica&#44; conhecido por seu conforto&#44; qualidade e design diferenciado</p>
            </div>
            <button aria-label='Ver detalhes da sandália Birken rosa' className='bg-pink text-white font-normal text-base w-[156px] h-[48px]'>É a minha cara</button>
          </div>
          <img src={rectangle79} alt="Mulher calçando sandália Birken rosa" className='w-[574px] h-[402px]' />
        </div>
      </section>

      {/* Week Favorites Section */}
      <section aria-label='Sessão de favoritos da semana' className='w-full h-[599px] flex flex-col justify-start items-center z-0 relative'>
        <span className='text-2xl text-dark-grey font-normal mt-[72px]'>Favoritos da Semana</span>
        <FavoritesCarousel slides={favoritesCarouselCards} highlightPrice={false} />
      </section>

      {/* Discover Section */}
      <section aria-label='Sessão de destaque rasteiras &#38; birkens' className='w-full h-[596px] flex items-center justify-center bg-[#f5f5f5]'>
        <div className='w-11/12 h-[504px] flex items-start justify-between'>
          <div className='flex flex-col h-[456px] justify-between'>
            <div className='flex flex-col gap-2 items-start'>
              <span className='text-dark-grey text-xl font-normal'>Rasteiras &#38; Birkens</span>
              <p className='text-dark-grey text-xs font-normal w-[228px]'>A categoria de Sandália Rasteira da Sapatella é um verdadeiro paraíso para os amantes de conforto e estilo&#46;</p>
            </div>
            <button aria-label='Ver detalhes sobre as rasteiras' className='text-dark-grey text-base font-normal flex items-center gap-4'>Eu quero <ArrowRightIcon/></button>
            <img src={image16} alt="rasteira branca" className='w-[376px] h-[302px]' />
          </div>
          <div className='flex flex-col h-[504px] justify-between'>
            <img src={image12} alt="Sandália Rosa" className='w-[376px] h-[456px]' />
            <button aria-label='Ver detalhes sobre as sandálias' className='text-dark-grey text-base font-normal flex items-center gap-4'>Sandálias <ArrowRightIcon/></button>
          </div>
          <div className='flex flex-col h-[504px] items-center justify-between'>
            <img src={image14} alt="Tênis Branco" className='w-[376px] h-[354px]' />
            <div className='flex flex-col gap-2 items-center'>
              <span className='text-dark-grey text-xl font-normal'>Tênis</span>
              <p className='text-dark-grey text-xs font-normal w-[250px] text-center'>Os tênis femininos se tornaram um item básico na moda e nos calçados do dia a dia&#46;</p>
            </div>
            <button aria-label='Ver detalhes sobre os tênis' className='text-dark-grey text-base font-normal flex items-center gap-4'>Conferir <ArrowRightFilledIcon/></button>
          </div>
        </div>
      </section>

      {/* Second Discover Section */}
      <section aria-label='Sessão de descoberta de calçados' className='w-full max-lg:w-11/12 justify-start max-lg:justify-between h-[629px] flex items-center  gap-5'>
        <img src={image15} alt="Explore seu estilo" />
        <div className='w-[630px] h-[599px] flex justify-center z-0 relative '>
          <FavoritesCarousel slides={CarouselCards} highlightPrice={true} />
        </div>
      </section>

      {/* Image Highlight Section */}
      <section aria-label='Sessão de destaque' className='w-full h-[486px]'>
        <img src={image52} alt="Bolsa" />
      </section>

      {/* About Section */}
      <section aria-label='Sessão de sobre' className='w-full h-[484px] flex items-center justify-center'>
        <div className='w-[970px] h-[340px] flex items-center justify-between'>
          <div className='flex flex-col h-[340px] justify-center gap-4'>
            <span className='text-dark-grey text-2xl font-normal'>Sobre a Sapatella</span>
            <p className='text-dark-grey text-sm font-normal w-[461px]'>
              Oi&#44; a gente já se conhece&#63; Muito prazer&#44; Sapatella&#33; Somos uma Marca de moda que oferece sapatos e acessórios feitos para te encantar&#46; Aqui tem atenção de verdade&#44; produtos com o seu jeito e ritmo&#46;  Chega mais&#44;  fique à vontade&#46;  Queremos ver você confortável e livre para ser como quiser e ocupar o espaço que bem entender&#46; O que nos une e contagia é a vontade de brilhar e ser feliz&#46;
              Mais que mulheres&#44; somos amigas&#46;  Sapatella&#46; Vamos juntas&#63;
            </p>
          </div>
          <div className='w-[376px] h-[320px] shadow-[20px_20px_0px_0px_#f5f5f5]'>
            <img src={image53} alt="Modelo Feminina calçando tênis branco sentada em arquibancada com sutil logo da sapatella ao fundo" />
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section aria-label='Sessão de formulario de cadastro' className='w-full h-[148px] flex flex-col justify-center items-center gap-3 bg-[#f5f5f5]'>
        <span className='text-dark-grey text-xl font-normal'>Cadastre-se e ganhe <span className='text-pink font-bold'>R&#36; 20 OFF </span>na sua primeira compra&#33;</span>
        <form className='flex gap-5'>
          <input aria-label='Input de nome' type="text" placeholder='Nome' className='placeholder:text-black-2 outline-none text-sm font-normal border border-black pl-2 w-[277px] h-[40px]' />
          <input aria-label='Input de email' type="text" placeholder='Email' className='placeholder:text-black-2 outline-none text-sm font-normal border border-black pl-2 w-[277px] h-[40px]' />
          <button aria-label='Cadastrar' className='bg-pink w-[178px] h-[40px] text-white text-sm font-regular'>Cadastrar</button>
        </form>
      </section>


      <Footer />
    </div>
  )
}

export default App
