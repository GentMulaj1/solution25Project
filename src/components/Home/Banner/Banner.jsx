import React, { useEffect, useState } from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";

import image1 from "../../../assets/Home/Banner/bannerImage-1.png";
import image2 from "../../../assets/Home/Banner/bannerImage-2.jpg";
import image3 from "../../../assets/Home/Banner/bannerImage-3.jpg";

const images = [image1, image2, image3];

const Banner = () => {
  const [backgroundImage, setBackgroundImage] = useState(image1);
  const [activeImage, setActiveImage] = useState(image1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateImage = (index) => {
    setBackgroundImage(images[index]);
    setActiveImage(images[index]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
      updateImage(nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleImageChange = (image, index) => {
    setBackgroundImage(image);
    setActiveImage(image);
    setCurrentIndex(index);
  };

  return (
    <div className="Banner">
      <div
        className="Banner__bgImage"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      <div className="Banner__dots">
        {images.map((image, index) => (
          <span
            key={index}
            className={activeImage === image ? "active" : ""}
            onClick={() => handleImageChange(image, index)}
          ></span>
        ))}
      </div>

      <div className="Banner__bg1"></div>
      <div className="Banner__bg2"></div>
      <div className="Banner__bg3"></div>

      <div className="Banner__content">
        <p className="with18SemiBold">
          SALE! UP TO 50%
          <br />
          OFF!
        </p>

        <p className="with80Medium">
          Summer Sale
          <br />
          Collections
        </p>

        <Link className="with14SemiBold">SHOP NOW</Link>
      </div>
    </div>
  );
};

export default Banner;
