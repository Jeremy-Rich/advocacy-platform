'use client'

import React, { useEffect, useState } from 'react'

interface Story {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
}

const StoryList: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([])

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await fetch('/api/stories')
        if (response.ok) {
          const data = await response.json()
          setStories(data)
        } else {
          console.error('Failed to fetch stories')
        }
      } catch (error) {
        console.error('Error fetching stories:', error)
      }
    }

    fetchStories()
  }, [])

  return (
    <div className="space-y-4">
      {stories.map((story) => (
        <div key={story.id} className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2">{story.title}</h2>
          <p className="text-gray-600 mb-2">By {story.author}</p>
          <p>{story.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  )
}

export default StoryList