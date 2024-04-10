import React from 'react'
import Styles from "./Navbar.module.css"




const Navbar = () => {

    const [openMenu, setOpenMnu] =React.useState(false)

  return (
    <nav>
    <div className={Styles.container}>
        <div>
            <h3>𝓗𝓪𝓻𝓲𝓼𝓱</h3>
        </div>

        <div className={Styles.menu}>
            <ul>
                
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
            </ul>
        </div>

    </div>

        <div className={Styles.phonecontainer}>
            <div>
                <h3>𝓗𝓪𝓻𝓲𝓼𝓱</h3>
            </div>
                
                <div>

                    <div onClick={()=>setOpenMnu(!openMenu)}>

                    {openMenu ? 
                    
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg> 
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-1 h-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg>
                    }


                    </div>
                

                    {openMenu && <div className={Styles.phonemenu}>
                        
                        <ul>                
                            
                        <li><a onClick={()=>setOpenMnu(false)} href='#about'>About</a></li>
                        <li><a onClick={()=>setOpenMnu(false)} href='#skills'>Skills</a></li>
                        <li><a onClick={()=>setOpenMnu(false)} href='#projects'>Projects</a></li>
                        <li><a onClick={()=>setOpenMnu(false)} href='#contact'>Contact</a></li>
                        
                        </ul>

                    </div>}
            </div>

        </div>
    </nav>

  )
}

export default Navbar