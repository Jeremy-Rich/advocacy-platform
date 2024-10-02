// components/NewFeature.tsx
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewFeature() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>New Feature</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This is a new feature we've added to our project.</p>
      </CardContent>
    </Card>
  )
}

// pages/index.tsx
import NewFeature from '@/components/NewFeature'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Zion Advocacy</h1>
      <NewFeature />
      {/* Rest of your existing content */}
    </div>
  )
}
