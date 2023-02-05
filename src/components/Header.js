import React from "react";
import { Link } from "react-router-dom";
import remax_logo from "../assets/img/remax_logo.png";
import fbImg from "../assets/img/facebook.png";
import instaImg from "../assets/img/instagram.png";
import pinterestImg from "../assets/img/pinterest.png";

const Header = () => {
  return (
    <header className="py-3 mb-12 shadow" style={{backgroundColor: 'rgb(224 217 231)'}}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img
            src={remax_logo}
            alt="Re/MAX"
            style={{ height: "5rem", width: "15rem" }}
          />
        </Link>

        <div className="flex items-center gap-6">
          <div className="footer-item">
            <a
              href="https://www.facebook.com/remax/"
              target="_blank"
              rel="noreferrer"
            >
              <div class="absolute w-8 h-8 flex items-center justify-center bg-white rounded-full top-8 right-30">
                <img src={fbImg} alt="" />
              </div>
            </a>

            <a
              href="https://www.instagram.com/remax/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <div class="absolute w-8 h-8 flex items-center justify-center bg-white rounded-full top-8 right-60">
                <img src={instaImg} alt="" />
              </div>
            </a>

            <a
              href="https://www.pinterest.ca/remaxca/?autologin=true"
              target="_blank"
              rel="noreferrer"
            >
              <div class="absolute w-8 h-8 flex items-center justify-center bg-white rounded-full top-8 right-72">
                <img src={pinterestImg} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
