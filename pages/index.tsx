import type { NextPage } from 'next'
import NextLink from 'next/link'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'

const Home: NextPage = (props) => {

  const activeMenu = true

  return (
    <div>
      <div className='flex relative dark:bg-main-dark-bg'>
        <div className='fixed right-4 bottom-4'>
          <TooltipComponent content="Settings" style={{display: 'inline-block', margin:'60px' }}>
            <button 
              type='button'
              className='text-3xl p-3 hover:drop-shadow-xl hover:bg-gray-400 text-white'

              style={{background:'blue', borderRadius: '50%'  }}
            >
              <FiSettings />
              {/* showtooltip */}
            </button>
          </TooltipComponent>
        </div>
        <div>
        {activeMenu ? (
          <div className='w-72 sidebar dark:bg-secondary-dark-bg bg-white'>
            Sidebar
          </div>
        ):(
          <div className='w-0 dark:bg-secondary-dark-bg'>
          <div className={
            activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full' : 'dark:bg-main-bg bg-main-bg min-h-screen w-full flex'
          }>

          </div>
          </div>
        )}
        </div>
        <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg
        navbar w-full'>
          Navbar
        </div>
      </div>
      <div>
        {/* dashboard */}
        <NextLink href='/'><a href="">ECommerce</a></NextLink>
        <NextLink href='/ecommerce'>Ecommerce</NextLink>

        {/* Pages */}
        <NextLink href='/order'>Order</NextLink>
        <NextLink href='/employee'>Employee</NextLink>
        <NextLink href='/customers'>Customers</NextLink>

        {/* Apps */}
        <NextLink href='/kanban'>Kanban</NextLink>
        <NextLink href='/editor'>Ediotor</NextLink>  
        <NextLink href='/calender'>Calender</NextLink>
        <NextLink href='/color-picker'>Color picker</NextLink>
        
        {/* charts */}
        <NextLink href='/line'>Line</NextLink>
        <NextLink href='/area'>Area</NextLink>
        <NextLink href='bar'>Bar</NextLink>
        <NextLink href='line'>Line</NextLink>
        <NextLink href='financial'>financial</NextLink>
        <NextLink href='color-mapping'>ColorMapping</NextLink>
        <NextLink href='pyramid'>Pyramid</NextLink>
        <NextLink href='/stacked'>Stacked</NextLink>
      </div>
    </div>
  )
}

export default Home
