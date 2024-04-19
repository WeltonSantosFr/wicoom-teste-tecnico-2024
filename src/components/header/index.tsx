import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
    return (
        <header className="group z-50 fixed top-0 left-0 w-full h-[72px] bg-gradient-to-b from-black from-0% to-100% hover:bg-white hover:to-0%">
            <div className="w-11/12 h-full mx-auto flex items-center justify-between">
                <div className="flex w-full items-center justify-start gap-6">
                    <h1 className="text-white group-hover:text-black text-4xl font-medium">sapatella</h1>
                    <nav className="flex items-center gap-6">
                        <button className="text-white group-hover:text-black">Novidades</button>
                        <button className="text-white group-hover:text-black">Sapatos</button>
                        <button className="text-white group-hover:text-black">Sandálias</button>
                        <button className="text-white group-hover:text-black">Tênis</button>
                        <button className="text-white group-hover:text-black">Bolsas & Acessórios</button>
                        <button className="text-white group-hover:text-pink font-bold">OFF</button>
                    </nav>
                </div>

                <div className="flex w-fit items-center gap-6">

                    <div className="flex items-center gap-6 px-3.5 text-base leading-6 whitespace-nowrap bg-black-3 bg-opacity-40 border border-solid border-black-3 border-opacity-30  group-hover:border-black group-hover:border-opacity-30 w-[232px] h-[40px] text-black">
                        <input type="text" placeholder="Buscar" className="w-full h-full outline-none bg-transparent" />
                        <AiOutlineSearch className=" h-6 w-6 text-white group-hover:text-black" />
                    </div>
                    <AiOutlineUser className=" h-6 w-6 text-white  group-hover:text-black" />
                    <AiOutlineHeart className=" h-6 w-6 text-white group-hover:text-black" />
                    <AiOutlineShoppingCart className=" h-6 w-6 text-white group-hover:text-black" />

                </div>

            </div>
        </header>
    )
}