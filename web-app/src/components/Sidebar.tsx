import "../styles/Navbar.css";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FaFire } from "react-icons/fa";
import { GiConsoleController } from "react-icons/gi";
import { RiPlayListAddLine } from "react-icons/ri";
import NxtwatchContext from "../context/NxtWatchContext";

const Sidebar = () => (
  <NxtwatchContext.Consumer>
    {(value) => {
      const { darkMode } = value;
      const sidebarBg = darkMode ? "sidebar-dark-bg" : "sidebar-light-bg";
      const linkColor = darkMode ? "link-dark-color" : "link-light-color";
      const nxtWatchImg = darkMode
        ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
        : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png";

      return (
        <>
          <div className={`lg-sidebar ${sidebarBg}`}>
            <img
              className="nxtWatch-logo"
              src={`${nxtWatchImg}`}
              alt="website logo"
            />

            {/* ICONS */}

            <div style={{ marginTop: "50px" }}>
              <div className="home">
                <Link className={`${linkColor}`} to="/">
                  <IoHomeOutline className="icon" />
                  Home
                </Link>
              </div>
              <div className="home">
                <Link className={`${linkColor}`} to="/trending">
                  <FaFire className="icon" />
                  Trending
                </Link>
              </div>
              <div className="home">
                <Link className={`${linkColor}`} to="/gaming">
                  <GiConsoleController className="icon" />
                  Gaming
                </Link>
              </div>
              <div className="home">
                <Link className={`${linkColor}`} to="/saved-videos">
                  <RiPlayListAddLine className="icon" />
                  Saved videos
                </Link>
              </div>
            </div>

            {/* ICONS COMPLETED */}

            <div className="contact">
              <p>CONTACT US</p>
              <div>
                <img
                  className="facebook"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                  alt="facebook logo"
                />
                <img
                  className="facebook"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                  alt="twitter logo"
                />
                <img
                  className="facebook"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                  alt="linked in logo"
                />
              </div>
              <p>Enjoy! Now to see your channels and recommendations!</p>
            </div>
          </div>
        </>
      );
    }}
  </NxtwatchContext.Consumer>
);

export default Sidebar;
