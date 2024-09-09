import React from "react";
import "./ItemCard.scss";

const ItemCard = ({
  imageItem,
  smallBtn,
  smallBtnColor,
  name,
  price,
  discount,
}) => {
  const discountedPrice = price - (price * discount) / 100;

  return (
    <div className="ItemCard">
      <div
        className="ItemCard__top"
        style={{
          backgroundImage: `url(${imageItem})`,
        }}
      >
        <span
          className="with14SemiBold ItemCard__button"
          style={{
            backgroundColor: `${smallBtnColor}`,
          }}
        >
          {smallBtn}
        </span>
        <button className="ItemCard__addToCart"></button>
      </div>

      <div className="ItemCard__bottom">
        <p className="with14Medium">{name}</p>

        <div className="itemCard__price">
          <span className="with16Medium">
            {discount
              ? `$${discountedPrice.toFixed(2)}`
              : `$${price.toFixed(2)}`}
          </span>

          {discount ? (
            <span className="with14Regular">${price.toFixed(2)}</span>
          ) : null}

          {discount ? <span className="with14Medium">{discount}%</span> : null}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
