import logoSapatellaWhite from '../../assets/logo_ SAPATELLA_branca 1.png'
import logoSapatellaBlack from '../../assets/logo_SAPATELLA_preto 1.png'
import CartIcon from '../icons/cartIcon'
import HeartIcon from '../icons/heartIcon'
import SearchIcon from '../icons/searchIcon'
import UserIcon from '../icons/userIcon'
export default function Header() {
    return (
        <header className="group z-50 fixed top-0 w-[1280px] h-[72px] bg-gradient-to-b from-black from-0% to-100% hover:bg-white hover:to-0%">
            <div className="w-11/12 h-full mx-auto flex items-center justify-between">
                <div className="flex w-full items-center justify-start gap-6">
                    <img src={logoSapatellaWhite} alt="Logo da Sapatella" className='group-hover:hidden w-[150px] h-[32px]' />
                    <img src={logoSapatellaBlack} alt="Logo da Sapatella" className='hidden group-hover:block w-[150px] h-[32px]' />
                    <nav role='navigation' className="flex items-center gap-6" aria-label='Navegação pricipal'>
                        <button aria-label='Novidades' className="text-white group-hover:text-black font-normal text-base">Novidades</button>
                        <button aria-label='Sapatos' className="text-white group-hover:text-black font-normal text-base">Sapatos</button>
                        <button aria-label='Sandálias' className="text-white group-hover:text-black font-normal text-base">Sandálias</button>
                        <button aria-label='Tênis' className="text-white group-hover:text-black font-normal text-base">Tênis</button>
                        <button aria-label='Bolsas & Acessórios' className="text-white group-hover:text-black font-normal text-base">Bolsas &#38; Acessórios</button>
                        <button aria-label='Descontos' className="text-white group-hover:text-pink font-bold text-base">OFF</button>
                    </nav>
                </div>

                <div className="flex w-fit items-center gap-6">

                    <div role='searchbox' className="flex items-center gap-6 px-3.5 text-base leading-6 whitespace-nowrap bg-black-3 bg-opacity-40 border border-solid border-black-3 border-opacity-30  group-hover:border-black group-hover:border-opacity-30 w-[232px] h-[40px] text-black">
                        <input aria-label='Buscar' type="text" placeholder="Buscar" className="w-full h-full outline-none bg-transparent" />
                        <SearchIcon />
                    </div>
                    <button aria-label='Perfil'>
                        <UserIcon />
                    </button>
                    <button aria-label='Favoritos'>
                        <HeartIcon />
                    </button>
                    <button aria-label='Carrinho'>
                        <CartIcon />
                    </button>
                </div>
            </div>
        </header>
    )
}