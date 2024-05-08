import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroeById } from '../../helpers/getHeroeById';

export const Heroe = () => {

    const { id } = useParams();

    const heroe = useMemo(() => getHeroeById(id), [id])

    const navigate = useNavigate();

    const heroeImgUrl = `/assets/heroes/${id}.jpg`;

    const onReturn = () => {
        navigate(-1);
    }

    if (!heroe)
        return <Navigate to="/marvel" />


    return (
        <div className='row justify-content-center m-5'>
            <div className='col-md-4'>
                <img src={heroeImgUrl} alt={heroe.characters} className='img-thumbnail' />
            </div>
            <div className='col-md-8'>
                <h3>{heroe.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><b>Alter ego: {heroe.alter_ego}</b></li>
                    <li className='list-group-item'><b>Publisher: {heroe.publisher}</b></li>
                    <li className='list-group-item'><b>First appearance: {heroe.first_appearance}</b></li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{heroe.characters}</p>
                <button className='btn btn-primary' onClick={onReturn}>Regresar</button>

            </div>

        </div>
    )
}
