import React, { useEffect, useState } from "react";
import Ebook from "../Assets/cover-img.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBuyEbookClick = () => {
    navigate("/ebookdetail");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">CASSO Entry Test</p>
          <h2 className="text-title">
            OPEN BANKING BOOTCAMP 2024
          </h2>
          <p className="text-descritpion">
            Bạn vừa đạt được thoả thuận phân phối độc quyền Ebook "Bí mật của may mắn"
            tại Việt Nam. Hãy xây dựng một trang web đơn giản cho phép khách hàng đặt
            mua sách và thanh toán qua cổng thanh toán miễn phí payOS của Casso.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBuyEbookClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Mua Ebook
          </button>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Ebook} alt="Ebook" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
