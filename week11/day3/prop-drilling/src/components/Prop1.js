import React from 'react'
import Prop2 from './Prop2'

export default function Prop1(props) {
  return (
    <div>
      Prop1
      {props.children}
      <Prop2 house={props.house} owner={props.owner} />
    </div>
  );
}
