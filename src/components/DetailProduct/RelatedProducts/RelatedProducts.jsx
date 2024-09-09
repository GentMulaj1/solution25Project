import React from "react";
import "./RelatedProducts.scss";

import image1 from "../../../assets/ItemCard/IMG-1.webp";
import image2 from "../../../assets/ItemCard/IMG-2.webp";
import image3 from "../../../assets/ItemCard/IMG-3.webp";
import image4 from "../../../assets/ItemCard/IMG-4.webp";
import ItemCard from "../../shared/ItemCard/ItemCard";

const RelatedProducts = () => {
  const BestShopData = [
    {
      id: 1,
      imageItem: image1,
      smallBtn: "SALE",
      smallBtnColor: "#DB4444",
      name: "Satin Trousers With Elastic",
      price: 98.0,
      discount: 25,
      firstBtn: "Best Sellers",
      whatsNews: "TOPS",
    },

    {
      id: 2,
      imageItem: image2,
      smallBtn: "NEW",
      smallBtnColor: "#D2EF9A",
      name: "Straight Trousers",
      price: 68.0,
      firstBtn: "On Sale",
      whatsNews: "TOPS",
    },

    {
      id: 3,
      imageItem: image3,
      smallBtn: "SALE",
      smallBtnColor: "#DB4444",
      name: "Biker-Style Leggings",
      price: 198.0,
      discount: 25,
      firstBtn: "On Sale",
      whatsNews: "TOPS",
    },

    {
      id: 4,
      imageItem: image4,
      smallBtn: "SALE",
      smallBtnColor: "#D2EF9A",
      name: "Jacquard Fluid Trousers",
      price: 68.0,
      firstBtn: "On Sale",
      whatsNews: "ACCESSORIES",
    },
  ];

  return (
    <div className="RelatedProducts">
      <p className="with36SemiBold">Related Products</p>

      <div className="RelatedProducts__inside">
        {BestShopData.map((item) => (
          <ItemCard
            key={item.id}
            imageItem={item.imageItem}
            smallBtn={item.smallBtn}
            smallBtnColor={item.smallBtnColor}
            name={item.name}
            price={item.price}
            discount={item.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
