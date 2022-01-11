import React, { useState } from "react";

function Form(props) {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);

  function handleChange(event) {
    setData(event.target.value);
    setPrint(false);
  }
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={() => setPrint(true)}>Button </button>

      {print ? <h1>{data}</h1> : null}
    </div>
  );
}

export default Form;
