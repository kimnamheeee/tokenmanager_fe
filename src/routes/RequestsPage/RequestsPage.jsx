import "./Index.css";

import ProjectHeader from "../../components/RequestBox/ProjectHeader";
import TokenTimeBox  from "../../components/RequestBox/TokenTimeBox";
import RequestBox from "../../components/RequestBox/RequestBox";

const RequestsPage = () => {
    return(
        <div className="RequestsPage">
            <div className="request-page-header">
                <ProjectHeader/>
                <TokenTimeBox/>
            </div>
            <div className="request-container">
                <div className="request-container-box">
                    <div className="request-container-box-button">
                        available
                    </div>
                    <br></br>

                    <div className="w-full h-96 flex flex-col  overflow-y-auto section-b">
                        <RequestBox/>
                    </div>

                </div>


                <div className="request-container-box">
                    <div className="request-container-box-button">
                        expired
                    </div>  
                    <br></br>
                    
                    <div className="w-full h-96 flex flex-wrap  overflow-y-auto section-b">
                        <RequestBox/>
                    </div>
                </div>
            
            </div>

        </div>
    );


};

export default RequestsPage;
