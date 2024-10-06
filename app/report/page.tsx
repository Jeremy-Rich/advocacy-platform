'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Script from 'next/script'

const data = [
  { name: 'Corporate Actions', count: 15 },
  { name: 'Legal Failures', count: 8 },
  { name: 'Livestock Theft', count: 12 },
  { name: 'Regulatory Inaction', count: 10 },
  { name: 'Financial Irregularities', count: 7 },
]

const locations = [
  { name: 'Ansevata Nominees Pty Ltd', lat: -37.8136, lng: 144.9631 },
  { name: 'Rich Group Headquarters', lat: -37.8140, lng: 144.9633 },
  { name: 'Livestock Farm', lat: -36.3708, lng: 145.4000 },
]

export default function Report() {
  const [showReferences, setShowReferences] = useState(false)
  const [map, setMap] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google && window.google.maps) {
      initMap()
    }
  }, [])

  const initMap = () => {
    const mapOptions = {
      center: { lat: -37.8136, lng: 144.9631 },
      zoom: 8
    }
    const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions)
    setMap(newMap)

    locations.forEach(location => {
      new window.google.maps.Marker({
        position: { lat: location.lat, lng: location.lng },
        map: newMap,
        title: location.name
      })
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <Script
        src={`https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=Function.prototype`}
        onLoad={initMap}
      />
      <div className="max-w-6xl mx-auto">
        <Card className="mb-8">
          <CardHeader className="bg-red-700">
            <CardTitle className="text-3xl font-bold text-white">Urgent Request for Immediate Investigation</CardTitle>
            <p className="text-white mt-1">Systemic Corruption, Corporate Misconduct, and Legal Failures within the Rich Group and Associated Entities</p>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-700 mb-6">Dear Sir/Madam,</p>
            <p className="text-gray-700 mb-6">
              I am reaching out with utmost urgency, compelled by circumstances that can no longer be ignored, to request the Australian Federal Police's immediate and thorough investigation into what I believe constitutes systemic corruption and misconduct that spans across corporate, legal, and governmental institutions.
            </p>

            <Accordion type="single" collapsible className="w-full mb-8">
              <AccordionItem value="item-1">
                <AccordionTrigger>1. Unlawful Corporate Actions: A Case of Deliberate Subversion</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-4">
                    The crux of this investigation begins with the unlawful manipulation of corporate governance within Ansevata Nominees Pty Ltd and the broader Rich Group, where, under the guise of legality, fundamental principles of corporate law were cast aside to facilitate unauthorised and self-serving changes to directorships, shareholdings, and corporate structure.
                  </p>
                  <Button 
                    onClick={() => window.open('https://asic.gov.au/regulatory-resources/corporate-governance/', '_blank')}
                    className="mt-2"
                  >
                    ASIC Corporate Governance Info
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>2. The Legal Profession's Complicity: Failures that Perpetuate Injustice</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-4">
                    In an effort to seek justice and redress, I approached multiple legal professionals, including Graham Ephron of Effron & Associates, Graham Fountain, and Sam Bond, all of whom were provided with clear documentation and instructed to intervene. Their collective failure to act is not just professional negligence; it borders on wilful blindness.
                  </p>
                  <Button 
                    onClick={() => window.open('https://www.lsbc.vic.gov.au/', '_blank')}
                    className="mt-2"
                  >
                    Victorian Legal Services Board
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>3. Livestock Theft and Irregularities in Agricultural Management</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-4">
                    Further compounding these issues is the theft of livestock from my farm, and the manipulation of records within the National Livestock Identification System (NLIS). Despite raising these concerns with the Department of Agriculture, and individuals such as Liz Howard and Martin Tullock, no satisfactory resolution has been forthcoming.
                  </p>
                  <Button 
                    onClick={() => window.open('https://www.nlis.com.au/', '_blank')}
                    className="mt-2"
                  >
                    National Livestock Identification System
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>4. The Broader Pattern of Systemic Corruption: A Culture of Evasion</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-4">
                    The actions taken against me are part of a broader, systemic issue that spans across corporate governance, legal practice, and government regulation. The failures are not limited to individual actors but reflect a culture of evasion, inaction, and complicity.
                  </p>
                  <Button 
                    onClick={() => window.open('https://www.ibac.vic.gov.au/', '_blank')}
                    className="mt-2"
                  >
                    IBAC Victoria
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>5. Offshore Transactions and Financial Irregularities</AccordionTrigger>
                <AccordionContent>
                  <p className="text-gray-700 mb-4">
                    Finally, there is credible evidence to suggest that offshore transactions involving Adam Joshua Rich and others within the Rich Group may constitute money laundering, tax evasion, or other financial crimes. These transactions require immediate scrutiny and investigation.
                  </p>
                  <Button 
                    onClick={() => window.open('https://www.austrac.gov.au/', '_blank')}
                    className="mt-2"
                  >
                    AUSTRAC
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Incident Overview</h2>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Key Locations</h2>
              <div id="map" style={{ width: '100%', height: '400px' }}></div>
            </div>

            <Button onClick={() => setShowReferences(!showReferences)} className="mt-8">
              {showReferences ? 'Hide' : 'Show'} References
            </Button>

            {showReferences && (
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h3 className="text-xl font-bold mb-2">References</h3>
                <ul className="list-disc pl-5">
                  <li>Corporations Act 2001 (Cth)</li>
                  <li>ASIC Regulatory Guide 76: Related party transactions</li>
                  <li>Legal Profession Uniform Law Application Act 2014 (Vic)</li>
                  <li>National Livestock Identification System (NLIS) Database</li>
                  <li>Independent Broad-based Anti-corruption Commission Act 2011 (Vic)</li>
                  <li>Anti-Money Laundering and Counter-Terrorism Financing Act 2006 (Cth)</li>
                </ul>
              </div>
            )}

            <div className="mt-12">
              <p className="text-gray-700 font-semibold">
                I implore you to take immediate action on this matter. The scale and scope of these issues demand nothing less than a full and impartial investigation by the Australian Federal Police.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}