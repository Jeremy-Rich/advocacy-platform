import React from 'react'
import StoryList from '../../components/StoryList'

export default function Stories() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Community Stories</h1>
      <StoryList />
    </div>
  )
}