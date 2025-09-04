import { assets } from '@/assets/assets'
import { ArrowRight, CalculatorIcon, ClockIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen'>
      <img src={assets.marvelLogo} alt="" className='max-h-11 lg:h-11 mt-20' />
      <h1 className='text-5xl md:text-[70px] font-semibold max-w-110'>Guardians <br /> of the Galaxy</h1>
      <div className='flex items-center gap-4 text-gray-300'>
        <span>Action | Adventure | Sci-fi</span>
        <div className='flex items-center gap-1'>
          <CalculatorIcon className='w-4.5 h-4.5'/> 2025
        </div>
        <div className='flex items-center gap-1'>
          <ClockIcon className='w-4.5 h-4.5'/> 2h 5m
        </div>
      </div>

      <p className='max-w-md text-gray-300'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
      <Button onClick={() => navigate('/movies')} className={'bg-primary-light hover:bg-primary-dull rounded-full'}>
        Explore Movies
        <ArrowRight className='w-5 h-5'/>
      </Button>
    </div>
  )
}

export default HeroSection
