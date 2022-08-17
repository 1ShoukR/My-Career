import React from 'react'
import Prop5 from './Prop5'

export default function Prop4(props) {
  return (
    <div>
      Prop4
      <Prop5 house={props.house} owner={props.owner} />
    </div>
  );
}
