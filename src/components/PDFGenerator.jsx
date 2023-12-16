import React, { useState } from "react";
import { handleDownload } from "../utils/common";

const PdfGenerator = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    company: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const isDownloadDisabled = Object.values(userData).some((value) => !value);

  return (
    <div className="pdf-generator-container">
      <form className="user-input-form">
        {Object.entries(userData).map(([fieldName, fieldValue]) => (
          <>
            <label className="input-label">{fieldName}: </label>
            <input
              type={fieldName === "email" ? "email" : "text"}
              name={fieldName}
              value={fieldValue}
              onChange={handleInputChange}
              className="input-field"
            />
          </>
        ))}
      </form>

      <div className="btn-div">
        <button
          onClick={() => handleDownload(userData)}
          className="download-button"
          disabled={isDownloadDisabled}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default PdfGenerator;
