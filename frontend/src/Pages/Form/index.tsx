import { Link } from "react-router-dom";

function Form() {



    return (
        <div className="card container mt-5">
            <div className="card-header">
                Cadastrar Destino
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group recodeair-form-group">
                        <label htmlFor="formGroupExampleInput">Nome do destino</label>
                        <input type="destiny" className="form-control" id="destiny" />
                    </div>
                    <div className="form-group recodeair-form-group">
                        <label htmlFor="description">Descrição</label>
                        <input type="description" className="form-control" id="description" />
                    </div>
                    <div className="form-group recodeair-form-group">
                        <label htmlFor="image">URL da imagem</label>
                        <input type="imagem" className="form-control" id="image" />
                    </div>
                    <div className="form-group recodeair-form-group">
                        <label htmlFor="price">Preço</label>
                        <input type="price" className="form-control" id="price" />
                    </div>
                    <button type="submit" className="btn btn-primary m-5">Salvar</button>
                </form>
                <Link to="/destinos"><button type="button" className="btn btn-primary">Cancelar</button></Link>
                
            </div>
        </div>)
}

export default Form;