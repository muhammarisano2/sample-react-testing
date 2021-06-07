import React,{useState} from 'react'

function Form() {
  const [result, setResult] = useState("")
  const [name, setName] = useState("") 
  const handleClick = ()=>{
    setResult(name)
    setName("")
  }
  return (
    <div>
      <h4 data-testid="result">{result}</h4>
      <label htmlFor="name">Nama</label>
      <input type="text" value={name} name="nama" id="name" onChange={(e)=>console.log(e)}/>
      <button onClick={handleClick}>Simpan</button>
    </div>
  )
}

export default Form
