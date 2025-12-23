'use client'

import BackHomeBtn from '@/components/UI/back-home-btn'
import WarningSign from '@/helpers/warning_sign'



const NoAccess = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <WarningSign />
        <h1 className="text-4xl text-#ffffff-800 sm:text-5xl font-bold">
          This page only for authenticated person!
        </h1>
        <h2 className="text-2xl font-bold text-#ffffff-800">Sorry, the page you're looking for is for authorized people only.</h2>
        <p className="text-base text-#ffffff-800">
          You should either move for register or move for another page 
        </p>
        <div className="mt-8">
          <BackHomeBtn />
        </div>
      </div>
    </div>
  )
}


export default NoAccess