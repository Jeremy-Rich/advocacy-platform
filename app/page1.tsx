import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Zion Advocacy Platform</h1>
      <p className="text-xl mb-8">Share your story and make a difference in our community.</p>
      <div className="flex flex-wrap justify-center space-x-4 space-y-4">
        <Link href="/submit-story" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Your Story
        </Link>
        <Link href="/stories" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Read Stories
        </Link>
        <Link href="/dashboard" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Dashboard
        </Link>
        <Link href="/report" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          View Urgent Report
        </Link>
      </div>
    </main>
  )
}