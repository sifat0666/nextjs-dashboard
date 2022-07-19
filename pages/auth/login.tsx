import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import NextLink from 'next/link'
import { useMutation } from 'react-query'
import { useRouter } from 'next/router'
import axios from 'axios'
import { resolveSoa } from 'dns'
// import { getGoogleOAuthURL, getGoogleURL } from '../../utils/getGoogleUrl'


type Inputs = {
    email: string,
    password: string
}

export default function Login(props: any) {

    const {register, handleSubmit, formState: {errors}} = useForm<Inputs>()
    const router = useRouter()


    // const mutation = useMutation( values => {
    //     const requestOption = {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json',
    //                 'Accept': 'application/json'},
    //     body: JSON.stringify(values),
    //     withCredential: true
    //     }

    //     return fetch('http://localhost:1337/api/sessions', requestOption)

    // })

    const onSubmit: SubmitHandler<Inputs> = async value => {
        try {
            await axios.post(
                `http://localhost:3000/api/login`,
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

  return (
    <div className='grid place-items-center h-screen '>
        <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>

            <label htmlFor="email">email:</label>
            <input 
                className='border-2' 
                {...register('email', {required: true})}
            />
            {errors.email && <span>email required</span>}

            <label htmlFor="pasword">pasword</label>
            <input 
                className='border 2'
                {...register('password', {required: true})} 
            />
            {errors.password && <span>this field is required</span>}
            
            <input 
                type="submit" 
                value="login"
                className='bg-blue-200 p-3 text-white rounded-lg'
                
            />
        </form>
        {/* <div><a href={getGoogleOAuthURL()}> Google </a></div> */}
        <div><NextLink href='/auth/register'>login</NextLink></div>
    </div>
  )
}
