'use client'

import BackHomeBtn from '@/components/UI/back-home-btn'
import WarningSign from '@/helpers/warning_sign'
import { useSearchParams } from 'next/navigation'



const NoAccess = () => {

  const searchParams = useSearchParams()
  const pageName = searchParams.get('message') || 'current page'

  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <WarningSign />
        <h1 className="text-4xl text-amber-700 sm:text-4xl font-bold">
          {`The   ${pageName.toLocaleUpperCase()}   is only for authenticated person!`}
        </h1>
        <h2 className="text-2xl font-bold  text-amber-100">{`Sorry, ${pageName.toUpperCase()} you're looking for is for authorized people only.`}</h2>
        <p className="text-base text-amber-100">
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