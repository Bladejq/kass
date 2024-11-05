import React from "react";
import qrIcon from "../img/qr.png";
import uploadIcon from "../img/upload.svg";

function Footer() {
  const handleShare = async () => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      try {
        await navigator.share({
          title: "Поделиться изображением",
          text: "Я хочу поделиться изображением с вами!",
          url: savedImage, 
        });
        console.log("Успешно поделились!");
      } catch (error) {
        console.error("Ошибка при попытке поделиться:", error);
        alert("Ошибка при попытке поделиться.");
      }
    } else {
      alert("Нет изображения для отправки.");
    }
  };

  return (
    <div className="footer">
      <div className="btnfooter" id="docbtn">
        <button id="btnftr1">
          <img src={qrIcon} alt="" />
          Предъявить документ
        </button>
        <button id="btnftr2" className="share" onClick={handleShare}>
          <img src={uploadIcon} alt="" />
          Отправить документ
        </button>
      </div>
    </div>
  );
}

export default Footer;
