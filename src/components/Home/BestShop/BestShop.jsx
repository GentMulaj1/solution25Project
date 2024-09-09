import React from "react";
import "./BestShop.scss";
import ItemCard from "../../shared/ItemCard/ItemCard";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../../../assets/ItemCard/IMG-1.webp";
import image2 from "../../../assets/ItemCard/IMG-2.webp";
import image3 from "../../../assets/ItemCard/IMG-3.webp";
import image4 from "../../../assets/ItemCard/IMG-4.webp";

const BestShop = (props) => {
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

    {
      id: 1,
      imageItem: image4,
      smallBtn: "SALE",
      smallBtnColor: "#DB4444",
      name: "Satin Trousers With Elastic",
      price: 98.0,
      discount: 25,
      firstBtn: "Best Sellers",
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
      firstBtn: "Best Sellers",
      whatsNews: "ACCESSORIES",
    },

    {
      id: 2,
      imageItem: image2,
      smallBtn: "NEW",
      smallBtnColor: "#D2EF9A",
      name: "Straight Trousers",
      price: 68.0,
      firstBtn: "Best Sellers",
      whatsNews: "DRESS",
    },

    {
      id: 4,
      imageItem: image1,
      smallBtn: "SALE",
      smallBtnColor: "#D2EF9A",
      name: "Jacquard Fluid Trousers",
      price: 68.0,
      firstBtn: "New Arrivals",
      whatsNews: "SHORT",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    minitablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 530, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="BestShop">
      <Tabs className="bestShopTabs">
        <TabList className="with24SemiBold bestShopTablists">
          <Tab className="bestShopTab">Best Sellers</Tab>
          <Tab className="bestShopTab">On Sale</Tab>
          <Tab className="bestShopTab">New Arrivals</Tab>
        </TabList>

        <TabPanel className="bestShopTabPanel">
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false} // Correct use of props.deviceType
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType} // Correct use of props.deviceType
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {BestShopData.filter((item) => item.firstBtn === "Best Sellers")
              .length > 0 ? (
              BestShopData.filter(
                (item) => item.firstBtn === "Best Sellers"
              ).map((item) => (
                <ItemCard
                  key={item.id}
                  imageItem={item.imageItem}
                  smallBtn={item.smallBtn}
                  smallBtnColor={item.smallBtnColor}
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                />
              ))
            ) : (
              <p className="noProducts">
                There are no items to display in this section right now
              </p>
            )}
          </Carousel>
        </TabPanel>

        <TabPanel className="bestShopTabPanel">
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false} // Correct use of props.deviceType
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType} // Correct use of props.deviceType
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {BestShopData.filter((item) => item.firstBtn === "On Sale").length >
            0 ? (
              BestShopData.filter((item) => item.firstBtn === "On Sale").map(
                (item) => (
                  <ItemCard
                    key={item.id}
                    imageItem={item.imageItem}
                    smallBtn={item.smallBtn}
                    smallBtnColor={item.smallBtnColor}
                    name={item.name}
                    price={item.price}
                    discount={item.discount}
                  />
                )
              )
            ) : (
              <p className="noProducts">
                There are no items to display in this section right now
              </p>
            )}
          </Carousel>
        </TabPanel>

        <TabPanel className="bestShopTabPanel">
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false} // Correct use of props.deviceType
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType} // Correct use of props.deviceType
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {BestShopData.filter((item) => item.firstBtn === "New Arrivals")
              .length > 0 ? (
              BestShopData.filter(
                (item) => item.firstBtn === "New Arrivals"
              ).map((item) => (
                <ItemCard
                  key={item.id}
                  imageItem={item.imageItem}
                  smallBtn={item.smallBtn}
                  smallBtnColor={item.smallBtnColor}
                  name={item.name}
                  price={item.price}
                  discount={item.discount}
                />
              ))
            ) : (
              <p className="noProducts">
                There are no items to display in this section right now
              </p>
            )}
          </Carousel>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default BestShop;
