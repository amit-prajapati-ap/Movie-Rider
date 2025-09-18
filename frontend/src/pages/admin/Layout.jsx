import React from 'react'
import { AdminFooter, AdminNavbar, AdminSidebar } from '@/components'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <AdminNavbar/>
      <div className='flex'>
        <AdminSidebar/>
        <div className='flex-1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
          <Outlet/>
        </div>
      </div>
      <AdminFooter/>
    </>
  )
}

export default Layout
