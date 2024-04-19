import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: toast.POSITION.TOP_CENTER,
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          <span className="navbar-sign">CASSO</span>
        </Link>
      </h1>

      {/* Desktop */}
      <ul className="navbar-items">
        <li>
          <a href="#product" className="navbar-links">
            SẢN PHẨM
          </a>
        </li>
        <li>
          <a href="#customer" className="navbar-links">
            KHÁCH HÀNG
          </a>
        </li>
        <li>
          <a href="#developer" className="navbar-links">
            DEVELOPER
          </a>
        </li>
        <li>
          <a href="#company" className="navbar-links">
            CÔNG TY
          </a>
        </li>
        <li>
          <a href="#pricelist" className="navbar-links">
            BẢNG GIÁ
          </a>
        </li>
      </ul>

      <button
        className="navbar-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleChatBtnClick}
      >ĐĂNG NHẬP</button>
    </div>
  );
}

export default Navbar;
