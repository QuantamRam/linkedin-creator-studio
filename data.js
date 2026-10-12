// Verified Dataset for Ram Chandar Sanaboyina - LinkedIn Manager Dashboard
// Updated for Recruiter Inbound & Viral Follower Growth
// Category: "The AI-Native AI PM" | Target: 7,500 Realistic Milestone

const DEFAULT_LINKEDIN_DATA = {
  version: 4,
  creator: {
    name: "Ram chandar Sanaboyina",
    handle: "@ramchandarsanaboyina",
    profileUrl: "https://www.linkedin.com/in/ramchandarsanaboyina",
    headline: "The AI-Native AI PM 🚀 | Systems, Evals & Model Cascades | Ex-Amazon/Blinkit Audience",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&h=256&q=80",
    currentFollowers: 5021,
    targetFollowers: 7500,
    milestoneAchieved: 5000,
    milestoneAchievedDate: "2026-10-08",
    northStarFollowers: 50000,
    dailyVelocityTarget: 32, // net new followers per day
    postWindow: "8:45 AM – 9:15 AM IST",
    bestDays: ["Wednesday", "Tuesday"],
    productOffer: "Building AI Products That Ship (Digital Playbook, ₹999)"
  },
  metrics: {
    totalImpressions12M: 194563,
    membersReached12M: 69249,
    recentImpressions7D: 1358,
    recentEngagements7D: 4,
    recentMembersReached7D: 204,
    engagementRate: "3.1%",
    profileConversionRate: "12.6%",
    totalPosts: 43
  },
  history7D: [
    { date: "10/06/2026", impressions: 138, engagements: 1, followers: 4995, newFollowers: 22 },
    { date: "10/07/2026", impressions: 221, engagements: 0, followers: 5003, newFollowers: 8 },
    { date: "10/08/2026", impressions: 682, engagements: 3, followers: 5007, newFollowers: 4 },
    { date: "10/09/2026", impressions: 116, engagements: 0, followers: 5009, newFollowers: 2 },
    { date: "10/10/2026", impressions: 38, engagements: 0, followers: 5012, newFollowers: 3 },
    { date: "10/11/2026", impressions: 147, engagements: 0, followers: 5017, newFollowers: 5 },
    { date: "10/12/2026", impressions: 16, engagements: 0, followers: 5021, newFollowers: 6 }
  ],
  dailyHabits: [
    {
      id: "habit-post",
      label: "Publish scheduled post before 9:15 AM IST",
      description: "Optimal morning window for Bengaluru & APAC tech hubs",
      category: "content",
      completed: true
    },
    {
      id: "habit-first-comment",
      label: "Seed 1st comment + DM reactive viewers within 60 mins",
      description: "Drive dwell time & start discussion (zero links in main post body)",
      category: "content",
      completed: true
    },
    {
      id: "habit-icp-comments",
      label: "15 high-signal comments on AI PM Top Voice posts",
      description: "Engage on posts by Lenny Rachitsky, Aakash Gupta, Shreyas Doshi & AI founders",
      category: "engagement",
      completed: false
    },
    {
      id: "habit-outbound-dms",
      label: "5 strategic connection requests with personalized notes",
      description: "Target FAANG / AI Startup recruiters & Senior PM leads",
      category: "outreach",
      completed: false
    },
    {
      id: "habit-analytics-sync",
      label: "Review daily post analytics & sync metrics into Dashboard",
      description: "Log impressions, saves, conversion rate, and monitor out-of-network ratio",
      category: "analytics",
      completed: true
    }
  ],
  scheduledPosts: [
    {
      id: "post-published-locus",
      date: "2026-10-08",
      time: "Published · 525 Imp",
      format: "Document Carousel (8 slides)",
      title: "The LoCuS Stack: Build Clickable AI Prototypes in 3 Hours",
      status: "Published",
      hookPreview: "A PRD is a guess written in the dark. A clickable prototype is an honest answer in 90 seconds. Unlocked 5k followers milestone!",
      targetPillar: "Vibe-Coding Prototypes",
      primaryGoal: "Saves & Reposts"
    },
    {
      id: "post-mon",
      date: "2026-10-12",
      time: "Today · 08:45 AM IST",
      format: "Document Carousel (8 slides)",
      title: "The Death of Jira User Stories for AI: Meet The Behavior Spec",
      status: "Ready",
      hookPreview: "R.I.P. to the traditional Jira user story for AI. Writing 'As a user I want...' burns $50,000 in model hallucinations. Here is the Behavior Spec:",
      targetPillar: "Behavior Specs & Evals",
      primaryGoal: "Saves & Reposts"
    },
    {
      id: "post-tue",
      date: "2026-10-13",
      time: "Tue · 08:45 AM IST",
      format: "Document Carousel (8 slides)",
      title: "How FAANG Interviews Senior AI PMs in 2026 (5 Questions & Rubrics)",
      status: "Scheduled",
      hookPreview: "FAANG recruiters stopped asking 'How would you improve Spotify?'. In 2026, Senior AI PM interviews test 5 completely different capabilities:",
      targetPillar: "Recruiter Inbounds",
      primaryGoal: "Recruiter DMs & Follower Spikes"
    },
    {
      id: "post-wed",
      date: "2026-10-14",
      time: "Wed · 08:45 AM IST",
      format: "Document Carousel (8 slides)",
      title: "The Production AI Architecture Cheat Sheet for PMs",
      status: "Scheduled",
      hookPreview: "You don't need a CS PhD to lead AI products. But if you can't sketch this 4-tier system architecture, engineers won't respect your roadmap:",
      targetPillar: "System Architecture",
      primaryGoal: "Massive Saves & Authority"
    },
    {
      id: "post-thu",
      date: "2026-10-15",
      time: "Thu · 08:45 AM IST",
      format: "High-Trust Teardown",
      title: "The $14,280 LLM API Fine-Tuning Ledger: Why We Rolled Back 70%",
      status: "Drafting",
      hookPreview: "We spent exactly $14,280 on model fine-tuning last quarter. 1 prompt eval caught 82% of errors. The fine-tuned weights failed completely on edge cases...",
      targetPillar: "Unit Economics",
      primaryGoal: "VP of Product Respect"
    },
    {
      id: "post-sat",
      date: "2026-10-17",
      time: "Sat · 09:30 AM IST",
      format: "BTS Architecture Teardown",
      title: "Why 90% of AI Agents Fail in Production (And The 3 State Fixes)",
      status: "Drafting",
      hookPreview: "AI agents look magical in demo Loom videos. In production, 90% crash into infinite loops, context poisoning, or token bankruptcy. Here is the architecture fix:",
      targetPillar: "Agent Systems",
      primaryGoal: "Founder & Recruiter Inbounds"
    },
    {
      id: "post-sun",
      date: "2026-10-18",
      time: "Sun · 07:30 PM IST",
      format: "Save-Bait Career Roadmap",
      title: "The 2026 AI PM Skills Audit: The 4 Levers That Pay 22% More",
      status: "Drafting",
      hookPreview: "Everyone is telling PMs to take a 6-month Python bootcamp. In 2011, people told PMs to learn Objective-C. What gets you hired in 2026 is these 4 levers:",
      targetPillar: "Career Roadmap",
      primaryGoal: "High Viral Saves"
    }
  ],
  carousels: [
    {
      id: "carousel-faang-interview",
      title: "How FAANG Evaluates Senior AI PMs (2026 Rubric) 🎯",
      subtitle: "The 5 case questions top tier recruiters & VP of Products actually test for $180k–$250k AI PM roles",
      slidesCount: 8,
      category: "Recruiter Inbound Magnet",
      slides: [
        {
          num: 1,
          tag: "RECRUITER & LEADERSHIP RUBRIC",
          headline: "How FAANG Interviews Senior AI PMs in 2026.",
          subtext: "Top tech recruiters stopped asking 'How would you improve Spotify?'\nHere are the 5 questions they ask to identify the top 1% of AI PMs 🎯"
        },
        {
          num: 2,
          tag: "QUESTION 1 · PROBABILISTIC PRODUCT DESIGN",
          headline: "Q1: 'Your model has an 87% accuracy rate. How do you design the UX for the remaining 13%?'",
          subtext: "❌ Junior Answer: 'I will fine-tune the model to get to 99%.'\n✅ Top 1% Answer: 'Model accuracy never hits 100%. I design Graceful Fallbacks: UI facet chips, human-in-the-loop review, and explicit confidence ceilings.'"
        },
        {
          num: 3,
          tag: "QUESTION 2 · UNIT ECONOMICS & MARGINS",
          headline: "Q2: 'Inference latency is 3.2s and costs $0.06/query. How do you scale this to 500k DAU?'",
          subtext: "❌ Junior Answer: 'Ask engineering to optimize the server.'\n✅ Top 1% Answer: 'Build a 3-tier cascade: Semantic cache first (80% hit rate, $0.0001), Flash model second, Frontier model only for top 5% edge cases.'"
        },
        {
          num: 4,
          tag: "QUESTION 3 · EVALUATION HARNESSES",
          headline: "Q3: 'Engineering shipped a new prompt. How do you prove it didn't cause silent regressions?'",
          subtext: "❌ Junior Answer: 'We test it manually on Slack.'\n✅ Top 1% Answer: 'Run an automated 100-sample golden eval dataset with synthetic edge cases. Score Accuracy, Latency, and Safety pass/fail gates before deployment.'"
        },
        {
          num: 5,
          tag: "QUESTION 4 · BUILD VS BUY VS ASSEMBLE",
          headline: "Q4: 'Should we build an internal fine-tuned SLM or buy OpenAI Enterprise API?'",
          subtext: "❌ Junior Answer: 'Building our own models protects IP.'\n✅ Top 1% Answer: 'Plot on the 2-Question Filter: Does this workflow create unique compounding data moat? If not, buying hosted API preserves 6 months of speed.'"
        },
        {
          num: 6,
          tag: "QUESTION 5 · BEHAVIORAL EXECUTION",
          headline: "Q5: 'Tell me about an AI feature you killed before it reached production.'",
          subtext: "❌ Junior Answer: 'We shipped everything on the roadmap.'\n✅ Top 1% Answer: 'We built a 4-hour clickable LoCuS prototype, tested with 8 customers, saw high hallucination friction, and killed it—saving $40k in engineering.'"
        },
        {
          num: 7,
          tag: "WHAT RECRUITERS ACTUALLY SCORE",
          headline: "The 3 Signals That Unlock $180k–$250k+ Offers",
          subtext: "1. Systems Empathy: You understand latency, tokens & context caching.\n2. Eval Rigor: You replace opinions with mathematical benchmarks.\n3. Shipping Velocity: You bring working prototypes, not 20-page PRDs."
        },
        {
          num: 8,
          tag: "SUMMARY & TAKEAWAY",
          headline: "Save This For Your Next AI PM Interview",
          subtext: "Bookmark this deck for your interview prep.\nWhat is the hardest AI product question you've ever faced in an interview?"
        }
      ]
    },
    {
      id: "carousel-ai-architecture",
      title: "The Production AI Architecture Cheat Sheet for PMs 🏛️",
      subtitle: "The complete 4-layer system design diagram every Senior AI PM must know to earn engineering respect",
      slidesCount: 8,
      category: "Follower Virality & Authority",
      slides: [
        {
          num: 1,
          tag: "SYSTEM DESIGN FOR PMS",
          headline: "The Production AI Architecture Cheat Sheet.",
          subtext: "You do not need a CS PhD to lead AI products.\nBut if you cannot sketch these 4 layers, engineering will not respect your specs 🏛️"
        },
        {
          num: 2,
          tag: "LAYER 1 · INGESTION & CONTEXT CACHING",
          headline: "Layer 1: The Input & Context Cache",
          subtext: "Where the query begins. Top teams don't send raw prompts to an LLM.\nThey run Semantic Caching (Redis/Momento): If a similar query was answered in the last 24h, return cached response in 40ms for $0.00."
        },
        {
          num: 3,
          tag: "LAYER 2 · THE 3-TIER MODEL CASCADE",
          headline: "Layer 2: The Model Routing Cascade",
          subtext: "Never use a $0.03 frontier model for a $0.0001 classification task.\n🟢 Tier 1: Fast Regex / Embeddings (0ms, Free)\n🟡 Tier 2: Flash / Mini LLM (400ms, $0.001)\n🟣 Tier 3: O1 / Claude Opus only when reasoning is required"
        },
        {
          num: 4,
          tag: "LAYER 3 · RAG & RETRIEVAL RE-RANKING",
          headline: "Layer 3: Hybrid Retrieval & Re-ranking",
          subtext: "Basic vector search fails 30% of user queries.\nProduction RAG combines:\n1. Keyword BM25 + Vector Search (Hybrid Retrieval)\n2. Cross-Encoder Re-ranker (Cohere) to prune to the top 3 high-signal chunks."
        },
        {
          num: 5,
          tag: "LAYER 4 · GUARDRAILS & EVALUATION",
          headline: "Layer 4: Real-Time Guardrails & Telemetry",
          subtext: "Before the response reaches the user, it passes:\n1. PII & Toxicity Masking\n2. Hallucination Check (Grounding validation against retrieved docs)\n3. Latency & Token Usage Telemetry (Helicone / Langfuse)."
        },
        {
          num: 6,
          tag: "THE UX TRANSLATION",
          headline: "How Architecture Translates to User Experience",
          subtext: "Streaming UI isn't an aesthetic flair—it compresses perceived wait time by 70%.\nOptimistic UI updates keep users engaged while backend evals finish validation."
        },
        {
          num: 7,
          tag: "THE 3 FATAL MISTAKES",
          headline: "Why Most AI Features Fail in Production",
          subtext: "❌ Relying on 1 massive frontier prompt for everything.\n❌ Skipping evaluation harnesses in CI/CD pipelines.\n❌ Ignoring token inflation as chat history grows past 10 turns."
        },
        {
          num: 8,
          tag: "SAVE & REPOST",
          headline: "Bookmark This Architecture Guide",
          subtext: "Save this for your next system architecture discussion with engineering leads.\nWhich layer is the biggest bottleneck in your current stack?"
        }
      ]
    },
    {
      id: "carousel-behavior-spec",
      title: "The Death of Jira User Stories for AI 📜",
      subtitle: "Why 'As a user I want...' burns $50k in hallucinations — and the 4-part Behavior Spec that replaced it",
      slidesCount: 8,
      category: "Behavior Specs",
      slides: [
        {
          num: 1,
          tag: "FOR AI PMS & BUILDERS",
          headline: "R.I.P. to Jira User Stories for AI Products.",
          subtext: "Why 'As a user I want an AI that answers questions...' burns $50,000 in model hallucinations — and the Behavior Spec that replaced it 📜"
        },
        {
          num: 2,
          tag: "THE CORE PROBLEM",
          headline: "Traditional SaaS was deterministic. AI is probabilistic.",
          subtext: "In SaaS, if code compiles and tests pass, it works 100% of the time.\nIn Generative AI, a feature that works 85% of the time is a brand crisis in production."
        },
        {
          num: 3,
          tag: "THE 4-PART BEHAVIOR SPEC",
          headline: "Part 1: The Forbidden Boundaries",
          subtext: "Instead of writing what the AI SHOULD do, write the explicit boundary conditions where the model is STRICTLY FORBIDDEN from guessing."
        },
        {
          num: 4,
          tag: "THE 4-PART BEHAVIOR SPEC",
          headline: "Part 2: The 20-Example Eval Matrix",
          subtext: "Before writing product code, collect 20 real customer edge cases in a spreadsheet.\nGrade them: Accuracy (0-1), Latency (<1.5s), and Tone (Pass/Fail)."
        },
        {
          num: 5,
          tag: "THE 4-PART BEHAVIOR SPEC",
          headline: "Part 3: Fallback Grace Architecture",
          subtext: "Define the confidence ceiling: If logit probability drops below 0.85, the model NEVER hallucinates. It routes immediately to a deterministic UI action."
        },
        {
          num: 6,
          tag: "THE 4-PART BEHAVIOR SPEC",
          headline: "Part 4: The Unit Economic Gate",
          subtext: "Every behavior spec has a token budget: Cap queries at $0.003/request.\nIf it exceeds budget, cascade to a smaller 8B model automatically."
        },
        {
          num: 7,
          tag: "THE REALITY SHIFT",
          headline: "Stop bringing Jira wishlists to sprint planning.",
          subtext: "The highest-paid AI PMs don't ask engineers to guess model accuracy. They bring scored eval harnesses with mathematical confidence bounds."
        },
        {
          num: 8,
          tag: "SUMMARY & TAKEAWAY",
          headline: "Save & Share with Your Product Team",
          subtext: "Bookmark this deck for your next sprint planning session.\nWhat is the biggest failure mode your team saw when trying to write PRDs for AI?"
        }
      ]
    }
  ],
  topPosts: [
    {
      title: "The LoCuS prototype stack: Build clickable AI apps in 3 hours",
      date: "10/08/2026",
      impressions: 525,
      engagements: 3,
      url: "https://www.linkedin.com/posts/ramchandarsanaboyina_the-locus-prototype-stack-ugcPost-7513537224559214592-H_Av",
      notes: "Top post of the week! 525 impressions, unlocked 5,000 milestone."
    },
    {
      title: "2 filters to kill the wrong AI ideas before Monday morning",
      date: "10/05/2026",
      impressions: 347,
      engagements: 4,
      url: "https://www.linkedin.com/posts/ramchandarsanaboyina_2-filters-to-kill-the-wrong-ai-ideas-ugcPost-7512725533907013632-4UjN",
      notes: "High save rate among Senior PMs and Product Directors."
    },
    {
      title: "PM to AI PM: Same title, 22% more pay & 3x higher leverage",
      date: "10/01/2026",
      impressions: 111,
      engagements: 1,
      url: "https://www.linkedin.com/posts/ramchandarsanaboyina_pm-to-ai-pm-same-title-22-more-pay-ugcPost-7511303671461240832-HoJB",
      notes: "Career transition angle. Inbound messages from aspiring AI PMs."
    },
    {
      title: "The 39% headcount cut: Which half of PM are you?",
      date: "10/03/2026",
      impressions: 54,
      engagements: 3,
      url: "https://www.linkedin.com/posts/ramchandarsanaboyina_the-39-headcount-cut-which-half-of-pm-are-ugcPost-7512006027899510784-U4k7",
      notes: "Contrarian status hook. Solid debate in comments."
    }
  ],
  demographics: {
    titles: [
      { name: "Senior PMs & Senior Leaders", percent: 38 },
      { name: "Product Managers", percent: 19 },
      { name: "Entry PMs & APMs", percent: 24 },
      { name: "Directors, CXOs & Founders", percent: 12 },
      { name: "Software Engineers & AI Devs", percent: 7 }
    ],
    locations: [
      { name: "Greater Bengaluru Area", percent: 26 },
      { name: "Greater Hyderabad Area", percent: 24 },
      { name: "Greater Delhi Area", percent: 9 },
      { name: "Greater Chennai Area", percent: 8 },
      { name: "Mumbai Metropolitan Region", percent: 4 },
      { name: "Global & US Tech Hubs (SF/NYC)", percent: 29 }
    ],
    companies: [
      { name: "Amazon", percent: "2%" },
      { name: "Google", percent: "< 1%" },
      { name: "Microsoft", percent: "< 1%" },
      { name: "Accenture", percent: "< 1%" },
      { name: "Blinkit", percent: "< 1%" },
      { name: "JPMorganChase", percent: "< 1%" },
      { name: "Flipkart", percent: "< 1%" },
      { name: "Deloitte", percent: "< 1%" },
      { name: "Adobe", percent: "< 1%" }
    ]
  },
  hookFormulas: [
    {
      id: "f1",
      code: "F1",
      name: "Platform Risk Anaphora",
      category: "High Reach",
      formula: "{Platform} can change its rules tomorrow. {Tech} can replace your workflows next month. You don't own {audience}. You own your {asset}.",
      exampleTopic: "Why Relying on Jira PRDs is a Trap",
      generatedHook: "LinkedIn can throttle your organic reach tomorrow. OpenAI can deprecate your favorite prompt next week. You don't own the algorithm. You don't own the feed. You own your proof. Here is why I stopped writing 10-page PRDs and started building 4-hour working prototypes:"
    },
    {
      id: "f2",
      code: "F2",
      name: "R.I.P. Category Obituary",
      category: "Contrarian / viral",
      formula: "R.I.P. to {Old Way}. It worked for {years}. In {Current Year}, it just burns your team's budget. Here is what replaced it:",
      exampleTopic: "The Death of Traditional Jira User Stories for AI",
      generatedHook: "R.I.P. to the traditional Jira user story for AI products. It worked for 10 years in SaaS. In 2026, writing 'As a user I want an AI that answers questions' burns $50,000 in model hallucinations. Here is the Behavior Spec & Eval Harness that replaced it:"
    },
    {
      id: "f7",
      code: "F7",
      name: "Odd-Precision Money Ledger",
      category: "High Trust / Data",
      formula: "We spent ${Exact Number} on {Initiative}. {Result 1} worked. {Result 2} failed completely. Here is the exact breakdown:",
      exampleTopic: "Our $14,280 LLM API Fine-Tuning Experiment",
      generatedHook: "We spent exactly $14,280 on model fine-tuning last quarter. 1 prompt eval caught 82% of errors. The fine-tuned weights failed completely on edge cases. Here is the honest spreadsheet breakdown of where that money went:"
    },
    {
      id: "f10",
      code: "F10",
      name: "Contrarian + Historical Receipts",
      category: "Authority / Thought Leader",
      formula: "Everyone is telling you to {Popular Advice}. In {Year}, people said the exact same thing about {Past Tech}. Here is why they are wrong:",
      exampleTopic: "Why Every PM Shouldn't Learn Python, but Vibe-Coding",
      generatedHook: "Everyone is telling product managers to take a 6-month Python bootcamp. In 2011, people told PMs to learn Objective-C to build iOS apps. They were wrong then, and they're wrong now. What you actually need is rapid vibe-prototyping in 4 hours:"
    },
    {
      id: "f18",
      code: "F18",
      name: "False-Binary Dissolve",
      category: "Senior Executive",
      formula: "You're constantly asked: '{Choice A}' or '{Choice B}'? That's the wrong question. The real leverage is {Synthesis}.",
      exampleTopic: "Speed vs Quality in AI Product Shipping",
      generatedHook: "Executive teams keep asking AI PMs: 'Do you want to ship fast, or do you want zero hallucinations?' That is a false binary. The top 5% of AI PMs do neither: they build automated eval harnesses that let them ship in 48 hours with guaranteed confidence bounds:"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = DEFAULT_LINKEDIN_DATA;
}
