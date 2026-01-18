export interface WorkflowImage {
  url: string
  step?: string
  description?: string
}

export interface Workflow {
  id: string
  title: string
  description: string
  keyFeatures?: string[]
  images: WorkflowImage[]
  category: 'salesMarketing' | 'itOperations' | 'hrRecruiting' | 'other'
}

// Helper function to get all workflows with their category
export function getAllWorkflows(): (Workflow & { category: string })[] {
  const all: (Workflow & { category: string })[] = []
  
  Object.entries(workflows).forEach(([category, workflowList]) => {
    workflowList.forEach(workflow => {
      all.push({ ...workflow, category })
    })
  })
  
  return all
}

// Helper function to find workflow by ID
export function getWorkflowById(id: string): Workflow | undefined {
  const all = getAllWorkflows()
  return all.find(w => w.id === id)
}

export const workflows = {
  salesMarketing: [
    {
      id: 'hubspot-lead-enrichment',
      title: 'HubSpot Integration - Lead Enrichment, Lead Qualification, and Scoring',
      description: 'This automated workflow is designed to seamlessly integrate and enrich HubSpot\'s CRM capabilities with real-time lead qualification and scoring. By processing data from Google Sheets, it enriches leads using AI-powered analysis, qualifying them based on predefined criteria, estimating company and persona fit, and assigning numeric scores.',
      keyFeatures: [
        'Lead Enrichment: Automates data fetching from Google Sheets and performs additional enrichment using AI, analyzing complex lead attributes and generating insights.',
        'AI-Powered Qualification: Incorporates AI agents to evaluate leads, determining qualification scores based on detailed company and persona fit analyses.',
        'Scoring & Categorization: Assigns comprehensive scores to leads, classifying them with precision as cold leads, MQLs, or SQLs with recommended outreach strategies.',
        'HubSpot Integration: Utilizes HubSpot\'s API to either create new records or update existing ones based on qualitative metrics, ensuring contact information is up-to-date and actionable.',
        'Duplicate and Domain Management: Ensures uniqueness by removing duplicates and conducting domain-based company searches.'
      ],
      images: [
        { url: '/images/sales-marketing/workflow-1/workflow-image.jpeg', step: 'Workflow Overview', description: 'Complete workflow diagram showing lead qualification and enrichment process' }
      ],
      category: 'salesMarketing' as const
    },
    {
      id: 'hubspot-contacts-companies',
      title: 'HubSpot Integration - Contacts and Companies',
      description: 'This workflow automates the integration of contact and company data between Google Sheets and HubSpot. It is used for automating the synthesis and enrichment of both contact and company data to ensure relevant insights and improve decision-making in CRM operations.',
      keyFeatures: [
        'HubSpot Integration: Seamlessly manages records by creating or updating contact and company entries in HubSpot, ensuring an accurate and current CRM database.',
        'Duplicate Removal: Incorporates processes to detect and eliminate duplicate company entries, preserving the integrity of the data pipeline.'
      ],
      images: [
        { url: '/images/sales-marketing/workflow-2/workflow-image.jpeg', step: 'Workflow Overview', description: 'Complete workflow diagram for contacts and companies integration' }
      ],
      category: 'salesMarketing' as const
    },
    {
      id: 'linkedin-lead-generation',
      title: 'LinkedIn Lead Generation and Email Outreach Workflow',
      description: 'This automated workflow is designed to enhance lead generation and streamline email outreach processes. Utilizing n8n\'s integration capabilities, it automates the extraction of potential leads from LinkedIn, gathers essential contact information, and sends personalized email follow-ups.',
      keyFeatures: [
        'LinkedIn Lead Extraction: Automates the extraction of potential leads from LinkedIn, gathering essential contact information efficiently.',
        'Email Outreach Automation: Sends personalized email follow-ups to new contacts, streamlining the outreach process.',
        'Task Automation: Automates repetitive tasks, allowing sales and marketing teams to focus on building meaningful relationships.',
        'Customizable Workflow: Adaptable design that can be customized to fit various business needs and lead nurturing strategies.'
      ],
      images: [
        { url: '/images/sales-marketing/workflow-3/workflow-image.jpeg', step: 'Workflow Overview', description: 'Complete workflow diagram for LinkedIn lead generation and email outreach' }
      ],
      category: 'salesMarketing' as const
    }
  ],
  itOperations: [
    {
      id: 'rag-knowledge-system',
      title: 'Knowledge-Based Retrieval-Augmented Generation (RAG) System',
      description: 'This advanced workflow integrates Pinecone for vector storage, Redis for chat memory management, and OpenAI for generating embeddings and responses, to create a sophisticated information retrieval and augmentation system.',
      keyFeatures: [
        'Data Sourcing: Initiates with a manual trigger that searches for files and folders in Google Drive, downloads them for processing.',
        'Data Processing: Utilizes OpenAI embeddings to transform textual data into vector space for advanced semantic search capabilities.',
        'Storage & Retrieval: Stores processed data in Pinecone\'s vector store for efficient retrieval during queries.',
        'Document Chunking: The workflow implements recursive text splitting to handle large documents, optimizing for relevant data retrieval.',
        'Intelligent Query Handling: Employs an AI agent to interactively process incoming chat messages, supported by OpenAI\'s language model for contextually enriched responses.',
        'Chat Memory: Incorporates Redis for session management, maintaining context across interactions to improve response accuracy and continuity.',
        'Comprehensive Search: Retrieves and ranks relevant documents from the vector store based on real-time queries to enhance user interaction and satisfaction.'
      ],
      images: [
        { url: '/images/it-operations/workflow-1/workflow-image.jpeg', step: 'Workflow Overview', description: 'Complete RAG system architecture and workflow diagram' }
      ],
      category: 'itOperations' as const
    }
  ],
  hrRecruiting: [
    {
      id: 'interview-scheduling-system',
      title: 'Automated Interview Scheduling System',
      description: 'A seamless, end-to-end interview scheduling solution that eliminates manual coordination by integrating with calendar APIs (Microsoft Graph / Google Calendar) to automatically fetch availability, generate time slots, and create calendar events with meeting links.',
      keyFeatures: [
        'Step 1 - Interview Initiation: Hiring manager fills out scheduling form with interview details (title, type, duration, timezone, notes). System creates interview record with unique scheduling token and validates email domains for security.',
        'Step 2 - Availability Check & Email Notification: Automatically connects to Microsoft Graph API or Google Calendar API to fetch interviewer availability. Generates business-hours time slots (9 AM - 5 PM, weekdays only, 2 slots per day) and sends professional HTML email to candidate with personalized greeting and slot selection link.',
        'Step 3 - Candidate Slot Selection: Displays all available time slots in intuitive card-based UI showing date, time with timezone, and duration. One-click confirmation with visual feedback.',
        'Step 4 - Calendar Event Creation & Confirmation: Automatically creates calendar event in interviewer\'s calendar with Microsoft Teams or Google Meet link. Sends confirmation emails to both candidate and interviewer with meeting details, calendar links, and preparation tips. Sets up automatic reminders (24-hour email, 10-minute popup).'
      ],
      images: [
        { url: '/images/hr-recruiting/workflow-1/step1.jpeg', step: 'Step 1: Interview Initiation', description: 'Hiring manager fills out the interview scheduling form with all necessary details' },
        { url: '/images/hr-recruiting/workflow-1/step2.jpeg', step: 'Step 2: Availability Check & Email', description: 'System fetches interviewer availability and sends email notification to candidate' },
        { url: '/images/hr-recruiting/workflow-1/step3-1.jpeg', step: 'Step 3: Candidate Slot Selection (View 1)', description: 'Candidate views available time slots in card-based UI' },
        { url: '/images/hr-recruiting/workflow-1/step3-2.jpeg', step: 'Step 3: Candidate Slot Selection (View 2)', description: 'Alternative view of slot selection interface' },
        { url: '/images/hr-recruiting/workflow-1/step4-1.jpeg', step: 'Step 4: Interviewer Confirmation', description: 'Confirmation email and calendar event for interviewer' },
        { url: '/images/hr-recruiting/workflow-1/step4-2.jpeg', step: 'Step 4: Candidate Confirmation', description: 'Confirmation email and calendar event for candidate' },
        { url: '/images/hr-recruiting/workflow-1/step4-3.jpeg', step: 'Step 4: Google Calendar Integration', description: 'Calendar event created in Google Calendar with meeting link' }
      ],
      category: 'hrRecruiting' as const
    },
    {
      id: 'talentvibe-resume-analysis',
      title: 'TalentVibe Resume Analysis - AI-Powered Resume Screening',
      description: 'An intelligent resume screening platform that uses advanced AI to analyze resumes against job descriptions, providing comprehensive candidate evaluation with fit scores, detailed analysis, and actionable insights to streamline the hiring process.',
      keyFeatures: [
        'Step 1 - Upload Job Description & Resumes: Supports drag-and-drop or file browser selection for job descriptions (PDF, DOCX, text) and multiple candidate resumes (PDF, DOCX). Real-time upload progress, file validation, and session persistence.',
        'Step 2 - View Results & Candidate Rankings: Displays all candidates sorted by fit score (0-100) with color-coded indicators. Categorizes candidates into buckets: 🚀 Green-Room Rocket, ⚡ Book-the-Call, 🛠️ Bench Prospect, 🗄️ Swipe-Left Archive. Provides filtering, sorting, and search capabilities.',
        'Step 3 - Detailed Candidate Analysis: Comprehensive analysis view with overall assessment, section scores (Experience, Education, Skills, Projects, Leadership, Research, Certifications, Awards, Publications), skill matrix showing matching/missing skills, professional timeline, logistics (contact info, location, work authorization, notice period), and advanced analysis with AI-assigned section weights, subfield scores, job level detection, and experience-education ratio analysis.',
        'Step 4 - Take Action on Candidates: Action buttons for scheduling interviews, evaluating interviews, viewing full resumes, and advanced analysis. Supports bulk actions (move between buckets, export lists, generate reports) and maintains complete audit trail throughout hiring pipeline.'
      ],
      images: [
        { url: '/images/hr-recruiting/workflow-2/step1-upload.jpeg', step: 'Step 1: Upload Job Description & Resumes', description: 'Upload interface for job descriptions and candidate resumes with drag-and-drop support' },
        { url: '/images/hr-recruiting/workflow-2/step2-results.jpeg', step: 'Step 2: Candidate Results & Rankings', description: 'Candidate ranking view with fit scores and bucket categorization' },
        { url: '/images/hr-recruiting/workflow-2/step2-jobs-page.jpeg', step: 'Step 2: Jobs Page View', description: 'Alternative view showing job listings and candidate distribution' },
        { url: '/images/hr-recruiting/workflow-2/step3-analysis-video.mov', step: 'Step 3: Detailed Candidate Analysis', description: 'Video demonstration of comprehensive candidate analysis with section scores, skill matrix, and professional timeline' }
      ],
      category: 'hrRecruiting' as const
    }
  ],
  other: [
    {
      id: 'auto-synonym-suggestion',
      title: 'Auto Synonym Suggestion Algorithm',
      description: 'An intelligent vocabulary enhancement system designed to help students improve their vocabulary when writing essays. The algorithm analyzes each student\'s writing history to identify overused words and suggests contextually appropriate synonyms using WordNet and LSTM-based semantic similarity matching.',
      keyFeatures: [
        'Historical Analysis: Analyzes each student\'s previous 40 essays to identify frequently overused words and patterns.',
        'Synonym Generation: Uses WordNet to generate synonym candidates for repeated words, providing diverse vocabulary alternatives.',
        'Context-Aware Selection: Employs LSTM models to evaluate synonym appropriateness by comparing sentence embeddings using cosine similarity. Only synonyms with similarity scores above a set threshold are selected.',
        'Rigorous Validation: Validated with 3 human reviewers across 2,000 test essays (20 essays per 100 students), ensuring high-quality suggestions.',
        'Measurable Improvement: Uses Type-Token Ratio (TTR) metrics to quantify vocabulary diversity improvements after implementing suggestions.'
      ],
      images: [],
      category: 'other' as const
    },
    {
      id: 'similar-context-identification',
      title: 'Similar Context Documents Identification',
      description: 'A text similarity NLP algorithm built using Google Trax and Hugging Face to group essay questions that belong to the same context or news event. Ensures each student receives a unique question while maintaining contextual consistency across practice tests.',
      keyFeatures: [
        'Semantic Similarity Detection: Trained multiple models including Siamese LSTM and transformer-based models from Hugging Face to detect when questions share similar context, even when worded differently.',
        'Large-Scale Training: Trained on a dataset of over 89,000 question pairs to learn nuanced contextual relationships.',
        'Context Grouping: Automatically groups essay questions that belong to the same context or news event, ensuring thematic consistency.',
        'Unique Question Distribution: Ensures each student receives a unique question while maintaining that all questions in a practice test belong to the same context.',
        'Advanced NLP Models: Leverages state-of-the-art transformer models from Hugging Face for superior semantic understanding.'
      ],
      images: [],
      category: 'other' as const
    },
    {
      id: 'ocr-textbook-metadata',
      title: 'OCR-Based Textbook Metadata Extraction',
      description: 'Automated textbook metadata extraction system using OpenAI API\'s OCR capabilities. Streamlines the process of extracting structured information from textbook images and documents, converting visual content into machine-readable data for further processing and analysis.',
      keyFeatures: [
        'OCR Extraction: Utilizes OpenAI API\'s advanced OCR capabilities to extract text and metadata from textbook images and scanned documents.',
        'Structured Data Extraction: Automatically identifies and extracts key metadata fields such as title, author, ISBN, publication date, chapter information, and other relevant details.',
        'Automated Processing: Eliminates manual data entry by automatically processing textbook images and converting them into structured, searchable formats.',
        'High Accuracy: Leverages OpenAI\'s state-of-the-art vision models for accurate text recognition and metadata identification.',
        'Scalable Solution: Handles batch processing of multiple textbooks, making it ideal for library digitization and educational content management systems.'
      ],
      images: [],
      category: 'other' as const
    },
    {
      id: 'meeting-transcript-analysis',
      title: 'Automated Meeting Transcript Analysis with RAG',
      description: 'An intelligent post-interview analysis system that automatically fetches meeting transcripts from Microsoft Teams and performs multi-perspective analysis using Retrieval-Augmented Generation (RAG). Generates personalized insights from different stakeholder viewpoints (CEO, CTO, HR) and handles user queries and doubts through intelligent Q&A capabilities.',
      keyFeatures: [
        'Automated Transcript Fetching: Automatically retrieves meeting transcripts from Microsoft Teams after interview meetings, eliminating manual extraction processes.',
        'Multi-Perspective RAG Analysis: Uses Retrieval-Augmented Generation to generate analysis from different stakeholder perspectives including CEO, CTO, and HR viewpoints, providing comprehensive insights tailored to each role.',
        'Intelligent Q&A System: Handles user queries and doubts by leveraging RAG to answer questions about meeting content, decisions, action items, and key discussion points.',
        'Personalized Insights: Generates tailored analysis reports that highlight key discussion points, decisions made, action items, and important takeaways specific to each meeting and stakeholder perspective.',
        'Context-Aware Responses: Provides contextually rich answers by combining transcript data with relevant knowledge bases, ensuring accurate and relevant information retrieval.'
      ],
      images: [],
      category: 'other' as const
    }
  ],
}
