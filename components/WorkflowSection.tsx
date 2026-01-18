'use client'

import WorkflowCard from './WorkflowCard'
import { Workflow } from '@/data/workflows'

interface WorkflowSectionProps {
  category: string
  workflows: Workflow[]
}

export default function WorkflowSection({ category, workflows }: WorkflowSectionProps) {
  if (workflows.length === 0) return null

  return (
    <div className="mb-20">
      <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        {category}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {workflows.map((workflow) => (
          <WorkflowCard key={workflow.id} workflow={workflow} />
        ))}
      </div>
    </div>
  )
}

