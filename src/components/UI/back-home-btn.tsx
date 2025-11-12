import Link from "next/link"

const BackHomeBtn = ()=>{
  return <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent 
            text-base font-medium rounded-md shadow-sm text-white bg-indigo-800
             hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
             focus:ring-indigo-500 transition-colors"
          >
            ← Go Back Home
          </Link>
}

export default BackHomeBtn