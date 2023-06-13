import React from 'react'
import { Link } from 'react-router-dom';
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
                return <Link to={`/${character.id}`}>
                    <img src={character.image} alt="" />
                    <h2>{character.name}</h2>
                </Link>
            })}
        </div>
    )
}
