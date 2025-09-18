import { dummyShowsData } from '@/assets/assets'
import { AdminTitle } from '@/components'
import dateFormat from '@/lib/dateFormat'
import React, { useEffect, useState } from 'react'

const ListShows = () => {
  const currency = import.meta.env.VITE_CURRENCY
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllShows = async () => {
    try {
      setShows([{
        movie: dummyShowsData[0],
        showDateTime: "2025-06-30T02:30:00.000Z",
        showPrice: 59,
        occupiedSeats: {
          "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
          "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
          "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
        }
      }])
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllShows()
  }, [])

  return !loading ? (
    <>
      <AdminTitle text1={"List"} text2={"Shows"} />
      <div className='max-w-4xl mt-6 overflow-x-auto'>
        <table className='w-full border-collapse rounded-md overflow-hidden text-nowrap'>
          <thead>
            <tr className='bg-primary-light/20 text-left text-white'>
              <th className='p-2 font-medium pl-5'>Movie Name</th>
              <th className='p-2 font-medium'>Show Time</th>
              <th className='p-2 font-medium'>Total Bookings</th>
              <th className='p-2 font-medium'>Earnings</th>
            </tr>
          </thead>
          <tbody className='text-sm font-light'>
            {shows.map((show, index) => (
              <tr key={index} className='border-b border-primary-light/10 bg-primary-light/5 even:bg-primary-light/10'>
                <td className='p-2 min-w-45 pl-5'>{show.movie.title}</td>
                <td className='p-2'>{dateFormat(show.showDateTime)}</td>
                <td className='p-2'>{Object.keys(show.occupiedSeats).length}</td>
                <td className='p-2'>{currency} {Object.keys(show.occupiedSeats).length * show.showPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  ) : (
    <div className='w-full flex flex-col gap-1 items-center justify-center'>
      <div className='spinner'></div>
    </div>
  )
}

export default ListShows
