import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroeCard } from './HeroeCard';

export const HeroeList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);


    return (
        <>
            <div className='container'>
                <div className='row justify-content-center animate__animated animate__fadeIn'>
                    {
                        heroes.map((heroe) => (
                            <div className='col-md-4' key={heroe.id}>
                                <HeroeCard key={heroe.id} {...heroe} />
                            </div>
                        ))
                    }
                </div>
            </div>


        </>


    )
}
