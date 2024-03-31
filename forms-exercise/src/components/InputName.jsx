import { useState } from "react";
import { Welcome } from "./Welcome";

export function InputName(){
  const [name, setName] = useState ('');

  function handleChangeName (event){
      setName(event.target.value)
  }

function handleSubmit (event){
alert('A name was submitted: ' + name)
event.preventDefault();
}

  return (
    <>
    <form onSubmit={handleSubmit}>
    <label>
      Name:
      <input type="text" data-id="input-name" value={name} onChange={handleChangeName}/>
    </label>
    <input type="submit" value="submit"/>  {/*the value of the submit button need to be with "" and not with {}*/}
    </form>
    <Welcome  name={name}/>
    </>
  )
}