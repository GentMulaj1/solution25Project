import React from "react";
import "./Specifications.scss";

const Specifications = () => {
  return (
    <div className="Specifications">
      <div className="Specifications__top">
        <p className="with24Regular">Description</p>

        <p className="with24Regular with24RegularActive">Specifications</p>

        <p className="with24Regular">Reviews</p>
      </div>

      <div className="Specifications__bottom">
        <div className="Specifications__left">
          <p className="with20SemiBold">Description</p>

          <p className="with16Regular">
            Keep your home organized, yet elegant with storage cabinets by Onita
            Patio Furniture. These cabinets not only make a great storage units,
            but also bring a great decorative accent to your decor.
            Traditionally designed, they are perfect to be used in the hallway,
            living room, bedroom, office or any place where you need to store or
            display things. Made of high quality materials, they are sturdy and
            durable for years. Bring one-of-a-kind look to your interior with
            furniture from Onita Furniture!
          </p>
        </div>

        <div className="Specifications__right">
          <p className="with20SemiBold">About This Products</p>

          <p className="with16Regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <p className="with16Regular">
            Nulla luctus libero quis mauris vestibulum dapibus.
          </p>

          <p className="with16Regular">
            Maecenas ullamcorper erat mi, vel consequat enim suscipit at.
          </p>

          <p className="with16Regular">
            Quisque consectetur nibh ac urna molestie scelerisque.
          </p>

          <p className="with16Regular">
            Mauris in nisl scelerisque massa consectetur pretium sed et mauris.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
