import React from 'react'
import Link from 'next/link'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Zion Advocacy
          </Link>
          <div className="space-x-4">
            <Link href="/submit-story" className="hover:underline">
              Submit Story
            </Link>
            <Link href="/stories" className="hover:underline">
              View Stories
            </Link>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2023 Zion Advocacy Platform. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout