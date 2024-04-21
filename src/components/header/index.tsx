import logoSapatellaWhite from '../../assets/logo_ SAPATELLA_branca 1.png'
import logoSapatellaBlack from '../../assets/logo_SAPATELLA_preto 1.png'
export default function Header() {
    return (
        <header className="group z-50 fixed top-0 left-0 w-full h-[72px] bg-gradient-to-b from-black from-0% to-100% hover:bg-white hover:to-0%">
            <div className="w-11/12 h-full mx-auto flex items-center justify-between">
                <div className="flex w-full items-center justify-start gap-6">
                    <img src={logoSapatellaWhite} alt="logo" className='group-hover:hidden w-[150px] h-[32px]'/>
                    <img src={logoSapatellaBlack} alt="logo" className='hidden group-hover:block w-[150px] h-[32px]'/>
                    <nav className="flex items-center gap-6">
                        <button className="text-white group-hover:text-black font-normal text-base">Novidades</button>
                        <button className="text-white group-hover:text-black font-normal text-base">Sapatos</button>
                        <button className="text-white group-hover:text-black font-normal text-base">Sandálias</button>
                        <button className="text-white group-hover:text-black font-normal text-base">Tênis</button>
                        <button className="text-white group-hover:text-black font-normal text-base">Bolsas & Acessórios</button>
                        <button className="text-white group-hover:text-pink font-bold text-base">OFF</button>
                    </nav>
                </div>

                <div className="flex w-fit items-center gap-6">

                    <div className="flex items-center gap-6 px-3.5 text-base leading-6 whitespace-nowrap bg-black-3 bg-opacity-40 border border-solid border-black-3 border-opacity-30  group-hover:border-black group-hover:border-opacity-30 w-[232px] h-[40px] text-black">
                        <input type="text" placeholder="Buscar" className="w-full h-full outline-none bg-transparent" />
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] stroke-white group-hover:stroke-black fill-none" viewBox="0 0 20 20">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m13 13 6 6M15 8a7.002 7.002 0 0 1-9.679 6.467A7 7 0 1 1 15 8Z" />
                        </svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] stroke-white group-hover:stroke-black fill-none cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 21c.957-3.076 3.42-4 9-4s8.043.924 9 4M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0Z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] stroke-white group-hover:stroke-black fill-none cursor-pointer">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m4.882 12.956 5.62 6.351a2.002 2.002 0 0 0 2.996 0l5.62-6.351c1.673-1.891 2.542-4.269 1.285-6.536-1.452-2.62-4.113-3.156-6.426-1.396-.639.496-1.23 1.05-1.766 1.654a.284.284 0 0 1-.422 0 13.082 13.082 0 0 0-1.766-1.654C7.71 3.264 5.049 3.8 3.597 6.42c-1.257 2.267-.388 4.645 1.285 6.536Z" />
                    </svg>
                    <div className="h-[24px] w-[24px] self-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] stroke-white group-hover:stroke-black fill-transparent">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5.605 11.442c.188 1.692.282 2.538.851 3.048.57.51 1.421.51 3.124.51h5.247c1.173 0 1.76 0 2.236-.287.476-.286.75-.805 1.3-1.841l2.467-4.663A1.505 1.505 0 0 0 19.5 6H9.469c-2.086 0-3.128 0-3.725.666-.596.666-.48 1.703-.25 3.776l.111 1Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h.5c.664 0 1.222.5 1.296 1.16l.76 6.84M9 19.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm9 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="relative -top-7 left-4 w-[15px] h-[15px] fill-none"><circle cx="7" cy="7" r="7" fill="#CF215B" /><path fill="#fff" d="M6.98 10.12c-.446 0-.85-.08-1.21-.24a2.085 2.085 0 0 1-.87-.74c-.213-.327-.326-.733-.34-1.22h.85c.007.4.147.747.42 1.04.274.287.657.43 1.15.43.494 0 .864-.137 1.11-.41.254-.273.38-.603.38-.99 0-.327-.08-.593-.24-.8a1.354 1.354 0 0 0-.63-.46c-.26-.1-.546-.15-.86-.15h-.52v-.71h.52c.454 0 .807-.103 1.06-.31.26-.207.39-.497.39-.87 0-.313-.103-.57-.31-.77-.2-.207-.5-.31-.9-.31-.386 0-.696.117-.93.35a1.294 1.294 0 0 0-.39.86h-.85c.02-.38.12-.717.3-1.01.187-.293.44-.52.76-.68.32-.167.69-.25 1.11-.25.454 0 .83.08 1.13.24.307.16.537.373.69.64.16.267.24.56.24.88 0 .353-.096.677-.29.97-.193.287-.483.48-.87.58.414.087.757.283 1.03.59.274.307.41.71.41 1.21 0 .387-.09.743-.27 1.07-.173.32-.433.577-.78.77-.346.193-.776.29-1.29.29Z" /></svg>
                    </div>
                </div>
            </div>
        </header>
    )
}