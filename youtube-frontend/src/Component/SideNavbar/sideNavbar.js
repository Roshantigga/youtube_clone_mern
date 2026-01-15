import React from 'react'
import './sideNavbar.css' 
// import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { SiYoutubeshorts } from "react-icons/si";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ContentCutOutlinedIcon from '@mui/icons-material/ContentCutOutlined';

const SideNavbar = ({sideNavbar}) => {
  return ( 
    <div className={sideNavbar?'home-sideNavbar':'homeSideNavbarHide'}>
        <div className='home-sideNavbartop'>
            <div className={`home-sideNavbarTopOption`}>
                <HomeOutlinedIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Home</div>
            </div>

            <div className={`home-sideNavbarTopOption`}>
                <SiYoutubeshorts/>
                <div className='home-sideNavbarTopOptionTitle'> Shorts</div>
            </div>

             <div className={`home-sideNavbarTopOption`}>
                <SubscriptionsIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Subscription</div>
            </div>

        </div>

        
        <div className='home_sideNavbarMiddle'>
            <div className={`home-sideNavbarTopOption`}>
                <div className='home-sideNavbarTopOptionTitle'>You</div>
                <ChevronRightIcon/>
            </div>
             <div className={`home-sideNavbarTopOption`}>
                <RecentActorsIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Your channel</div>
            </div>
            <div className={`home-sideNavbarTopOption`}>
                <HistoryIcon/>
                <div className='home-sideNavbarTopOptionTitle'>History</div>
            </div>
            <div className={`home-sideNavbarTopOption`}>
                <PlaylistAddIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Playlist</div>
            </div>
            <div className={`home-sideNavbarTopOption`}>
                <OndemandVideoOutlinedIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Your Video</div>
            </div>
            <div className={`home-sideNavbarTopOption`}>
                <WatchLaterOutlinedIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Watch Later</div>
            </div>
            <div className={`home-sideNavbarTopOption`}>
                <ThumbUpOutlinedIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Liked Video</div>
            </div>
            <div className={`home-sideNavbarTopOption`}>
                <ContentCutOutlinedIcon/>
                <div className='home-sideNavbarTopOptionTitle'>Your Clips</div>
            </div>
        </div>

        <div className='home_sideNavbarMiddle'>
            <div className='home-sideNavbarTopOption'>
                <div className='home_sideNavbarTopOptionTitleHeader'>Subscription</div>
            </div>

            <div className='home-sideNavbarTopOption'>
                <img className='home_sideNavbar_ImgLogo' src='https://yt3.googleusercontent.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s160-c-k-c0x00ffffff-no-rj'/>
                <div className='home_sideNavbarTopOptionTitleHeader1'>3Blue1Brown</div>
            </div>
            <div className='home-sideNavbarTopOption'>
                <img className='home_sideNavbar_ImgLogo' src='https://yt3.googleusercontent.com/ytc/AIdro_m2cWJR2ufhrX0NpQWi7_UJriTaduV-vRDS4xx5vp1hLPk=s160-c-k-c0x00ffffff-no-rj'/>
                <div className='home_sideNavbarTopOptionTitleHeader1'>Alan Becker</div>
            </div>
            <div className='home-sideNavbarTopOption'>
                <img className='home_sideNavbar_ImgLogo' src='https://yt3.googleusercontent.com/cEHdgUpvfbK2smxL9lHVxDt6JWy8jOrJpoT6efgmK-j3SgLP7fCQ5kFLuCworI2KK2Hl91Z-=s160-c-k-c0x00ffffff-no-rj'/>
                <div className='home_sideNavbarTopOptionTitleHeader1'>Disney India</div>
            </div>
            
        </div>
    </div>
  )
}
 
export default SideNavbar