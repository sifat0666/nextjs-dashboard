import React from 'react'

function Tooltip({children, content}: {children:React.ReactNode, content: string}) {
  return (
    <div>
      {/* <div className="flex items-center justify-center w-screen h-screen"> */}

	{/* <!-- Component Start --> */}
	<div className="relative flex flex-col items-center group">
		{children}
		<div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
			<div className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">{content}</div>
			<div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
		</div>
	</div>
	{/* <!-- Component End  --> */}

{/* </div> */}
    </div>
  )
}

export default Tooltip