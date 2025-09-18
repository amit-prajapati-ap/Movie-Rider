import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import {Home, Movies, MovieDetails, SeatLayout, MyBookings, Favorite} from '@pages'
import { Navbar, Footer, ContactUs, PageNotFound } from '@components'
import {ToastContainer} from 'react-toastify'
import { Dashboard, Layout, AddShows, ListBookings, ListShows } from '@pages/admin'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith("/admin")
  return (
    <>
      <ToastContainer/>
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/admin/*' element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='add-shows' element={<AddShows/>}/>
          <Route path='list-shows' element={<ListShows/>}/>
          <Route path='list-bookings' element={<ListBookings/>}/>
        </Route>
      </Routes>

      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
