import React, { useState, useEffect } from "react";

function UploadForm() {
  const [image, setImage] = useState(null);

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
          <div>
            <img src={image} alt="Uploaded" style={{ maxHeight: "100%", maxWidth: "100%" }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadForm;
