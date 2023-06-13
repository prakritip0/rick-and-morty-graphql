import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_CHARACTERS = gql`
    query getCharacters {
        characters {
            results {
                id
                name
                image
            }
        }
    }
`;

export default function CharactersList() {
    const  {data, loading, error } = useQuery(GET_CHARACTERS);
    // const characters = data;
    // console.log(data);
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
