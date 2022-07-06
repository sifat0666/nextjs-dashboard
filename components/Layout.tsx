// import { Tooltip } from '@syncfusion/ej2-react-popups'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { FiSettings } from 'react-icons/fi'
import { useStateContext } from '../contexts/ContextProvider'
import Footer from './Footer'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Tooltip from './Tooltip'

function Layout({children}: {children: ReactNode}) {

      const { activeMenu } = useStateContext()

  return (
    <div>
        <div>

      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4' style={{zIndex: '1000' }}>
          <Tooltip content="Settings" >
            <button 
              type='button'
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-400 text-white'

              style={{background:'blue', borderRadius: '50%'  }}
            >
              <FiSettings />
              {/* showtooltip */}
            </button>
          </Tooltip>
        </div>
        {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            {children}
            <Footer />
          </div>

      </div>
      
    </div>
    </div>
  )
}

export default Layout