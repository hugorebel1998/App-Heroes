import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroeList = ({ publisher }) => {

    let heroes = getHeroesByPublisher(publisher);


    return (
        <>
            <div>HeroeList</div>
            <ul>
                {

                    heroes.map(heroe => (
                        <li key={heroe.id}>
                            {heroe.superhero}
                        </li>
                    ))
                }
            </ul>

        </>


    )
}
