export type Project = {
  id: string;
  title: string;
  year: string;
  tags: string[];
  imageBg: string;
  colSpan: string;
  description: string;
  youtubeUrl?: string;
  githubUrl?: string;
};

export const projectsData: Project[] = [
  {
    id: "p1",
    title: "NEURA CHATBOT",
    year: "2024",
    tags: ["AI AGENTS", "FULL-STACK"],
    imageBg: "bg-blue-200", // Soft blue
    colSpan: "col-span-12",
    description: "An intelligent customer service agent built with Next.js, OpenAI APIs, and Pinecone vector database. Capable of semantic search and contextual memory."
  },
  {
    id: "p2",
    title: "VISION SYNC",
    year: "2024",
    tags: ["MULTIMODAL AI", "FULL-STACK"],
    imageBg: "bg-slate-300", // Clean gray
    colSpan: "col-span-12 md:col-span-6",
    description: "Real-time object detection diagnostic tool for automated manufacturing lines. Built using PyTorch and deployed via edge computing."
  },
  {
    id: "p3",
    title: "DATA MIND",
    year: "2023",
    tags: ["RAG PIPELINE", "FULL-STACK"],
    imageBg: "bg-blue-100", // Extremely soft blue
    colSpan: "col-span-12 md:col-span-6",
    description: "A secure Document QA system allowing enterprises to chat with their internal PDFs and unstructured data without compromising privacy."
  },
  {
    id: "p4",
    title: "AI WORKFLOW ORCHESTRATOR",
    year: "2023",
    tags: ["AI UX", "FULL-STACK"],
    imageBg: "bg-indigo-100", // Soft indigo
    colSpan: "col-span-12 md:col-span-6",
    description: "Drag-and-drop workflow builder that allows non-technical users to chain multi-step AI prompts to automate long-form content generation."
  },
  {
    id: "p5",
    title: "SYNTH VOICE",
    year: "2022",
    tags: ["MULTIMODAL AI", "AI UX"],
    imageBg: "bg-slate-200", 
    colSpan: "col-span-12 md:col-span-6",
    description: "iOS mobile app that utilizes deep learning voice synthesis models to create realistic artificial narrators for independent authors."
  },
  {
    id: "p6",
    title: "PREDICTIVE ENGINE",
    year: "2022",
    tags: ["AI AGENTS", "RAG PIPELINE"],
    imageBg: "bg-gray-300", 
    colSpan: "col-span-12",
    description: "Time-series forecasting module built into an existing fintech tracking platform, improving revenue predictions by 28%."
  }
];
