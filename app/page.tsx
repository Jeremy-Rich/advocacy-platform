import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Zion Advocacy Platform</h1>
      <p className="mb-8">Share your story and make a difference in our community.</p>
      <div className="space-x-4">
        <Link href="/submit-story" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit Your Story
        </Link>
        <Link href="/stories" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Read Stories
        </Link>
      </div>
    </div>
  )
}