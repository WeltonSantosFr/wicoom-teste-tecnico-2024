import { useState } from 'react'
import ChevronLeftIcon from '../icons/chevronLeftIcon'
import ChevronRightIcon from '../icons/chevronRightIcon'

interface FavoritesCarouselProps {
    slides: { img: string, alt: string, name: string, favorited:boolean }[]
    highlightPrice:boolean
}

export default function FavoritesCarousel({ slides, highlightPrice }: FavoritesCarouselProps) {
    const [card, setCard] = useState(0)

    const nextCard = () => {
        setCard(card === slides.length - 1 ? 0 : card + 1)
    }

    const prevCard = () => {
        setCard(card === 0 ? slides.length - 1 : card - 1)
    }

    return (

        <div className='absolute inset-0 mx-auto z-50 w-11/12 h-full flex items-center justify-center gap-5'>
            <button aria-label='Anterior no carrossel de favoritos' onClick={prevCard} className='bg-white rounded-full w-10 h-10 z-50 flex items-center justify-center absolute -left-5 bottom-80'>
                <ChevronLeftIcon/>
            </button>
            {slides.map((slide, index) => {
                return (
                    <div key={index} className='group w-[277px] h-[367px] flex flex-col items-center justify-evenly'>
                        <div className='w-[277px] h-[277px] relative'>
                            <img src={slide.img} alt={slide.alt} />

                            <div className='absolute top-2 left-2'>
                                <div className='bg-pink w-[65px] h-[24px] flex items-center justify-center'>
                                    <span className='text-[10px] text-white'>36% OFF</span>
                                </div>
                            </div>

                            <div className='absolute top-2 right-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" className={`h-[24px] w-[24px] ${slide.favorited ? 'fill-pink': 'fill-none stroke-black'} cursor-pointer`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.882 12.956 5.62 6.351a2.002 2.002 0 0 0 2.996 0l5.62-6.351c1.673-1.891 2.542-4.269 1.285-6.536-1.452-2.62-4.113-3.156-6.426-1.396-.639.496-1.23 1.05-1.766 1.654a.284.284 0 0 1-.422 0 13.082 13.082 0 0 0-1.766-1.654C7.71 3.264 5.049 3.8 3.597 6.42c-1.257 2.267-.388 4.645 1.285 6.536Z" />
                                </svg>
                            </div>

                            <div className='relative bottom-24 h-[100px] hidden bg-light-green bg-opacity-90 backdrop-blur-sm group-hover:flex flex-col items-center justify-between'>
                                <span className='text-xs text-dark-grey font-normal mt-2'>Selecione um tamanho</span>

                                <div className='w-11/12 h-[28px] flex items-center justify-center gap-2'>

                                    <button aria-label='Anterior no seletor de tamanho' className='rounded-full w-10 h-10 z-50 flex items-center justify-center absolute left-0 bottom-8'>
                                        <ChevronLeftIcon/>
                                    </button>


                                    <button aria-label='Número 34' className='w-[28px] h-[28px] bg-pink flex items-center justify-center'>
                                        <span className='text-white text-xs font-normal'>34</span>
                                    </button>
                                    <button aria-label='Número 35' className='w-[28px] h-[28px] bg-white border border-black-3 flex items-center justify-center'>
                                        <span className='text-black text-xs font-normal'>35</span>
                                    </button>
                                    <button aria-label='Número 36' className='w-[28px] h-[28px] bg-white flex items-center justify-center'>
                                        <span className='text-black text-xs font-normal'>36</span>
                                    </button>
                                    <button aria-label='Número 37' className='w-[28px] h-[28px] bg-white flex items-center justify-center'>
                                        <span className='text-black text-xs font-normal'>37</span>
                                    </button>
                                    <button aria-label='Número 38' className='w-[28px] h-[28px] bg-white flex items-center justify-center'>
                                        <span className='text-black text-xs font-normal'>38</span>
                                    </button>

                                    <button aria-label='Próximo no seletor de tamanho' className='rounded-full w-10 h-10 z-50 flex items-center justify-center absolute right-0 bottom-8'>
                                        <ChevronRightIcon/>
                                    </button>
                                </div>


                                <button aria-label='Adicionar a sacola' className='w-full h-[32px] bg-pink text-white text-[14px] font-normal'>Adicionar a sacola</button>
                            </div>



                        </div>
                        <div className='w-full flex flex-col items-start cursor-pointer'>
                            <span className='text-xs font-normal text-dark-grey'>{slide.name}</span>
                            <span className={`${highlightPrice ? 'text-pink' : 'text-dark-grey'} text-base font-normal mt-2`}>R&#36; 169,90 <span className='line-through text-dark-grey'>R&#36; 209,90</span></span>
                            <span className='text-dark-grey text-xs font-normal'>ou 6x de R&#36; 28,31 sem juros</span>
                        </div>


                    </div>
                )
            })}

            <div className="w-full h-[8px] absolute bottom-24 self-center flex justify-center gap-2">
                {slides.map((_, index) => {
                    return (
                        <button aria-label={`Selecionar Item ${index+1}`} key={index} onClick={() => { setCard(index) }} className={` ${card === index ? 'bg-pink w-[16px] h-[8px]' : 'bg-black-3 w-[8px] h-[8px]'}`}></button>
                    )
                })}
            </div>

            <button aria-label='Próximo no carrossel de favoritos' onClick={nextCard} className='bg-white rounded-full w-10 h-10 z-50 flex items-center justify-center absolute -right-5 bottom-80'>
                <ChevronRightIcon/>
            </button>
        </div>

    )
}