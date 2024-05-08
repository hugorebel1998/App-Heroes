import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"

import queryString from "query-string";
import { getHeroeByName } from "../../helpers/getHeroeByName";
import { HeroeCard } from "../../components/HeroeCard";

export const Search = () => {


    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search)

    const { search_buscar, onInputChange } = useForm({
        search_buscar: q
    });

    const heroes = getHeroeByName(q);

    const showBuscar = (q.length == 0);
    const showError = (q.length > 0) && (heroes.length == 0);


    const onSeachSubmint = (event) => {
        event.preventDefault();

        // if (search_buscar.trim().length <= 1) return;

        navigate(`?q=${search_buscar}`);
    }

    return (
        <>

            <div className="container mt-4">

                <div className="row">
                    <div className="col-md-5">
                        <h3>Buscador</h3><hr />
                        <form onSubmit={onSeachSubmint}>
                            <input
                                type="text"
                                className="form-control"
                                name="search_buscar"
                                value={search_buscar}
                                onChange={onInputChange}
                                placeholder="Buscar..."
                                autoComplete="off" />

                            <button className="m-3 btn btn-outline-primary">Buscar</button>
                        </form>
                    </div>

                    <div className="col-md-7">
                        <h3>Resultados</h3> <hr />
                        <div className="alert alert-primary" style={{ display: showBuscar ? '' : 'none' }}>
                            Cargando  ...
                        </div>

                        <div className="alert alert-warning" style={{ display: showError ? '' : 'none' }}>
                            Sin resultados  {q}
                        </div>

                        {
                            heroes.map((heroe) => (
                                <HeroeCard key={heroe.id} {...heroe} />
                            ))
                        }
                    </div>

                </div>


            </div>
        </>
    )
}
