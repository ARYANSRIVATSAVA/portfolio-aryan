import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getWorkflowById, getAllWorkflows } from '@/data/workflows'
import WorkflowDetailView from '@/components/WorkflowDetailView'

export async function generateStaticParams() {
  const workflows = getAllWorkflows()
  return workflows.map((workflow) => ({
    id: workflow.id,
  }))
}

export default function WorkflowPage({ params }: { params: { id: string } }) {
  const workflow = getWorkflowById(params.id)

  if (!workflow) {
    notFound()
  }

  const allWorkflows = getAllWorkflows()
  const currentIndex = allWorkflows.findIndex(w => w.id === params.id)
  const prevWorkflow = currentIndex > 0 ? allWorkflows[currentIndex - 1] : null
  const nextWorkflow = currentIndex < allWorkflows.length - 1 ? allWorkflows[currentIndex + 1] : null

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <div className="border-b border-white/10 bg-black/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <Link 
            href="/" 
            className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Portfolio
          </Link>
        </div>
      </div>

      {/* Workflow Detail */}
      <div className="container mx-auto px-6 py-12">
        <WorkflowDetailView workflow={workflow} />
      </div>

      {/* Navigation Between Workflows */}
      <div className="border-t border-white/10 bg-black/10 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-8">
          <div className="flex justify-between items-center">
            {prevWorkflow ? (
              <Link 
                href={`/workflow/${prevWorkflow.id}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <div>
                  <div className="text-xs text-gray-500">Previous</div>
                  <div className="font-medium">{prevWorkflow.title}</div>
                </div>
              </Link>
            ) : (
              <div></div>
            )}

            {nextWorkflow ? (
              <Link 
                href={`/workflow/${nextWorkflow.id}`}
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group ml-auto"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-500">Next</div>
                  <div className="font-medium">{nextWorkflow.title}</div>
                </div>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}

