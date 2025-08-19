import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button'

const Home = () => {
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
              <Button className='cursor-pointer bg-green-600 hover:bg-white outline border-green-600 border'>Explore</Button>
            </CardFooter>
          </Card>
        </div>

        <Footer />
      </div>
    </>
  )
}

export default Home
