import React from "react";
import "./WhatsNews.scss";
import ItemCard from "../../shared/ItemCard/ItemCard";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import image1 from "../../../assets/ItemCard/IMG-1.webp";
import image2 from "../../../assets/ItemCard/IMG-2.webp";
import image3 from "../../../assets/ItemCard/IMG-3.webp";
import image4 from "../../../assets/ItemCard/IMG-4.webp";

const WhatsNews = (props) => {
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
    <div className="WhatsNews">
      <Tabs className="bestShopTabs">
        <TabList className="with24SemiBold bestShopTablists">
          <Tab className="bestShopTab">TOPS</Tab>
          <Tab className="bestShopTab">ACCESSORIES</Tab>
          <Tab className="bestShopTab">DRESS</Tab>
          <Tab className="bestShopTab">SHORT</Tab>
          <Tab className="bestShopTab">SHIRT</Tab>
        </TabList>

        <TabPanel className="bestShopTabPanel">
          <Carousel
            swipeable={false}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {BestShopData.filter((item) => item.whatsNews === "TOPS").length >
            0 ? (
              BestShopData.filter((item) => item.whatsNews === "TOPS").map(
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
                No products found. Please try a different category
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
            autoPlay={false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {BestShopData.filter((item) => item.whatsNews === "ACCESSORIES")
              .length > 0 ? (
              BestShopData.filter(
                (item) => item.whatsNews === "ACCESSORIES"
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
                No products found. Please try a different category
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
            autoPlay={false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {BestShopData.filter((item) => item.whatsNews === "DRESS").length >
            0 ? (
              BestShopData.filter((item) => item.whatsNews === "DRESS").map(
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
                No products found. Please try a different category
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
            autoPlay={false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {BestShopData.filter((item) => item.whatsNews === "SHORT").length >
            0 ? (
              BestShopData.filter((item) => item.whatsNews === "SHORT").map(
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
                No products found. Please try a different category
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
            autoPlay={false}
            autoPlaySpeed={5000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {BestShopData.filter((item) => item.whatsNews === "SHIRT").length >
            0 ? (
              BestShopData.filter((item) => item.whatsNews === "SHIRT").map(
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
                No products found. Please try a different category
              </p>
            )}
          </Carousel>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default WhatsNews;
