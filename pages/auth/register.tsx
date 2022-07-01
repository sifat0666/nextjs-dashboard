import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import NextLink from 'next/link'
import { useMutation } from 'react-query'
import { object, string } from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/router'


type Inputs = {
    name: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

const createUserSchema = object({
  name: string().nonempty({
    message: "Name is required",
  }),
  password: string()
    .min(6, "Password too short - should be 6 chars minimum")
    .nonempty({
      message: "Password is required",
    }),
  passwordConfirmation: string().nonempty({
    message: "passwordConfirmation is required",
  }),
  email: string({
    required_error: "Email is required",
  })
    .email("Not a valid email")
    .nonempty({
      message: "Password is required",
    }),
}).refine((data) => data.password === data.passwordConfirmation, {
  message: "Passwords do not match",
  path: ["passwordConfirmation"],
});

// type CerateUserInput = TypeOf<typeof createUserSchema>





export default function register() {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>({
        resolver: zodResolver(createUserSchema)
    })

    const router = useRouter()

    // const {registerError, setRegiserError} = useState(null)
    const mutation = useMutation( values => {
        const requestOption = {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
                    'Accept': 'application/json'},
        body: JSON.stringify(values)
        }

        return fetch('http://localhost:1337/api/users', requestOption)

    })

   const onSubmit: SubmitHandler<Inputs> = async value => {
        try {
            await axios.post(
                `http://localhost:3000/api/register`,
                value,
                { withCredentials: true }
            ).then(res => {
                console.log("res", res)
                const data = res.data 
                if(data.message === 'success'){
                    router.push('/')
                }
            })
            .then(err => console.log('err',err));
            

            
            
            } catch (e) {
            // setLoginError(e.message);
            console.log(e)
            }
    } 
    // console.log({errors})

  return (
    <div className='grid place-items-center h-screen '>
      {/* <p>{registerError}</p> */}
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="email">email:</label>
            <input 
                className='border-2' 
                {...register('email')}
            />
            {errors.email?.message}

            <label htmlFor="name">name:</label>
            <input 
                className='border-2' 
                {...register('name')}
            />
            {errors.name?.message}

            <label htmlFor="pasword">pasword</label>
            <input 
                className='border 2'
                {...register('password')} 
            />
            {errors.password?.message}
            
            <label htmlFor="confimPasword">confim pasword</label>
            <input 
                className='border 2'
                {...register('passwordConfirmation')} 
            />
            {errors.passwordConfirmation?.message}

            <input 
                type="submit" 
                value="register"
                className='bg-blue-200 p-3 text-white rounded-lg'
                
            />
        </form>
        <div><NextLink href='/auth/login'>login</NextLink></div>
    </div>
  )
}
