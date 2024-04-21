import { useState } from 'react'

interface FavoritesCarouselProps {
    slides: { img: string, alt: string, name: string }[]
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
            <button onClick={prevCard} className='bg-white rounded-full w-10 h-10 z-50 flex items-center justify-center absolute -left-5 bottom-80'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" d="m15 6-5.787 5.787a.3.3 0 0 0 0 .426L15 18" />
                </svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-[24px] w-[24px] fill-pink cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.882 12.956 5.62 6.351a2.002 2.002 0 0 0 2.996 0l5.62-6.351c1.673-1.891 2.542-4.269 1.285-6.536-1.452-2.62-4.113-3.156-6.426-1.396-.639.496-1.23 1.05-1.766 1.654a.284.284 0 0 1-.422 0 13.082 13.082 0 0 0-1.766-1.654C7.71 3.264 5.049 3.8 3.597 6.42c-1.257 2.267-.388 4.645 1.285 6.536Z" />
                                </svg>
                            </div>

                            <div className='relative bottom-24 h-[100px] hidden bg-light-green bg-opacity-90 backdrop-blur-sm group-hover:flex flex-col items-center justify-between'>
                                <span className='text-xs text-dark-grey font-normal mt-2'>Selecione um tamanho</span>

                                <div className='w-11/12 h-[28px] flex items-center justify-center gap-2'>

                                    <button className='rounded-full w-10 h-10 z-50 flex items-center justify-center absolute left-0 bottom-8'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                            <path stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" d="m15 6-5.787 5.787a.3.3 0 0 0 0 .426L15 18" />
                                        </svg>
                                    </button>


                                    <button className='w-[28px] h-[28px] bg-pink flex items-center justify-center'>
                                        <span className='text-white text-xs font-normal'>34</span>
                                    </button>
                                    <button className='w-[28px] h-[28px] bg-white border border-black-3 flex items-center justify-center'>
                                        <span className='text-black text-xs font-normal'>34</span>
                                    </button>
                                    <button className='w-[28px] h-[28px] bg-white flex items-center justify-center'>
                                        <span className='text-black text-xs font-normal'>34</span>
                                    </button>
                                    <button className='w-[28px] h-[28px] bg-white flex items-center justify-center'>
                                        <span className='text-black text-xs font-normal'>34</span>
                                    </button>
                                    <button className='w-[28px] h-[28px] bg-white flex items-center justify-center'>
                                        <span className='text-black text-xs font-normal'>34</span>
                                    </button>

                                    <button className='rounded-full w-10 h-10 z-50 flex items-center justify-center absolute right-0 bottom-8'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                            <path stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" d="m9 6 5.787 5.787a.302.302 0 0 1 .066.328.302.302 0 0 1-.066.098L9 18" />
                                        </svg>
                                    </button>
                                </div>


                                <button className='w-full h-[32px] bg-pink text-white text-[14px] font-normal'>Adicionar a sacola</button>
                            </div>



                        </div>
                        <div className='w-full flex flex-col items-start '>
                            <span className='text-xs font-normal text-dark-grey'>{slide.name}</span>
                            <span className={`${highlightPrice ? 'text-pink' : 'text-dark-grey'} text-base font-normal mt-2`}>R$ 169,90 <span className='line-through text-dark-grey'>R$ 209,90</span></span>
                            <span className='text-dark-grey text-xs font-normal'>ou 6x de R$ 28,31 sem juros</span>
                        </div>


                    </div>
                )
            })}

            <div className="w-full h-[8px] absolute bottom-24 self-center flex justify-center gap-2">
                {slides.map((_, index) => {
                    return (
                        <button key={index} onClick={() => { setCard(index) }} className={` ${card === index ? 'bg-pink w-[16px] h-[8px]' : 'bg-black-3 w-[8px] h-[8px]'}`}></button>
                    )
                })}
            </div>

            <button onClick={nextCard} className='bg-white rounded-full w-10 h-10 z-50 flex items-center justify-center absolute -right-5 bottom-80'>

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <path stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round" d="m9 6 5.787 5.787a.302.302 0 0 1 .066.328.302.302 0 0 1-.066.098L9 18" />
                </svg>
            </button>
        </div>

    )
}