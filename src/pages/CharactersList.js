import React from 'react'
import { Link } from 'react-router-dom';
import Character from '../components/Character';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { useCharacters } from '../hooks/useCharacters'


export default function CharactersList() {
    const { error, loading, data } = useCharacters();
    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <div className='charactersList'>
            {data.characters.results.map((character) => {
                return <Link to={`/${character.id}`}>
                    <Character img={character.image} name={character.name} />
                </Link>
            })}
        </div>
    )
}
