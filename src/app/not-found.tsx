// app/not-found.tsx
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="bg-red-100 text-red-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          404
        </h1>
        <h2 className="text-2xl font-bold text-gray-800">Page With This Path Wasn't Created</h2>
        <p className="text-base text-gray-600">
          Sorry, the page you're looking for doesn’t exist yet or has been moved.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-800 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
          >
            ← Go Back Home
          </Link>
        </div>
      </div>
    </div>
  )
}


export default NotFoundPage