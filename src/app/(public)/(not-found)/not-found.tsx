'use client'

import BackHomeBtn from '@/components/common/back-home-btn'
import WarningSign from '@/components/common/warning_sign'



const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <WarningSign />
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-800">Page With This Path Wasn't Created</h2>
        <p className="text-base text-gray-600">
          Sorry, the page you're looking for doesn’t exist yet or has been moved.
        </p>
        <div className="mt-8">
          <BackHomeBtn />
        </div>
      </div>
    </div>
  )
}


export default NotFoundPage