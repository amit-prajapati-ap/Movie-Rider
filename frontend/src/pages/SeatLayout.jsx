import { assets, dummyDateTimeData, dummyShowsData } from '@/assets/assets'
import { BlurCircle } from '@/components'
import { toastOptions } from '@/constants'
import isoTimeFormat from '@/lib/isoTimeFormat'
import { ArrowRightIcon, ClockIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const SeatLayout = () => {
  const groupRows = [["A", "B"], ["C", "D"], ["E", "F"], ["G", "H"], ["I", "J"]]
  const  {id, date} = useParams()
  const [selectedSeats, setSelectedSeats] = useState([])
  const [selectedTime, setSelectedTime] = useState(null)
  const [show, setShow] = useState(null)
  const navigate = useNavigate()

  const getShow = async () => {
    const show = dummyShowsData.find(show => show._id === id)
    if (show) {
      setShow({
        movie: show,
        dateTime: dummyDateTimeData
      })
    }
  }

  const handelSeatClick = (seatId) => {
    if (!selectedTime) {
      return toast.error("Please select a time", toastOptions)
    }

    if (!selectedSeats.includes(seatId) && selectedSeats.length > 4) {
      return toast.error("You can only select 5 seats", toastOptions)
    } 
    setSelectedSeats(prev => prev.includes(seatId) ? prev.filter(item => item !== seatId) : [...prev, seatId])
  }

  const renderSeats = (row, count = 9) => (
    <div key={row} className='flex gap-2 mt-2'>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        {Array.from({length: count}).map((_, index) => {
          const seatId = `${row}${index + 1}`
          return (
            <button key={seatId} onClick={() => handelSeatClick(seatId)} className={`h-8 w-8 rounded border border-primary-light/60 cursor-pointer ${selectedSeats.includes(seatId) ? "bg-primary-light text-white" : "hover:bg-primary-light/60 transition duration-200"}`}>{seatId}</button>
          )
        })}
      </div>
    </div>
  )
  useEffect(() => {
    getShow()
  }, [])
  return show ? (
    <div className='flex flex-col max-md:items-center md:flex-row px-4 md:px-10 lg:px-20 py-30 md:pt-50'>
      <div className='w-48 bg-primary-light/10 border border-primary-light/20 py-8 rounded-lg h-max md:sticky md:top-30'>
        <p className='px-4'>Available Timings</p>
        <div className='mt-3 text-start space-y-1'>
          {show.dateTime[date].map((item, index) => (
            <div key={index} onClick={() => setSelectedTime(item)} className={`flex gap-2 px-4 py-2 w-full rounded-r-md cursor-pointer transition ${selectedTime?.time === item.time ? "bg-primary-light text-white" : "hover:bg-primary-light/20"}`}>
              <ClockIcon className='w-4 h-4'/>
              <p className='text-sm'>{isoTimeFormat(item.time)}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex flex-col items-center max-md:mt-16'>
          <BlurCircle top='-100px' left='-100px'/>
          <BlurCircle bottom='0' right='0'/>
          <h1 className='text-3xl font-semibold mb-4'>Select Seats</h1>
          <img src={assets.screenImage} alt="screen" />
          <p className='text-gray-400 text-sm mb-6'>SCREEN SIDE</p>
          <div className='flex flex-col items-center mt-10 text-xs text-gray-300'>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-2 mb-6'>
              {groupRows[0].map((row) => renderSeats(row))}
            </div>
            <div className='grid grid-cols-2 gap-11'>
              {groupRows.slice(1).map((group, index) => (
                <div key={index}>
                  {group.map(row => renderSeats(row))}
                </div>
              ))}
            </div>
          </div>

          <button onClick={() => navigate(`/my-bookings`)} className='flex items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary-light hover:bg-primary-dull transition rounded-full font-medium cursor-pointer duration-200 active:scale-95'>Proceed To Checkout <ArrowRightIcon strokeWidth={3} className='w-4 h-4'/></button>

      </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <div className='spinner'></div>
    </div>
  )
}

export default SeatLayout
