// import { Tooltip } from '@syncfusion/ej2-react-popups'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChatLeft } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { IconType } from 'react-icons/lib'
import { MdArrowDownward, MdKeyboardArrowDown } from 'react-icons/md'
import { RiNotification3Line } from 'react-icons/ri'
import { useQuery } from 'react-query'
import { useStateContext } from '../contexts/ContextProvider'
import Cart from './Cart'
import Chat from './Chat'
import Notification from './Notification'
import Tooltip from './Tooltip'
import UserProfile from './UserProfile'


const NavButton = ({title, customFunc, icon, color, dotColor}:{ 
  title: string; 
  customFunc: () => void; 
  color: string;
  icon: React.ReactNode
  dotColor: string
}) => {

  return <Tooltip content={title}>
    <button type='button' onClick={customFunc} className='relative text-xl rounded-full p-3 hover:bg-light-gray'>
      <span style={{background: dotColor  }} className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2' />
        {icon}
    </button>
  </Tooltip>
}



function Navbar() {
 const {data} = useQuery(['user'], () => axios.get('http://localhost:3000/api/user', {withCredentials: true}).then(res => res.data))
  const {activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick} = useStateContext()
  // useEffect(console.log(data), ())
  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
      <NavButton 
        title='menu' 
        customFunc={()=> setActiveMenu(prv => !prv)} 
        color='blue' 
        icon={<AiOutlineMenu />} 
        dotColor=''
      />
        <div className='flex'>
           <NavButton 
            title='Cart' 
            customFunc={()=> handleClick('cart')} 
            color='blue' 
            icon={<FiShoppingCart />} 
            dotColor=''
          />
           <NavButton 
            title='Chat' 
            customFunc={()=> handleClick('chat')} 
            color='blue' 
            icon={<BsChatLeft />} 
            dotColor='#03C9D7'
          />
          
           <NavButton 
            title='Notification' 
            customFunc={()=> handleClick('notification')} 
            color='blue' 
            icon={<RiNotification3Line />} 
            dotColor='#03C9D7'
          />
            <div>

              {data?.name ? (
                <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' onClick={() => handleClick('userProfile')}>
              
              
              <img 
                className='rounded-full w-8 h-8'
                src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' 
                alt="user" 
              />
              <p>
                <span className='text-gray-400 text-14'>Hi, </span>
                <span className='text-gray-400 font-bold ml-1 text-14'>{data?.name}</span>
                <MdKeyboardArrowDown className='text-gray-400 text-14' />
              </p>

              
              </div>
              ): (
              <div className='flex p-1 items-center gap-2'>
                <Link href='/auth/login'><button>login</button></Link>
                <Link href='/auth/register'><button>register</button></Link>

              </div>
              )}

            </div>

          {isClicked.cart && <Cart />}
          {isClicked.chat && <Chat />}
          {isClicked.notification && <Notification/>}
          {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  )
}

export default Navbar