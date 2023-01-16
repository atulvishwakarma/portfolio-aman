import React from 'react'
import { RiArrowGoBackFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {
  return (
    <div className='breadcrumbs mb-4 container max-w-full mx-auto px-4'>
    <Link to="/" className=' text-slate-600 bg-white shadow dark:bg-slate-600 dark:text-slate-400 text-lg inline-block p-1 px-4 rounded no-underline hover:shadow-lg dark:hover:text-slate-300 hover:text-slate-700'>
        <span className='flex justify-center items-center'><RiArrowGoBackFill />
        <span className='hidden md:inline md:ml-2'>Back</span>
    </span>
        </Link>
    </div>
  )
}

export default Breadcrumbs