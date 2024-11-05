import React, {useState} from "react";
import Header from "../components/Header";
import Document from "../components/UploadForm";
import Footer from "../components/Footer";
import ReactRemoveScroll from "react-remove-scroll/dist/es5/Combination";
import RequisitesForm from "../components/RequisitesForm";

function MainPage() {
    const [isReq, setIsReq] = useState(false);
    const tabHandler = () => {
        setIsReq(!isReq);
    }

    return (
        <div className="container">
            <Header ontab={tabHandler}/>
            <ReactRemoveScroll className="middle">
                {
                    !isReq
                        ?
                        <Document/>
                        :
                        <RequisitesForm/>
                }
            </ReactRemoveScroll>
            <Footer/>
        </div>
    )
}

export default MainPage;
