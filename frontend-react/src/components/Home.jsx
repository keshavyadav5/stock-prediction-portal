import React, { useContext } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'
import Header from './Header'
import Footer from './Footer'
import { AuthContext } from '@/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleClick = () => {
    isLoggedIn ? 
    navigate('/dashboard')
    :
    navigate('/signIn')
  }
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Header />

        {/* Centered Card */}
        <div className="flex-grow flex items-center justify-center px-4">
          <Card className="w-full max-w-2xl shadow-lg rounded-2xl p-6 bg-white/80 backdrop-blur-md border border-gray-200">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center mb-2">
                Stock Prediction App
              </CardTitle>
              <CardDescription className="text-justify text-gray-600">
                This stock prediction application utilizes machine learning techniques, specifically employing Keras, and LSTM model, integrated within the Django framework. It forecasts future stock prices by analyzing 100-day and 200-day moving averages, essential indicators widely used by stock analysts to inform trading and investment decisions.
              </CardDescription>
            </CardHeader>

            <CardFooter className="flex justify-center">
              <Button onClick={handleClick} className='cursor-pointer text-black bg-green-600 hover:bg-green-500 outline border-green-600 border'>Explore</Button>
            </CardFooter>
          </Card>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home
