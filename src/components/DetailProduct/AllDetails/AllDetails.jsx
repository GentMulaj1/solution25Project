import React from "react";
import "./AllDetails.scss";
import { FaStar } from "react-icons/fa";

import image1 from "../../../assets/DetailProduct/GetItToday/GetItToday-1.svg";
import image2 from "../../../assets/DetailProduct/GetItToday/GetItToday-2.svg";
import image3 from "../../../assets/DetailProduct/GetItToday/GetItToday-3.svg";

const AllDetails = () => {
  const GetItTodayData = [
    {
      id: 1,
      icon: image1,
      bigText: "Free Shipping",
      smallText: "Free shipping on orders over $75.",
    },
    {
      id: 2,
      icon: image2,
      bigText: "100 - Day Returns",
      smallText: "Support from 8:30 AM to 10:00 PM everyday",
    },
    {
      id: 3,
      icon: image3,
      bigText: "100 - Day Returns",
      smallText:
        "Not impressed? Get a refund. You have 100 days to break our hearts.",
    },
  ];

  return (
    <div className="AllDetails">
      <div className="AllDetails__1">
        <div className="AllDetails__1__left">
          <div className="AllDetails__1__inside">
            <p className="with12SemiBold">CLOTHING</p>

            <p className="with36SemiBold">Ribbed Short-Sleeved T-Shirt</p>

            <div className="AllDetails__stars">
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="with14Regular">(1.234 reviews)</p>
            </div>
          </div>

          <div className="priceAndDsc">
            <p className="with24SemiBold">$68.00</p>

            <p className="with16Regular">
              The garments labelled as Committed are products that have been
              produced using sustainable fibres or processes, reducing their
              environmental impact.
            </p>
          </div>
        </div>

        <div className="AllDetails__1__right">
          <span className="AllDetails__1__right__heart"></span>
        </div>
      </div>

      <div className="AllDetails__2">
        <div className="colors">
          <p className="with16Medium">
            colors: <span>Blue</span>
          </p>

          <div className="colorsPalets">
            <div className="colorPalet colorPalet1"></div>
            <div className="colorPalet colorPalet2"></div>
            <div className="colorPalet colorPalet3"></div>
            <div className="colorPalet colorPalet4"></div>
            <div className="colorPalet colorPalet5"></div>
          </div>
        </div>

        <div className="colors size">
          <p className="with16Medium">
            Size: <span>Size Guide</span>
          </p>

          <div className="sizePalets">
            <div className="sizePalet sizePalet1 with16SemiBold">S</div>
            <div className="sizePalet sizePalet2 with16SemiBold">M</div>
            <div className="sizePalet sizePalet3 with16SemiBold">L</div>
            <div className="sizePalet sizePalet4 with16SemiBold">XL</div>
            <div className="sizePalet sizePalet5 with16SemiBold">XxL</div>
          </div>
        </div>

        <div className="quantity">
          <p className="with16Medium">Quantity:</p>
          <button className="with14SemiBold">PURCHASE ON AMAZON</button>
        </div>

        <div className="compareAndShare">
          <div className="compareAndShare__card">
            <div className="compareAndShare__iconBorder">
              <div className="compareAndShare__icon compareAndShare__icon1"></div>
            </div>

            <p className="with16Regular">Compare</p>
          </div>

          <div className="compareAndShare__card">
            <div className="compareAndShare__iconBorder">
              <div className="compareAndShare__icon compareAndShare__icon2"></div>
            </div>

            <p className="with16Regular">Share Products</p>
          </div>
        </div>
      </div>

      <div className="AllDetails__3">
        <p className="with24SemiBold">Get It Today</p>

        <div className="AllDetails__3__inside">
          {GetItTodayData.map((item) => (
            <div key={item.id} className="GetItToday">
              <div
                className="GetItToday__icon"
                style={{
                  content: `url(${item.icon})`,
                }}
              ></div>

              <div className="GetItToday__texts">
                <p className="with16Medium">{item.bigText}</p>

                <p className="with14Regular">{item.smallText}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllDetails;
