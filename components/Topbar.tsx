import Link from 'next/link'
import Image from 'next/image'

export default function Topbar() {
    return (
      <header className="topBar h-16 flex items-center justify-between">
        <div className='logo h-34 w-34 relative inline-block ml-4'><Image className="object-contain" src="/../public/logo3x.png" alt="logo" fill={true} quality={100}/></div>
        <div className="social-media flex gap-5 mr-4">
          <div className='w-8 h-8 relative flex items-center justify-center'><Image className="object-contain" src="/../public/ellipse.png" alt="ellipse" fill={true} quality={100}/>
            <a href="#" className="social-media__icon w-3 h-3 absolute inline-block" id="instagram"><Image className="object-contain" src="/../public/insta_icon3x.png" alt="instagram icon" fill={true} quality={100}/></a>
          </div>
          <div className='w-8 h-8 relative flex items-center justify-center'><Image src="/../public/ellipse.png" alt="ellipse" fill={true} quality={100}/>
             <a href="#" className="social-media__icon w-3 h-3 relative inline-block" id="linkedIn"><Image src="/../public/indesign_icon3x.png" alt="linkedIn icon" fill={true} quality={100}/></a>
          </div>
        </div>
      </header>
    )
  }