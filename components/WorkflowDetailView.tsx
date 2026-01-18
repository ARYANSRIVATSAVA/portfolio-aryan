'use client'

import { useState } from 'react'
import Image from 'next/image'

interface WorkflowImage {
  url: string
  step?: string
  description?: string
}

interface Workflow {
  id: string
  title: string
  description: string
  keyFeatures?: string[]
  images: WorkflowImage[]
  category: 'salesMarketing' | 'itOperations' | 'hrRecruiting' | 'other'
}

interface WorkflowDetailViewProps {
  workflow: Workflow
}

const categoryLabels = {
  salesMarketing: 'Sales & Marketing',
  itOperations: 'IT Operations',
  hrRecruiting: 'HR & Recruiting',
  other: 'Other Automations'
}

export default function WorkflowDetailView({ workflow }: WorkflowDetailViewProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium mb-4">
          {categoryLabels[workflow.category]}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {workflow.title}
        </h1>
        <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
          {workflow.description}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className={`grid grid-cols-1 ${workflow.images.length > 0 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
        {/* Image/Video Gallery - Takes 2 columns if images exist, otherwise full width */}
        {workflow.images.length > 0 ? (
          <div className="lg:col-span-2">
            <div className="bg-black/20 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 shadow-2xl relative z-10">
              {/* Large Image/Video Display */}
              <div className="relative bg-black/20 backdrop-blur-sm w-full min-h-[400px] flex items-center justify-center p-6 overflow-auto rounded-t-xl">
                {workflow.images[selectedImage].url.match(/\.(mov|mp4|webm|ogg)$/i) ? (
                  <div className="w-full flex items-center justify-center">
                    <video
                      src={workflow.images[selectedImage].url}
                      controls
                      className="max-w-full h-auto"
                      preload="metadata"
                      style={{ 
                        maxHeight: '80vh',
                        width: 'auto',
                        height: 'auto'
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="w-full flex items-center justify-center">
                    <img
                      src={workflow.images[selectedImage].url}
                      alt={workflow.images[selectedImage].step || workflow.title}
                      className="max-w-full h-auto"
                      style={{ 
                        maxHeight: '80vh',
                        width: 'auto',
                        height: 'auto',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                )}
              </div>

            {/* Step Information */}
            {workflow.images[selectedImage]?.step && (
              <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-semibold">
                    {selectedImage + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {workflow.images[selectedImage].step}
                    </h3>
                    {workflow.images[selectedImage].description && (
                      <p className="text-gray-400 text-sm">
                        {workflow.images[selectedImage].description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Thumbnail Navigation */}
            {workflow.images.length > 1 && (
              <div className="p-4 border-t border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {workflow.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`flex-shrink-0 relative w-24 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx
                          ? 'border-blue-500 ring-2 ring-blue-500/50'
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      {img.url.match(/\.(mov|mp4|webm|ogg)$/i) ? (
                        <video
                          src={img.url}
                          className="w-full h-full object-cover"
                          muted
                        />
                      ) : (
                        <Image
                          src={img.url}
                          alt={img.step || `Step ${idx + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      )}
                      {selectedImage === idx && (
                        <div className="absolute inset-0 bg-blue-500/20 flex items-center justify-center">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
                <div className="text-xs text-gray-500 mt-2 text-center">
                  {selectedImage + 1} of {workflow.images.length}
                </div>
              </div>
            )}
            </div>
          </div>
        ) : (
          /* No Images - Show Icon and Description */
          <div className="lg:col-span-1">
            <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 border-dashed p-8 flex flex-col items-center justify-center text-center min-h-[400px] shadow-2xl relative z-10">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-6">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Algorithm-Based Workflow</h3>
              <p className="text-gray-400 text-sm max-w-md">
                This workflow focuses on algorithmic and technical implementation. View the key features for detailed information about the system architecture and capabilities.
              </p>
            </div>
          </div>
        )}

        {/* Key Features Sidebar */}
        <div className={`${workflow.images.length > 0 ? 'lg:col-span-1' : 'lg:col-span-1'}`}>
          <div className="bg-black/20 backdrop-blur-xl rounded-xl border border-white/10 p-6 sticky top-24 shadow-2xl relative z-10">
            <h2 className="text-2xl font-bold mb-6 text-white">Key Features</h2>
            {workflow.keyFeatures && workflow.keyFeatures.length > 0 ? (
              <ul className="space-y-4">
                {workflow.keyFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-semibold mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed flex-1">
                      {feature}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No features listed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

