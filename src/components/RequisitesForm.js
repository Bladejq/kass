import React, { useState, useEffect } from "react";
import copyIcon from "../img/copy.png";

function RequisitesForm() {
  const [fields, setFields] = useState({
    fullName: "",
    iin: "",
    birthDate: "",
    documentNumber: "",
    issueDate: "",
    expiryDate: ""
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedFields = JSON.parse(localStorage.getItem("requisites"));
    if (savedFields) {
      setFields(savedFields);
      setIsSaved(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields({ ...fields, [name]: value });
  };

  const handleSave = () => {
    localStorage.setItem("requisites", JSON.stringify(fields));
    setIsSaved(true);
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    alert("Текст скопирован!");
  };

  return (
    <div id="req">
      <ul className="rekvizit">
        {Object.keys(fields).map((fieldKey, index) => (
          <li key={index}>
            <span className="atritem">{fieldKey === "fullName" ? "ФИО" :
                                      fieldKey === "iin" ? "ИИН" :
                                      fieldKey === "birthDate" ? "Дата рождения" :
                                      fieldKey === "documentNumber" ? "Номер документа" :
                                      fieldKey === "issueDate" ? "Дата выдачи" : 
                                      "Срок действия"}
            </span>
            <br />
            <input
              type="text"
              name={fieldKey}
              maxLength={fieldKey === "iin" ? 12 : 28}
              value={fields[fieldKey]}
              onChange={handleChange}
              className="rekitem"
              readOnly={isSaved}
            />
            <img src={copyIcon} alt="copy icon" onClick={() => handleCopy(fields[fieldKey])} style={{ cursor: "pointer" }} />
          </li>
        ))}
      </ul>
      {!isSaved && (
        <button onClick={handleSave}>Сохранить</button>
      )}
    </div>
  );
}

export default RequisitesForm;
