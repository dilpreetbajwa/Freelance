import React from "react";
import "./TrustedBy.scss";
import facebook_1 from "../../assets/facebook_1.png"
import google from "../../assets/google.png"
import netflix from "../../assets/netflix.png"
import paypal from "../../assets/paypal.png"
import pandg from "../../assets/pandg.png"

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted by:</span>
        <img src={facebook_1} alt="" />
        <img src={google} alt="" />
        <img src={netflix} alt="" />
        <img src={paypal} alt="" />
        <img src={pandg} alt="" />
      </div>
    </div>
  );
};

export default TrustedBy;