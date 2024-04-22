import image2 from '../../assets/image 2.png'

import { useState } from "react";
import ChevronLeftIcon from '../icons/chevronLeftIcon';
import ChevronRightIcon from '../icons/chevronRightIcon';



export default function Carousel() {
    const [card, setCard] = useState(0)

    const slides = [{
        "img": image2,
        "alt": "Sandália - Gold"
    },
    {
        "img": image2,
        "alt": "Sandália - Gold"
    },
    {
        "img": image2,
        "alt": "Sandália - Gold"
    }
    ]

    const nextCard = () => {
        setCard(card === slides.length - 1 ? 0 : card + 1)
    }

    const prevCard = () => {
        setCard(card === 0 ? slides.length - 1 : card - 1)
    }

    return (

        <div className='absolute inset-0 mx-auto z-50 w-11/12 h-full flex items-center justify-between'>
            <button aria-label='Anterior no carrossel de destaques' onClick={prevCard} className='bg-white rounded-full w-10 h-10 flex items-center justify-center'>
               <ChevronLeftIcon />
            </button>
            {slides.map((slide, index) => {
                return (
                    <div className={`w-[412px] h-[454px] bg-white flex flex-col relative ${card !== index ? 'hidden' : null}`} key={index}>
                        <div className='w-11/12 min-h-[64px] flex items-center mx-auto justify-between'>
                            <span className='text-dark-grey font-normal text-2xl'>&#35;SuperBazar</span>
                            <span className='text-dark-pink font-normal text-sm'>até <span className='text-pink font-bold text-2xl'>50&#37;OFF</span></span>
                        </div>
                        <div className='w-full h-full'>
                            <img src={slide.img} alt={slide.alt} className='h-[390px] w-full' loading={card !== index ? 'lazy' : 'eager'} />
                        </div>
                        <button aria-label="Conferir" className='bg-pink w-[156px] h-[48px] absolute -bottom-5 text-white text-base font-normal self-center'>Conferir</button>
                        <div className="w-[48px] h-[8px] absolute -bottom-24 self-center flex gap-2">
                            {slides.map((_, index) => {
                                return (
                                    <button aria-label={`Selecionar Item ${index + 1}`} key={index} onClick={() => { setCard(index) }} className={` ${card === index ? 'bg-pink w-[16px] h-[8px]' : 'bg-black-3 w-[8px] h-[8px]'}`}></button>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
            <button aria-label="Próximo no carrossel de destaques" onClick={nextCard} className='bg-white rounded-full w-10 h-10 flex items-center justify-center relative'>
                <ChevronRightIcon />
            </button>
        </div>

    )
}

