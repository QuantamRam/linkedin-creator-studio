// Verified Dataset for Ram Chandar Sanaboyina - LinkedIn Manager Dashboard
// Updated with verified data from AggregateAnalytics_Ram chandar Sanaboyina_2026-10-06_2026-10-12.xlsx
// Category: "The AI-Native AI PM" | Target: 7,500 Realistic Milestone

const DEFAULT_LINKEDIN_DATA = {
  version: 2,
  creator: {
    name: "Ram chandar Sanaboyina",
    handle: "@ramchandarsanaboyina",
    profileUrl: "https://www.linkedin.com/in/ramchandarsanaboyina",
    headline: "The AI-Native AI PM 🚀 | Author of 'Building AI Products That Ship' | Ex-Amazon/Blinkit Audience",
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
      description: "Optimal morning window for Bengaluru & APAC tech tech hubs",
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
      id: "post-1",
      date: "2026-10-13",
      time: "08:45 AM IST",
      format: "Carousel (8 slides)",
      title: "The LoCuS Stack: Build Clickable AI Prototypes in 3 Hours",
      status: "Ready",
      hookPreview: "A PRD is a guess written in the dark. A clickable prototype is an honest answer in 90 seconds. Here is the LoCuS stack...",
      targetPillar: "Vibe-Coding Prototypes",
      primaryGoal: "Saves & Reposts"
    },
    {
      id: "post-2",
      date: "2026-10-14",
      time: "08:45 AM IST",
      format: "Text + Framework Graphic",
      title: "The 2-Question Filter: Why 80% of AI Roadmaps Quietly Die",
      status: "Scheduled",
      hookPreview: "Most PMs can define RAG and evals in a sentence now. That still hasn't told them which 4 of their 5 roadmap ideas to kill on Monday...",
      targetPillar: "Product Strategy",
      primaryGoal: "Comments & Saves"
    },
    {
      id: "post-3",
      date: "2026-10-15",
      time: "09:00 AM IST",
      format: "Carousel (7 slides)",
      title: "Never Skip A Rung: The $50k Trap Between Prompt, RAG & Fine-Tuning",
      status: "Drafting",
      hookPreview: "I watched an AI team burn $50,000 fine-tuning a model because they skipped prompt evaluation harnesses...",
      targetPillar: "Model Cascades",
      primaryGoal: "Reposts"
    },
    {
      id: "post-4",
      date: "2026-10-16",
      time: "08:45 AM IST",
      format: "Case Study Breakdown",
      title: "The 20-Example Test: Grade Your LLM in a Spreadsheet Before Writing Code",
      status: "Drafting",
      hookPreview: "Before our engineering team wrote a single line of backend logic, we collected 20 edge cases and scored them in Google Sheets...",
      targetPillar: "Behavior Specs",
      primaryGoal: "Saves & Inbounds"
    }
  ],
  carousels: [
    {
      id: "carousel-locus",
      title: "The LoCuS Stack Playbook 🛠️",
      subtitle: "How to build a clickable AI prototype in 3 hours without waiting for an engineering sprint",
      slidesCount: 8,
      category: "Vibe Coding",
      slides: [
        {
          num: 1,
          tag: "FOR PMS & BUILDERS",
          headline: "How to build a clickable AI prototype in 3 hours.",
          subtext: "(Without waiting for an engineering sprint) — The LoCuS Stack Playbook 🛠️"
        },
        {
          num: 2,
          tag: "THE PRD TRAP",
          headline: "A PRD is a guess written in the dark.",
          subtext: "It describes what you THINK people want. Everyone nods in the sprint planning meeting, but pictures a completely different product."
        },
        {
          num: 3,
          tag: "MEET THE STACK",
          headline: "You only need 3 dependable pieces:",
          subtext: "🟣 Lo = Lovable — First screen & interactive UI in 60 mins\n🟣 Cu = Cursor — Fix edge bugs & wire live logic\n🟣 S = Supabase — Real DB so test data actually persists"
        },
        {
          num: 4,
          tag: "STEP 1 & 2",
          headline: "Write the 1-Page Brief & Prompt the Skeleton",
          subtext: "Who is the user, what job are they doing, and what is the ONE flow? Prompt one screen at a time with loading and empty states."
        },
        {
          num: 5,
          tag: "STEP 3 & 4",
          headline: "Make it Real & Break it on Purpose",
          subtext: "Connect Cursor + Supabase. A prototype running on scripted fake inputs proves nothing. Feed it edge cases before real users do."
        },
        {
          num: 6,
          tag: "STEP 5",
          headline: "Put it in 5 Customers' Hands by 4:00 PM",
          subtext: "Record user screen sessions. Look for hesitation, confusion, and real delight. You just saved 3 weeks of dev debate."
        },
        {
          num: 7,
          tag: "THE SHIFT",
          headline: "From 'PRD Author' to 'Proof Engineer'",
          subtext: "The highest-paid AI PMs don't ask engineers for permission to validate hypotheses. They bring interactive working prototypes."
        },
        {
          num: 8,
          tag: "PLAYBOOK RESOURCE",
          headline: "Get the Complete 8-Chapter Guide",
          subtext: "📘 'Building AI Products That Ship' (₹999). Decision quality matrices, prompt scorecards, and live prototype prompts. Link in bio!"
        }
      ]
    },
    {
      id: "carousel-two-question",
      title: "The 2-Question Filter for AI Features",
      subtitle: "How to stop roadmap debates and kill bad AI ideas before spending $50k",
      slidesCount: 7,
      category: "Product Strategy",
      slides: [
        {
          num: 1,
          tag: "ROADMAP PRIORITIZATION",
          headline: "Stop debating opinions in roadmap meetings.",
          subtext: "Here is the 2-Question Filter that saved our AI product team 3 months of wasted engineering."
        },
        {
          num: 2,
          tag: "THE CORE PROBLEM",
          headline: "Most AI features are 'Cool Demos', not Products.",
          subtext: "If an AI feature fails 10% of the time, does the user forgive it or do they abandon the entire app?"
        },
        {
          num: 3,
          tag: "QUESTION 1",
          headline: "Q1: What is the cost of hallucination?",
          subtext: "If hallucination causes embarrassment vs. legal breach vs. minor edit, that dictates Prompting vs. Guardrails vs. Killing it."
        },
        {
          num: 4,
          tag: "QUESTION 2",
          headline: "Q2: Does this replace a manual task or create new value?",
          subtext: "Replacing an existing high-friction flow has 10x higher retention than asking users to 'explore' a conversational chatbot."
        },
        {
          num: 5,
          tag: "THE 4-QUADRANT MATRIX",
          headline: "The 2x2 Decision Quality Matrix",
          subtext: "Top-Right: Ship immediately. Bottom-Right: The graveyard where 80% of shiny AI features belong."
        },
        {
          num: 6,
          tag: "EXECUTION RULE",
          headline: "Never start a Jira sprint without a 20-Example eval.",
          subtext: "Grade real sample outputs with your team before letting engineers build expensive model pipelines."
        },
        {
          num: 7,
          tag: "SUMMARY",
          headline: "Build AI Products That Ship",
          subtext: "Swipe right, bookmark this post, and grab the free Decision Quality Matrix from the link in comments."
        }
      ]
    },
    {
      id: "carousel-unit-economics",
      title: "AI Unit Economics as Product Design 💰",
      subtitle: "Why model cascades and token budgets are the core PM responsibility in 2026",
      slidesCount: 6,
      category: "Unit Economics",
      slides: [
        {
          num: 1,
          tag: "COST & LATENCY",
          headline: "Why AI Unit Economics is Product Design.",
          subtext: "If your model costs $0.08 per request and your user triggers it 50 times a day, your SaaS pricing is already underwater."
        },
        {
          num: 2,
          tag: "THE CASCADE",
          headline: "Rule 1: Build a 3-Tier Model Cascade",
          subtext: "Tier 1: Fast regex/small model (free). Tier 2: Flash/Mini LLM ($0.001). Tier 3: Opus/O1 frontier model only for complex queries."
        },
        {
          num: 3,
          tag: "LATENCY TAX",
          headline: "Every 500ms delay drops user retention by 8%",
          subtext: "Streaming UI isn't an aesthetic choice — it's psychological latency compression."
        },
        {
          num: 4,
          tag: "TOKEN BUDGETS",
          headline: "Assign Hard Token Budgets per Feature",
          subtext: "Just like mobile apps have 50MB app size budgets, AI features need hard token ceilings."
        },
        {
          num: 5,
          tag: "PROFITABILITY GATES",
          headline: "Test Unit Economics Before GA Launch",
          subtext: "Run 1,000 simulated queries to verify blended cost-per-active-user stays under 15% of your subscription ARPU."
        },
        {
          num: 6,
          tag: "FULL BREAKDOWN",
          headline: "From Chapter 5 of 'Building AI Products That Ship'",
          subtext: "Includes downloadable spreadsheet calculator for model cascades and token burn rates. Link in 1st comment."
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
