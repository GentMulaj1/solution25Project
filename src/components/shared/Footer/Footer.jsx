import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer__top">
        <div className="Footer__top__1">
          <div className="Footer__logo"></div>

          <div className="Footer__top__1__links">
            <div className="footer__links__1">
              <p className="boldText">Mail:</p>

              <p className="regularText">hi.avitex@gmail.com</p>
            </div>

            <div className="footer__links__1">
              <p className="boldText">phone:</p>

              <p className="regularText">1-333-345-6868</p>
            </div>

            <div className="footer__links__1">
              <p className="boldText">address:</p>

              <p className="regularText">549 Oak St.Crystal Lake, IL 60014</p>
            </div>
          </div>
        </div>

        <div className="Footer__mid">
          <div className="Footer__top__2">
            <p className="boldText">INFOMATION</p>

            <div className="Footer__top__2__links">
              <Link>Contact us</Link>
              <Link>Career</Link>
              <Link>My Account</Link>
              <Link>Order & Returns</Link>
              <Link>FAQs</Link>
            </div>
          </div>

          <div className="Footer__top__2">
            <p className="boldText">QUICK SHOP</p>

            <div className="Footer__top__2__links">
              <Link>Women</Link>
              <Link>Men</Link>
              <Link>Clothes</Link>
              <Link>Accessories</Link>
              <Link>Blog</Link>
            </div>
          </div>

          <div className="Footer__top__2">
            <p className="boldText">CUSTOMER SERVICES</p>

            <div className="Footer__top__2__links">
              <Link>Orders FAQs</Link>
              <Link>Shipping</Link>
              <Link>Privacy Policy</Link>
              <Link>Return & Refund</Link>
            </div>
          </div>
        </div>

        <div className="Footer__top__3">
          <p className="boldText">NEWLETTER</p>

          <div className="Footer__top__3__links">
            <p>
              Sign up for our newsletter and get 10% off your first purchase
            </p>

            <div className="inputEmail">
              <input type="email" placeholder="Enter your e-mail" />
              <button>
                <span className="insideButton"></span>
              </button>
            </div>

            <div className="SocialMediaIcons">
              <Link className="SocialMediaIcon facebookIcon"></Link>
              <Link className="SocialMediaIcon instagramIcon"></Link>
              <Link className="SocialMediaIcon youtubeIcon"></Link>
              <Link className="SocialMediaIcon twitterIcon"></Link>
              <Link className="SocialMediaIcon pinterestIcon"></Link>
            </div>
          </div>
        </div>
      </div>

      <div className="Footer__bottom">
        <p>©2023 Anvogue. All Rights Reserved.</p>

        <div className="Footer__bottom__payment">
          <p>Payment:</p>

          <div className="Payment__icons">
            <span className="footerIcon visaIcon"></span>
            <span className="footerIcon masterardIcon"></span>
            <span className="footerIcon amexIcon"></span>
            <span className="footerIcon paypalIcon"></span>
            <span className="footerIcon oIcon"></span>
            <span className="footerIcon discoverIcon"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
