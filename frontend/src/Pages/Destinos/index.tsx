import DCard from "../../Components/DestinosCard";




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