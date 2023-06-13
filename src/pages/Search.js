import { gql, useLazyQuery } from '@apollo/client'
import React from 'react'
import { useState } from 'react'
import Error from '../components/Error'
import Loading from '../components/Loading'

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!){
    characters(filter:{
    name:$name
  }){
    results{
      location{
        name
      }
    }
  }
}`

export default function Search() {

  const [name, setName] = useState('')
  const [getLocations, { loading, error, data, called }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables: {
      name
    }
  })
  // console.log(called, loading, error, data, name);
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {loading && <Loading />}
      {error && <Error />}
      {data && <ul>{data.characters.results.map(character => {
        return <li>{character.location.name}</li>
      })}</ul>}
    </div>
  )
}
