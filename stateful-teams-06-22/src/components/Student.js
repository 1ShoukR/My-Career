import React from "react";

export default function Student({ student }) {
  return (
    <div className="studentCard">
      <h3>{student.name}</h3>
      <img className="student-pic" src={student.img} alt="" />
      <div>
        <button className="button-24">Front Enders 4 Lyfe</button>
        <button className="button-24">
          In the Backend, it totally matters
        </button>
      </div>
    </div>
  );
}
