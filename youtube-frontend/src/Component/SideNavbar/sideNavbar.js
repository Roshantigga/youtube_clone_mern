import React from 'react'
import './sideNavbar.css' 
// import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { SiYoutubeshorts } from "react-icons/si";

const SideNavbar = () => {
  return ( 
    <div className='home-sideNavbar'>
        <div className='home-sideNavbartop'>
            <div className={`home-sideNavbarTopOption`}>
                <HomeOutlinedIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Home</div>
            </div>

            <div className={`home-sideNavbarTopOption`}>
                <SiYoutubeshorts/>
                <div className='home-sideNavbarTopOptionTitle'>Home</div>
            </div>

        </div>
    </div>
  )
}
 
export default SideNavbar