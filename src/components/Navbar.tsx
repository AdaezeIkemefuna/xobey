import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../assets/logo-kudibar.svg";

const TopNavigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const showNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="topnavigation">
      <div className="topnavigation__container">
        <div className="topnavigation__left">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" height={40} width={160} />
            </Link>
          </div>
        </div>
        <div className="topnavigation__right">
          <a href="https://payroll.springblock.io/login" id="explore">
            Explore
          </a>
          <a href="https://payroll.springblock.io/login" id="login">
            Signin
          </a>
          <a href="https://payroll.springblock.io/register" id="register">
            Get Started
          </a>
        </div>
        {/* Mobile navigation */}
        <div className="topnavigation__right__mobile">
          {!isOpen && (
            <GiHamburgerMenu
              style={{ cursor: "pointer" }}
              onClick={showNav}
              size={20}
            />
          )}
          {isOpen && (
            <AiOutlineClose
              style={{ cursor: "pointer" }}
              onClick={showNav}
              size={20}
            />
          )}
        </div>
      </div>
      <div
        className={
          isOpen
            ? "topnavigation__container__mobile--links"
            : "topnavigation__container__mobile--links--none"
        }
      >
        <Link to={"/"} id="explore-mobile">
          explore
        </Link>

        <a href="#" id="login-mobile">
          Signin
        </a>
        <a href="#" id="register-mobile">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default TopNavigation;
