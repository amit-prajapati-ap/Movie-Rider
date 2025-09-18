import { assets } from '@/assets/assets'
import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const user = {
    firstName: 'Amit',
    lastName: 'Prajapati',
    imageUrl:assets.profile
  }

  const adminNavLinks = [
    {name: 'Dashboard', path: '/admin', icon: LayoutDashboardIcon},
    {name: 'Add Shows', path: '/admin/add-shows', icon: PlusSquareIcon},
    {name: 'List Shows', path: '/admin/list-shows', icon: ListIcon},
    {name: 'List Bookings', path: '/admin/list-bookings', icon: ListCollapseIcon},
  ]
  return (
    <div className='has-[calc(100vh-64px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm'>
      <img src={user.imageUrl} alt="sidebar" className='h-9 md:h-14 rounded-full mx-auto' />
      <p className='mt-2 text-base max-md:hidden'>{user.firstName} {user.lastName}</p>

      <div className='w-full'>
        {adminNavLinks.map((link, index) => (
          <NavLink className={({isActive}) => `relative flex items-center max-md:justify-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6 text-gray-400 ${isActive && "bg-primary-light/15 text-primary-light group"}`} to={link.path} key={index} end>
            {({isActive}) => (
              <>
                <link.icon className={`w-5 h-5 ${isActive && "fill-primary-light"}`} />
                <p className='hidden md:block'>{link.name}</p>
                <span className={`w-1.5 h-10 rounded-l right-0 absolute ${isActive && 'bg-primary-light'}`}/>
               </>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
