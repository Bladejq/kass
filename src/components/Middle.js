import React from "react";
import UploadForm from "./UploadForm";
import RequisitesForm from "./RequisitesForm";

function Middle({ activeTab }) {
  return (
    <div className="middle">
      <div className="kvfysmfp">
        {activeTab === "Документ" ? (
          <UploadForm />
        ) : (
          <RequisitesForm />
        )}
      </div>
    </div>
  );
}

export default Middle;
