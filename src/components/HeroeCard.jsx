import { Link } from "react-router-dom";

export const HeroeCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {

    const heroeImgUrl = `/assets/heroes/${id}.jpg`;

    return (
        <>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={heroeImgUrl} className="img-fluid rounded-start" alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <h6>{publisher}</h6>
                            <p className="card-text">{alter_ego}</p>
                            <p className="card-text">{characters}</p>

                            <Link to={`/heroe/${id}`}>
                                Más ...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
