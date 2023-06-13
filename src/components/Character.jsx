import React from 'react'

export default function Character({img, name}) {
  return (
    <div><img src={img} alt="" />
    <h2>{name}</h2></div>
  )
}
