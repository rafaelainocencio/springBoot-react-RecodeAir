
function DCard() {

    const destino = {
        id: 1,
        image: "https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2012/10/05/3-cayman-islands.jpg",
        destiny: "Caribe",
        description: "Um lugar muito legal",
        price: 1000
    }

    return (
        <div className="card destinos-card m-5">
            <img className="card-img-top" src={destino.image} alt="Imagem de capa do card" />
            <div className="card-body">
                <h5 className="card-title">{destino.destiny}</h5>
                <p className="card-text">{destino.description}</p>
                <h4>R$1000</h4>
                <button className="btn btn-primary">Comprar</button>
            </div>
        </div>
    )
}

export default DCard;