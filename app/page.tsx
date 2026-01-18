import WorkflowSection from '@/components/WorkflowSection'
import { workflows } from '@/data/workflows'

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          AI Automation Portfolio
        </h1>
        <p className="text-xl text-white/90 mt-4 max-w-2xl mx-auto backdrop-blur-sm">
          Showcasing intelligent automation workflows across departments
        </p>
        <p className="text-lg text-white/70 mt-2 backdrop-blur-sm">
          Powered by AI agents, LLMs, and modern automation platforms
        </p>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-2xl font-bold text-white">
                AS
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">Aryan Srivatsava</h2>
                <p className="text-gray-400">AI Automation Engineer & Product Builder</p>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I have a strong background in building <span className="text-blue-400 font-medium">AI-driven workflows, automation, and internal tools</span> to improve operational efficiency and business processes.
              </p>
              
              <p>
                I completed my <span className="text-purple-400 font-medium">Master's in Computer Science</span>, and I have around <span className="text-blue-400 font-medium">2 years of professional experience</span> in AI automation, AI product building, and applied AI in research.
              </p>
              
              <p>
                In my experience, I've built AI automations for <span className="text-blue-400 font-medium">IT operations, HR/recruiting, research, and sales & marketing</span> — including lead generation, email outreach, lead qualification and scoring, lead enrichment, and automated HubSpot integration. I've used a variety of tools, from Python, SQL, and GPT-driven workflows to no-code platforms like N8N, Zapier, and Cursor. I have <span className="text-purple-400 font-medium">extensive experience working with LLM APIs and other APIs</span> to build robust, scalable automation solutions.
              </p>
              
              <p className="pt-4 text-gray-300">
                I enjoy taking ideas from <span className="text-blue-400 font-medium">concept to fully functional solutions quickly</span>. I have experience in quickly learning and adapting to new business processes, and I've built AI automations across multiple departments — <span className="text-purple-400 font-medium">IT operations, HR/recruiting, research, sales, and marketing</span> — which shows I can adapt to different workflows and deliver immediate impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Sections */}
      <section className="container mx-auto px-6 pb-20">
        <WorkflowSection 
          category="Sales & Marketing" 
          workflows={workflows.salesMarketing}
        />
        <WorkflowSection 
          category="IT Operations" 
          workflows={workflows.itOperations}
        />
        <WorkflowSection 
          category="HR & Recruiting" 
          workflows={workflows.hrRecruiting}
        />
        <WorkflowSection 
          category="Other Automations" 
          workflows={workflows.other}
        />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-20 bg-black/10 backdrop-blur-sm relative z-10">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© 2024 Aryan Srivatsava - AI Automation Portfolio</p>
        </div>
      </footer>
    </main>
  )
}

