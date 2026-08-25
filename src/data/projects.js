export const editraProject = {
  id: "editra-ai",
  title: "EDITRA AI",
  subtitle: "AI-Native Professional Video Editor",
  status: "STATUS: PRE-MVP / BUILDING",
  tagline: "From timeline-based → intent-based video editing.",
  description: "Editra AI is an AI-native professional video editor designed around an Antigravity/Cursor-style AI agent. Users describe the edit they want, and the AI operates the professional editing environment while keeping the user in control.",
  coreCapabilities: [
    {
      title: "Intent-Based Command Bar",
      description: "Direct the AI using natural language prompts to perform complex multi-step timeline edits instantaneously."
    },
    {
      title: "Antigravity/Cursor Agent Engine",
      description: "An autonomous agent that inspects frames, identifies speech pauses, applies LUTs, and arranges clips with sub-frame accuracy."
    },
    {
      title: "AI Action Track & Real-Time Sync",
      description: "Dedicated non-destructive timeline layer tracking every automated edit with full undo/refine control."
    },
    {
      title: "Human-in-the-Loop Workflow",
      description: "Professional editing workspace where editors maintain 100% granular control over keyframes, nodes, and timing."
    }
  ],
  commandExample: "Remove the silence from 00:12 to 00:18 and add a smooth transition.",
  agentSteps: [
    "Analyzing audio waveform across Tracks A1 & A2...",
    "Detected 6.0s dead air silence at [00:12.04 — 00:18.04]",
    "Executing ripple cut across Video Track V1 & V2...",
    "Inserting 0.5s dynamic cross-dissolve transition at cut point",
    "Timeline re-synchronized — awaiting user confirmation"
  ]
};

export const projects = [
  {
    id: "quickbite",
    title: "QUICKBITE",
    subtitle: "High-Velocity Campus Food Ordering Application",
    category: "Web Application",
    description: "College canteen application designed to make food ordering faster and easier for students.",
    fullDescription: "QuickBite eliminates long canteen lines and waiting bottlenecks with a streamlined digital ordering workflow. Built for speed and student convenience, it enables live menu browsing, customized cart management, instant order status tracking, and seamless canteen pickup scheduling.",
    technologies: ["React", "JavaScript", "REST APIs", "Tailwind CSS", "LocalStorage"],
    live: "https://quickbite-seven-azure.vercel.app/",
    github: "https://github.com/surinenishreyansh-ux",
    color: "#00ff66",
    features: [
      "Real-time food item availability & fast search",
      "Dynamic multi-item cart & instant checkout flow",
      "Live order progression & canteen counter notifications",
      "Optimized mobile-first interface for busy campus rush hours"
    ],
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "skybook",
    title: "SKYBOOK",
    subtitle: "Intuitive Flight Booking & Interactive Cabin Selection UI",
    category: "Web Application",
    description: "Flight-booking application focused on simplifying the booking experience.",
    fullDescription: "SkyBook simplifies airline reservations through an intuitive 4-step booking pipeline. Features interactive multi-city route search, fare comparison between economy and business classes, visual aircraft cabin seat selection, and immediate digital boarding pass generation.",
    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "Interactive UI"],
    live: "https://skybook-gilt.vercel.app/",
    github: "https://github.com/surinenishreyansh-ux",
    color: "#38bdf8",
    features: [
      "Frictionless flight search & instant fare tier comparisons",
      "Interactive 2D cabin seat selection matrix",
      "Real-time passenger detail validation & itinerary summary",
      "Digital ticket preview with instant confirmation"
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "algorithm-performance-analyzer",
    title: "ALGORITHM PERFORMANCE ANALYZER",
    subtitle: "Computational Benchmarking & Algorithm Comparison Engine",
    category: "Algorithms & Systems",
    description: "Application for analyzing and comparing the performance of different algorithms.",
    fullDescription: "An engineering tool built to evaluate time complexity, memory allocation, and execution efficiency across classical and modern computational algorithms. It provides visual comparative charts, benchmark stress-tests with varying input sizes, and asymptotic performance insights.",
    technologies: ["Python", "JavaScript", "Algorithms", "Benchmarking", "Data Visualization"],
    live: "https://algorithm-performance-analyzer-vb1l.onrender.com",
    github: "https://github.com/surinenishreyansh-ux",
    color: "#00f0ff",
    features: [
      "Comparative execution time benchmarking across data scale",
      "Step-by-step algorithmic complexity breakdown (Big-O analysis)",
      "Dynamic data visualization for sorting, searching, and graph routines",
      "Exportable performance metrics & runtime reports"
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "ciniverse",
    title: "CINIVERSE",
    subtitle: "Cinematic Movie Discovery & Dynamic Watchlist Platform",
    category: "Media & Discovery",
    description: "Movie discovery and review platform.",
    fullDescription: "CiniVerse delivers an immersive movie exploration experience with rich visual aesthetics. Users can browse trending releases, filter across genres, preview HD trailers, read detailed cast/crew bios, and maintain persistent personal watchlists across browser sessions.",
    technologies: ["React", "Vite", "Framer Motion", "TMDB APIs", "LocalStorage"],
    live: "https://cineversre.netlify.app/",
    github: "https://github.com/surinenishreyansh-ux",
    color: "#ff0055",
    features: [
      "Curated trending, top-rated, and genre-based movie catalogs",
      "HD trailer integration with seamless modal playback",
      "Detailed film metadata, critic scores, and audience ratings",
      "Persistent personal watchlist management powered by LocalStorage"
    ],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "memora",
    title: "MEMORA",
    subtitle: "Information Organization & Digital Knowledge Manager",
    category: "Productivity & Knowledge",
    description: "Web application designed to help users organize and manage information.",
    fullDescription: "Memora is a productivity-first web application engineered to capture, organize, categorize, and retrieve digital notes, links, and structured knowledge effortlessly. Features categorized workspaces, quick tagging, rich content editing, and lightning-fast search.",
    technologies: ["React", "JavaScript", "Data Organization", "State Management", "Tailwind CSS"],
    live: "https://memora-buu1.vercel.app/",
    github: "https://github.com/surinenishreyansh-ux",
    color: "#a855f7",
    features: [
      "Categorized knowledge workspaces & intuitive tag hierarchy",
      "Instant fuzzy search across stored notes and references",
      "Clean distraction-free dark interface for focused writing",
      "Local state persistence ensuring zero data loss"
    ],
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop"
  }
];

