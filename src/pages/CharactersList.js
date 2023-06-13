import React from 'react'
import { useCharacters } from '../hooks/useCharacters'

export default function CharactersList() {
const {error, loading, data}= useCharacters();
    if (loading) {
        return <p>Loading.....</p>
    }
    if (error) {
        return <p>Something went wrong.....</p>
    }

    return (
        <div className='charactersList'>
            {data.characters.results.map((character) => {
                return <div>
                    <img src={character.image} alt="" />
                    <h2>{character.name}</h2>
                </div>
            })}
        </div>
    )
}
