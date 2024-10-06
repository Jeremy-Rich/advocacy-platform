import { NextResponse } from 'next/server'

// This is a mock database. In a real application, you'd use a proper database.
const stories = [
  { id: '1', title: 'First Story', content: 'This is the content of the first story...', author: 'John Doe', createdAt: '2023-06-01' },
  { id: '2', title: 'Second Story', content: 'This is the content of the second story...', author: 'Jane Smith', createdAt: '2023-06-02' },
  // ... add more stories
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = parseInt(searchParams.get('page') || '1')
  const search = searchParams.get('search') || ''
  const pageSize = 10

  let filteredStories = stories

  if (search) {
    filteredStories = stories.filter(story => 
      story.title.toLowerCase().includes(search.toLowerCase()) ||
      story.content.toLowerCase().includes(search.toLowerCase())
    )
  }

  const paginatedStories = filteredStories.slice((page - 1) * pageSize, page * pageSize)

  return NextResponse.json(paginatedStories)
}