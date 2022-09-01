import type { NextPage } from 'next'
import Link from 'next/link'
// import { TooltipComponent as Tooltip } from '@syncfusion/ej2-react-popups'
import {FiSettings} from 'react-icons/fi'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useStateContext } from '../contexts/ContextProvider'


const DashBoard: NextPage = (props) => {


  const { activeMenu } = useStateContext()

  // const activeMenu = true

  return (
    <div>
  

      <div>

              <Link href='/'><a href="">ECommerce</a></Link>
              <Link href='/ecommerce'>Ecommerce</Link>

              {/* Pages */}
              <Link href='/orders'>Orders</Link>
              <Link href='/employee'>Employee</Link>
              <Link href='/customers'>Customers</Link>

              {/* Apps */}
              <Link href='/kanban'>Kanban</Link>
              <Link href='/editor'>Ediotor</Link>  
              <Link href='/calender'>Calender</Link>
              <Link href='/color-picker'>Color picker</Link>
              
              {/* charts */}
              <Link href='/chart/line'>Line</Link>
              <Link href='/chart/area'>Area</Link>
              <Link href='/chart/bar'>Bar</Link>
              {/* <Link href='line'>Line</Link> */}
              <Link href='/chart/financial'>financial</Link>
              <Link href='/chart/color-mapping'>ColorMapping</Link>
              <Link href='/chart/pyramid'>Pyramid</Link>
              <Link href='/chart/stacked'>Stacked</Link> 
            </div>

    </div>
  )
}

export default DashBoard