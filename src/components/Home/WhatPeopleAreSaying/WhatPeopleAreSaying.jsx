import React from "react";
import "./WhatPeopleAreSaying.scss";
import WhatPeopleAreSayingCard from "../WhatPeopleAreSayingCard/WhatPeopleAreSayingCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const WhatPeopleAreSaying = (props) => {
  const WhatPeopleAreSayingData = [
    {
      id: 1,
      title: "Variety Of Styles!",
      dsc: '"Fantastic shop! Great selection, fair prices, and friendly staff. Highly recommended. The quality of the products is exceptional, and the prices are very reasonable!"',
      name: "Lisa K.",
      time: "August 13, 2023",
    },
    {
      id: 2,
      title: "Quality Of Clothing!",
      dsc: '"I absolutely love this shop! The products are high-quality and the customer service is excellent. I always leave with exactly what I need and a smile on my face."',
      name: "Mark G.",
      time: "August 13, 2023",
    },
    {
      id: 3,
      title: "Customer Service!",
      dsc: '"I love this shop! The products are always top-quality, and the staff is incredibly friendly and helpful. They go out of their way to make sure that I\'m satisfied with my purchase."',
      name: "Emily S.",
      time: "August 13, 2023",
    },
    {
      id: 4,
      title: "Affordable Prices!",
      dsc: '"Amazing experience! The prices are unbeatable, and the quality of the items is top-notch. I will definitely be coming back for more shopping here."',
      name: "John D.",
      time: "August 14, 2023",
    },
    {
      id: 5,
      title: "Unique Finds!",
      dsc: '"This shop is a hidden gem! I always find unique and stylish items that I can\'t find anywhere else. The staff is always so welcoming and helpful."',
      name: "Sarah M.",
      time: "August 15, 2023",
    },
    {
      id: 6,
      title: "Great Deals!",
      dsc: '"I can\'t believe the deals I find here! The discounts are fantastic, and the quality is never compromised. Highly recommend for anyone looking for great value."',
      name: "James R.",
      time: "August 16, 2023",
    },
    {
      id: 7,
      title: "Friendly Atmosphere!",
      dsc: '"Shopping here is always a pleasure. The atmosphere is so friendly, and I feel like I\'m getting personalized service every time I visit."',
      name: "Natalie H.",
      time: "August 17, 2023",
    },
    {
      id: 8,
      title: "Trendy Collections!",
      dsc: '"The collections are always on-trend and fashionable. I love how they keep up with the latest styles and offer something for everyone. Definitely my go-to store!"',
      name: "Alex P.",
      time: "August 18, 2023",
    },
    {
      id: 9,
      title: "Fast Shipping!",
      dsc: '"I\'m always impressed with how quickly my orders arrive. The shipping is fast, and the items are always packaged with care. Great online shopping experience!"',
      name: "Rachel T.",
      time: "August 19, 2023",
    },
    {
      id: 10,
      title: "Perfect Fit!",
      dsc: '"I always find exactly what I need here. The clothes fit perfectly and are so comfortable. The staff is always so helpful in finding the right size for me."',
      name: "Oliver W.",
      time: "August 20, 2023",
    },
    {
      id: 11,
      title: "Eco-Friendly Options!",
      dsc: "\"I love that this shop offers eco-friendly and sustainable options. It's great to shop knowing that I'm making a positive impact on the environment!\"",
      name: "Emma L.",
      time: "August 21, 2023",
    },
    {
      id: 12,
      title: "High-End Fashion!",
      dsc: '"The fashion here is top-notch! It\'s like shopping at a high-end boutique without the high-end prices. Absolutely love it!"',
      name: "Sophia T.",
      time: "August 22, 2023",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
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
    <div className="WhatPeopleAreSaying">
      <p className="with36SemiBold">What People Are Saying</p>

      <div className="WhatPeopleAreSaying__cards">
        <Carousel
          swipeable={false}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true} // Correct use of props.deviceType
          autoPlaySpeed={5000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          removeArrowOnDeviceType={["desktop", "tablet", "mobile"]}
          deviceType={props.deviceType} // Correct use of props.deviceType
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {WhatPeopleAreSayingData.map((item) => (
            <WhatPeopleAreSayingCard
              key={item.id}
              title={item.title}
              dsc={item.dsc}
              name={item.name}
              time={item.time}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default WhatPeopleAreSaying;
