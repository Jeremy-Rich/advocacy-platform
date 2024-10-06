'use client'

import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Search } from 'lucide-react'
import Link from 'next/link'

interface Story {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
}

const StoryList: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchStories = async (pageNum: number) => {
    try {
      setLoading(true)
      const response = await fetch(`/api/stories?page=${pageNum}&search=${searchTerm}`)
      if (response.ok) {
        const data = await response.json()
        if (pageNum === 1) {
          setStories(data)
        } else {
          setStories(prevStories => [...prevStories, ...data])
        }
        setHasMore(data.length === 10) // Assuming 10 stories per page
      } else {
        setError('Failed to fetch stories')
      }
    } catch (error) {
      setError('Error fetching stories')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStories(1)
  }, [searchTerm])

  const handleLoadMore = () => {
    if (!loading && hasMore) {
      setPage(prevPage => prevPage + 1)
      fetchStories(page + 1)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
    setPage(1)
  }

  if (error) {
    return <div className="text-red-500">{error}</div>
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={handleSearch}
          className="flex-grow"
        />
        <Button variant="outline" size="icon">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      {stories.map((story) => (
        <Card key={story.id}>
          <CardHeader>
            <CardTitle>{story.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">By {story.author} | {new Date(story.createdAt).toLocaleDateString()}</p>
            <p>{story.content.substring(0, 150)}...</p>
          </CardContent>
          <CardFooter>
            <Link href={`/stories/${story.id}`} passHref>
              <Button variant="link">Read More</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
      {loading && <div className="flex justify-center"><Loader2 className="h-6 w-6 animate-spin" /></div>}
      {!loading && hasMore && (
        <div className="flex justify-center">
          <Button onClick={handleLoadMore}>Load More</Button>
        </div>
      )}
    </div>
  )
}

export default StoryList
