import React from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className="navbar">

      <div className="navbar-left">
        <div className="navbarHamberger">
          <MenuIcon sx={{color:"white"}}/>
        </div>
        <div className="navbar_youtubeImg">
          <YouTubeIcon sx={{fontSize:"34px"}} className="navbar_youtubeImage"/>
          <div className="navbar_utubeTitle">Youtube</div>
        </div>
      </div>

      <div className="navbar-middle">
        <div className="navbar-searchBox">
          <input type="text" placeholder="search" className="navbar-searchBoxInput"/>
          <div className="navbar-searchIconBox">
            <SearchIcon sx={{fontSize:"28px" ,color:'white'}}/>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Navbar;
