import { NextRequest, NextResponse } from 'next/server'

type Story = {
  id: string
  title: string
  content: string
  author: string
  createdAt: string
}

let stories: Story[] = []

export async function GET() {
  return NextResponse.json(stories)
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const newStory: Story = {
    id: Date.now().toString(),
    title: body.title,
    content: body.content,
    author: body.author,
    createdAt: new Date().toISOString()
  }
  stories.push(newStory)
  return NextResponse.json(newStory, { status: 201 })
}