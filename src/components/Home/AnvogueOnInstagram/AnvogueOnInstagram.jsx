import React from "react";
import "./AnvogueOnInstagram.scss";

const AnvogueOnInstagram = () => {
  return (
    <div className="AnvogueOnInstagram">
      <div className="AnvogueOnInstagram__top">
        <p className="AnvogueOnInstagram__title">Anvogue On Instagram</p>

        <p className="hashtag">#Anvougetheme</p>
      </div>

      <div className="AnvogueOnInstagram__bottom">
        <div className="AnvogueOnInstagramImage AnvogueOnInstagramImage1"></div>
        <div className="AnvogueOnInstagramImage AnvogueOnInstagramImage2"></div>
        <div className="AnvogueOnInstagramImage AnvogueOnInstagramImage3"></div>
        <div className="AnvogueOnInstagramImage AnvogueOnInstagramImage4"></div>
        <div className="AnvogueOnInstagramImage AnvogueOnInstagramImage5"></div>
      </div>
    </div>
  );
};

export default AnvogueOnInstagram;
