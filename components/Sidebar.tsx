import React from 'react'
import {SiShopware} from 'react-icons/si'
import {MdOutlineCancel} from 'react-icons/md'
// import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import Link from 'next/link'
// import 
import { links } from '../data/dummy';
// import { NavLink } from './Navlink'
import { useRouter } from 'next/router'
import { useStateContext } from '../contexts/ContextProvider'
import Tooltip from './Tooltip';

function Sidebar() {

  const { pathname } = useRouter()

  const {activeMenu, setActiveMenu, screenSize} = useStateContext()

  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }

  // const activeMenu = true
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2-lg text-white text-md m-2'
 



  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>

      {activeMenu && (<>
        <div className='flex justify-between items-center'>
          <Link href='/'>
            <a onClick={handleCloseSideBar} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
            <SiShopware />
            <span>ecom</span>
            </a>
          </Link>
          <Tooltip content="close">
            <button 
            type='button' 
            onClick={()=>{
              setActiveMenu((prv)=> !prv)
            }} 
            className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block '
            >
              <MdOutlineCancel />
            </button>
          </Tooltip>
        </div>

        <div className='mt-10'>
          {links.map( item => (
            <div key={item.title} >
              <p className='text-gray-400 mt-4 uppercase'>
                {item.title}
              </p>
              {item.links.map(link => (
                <Link key={link.name} href={`/${link.name}`}>

                 <div onClick={handleCloseSideBar} className={normalLink} key={link.name}>
                  {link.icon}
                <span key={link.name}> {link.name}</span>
                 </div>
                </Link>
             
              ))}
            </div>
          ))}
        </div>
      
      </>)}



    </div>

  )
}

export default Sidebar

