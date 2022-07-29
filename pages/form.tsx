import axios from 'axios'
import React, { useState } from 'react'

const Form = () => {

  const [file, setFile] = useState()

  const handleChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend =() => {
      setFile(reader.result as any)
    }
  }

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const result = await axios.post('http://localhost:3000/api/image', {img: file})
    try {
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form onSubmit={e => onSubmit(e)}>
        <input type="file" name="" id="" onChange={e => handleChange(e)}/>
        <button type='submit'> sumbit</button>
      </form>

      <img src={file} alt="" />
    </div>
  )
}

export default Form