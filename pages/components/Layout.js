import React from 'react'
import Nav from './Nav'
export default function Layout({children}) {
  return (
    <>
    <div className='bg-blue-900'>
        <div className='block p-4 md:p-0 md:hidden text-white'>
          <button onClick={()=>setShowNav(!showNav)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          </button>
        </div>
        <div className='flex min-h-screen'>
        <Nav/>
          <div className='bg-white w-full min-h-screen'>
            <div className='bg-blue-900 w-full'></div>
            <div className='p-8'>
               {children}
            </div>
           
           </div>
        </div>
      </div>
    </>
  )
}
