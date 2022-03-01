import DCard from "../../components/DestinosCard";
import destinosCard from "../../components/DestinosCard";



function Destinos() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <DCard></DCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <DCard></DCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <DCard></DCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <DCard></DCard>
                </div>
                <div className="col-sm-6 col-lg-4 col-xl-3">
                    <DCard></DCard>
                </div>
            </div>
        </div>
    );
    
}

export default Destinos;