import React from "react";
import Ebook from "../Assets/cover-img.png";
import QRCode from "../Assets/qr-code.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/EbookDetailForm.css";

function EbookDetailForm() {
  const handleDownloadEbookClick = () => {
    window.open("https://drive.google.com/uc?export=download&id=103tbhHJTPULFUWV9_alBDku-L8OKipo9", "_blank");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Ebook} alt="Ebook Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>BÍ MẬT CỦA MAY MẮN</span>
        </h3>
        <p className="ba-description">
          Bí quyết tạo nên may mắn trong công việc, tình yêu và cuộc sống.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#15ad64" }} /> Giá bán: 10.000 VND
        </p>

        <div className="qr-image-content">
          <img src={QRCode} alt="QRCode Group" className="qr-code" />
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleDownloadEbookClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Tải Ebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default EbookDetailForm;
