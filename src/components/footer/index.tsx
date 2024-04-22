import logoSapatella from '../../assets/logo_SAPATELLA_preto 1.png'
import visa from '../../assets/VISA.png'
import mastercard from '../../assets/MASTERCARD.png'
import hipercard from '../../assets/HIPERCARD.png'
import pix from '../../assets/PIX.png'
import amex from '../../assets/AMEX.png'
import elo from '../../assets/ELO.png'
import boleto from '../../assets/BOLETO.png'
import image27 from '../../assets/image 27.png'
import group830 from '../../assets/Group 830.png'
import logoWicomm from '../../assets/Logo_Wicomm_WhiteBlue 1.png'
import logoVtex from '../../assets/VTEX_pink_RGB.png'
import InstagramIcon from '../icons/instagramIcon'
import WhatsappIcon from '../icons/whatsappIcon'
import FacebookIcon from '../icons/facebookIcon'

export default function Footer() {
    return (
        <>

            <div className='w-full h-[360px] flex flex-col items-center justify-center'>
                <div className='w-11/12 flex justify-start items-center'>

                    <div className='w-full flex items-start justify-start gap-[60px]'>

                        <div className='w-[170px] h-[96px] flex flex-col justify-between'>
                            <img src={logoSapatella} alt="Logo da sapatella" />
                            <ul className='flex gap-8'>
                                <li aria-label='Instagram'>
                                    <a href=""><InstagramIcon /></a>
                                </li>
                                <li aria-label='Whatsapp'>
                                    <a href=""><WhatsappIcon /></a>
                                </li>
                                <li aria-label='Facebook'>
                                    <a href=""><FacebookIcon /></a>
                                </li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div>
                                <span aria-label='Sobre nós' className='text-dark-grey text-base font-normal'>SOBRE NÓS</span>
                            </div>
                            <ul className='flex flex-col gap-[14px]'>
                                <li aria-label='Quem somos' className='text-dark-grey text-sm font-normal'><a href="">Quem Somos</a></li>
                                <li aria-label='Mapa do site' className='text-dark-grey text-sm font-normal'><a href="">Mapa do site</a></li>
                                <li aria-label='Casas Sapatella' className='text-dark-grey text-sm font-normal'><a href="">Casas Sapatella</a></li>
                                <li aria-label='Seja um parceiro' className='text-dark-grey text-sm font-normal'><a href="">Seja um parceiro</a></li>
                                <li aria-label='Seja um Franqueado' className='text-dark-grey text-sm font-normal'><a href="">Seja um Franqueado</a></li>
                                <li aria-label='Seja um afiliado' className='text-dark-grey text-sm font-normal'><a href="">Seja um afiliado</a></li>
                                <li aria-label='Trabalhe com a gente' className='text-dark-grey text-sm font-normal'><a href="">Trabalhe com a gente</a></li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div>
                                <span aria-label='Minha conta' className='text-dark-grey text-base font-normal'>MINHA CONTA</span>
                            </div>
                            <ul className='flex flex-col gap-[14px]'>
                                <li aria-label='Meus Dados' className='text-dark-grey text-sm font-normal'><a href="">Meus Dados</a></li>
                                <li aria-label='Meus Pedidos' className='text-dark-grey text-sm font-normal'><a href="">Meus Pedidos</a></li>
                                <li aria-label='Login' className='text-dark-grey text-sm font-normal'><a href="">Login</a></li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-5'>
                            <div>
                                <span aria-label='Suporte e Políticas' className='text-dark-grey text-base font-normal'>SUPORTE E POLÍTICAS</span>
                            </div>
                            <ul className='flex flex-col gap-[14px]'>
                                <li aria-label='Trocas e Devoluções' className='text-dark-grey text-sm font-normal'><a href="">Trocas e Devoluções</a></li>
                                <li aria-label='Dúvidas Frequentes' className='text-dark-grey text-sm font-normal'><a href="">Dúvidas Frequentes</a></li>
                                <li aria-label='Fale Conosco' className='text-dark-grey text-sm font-normal'><a href="">Fale Conosco</a></li>
                                <li aria-label='Super Natal' className='text-dark-grey text-sm font-normal'><a href="">Super Natal</a></li>
                            </ul>
                        </div>

                        <div className='flex flex-col gap-12'>
                            <div className='flex flex-col gap-5'>
                                <span aria-label='Formas de pagamento' className='text-dark-grey text-base font-normal'>FORMAS DE PAGAMENTO</span>
                                <ul className='flex gap-2 flex-wrap w-[188px]'>
                                    <li aria-label='Visa'><img src={visa} alt="visa" loading='lazy'/></li>
                                    <li aria-label='Mastercard'><img src={mastercard} alt="mastercard" loading='lazy'/></li>
                                    <li aria-label='Hipercard'><img src={hipercard} alt="hipercard" loading='lazy'/></li>
                                    <li aria-label='Pix'><img src={pix} alt="pix" loading='lazy'/></li>
                                    <li aria-label='Amex'><img src={amex} alt="amex" loading='lazy'/></li>
                                    <li aria-label='Elo'><img src={elo} alt="elo" loading='lazy'/></li>
                                    <li aria-label='Boleto'><img src={boleto} alt="boleto" loading='lazy'/></li>
                                </ul>
                            </div>

                            <div className='flex flex-col gap-5'>
                                <span aria-label='Segurança' className='text-dark-grey text-base font-normal'>SEGURANÇA</span>
                                <ul className='flex gap-4 flex-wrap w-[188px]'>
                                    <li aria-label='vtex pci certified'><img src={image27} alt="vtex pci certified" loading='lazy'/></li>
                                    <li aria-label='Let&#39;s Encrypt'><img src={group830} alt="lets encrypt" loading='lazy'/></li>
                                </ul>
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
        </>
    )
}