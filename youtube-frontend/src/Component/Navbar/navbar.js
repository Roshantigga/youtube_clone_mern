import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  // ✅ close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="navbar">
      {/* LEFT */}
      <div className="navbar-left">
        <div className="navbarHamberger">
          <MenuIcon sx={{ color: "white" }} />
        </div>

        <div className="navbar_youtubeImg">
          <YouTubeIcon sx={{ fontSize: "34px" }} className="navbar_youtubeImage" />
          <div className="navbar_utubeTitle">Youtube</div>
        </div>
      </div>

      {/* MIDDLE */}
      <div className="navbar-middle">
        <div className="navbar-searchBox">
          <input
            type="text"
            placeholder="search"
            className="navbar-searchBoxInput"
          />
          <div className="navbar-searchIconBox">
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} />
          </div>
        </div>

        <div className="navbar-mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} />
        </div>
      </div>

      {/* RIGHT */}
      <div className="navbar-right">
        <div className="rightNavbar">
          {/* Create Button */}
          <button className="createBtn">
            <AddIcon className="createIcon" />
            <span>Create</span>
          </button>

          {/* Notification */}
          <div className="notificationBox">
            <NotificationsIcon className="bellIcon" />
          </div>

          {/* ✅ Account Icon + Dropdown */}
          <div className="accountDropdown" ref={menuRef}>
            <div
              className="accountBox"
              onClick={() => setShowMenu(!showMenu)}
            >
              <AccountCircleIcon className="accountIcon" />
            </div>

            {showMenu && (
              <div className="navbar-model">
                <div className="navbar-model-options">Profile</div>
                <div className="navbar-model-options">Logout</div>
                <div className="navbar-model-options">Login</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
