import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__inner ml-8 mt-60">
        <div className='logo h-56 w-56 relative inline-block mb-34'><Image className="object-contain" src="/../public/logo3x.png" alt="logo" fill={true} quality={100}/></div>
            <ul className='menu'>
                <li className='menu__link'><Link href="/projects"><h4 className='text-m4 text-blue'>Projects</h4></Link></li>
                <li className='menu__link'><Link href="/services"><h4 className='text-m4 text-blue'>Expertise</h4></Link></li>
                <li className='menu__link'><Link href="/studio"><h4 className='text-m4 text-blue'>Studio</h4></Link></li>
                <li className='menu__link'><Link href="/thoughts"><h4 className='text-m4 text-blue'>Thoughts</h4></Link></li>
                <li className='menu__link'><Link href="/contact"><h4 className='text-m4 text-blue'>Contact</h4></Link></li>
            </ul>
            <div>
                <div className='flex mt-56 items-center gap-12'>
                    <div className='social-media flex gap-5'>
                        <div className='w-8 h-8 relative flex items-center justify-center'><Image className="object-contain" src="/../public/ellipse.png" alt="ellipse" fill={true} quality={100}/>
                            <a href="#" className="social-media__icon w-3 h-3 absolute inline-block" id="instagram"><Image className="object-contain" src="/../public/insta_icon3x.png" alt="instagram icon" fill={true} quality={100}/></a>
                        </div>
                        <div className='w-8 h-8 relative flex items-center justify-center'><Image src="/../public/ellipse.png" alt="ellipse" fill={true} quality={100}/>
                            <a href="#" className="social-media__icon w-3 h-3 relative inline-block" id="linkedIn"><Image src="/../public/indesign_icon3x.png" alt="linkedIn icon" fill={true} quality={100}/></a>
                        </div>
                    </div>
                    <div className="return-container">
                        <Link href="#" className="return-container__link"><p className='text-cream font-light font-main leading-m-body text-m4'>Back to top</p></Link>
                        <div className="return-container__icon"></div>
                    </div>
                </div>
                <div className="horizontal-line"></div>
                <div className="copyright-notice"></div>
                <ul className="legal">
                    <li className='legal__terms'><Link href="/terms">Terms</Link></li>
                    <li className='legal__privacy'><Link href="/privacy">Privacy</Link></li>
                    <li className='legal__cookies'><Link href="/cookies">Cookies</Link></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}