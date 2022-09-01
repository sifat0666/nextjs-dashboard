import type { NextPage } from 'next'
import Link from 'next/link'
// import { TooltipComponent as Tooltip } from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useStateContext } from '../contexts/ContextProvider'
import { productsPerformance } from '../data/dummy';
import axios, { Axios } from 'axios'
import { BASE_URL } from '../utils'
import { resolveMx } from 'dns'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'


const Home =  (props) => {

  const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('/api/product').then(res =>
       res.json()
     )
   )


  // const activeMenu = true

  return (
    <div>

       <h1>{data.title}</h1>

      
    </div>
  )
}

export default Home
