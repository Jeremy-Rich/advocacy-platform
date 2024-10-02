import React, { useState, useEffect } from 'react'
import { Upload, FileText, Globe, Check, AlertTriangle, LayoutDashboard } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from 'next/link'

interface Evidence {
  id: string;
  type: 'document' | 'image' | 'video';
  content: string;
  source: string;
  timestamp: Date;
}

interface Story {
  id: string;
  title: string;
  content: string;
  evidenceIds: string[];
  verificationStatus: 'pending' | 'verified' | 'disputed';
}

const EvidenceSubmissionPlatform: React.FC = () => {
  const [evidences, setEvidences] = useState<Evidence[]>([])
  const [stories, setStories] = useState<Story[]>([])
  const [currentStory, setCurrentStory] = useState<Story | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isGeneratingStory, setIsGeneratingStory] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)

  useEffect(() => {
    // Load saved evidences and stories from the dashboard
    const loadSavedData = async () => {
      try {
        const response = await fetch('/api/dashboard/data')
        const data = await response.json()
        setEvidences(data.evidences)
        setStories(data.stories)
      } catch (error) {
        console.error('Failed to load dashboard data:', error)
      }
    }
    loadSavedData()
  }, [])

  const handleEvidenceSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    const newEvidence: Evidence = {
      id: Date.now().toString(),
      type: 'document',
      content: (event.target as any).evidenceContent.value,
      source: (event.target as any).evidenceSource.value,
      timestamp: new Date(),
    }
    try {
      const response = await fetch('/api/dashboard/evidence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEvidence),
      })
      if (response.ok) {
        setEvidences([...evidences, newEvidence])
        ;(event.target as HTMLFormElement).reset()
      } else {
        throw new Error('Failed to save evidence')
      }
    } catch (error) {
      console.error('Error submitting evidence:', error)
      alert('Failed to submit evidence. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const generateStory = async () => {
    setIsGeneratingStory(true)
    try {
      const response = await fetch('/api/dashboard/generate-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ evidenceIds: evidences.map(e => e.id) }),
      })
      if (response.ok) {
        const newStory: Story = await response.json()
        setStories([...stories, newStory])
        setCurrentStory(newStory)
      } else {
        throw new Error('Failed to generate story')
      }
    } catch (error) {
      console.error('Error generating story:', error)
      alert('Failed to generate story. Please try again.')
    } finally {
      setIsGeneratingStory(false)
    }
  }

  const verifyStory = async () => {
    if (!currentStory) return
    setIsVerifying(true)
    try {
      const response = await fetch(`/api/dashboard/verify-story/${currentStory.id}`, { method: 'POST' })
      if (response.ok) {
        const verifiedStory: Story = await response.json()
        setStories(stories.map(s => s.id === verifiedStory.id ? verifiedStory : s))
        setCurrentStory(verifiedStory)
      } else {
        throw new Error('Failed to verify story')
      }
    } catch (error) {
      console.error('Error verifying story:', error)
      alert('Failed to verify story. Please try again.')
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Evidence Storytelling Platform</h1>

      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-700">Submit New Evidence</h2>
        <Link href="/dashboard" passHref>
          <Button as="a" variant="outline">
            <LayoutDashboard className="mr-2 h-4 w-4" />
            Go to Dashboard
          </Button>
        </Link>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Submit Evidence</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleEvidenceSubmit}>
            <div className="mb-4">
              <label htmlFor="evidenceContent" className="block text-sm font-medium text-gray-700">Evidence Content</label>
              <Textarea id="evidenceContent" name="evidenceContent" rows={4} required className="mt-1 block w-full" placeholder="Describe your evidence here..." />
            </div>
            <div className="mb-4">
              <label htmlFor="evidenceSource" className="block text-sm font-medium text-gray-700">Source</label>
              <Input type="text" id="evidenceSource" name="evidenceSource" required className="mt-1 block w-full" placeholder="e.g., Personal experience, Document ID, URL" />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Submit Evidence'}
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Generate Story</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={generateStory} disabled={isGeneratingStory || evidences.length === 0}>
            {isGeneratingStory ? 'Generating...' : 'Generate AI Story'}
          </Button>
          {currentStory && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4">
              <h3 className="text-xl font-semibold mb-2">{currentStory.title}</h3>
              <p className="text-gray-600">{currentStory.content}</p>
              <div className="mt-4 flex items-center">
                <span className="mr-2">Verification Status:</span>
                {currentStory.verificationStatus === 'pending' && <AlertTriangle className="text-yellow-500" />}
                {currentStory.verificationStatus === 'verified' && <Check className="text-green-500" />}
                {currentStory.verificationStatus === 'disputed' && <AlertTriangle className="text-red-500" />}
                <span className="ml-1 capitalize">{currentStory.verificationStatus}</span>
              </div>
              <Button onClick={verifyStory} disabled={isVerifying || currentStory.verificationStatus !== 'pending'} className="mt-2">
                {isVerifying ? 'Verifying...' : 'Verify Story'}
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Live Crime Reporting</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">This feature allows users to report crimes in real-time using Google Earth integration.</p>
          <Button>
            <Globe className="mr-2 h-4 w-4" /> Open Live Reporting Map
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default EvidenceSubmissionPlatform