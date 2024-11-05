import React, { useContext, useRef, useState } from "react";
import AuthContext from "../context/AuthContext";
import { set } from "idb-keyval";
import Copy from "../img/copy.png";

export default function Requisites() {
    let { bio, setBIO } = useContext(AuthContext);
    const fioRef = useRef();
    const iinRef = useRef();
    const birthRef = useRef();
    const docRef = useRef();
    const vidRef = useRef();
    const expRef = useRef();
    
    const [isEditable, setIsEditable] = useState(true);
    const [isSaved, setIsSaved] = useState(false); // новое состояние для проверки сохранения

    const changeHandler = () => {
        if (!isSaved) {
            setBIO({
                fio: fioRef.current.value,
                iin: iinRef.current.value,
                birth: birthRef.current.value,
                docnum: docRef.current.value,
                viddata: vidRef.current.value,
                expdata: expRef.current.value
            });
        }
    };

    const handleSave = () => {
        setIsEditable(false);
        setIsSaved(true); // обновляем состояние после сохранения
    };

    // Функция копирования текста
    const copyToClipboard = (ref) => {
        ref.current.select();
        document.execCommand("copy");
    };

    return (
        <div id="req">
            <ul className="rekvizit">
                <li>
                    <span className="atritem">ФИО</span><br/>
                    <input
                        ref={fioRef}
                        value={bio.fio}
                        type="text"
                        maxLength="28"
                        spellCheck="false"
                        className="rekitem"
                        onChange={changeHandler}
                        readOnly={!isEditable} 
                    />
                    <img src={Copy} alt="" onClick={() => copyToClipboard(fioRef)} />
                </li>
                <li>
                    <span className="atritem">ИИН</span><br/>
                    <input
                        ref={iinRef}
                        value={bio.iin}
                        type="text"
                        maxLength="12"
                        className="rekitem"
                        onChange={changeHandler}
                        readOnly={!isEditable} 
                    />
                    <img src={Copy} alt="" onClick={() => copyToClipboard(iinRef)} />
                </li>
                <li>
                    <span className="atritem">Дата рождения</span><br/>
                    <input
                        ref={birthRef}
                        value={bio.birth}
                        type="text"
                        maxLength="10"
                        className="rekitem"
                        onChange={changeHandler}
                        readOnly={!isEditable} 
                    />
                    <img src={Copy} alt="" onClick={() => copyToClipboard(birthRef)} />
                </li>
                <li>
                    <span className="atritem">Номер документа</span><br/>
                    <input
                        ref={docRef}
                        value={bio.docnum}
                        type="text"
                        maxLength="9"
                        className="rekitem"
                        onChange={changeHandler}
                        readOnly={!isEditable} 
                    />
                    <img src={Copy} alt="" onClick={() => copyToClipboard(docRef)} />
                </li>
                <li>
                    <span className="atritem">Дата выдачи</span><br/>
                    <input
                        ref={vidRef}
                        value={bio.viddata}
                        type="text"
                        maxLength="10"
                        className="rekitem"
                        onChange={changeHandler}
                        readOnly={!isEditable} 
                    />
                    <img src={Copy} alt="" onClick={() => copyToClipboard(vidRef)} />
                </li>
                <li>
                    <span className="atritem">Срок действия</span><br/>
                    <input
                        ref={expRef}
                        value={bio.expdata}
                        type="text"
                        maxLength="10"
                        className="rekitem"
                        onChange={changeHandler}
                        readOnly={!isEditable} 
                    />
                    <img src={Copy} alt="" onClick={() => copyToClipboard(expRef)} />
                </li>

                <li>
                {!isSaved && (
              <button onClick={handleSave} className="save-button">Сохранить</button>
            )}
                </li>
            </ul>

        </div>
    );
}
