import React from 'react'
import StoryList from '@/components/StoryList'

export default function StoriesPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Community Stories</h1>
        <p className="mt-2 text-xl text-gray-600">Explore inspiring stories from our community members.</p>
      </header>
      <section>
        <StoryList />
      </section>
    </main>
  )
}
