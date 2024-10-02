import React, { useState } from 'react'
import { Upload, Check, AlertTriangle, LayoutDashboard } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import Link from 'next/link'

export default function EvidenceSubmissionPlatform() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0])
    }
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    // Here you would typically send the data to your backend
    // For this example, we'll just simulate a successful submission
    setSubmissionStatus('success')
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Submit Evidence</CardTitle>
              <p className="text-sm text-muted-foreground">
                Please provide details about the evidence you&apos;re submitting.
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-foreground">
                    Title
                  </label>
                  <Input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-foreground">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="location" className="block text-sm font-medium text-foreground">
                    Location
                  </label>
                  <Input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="file" className="block text-sm font-medium text-foreground">
                    Upload File
                  </label>
                  <Input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Upload className="mr-2 h-4 w-4" /> Submit Evidence
                </Button>
              </form>
              {submissionStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center"
                >
                  <Check className="mr-2 h-5 w-5" />
                  Evidence submitted successfully!
                </motion.div>
              )}
              {submissionStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center"
                >
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  An error occurred. Please try again.
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
        <div className="mt-8 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-foreground">Submit New Evidence</h2>
          <Link href="/dashboard" passHref>
            <Button variant="outline">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Go to Dashboard
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
