import React from 'react'
import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter'

export default function Characater() {
    const { id } = useParams();
    const { loading, error, data } = useCharacter(id);
    console.log(data, loading, error);
    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong</p>

    return (
        <div className='character'>
            <img src={data.character.image} width={750} height={750} alt='' />
            <div className='character-content'>
                <h1>{data.character.name}</h1>
                <p>{data.character.gender}</p>
                <div className='character-episode'>
                    {data.character.episode.map(episode => {
                        // console.log('ep',episode);
                        return <div>
                            {episode.name} - <b>{episode.episode}</b>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}
