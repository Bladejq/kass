import React, { useState, useEffect } from "react";

function UploadForm() {
  const [image, setImage] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const savedImage = localStorage.getItem("uploadedImage");
    if (savedImage) {
      setImage(savedImage);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
        localStorage.setItem("uploadedImage", reader.result); 
      };

      reader.readAsDataURL(file); 
    }
  };

  const handleMouseDown = (event) => {
    setDragging(true);
    setLastPosition({
      x: event.clientX - position.x,
      y: event.clientY - position.y,
    });
  };

  const handleMouseMove = (event) => {
    if (dragging) {
      setPosition({
        x: event.clientX - lastPosition.x,
        y: event.clientY - lastPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="img-upload" style={{ height: "50vh" }}>
      <div className="input-img">
        {!image ? (
          <>
            <input
              type="file"
              name="img-upl"
              id="idupload"
              className="input-file"
              onChange={handleFileChange}
            />
            <label htmlFor="idupload">
              <span>Загрузить</span>
            </label>
          </>
        ) : (
          <div
            style={{
              cursor: dragging ? "grabbing" : "grab",
              transform: `translate(${position.x}px, ${position.y}px)`,
              maxWidth: "100%",
              maxHeight: "100%",
            }}
            onMouseDown={handleMouseDown}
          >
            <img src={image} alt="Uploaded" style={{ maxWidth: "100%", maxHeight: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadForm;
