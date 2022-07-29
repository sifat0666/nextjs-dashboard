
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import NextLink from 'next/link'
import { useMutation } from 'react-query'
import { number, object, string } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/router'
import { NextPage } from 'next'


type Inputs = {
    title: string,
    content: string,
    price: number,
    image: [string]
}

const createProductSchema = object({
    title: string().min(1, {
    message: "Title is required",
  }),
  content: string(),
  price: string().min(1, {
    message: 'Price required'
  }),
});

// type CerateUserInput = TypeOf<typeof createUserSchema>

function CreateProduct(props){
    const {register, handleSubmit,watch, formState: {errors}} = useForm<Inputs>({
        resolver: zodResolver(createProductSchema)
    })

    const router = useRouter()

    const [fileinput, setFileInput] = useState()
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState<string>()

    // const previewFile = (file: any) => {
    //     const reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     // reader.result as string
    //     reader.onloadend = () => {
    //         const res = reader.result as string
    //         setPreview(res)
    //     }
    // }

    // const handleFileInputChange = (e: any) => {

    // }


    const onSubmit: SubmitHandler<Inputs> = async value => {

        console.log(value)
        // try {
        //     await axios.post(
        //         `http://localhost:3000/api/register`,
        //         value,
        //         { withCredentials: true }
        //     ).then(res => {
        //         console.log("res", res)
        //         const data = res.data 
        //         if(data.message === 'success'){
        //             // router.push('/')
        //         }
        //     })
        //     .then(err => console.log('err',err));
            

            
            
        //     } catch (e) {
        //     // setLoginError(e.message);
        //     console.log(e)
        //     }
    } 
    // console.log({errors})

  return (
    <div className='grid place-items-center h-screen '>
  
         <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="title">Title:</label>
            <input 
                className='border-2' 
                {...register('title')}
            />
            {errors.title?.message}

            <label htmlFor="content">Content:</label>
            <input 
                type='text'
                className='border-2' 
                {...register('content')}
            />
            {errors.content?.message}

            <label htmlFor="price">price</label>
            <input 
                type='number'
                className='border 2'
                {...register('price')} 
            />
            {errors.price?.message}
            
            <label htmlFor="image">image</label>
            <input 
                type='file'
                className='border 2'
                {...register('image')} 
            />
            {errors.image?.message}
            <div>{typeof(watch("image"))}</div>
            <input 
                type="submit" 
                value="publish"
                className='bg-blue-200 p-3 text-white rounded-lg'
                
            />
        </form> 
        <div><NextLink href='/auth/login'>login</NextLink></div>


    </div>
  )
}

export default CreateProduct