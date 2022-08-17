import React from 'react'

export default function Prop5(props) {
  return (
    <div>Prop5
        <p>{props.house.name}</p>
        <p>{props.house.address}</p>
        <p>{props.owner.name}</p>
    </div>
  )
}
