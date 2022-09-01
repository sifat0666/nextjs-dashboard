import { omit } from 'lodash'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const ABC = (props) => {
  const {register, watch, handleSubmit, formState: {errors}} = useForm()




    const [file, setFile] = useState()


  const onSubmit = (values: any) => {
    const image = console.log(values.img[0])
    const data = omit(values, 'img')
    console.log(data)
  } 

  const handleChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend =() => {
      setFile(reader.result as any)
    }
  }


  return (
    <div className='grid place-items-center h-screen '>
      <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="title">Title:</label>
        <input 
            className='border-2' 
            {...register('title')}
        />
        <span>{errors.title?.message as any}</span>


        <label htmlFor="content">Content:</label>
        <textarea 
            className='border-2' 
            {...register('content')}
        />
        <span>{errors.content?.message as any}</span>

        <label htmlFor="price">Price:</label>
        <input 
            type='number'
            className='border 2'
            {...register('price')} 
        />
        <span>{errors.price?.message as any}</span>

       <label htmlFor="image" className='mt-10'>Image:</label>
        <div className='flex gap-5 p-24'>


        <input type="file" {...register('img')} onChange={e => handleChange(e)}/> 
      <img src={file} className='w-40' />
        </div>
        <input 
          type="submit" 
          value="publish"
          className='bg-blue-200 p-3 text-white rounded-lg'
        />
      </form>


    </div>
  )
}

export default ABC