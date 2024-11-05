import React, { useCallback, useContext, useRef } from "react";
import AuthContext from "../context/AuthContext";
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

export default function UploadForm() {
  const imgRef = useRef();
  let { img, setIMG } = useContext(AuthContext);

  const handleFile = (evt) => {
    evt.stopPropagation();
    evt.preventDefault();
    let files = evt.target.files;
    let file = files[0];
    let fileReader = new FileReader();
    fileReader.onload = function (progressEvent) {
      setIMG(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const onUpdate = useCallback(({ x, y, scale }) => {
    const { current: image } = imgRef;
    if (image) {
      const value = make3dTransformValue({ x, y, scale });
      image.style.setProperty("transform", value);
    }
  }, []);

  return !img ? (
    <div className="img-upload" style={{ height: "50vh" }}>
      <div className="input-img">
        <input
          type="file"
          name="img-upl"
          id="idupload"
          onChange={(e) => handleFile(e)}
          className="input-file"
        />
        <label htmlFor="idupload">
          <span>Загрузить</span>
        </label>
      </div>
    </div>
  ) : (
    <QuickPinchZoom onUpdate={onUpdate} id="target">
      <img src={img} alt="" ref={imgRef} style={{ height: 600 }} />
    </QuickPinchZoom>
  );
}
