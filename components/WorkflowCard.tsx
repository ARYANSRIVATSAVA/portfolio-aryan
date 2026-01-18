'use client'

import Link from 'next/link'
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

interface WorkflowCardProps {
  workflow: Workflow
}

export default function WorkflowCard({ workflow }: WorkflowCardProps) {
  const shortDescription = workflow.description.length > 150 
    ? workflow.description.substring(0, 150) + '...' 
    : workflow.description

  const hasImages = workflow.images.length > 0

  return (
    <Link href={`/workflow/${workflow.id}`}>
      <div className={`bg-black/20 backdrop-blur-xl rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 cursor-pointer h-full flex flex-col relative z-10 ${!hasImages ? 'border-dashed border-white/20' : ''}`}>
        {hasImages ? (
          <>
            {/* Image Preview */}
            <div className="relative h-48 bg-black/20 backdrop-blur-sm group">
              {workflow.images[0].url.match(/\.(mov|mp4|webm|ogg)$/i) ? (
                <video
                  src={workflow.images[0].url}
                  className="w-full h-full object-cover"
                  preload="metadata"
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={workflow.images[0].url}
                  alt={workflow.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              )}
              {workflow.images.length > 1 && (
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-md text-xs text-white">
                  +{workflow.images.length - 1} more
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="text-lg font-semibold mb-2 text-white line-clamp-2">{workflow.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                {shortDescription}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/10">
                <span className="text-xs text-white/70">
                  {workflow.images.length} {workflow.images.length === 1 ? 'image' : 'images'}
                </span>
                <span className="text-blue-300 text-sm font-medium hover:text-blue-200 transition-colors">
                  View Details →
                </span>
              </div>
            </div>
          </>
        ) : (
          /* No Images - Different Layout */
          <div className="p-6 flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-400/30 to-purple-400/30 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20">
              <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">{workflow.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-5">
              {shortDescription}
            </p>
            <div className="mt-auto pt-4 border-t border-white/10 w-full">
              <span className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors inline-flex items-center gap-2">
                View Details →
              </span>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}
