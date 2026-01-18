import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Workflow Not Found</h1>
        <p className="text-gray-400 mb-8">The workflow you're looking for doesn't exist.</p>
        <Link 
          href="/"
          className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Back to Portfolio
        </Link>
      </div>
    </div>
  )
}

