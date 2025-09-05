import React from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import {Home, Movies, MovieDetails, SeatLayout, MyBookings, Favorite} from '@pages'
import { Navbar, Footer } from '@components'
import {ToastContainer} from 'react-toastify'
import { ContactUs, PageNotFound } from './components'

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
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>

      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
