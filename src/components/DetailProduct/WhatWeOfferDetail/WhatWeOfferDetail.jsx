import React from "react";
import "./WhatWeOfferDetail.scss";

import image1 from "../../../assets/DetailProduct/WhatWeOfferDetail/WhatWeOfferDetail-1.svg";
import image2 from "../../../assets/DetailProduct/WhatWeOfferDetail/WhatWeOfferDetail-2.svg";
import image3 from "../../../assets/DetailProduct/WhatWeOfferDetail/WhatWeOfferDetail-3.svg";
import image4 from "../../../assets/DetailProduct/WhatWeOfferDetail/WhatWeOfferDetail-4.svg";

const WhatWeOfferDetail = () => {
  const WhatWeOfferDetailData = [
    {
      id: 1,
      imageOffer: image1,
      bigDsc: "Shipping Faster",
      smallDsc:
        "Use on walls, furniture, doors and many more surfaces. The possibilities are endless.",
    },
    {
      id: 2,
      imageOffer: image2,
      bigDsc: "Cotton Material",
      smallDsc:
        "Use on walls, furniture, doors and many more surfaces. The possibilities are endless.",
    },
    {
      id: 3,
      imageOffer: image3,
      bigDsc: "High Quality",
      smallDsc:
        "Use on walls, furniture, doors and many more surfaces. The possibilities are endless.",
    },
    {
      id: 4,
      imageOffer: image4,
      bigDsc: "Highly Compatible",
      smallDsc:
        "Use on walls, furniture, doors and many more surfaces. The possibilities are endless.",
    },
  ];

  return (
    <div className="WhatWeOfferDetail">
      {WhatWeOfferDetailData.map((item) => (
        <div key={item.id} className="WhatWeOfferDetail__inside">
          <div
            className="WhatWeOfferDetail__icon"
            style={{
              content: `url(${item.imageOffer})`,
            }}
          ></div>

          <div className="WhatWeOfferDetail__texts">
            <p className="with20SemiBold">{item.bigDsc}</p>

            <p className="with16Regular">
              Use on walls, furniture, doors and many more surfaces. The
              possibilities are endless.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhatWeOfferDetail;
