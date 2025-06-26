export const products = [
  {
    id: 'budget-buddy',
    name: 'Budget Buddy',
    tagline: 'Smart Investment Tracker',
    description: 'AI-powered expense tracking application with intelligent budgeting algorithms, real-time bank integration, and predictive spending analytics.',
    longDescription: 'Budget Buddy revolutionizes personal finance management with cutting-edge AI technology. Our app learns from your spending patterns to provide personalized insights, automated categorization, and predictive alerts to help you stay on track with your financial goals.',
    features: [
      'Real-time expense categorization with AI',
      'Custom budgeting rules (50/30/20, envelope method)',
      'Bank transaction synchronization',
      'Predictive spending alerts and recommendations',
      'Multi-currency support for international users',
      'Investment portfolio tracking and analysis',
      'Bill reminders and due date notifications',
      'Detailed financial reports and analytics'
    ],
    tech: ['Flutter', 'Firebase', 'Node.js', 'MongoDB', 'Python ML', 'Plaid API'],
    demo: '/videos/budget-buddy-demo.mp4',
    screenshots: [
      '/images/budget-buddy-1.jpg',
      '/images/budget-buddy-2.jpg',
      '/images/budget-buddy-3.jpg'
    ],
    status: 'live',
    platforms: ['Android', 'iOS', 'Web Dashboard'],
    metrics: {
      users: '10,000+',
      rating: 4.8,
      downloads: '25,000+',
      retention: '85%'
    },
    appStore: 'https://play.google.com/store/apps/details?id=com.intelisans.budgetbuddy',
    testimonials: [
      {
        name: 'Sarah Johnson',
        role: 'Small Business Owner',
        comment: 'Budget Buddy helped me track my business expenses effortlessly. The AI categorization is incredibly accurate!'
      }
    ]
  },
  {
    id: 'promo-buddy',
    name: 'Promo Buddy',
    tagline: 'Personalized Promotions Engine',
    description: 'Revolutionary promotion matching system for Sri Lanka - the first AI-powered platform connecting credit/debit card offers with user preferences.',
    longDescription: 'Promo Buddy is the first-of-its-kind intelligent promotion platform in Sri Lanka, connecting banks, merchants, and customers through AI-powered offer matching. Our platform analyzes spending patterns to deliver personalized promotions that actually matter to users.',
    features: [
      'AI-powered promotion matching algorithm',
      'Real-time merchant integration and updates',
      'Multi-channel campaign delivery (Push, SMS, Email)',
      'Comprehensive merchant dashboard with analytics',
      'Customer behavior insights and segmentation',
      'Geolocation-based offer targeting',
      'Campaign performance tracking and optimization',
      'Bank partnership integration for card-specific offers'
    ],
    tech: ['React Native', 'AWS Lambda', 'Python', 'PostgreSQL', 'Redis', 'ML Models'],
    demo: '/videos/promo-buddy-demo.mp4',
    screenshots: [
      '/images/promo-buddy-1.jpg',
      '/images/promo-buddy-2.jpg',
      '/images/promo-buddy-3.jpg'
    ],
    status: 'live',
    platforms: ['Android', 'iOS', 'Web Dashboard', 'Merchant Portal'],
    metrics: {
      merchants: '500+',
      campaigns: '2,000+',
      engagement: '85%',
      conversion: '35%'
    },
    partnerships: ['Commercial Bank', 'Sampath Bank', 'Dialog Axiata'],
    testimonials: [
      {
        name: 'Rajesh Patel',
        role: 'Restaurant Owner',
        comment: 'Our promotions reach the right customers at the right time. Sales increased by 40% since using Promo Buddy.'
      }
    ]
  },
  {
    id: 'grandma-tales',
    name: 'Grandma Tales',
    tagline: 'Interactive Kids Stories',
    description: 'Voice-enabled storytelling application designed for safe, educational entertainment with parental controls and screen time management.',
    longDescription: 'Grandma Tales brings the magic of storytelling into the digital age with voice-enabled narration, educational content, and comprehensive parental controls. Designed to limit screen time while maximizing learning and imagination.',
    features: [
      'AI-powered voice narration in multiple languages',
      'Parental controls and screen time management',
      'Educational content curation by child development experts',
      'Offline story downloads for travel',
      'Progress tracking and reading achievements',
      'Interactive elements and comprehension questions',
      'Custom story creation tools for parents',
      'Safe, ad-free environment for children'
    ],
    tech: ['Flutter', 'Firebase', 'Google Cloud Text-to-Speech', 'ML Kit', 'Parental Controls API'],
    demo: '/videos/grandma-tales-demo.mp4',
    screenshots: [
      '/images/grandma-tales-1.jpg',
      '/images/grandma-tales-2.jpg',
      '/images/grandma-tales-3.jpg'
    ],
    status: 'beta',
    platforms: ['Android', 'iOS'],
    metrics: {
      stories: '100+',
      families: '1,000+',
      engagement: '92%',
      sessionTime: '25 min avg'
    },
    ageRange: '3-10 years',
    testimonials: [
      {
        name: 'Emily Chen',
        role: 'Mother of Two',
        comment: 'My kids love the stories, and I love the parental controls. Perfect balance of entertainment and education.'
      }
    ]
  },
  {
    id: 'campaign-booster',
    name: 'Campaign Booster',
    tagline: 'Multi-Channel Promotion Engine',
    description: 'Comprehensive campaign management platform for banks and merchants with multi-channel delivery and advanced analytics.',
    longDescription: 'Campaign Booster is our enterprise-grade solution for managing complex promotional campaigns across multiple channels. Built for banks, retailers, and large merchants who need sophisticated campaign management with real-time analytics.',
    features: [
      'Multi-channel campaign deployment (SMS, WhatsApp, Email, Push)',
      'Advanced campaign builder with drag-and-drop interface',
      'Real-time analytics and performance tracking',
      'A/B testing framework for campaign optimization',
      'Customer segmentation and targeting tools',
      'Automated campaign scheduling and triggers',
      'Integration with CRM and marketing automation tools',
      'Compliance management for financial regulations'
    ],
    tech: ['React', 'Django', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Kubernetes'],
    demo: '/videos/campaign-booster-demo.mp4',
    screenshots: [
      '/images/campaign-booster-1.jpg',
      '/images/campaign-booster-2.jpg',
      '/images/campaign-booster-3.jpg'
    ],
    status: 'live',
    platforms: ['Web Platform', 'API', 'Mobile Admin'],
    metrics: {
      campaigns: '10,000+',
      messages: '1M+ monthly',
      clients: '50+',
      deliverability: '99.2%'
    },
    clientTypes: ['Banks', 'Retailers', 'E-commerce', 'Telecommunications'],
    testimonials: [
      {
        name: 'David Williams',
        role: 'Marketing Director, ABC Bank',
        comment: 'Campaign Booster transformed our marketing operations. We can now launch campaigns in minutes, not days.'
      }
    ]
  }
]

export const dataServices = [
  {
    id: 'financial-data-analytics',
    name: 'Financial Data Analytics',
    description: 'Advanced analytics platform for banking and financial transaction data with AI-powered insights.',
    features: [
      'Transaction pattern analysis and anomaly detection',
      'Customer behavior modeling and segmentation',
      'Fraud detection with machine learning algorithms',
      'Risk assessment and credit scoring models',
      'Personalized product recommendation engine',
      'Regulatory compliance reporting automation',
      'Real-time dashboard with actionable insights',
      'Predictive analytics for business forecasting'
    ],
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Apache Spark', 'Tableau', 'PostgreSQL'],
    useCases: [
      'Credit risk assessment and loan approval optimization',
      'Customer lifetime value prediction',
      'Fraud prevention and security enhancement',
      'Cross-selling and upselling opportunities',
      'Regulatory compliance and reporting',
      'Market basket analysis for product bundling'
    ],
    deliverables: [
      'Custom analytics dashboard',
      'Automated reporting system',
      'Machine learning models',
      'Data pipeline architecture',
      'Training and documentation'
    ]
  },
  {
    id: 'retail-analytics',
    name: 'Retail & E-commerce Analytics',
    description: 'Comprehensive analytics solution for retail businesses to optimize operations and increase sales.',
    features: [
      'Sales performance tracking and forecasting',
      'Inventory optimization and demand planning',
      'Customer journey analysis and conversion optimization',
      'Price optimization and competitive analysis',
      'Marketing campaign effectiveness measurement',
      'Supply chain analytics and optimization',
      'Store performance benchmarking',
      'Seasonal trend analysis and planning'
    ],
    tech: ['Python', 'R', 'Power BI', 'AWS', 'MongoDB', 'Apache Airflow'],
    useCases: [
      'Inventory management and stock optimization',
      'Customer segmentation for targeted marketing',
      'Price optimization for maximum profitability',
      'Store layout optimization based on customer behavior',
      'Supplier performance evaluation',
      'Demand forecasting for seasonal products'
    ],
    deliverables: [
      'Real-time analytics dashboard',
      'Automated inventory alerts',
      'Customer segmentation reports',
      'Price optimization recommendations',
      'Performance KPI tracking'
    ]
  },
  {
    id: 'custom-data-solutions',
    name: 'Custom Data Solutions',
    description: 'Tailored data analytics solutions for any industry with flexible deployment options.',
    features: [
      'Custom data pipeline development',
      'Multi-source data integration (Excel, CSV, APIs, Databases)',
      'Advanced visualization and reporting',
      'Machine learning model development',
      'Cloud migration and optimization',
      'Data warehouse design and implementation',
      'ETL process automation',
      'Performance monitoring and optimization'
    ],
    tech: ['Python', 'Apache Spark', 'Docker', 'Kubernetes', 'Azure', 'AWS', 'GCP'],
    deploymentOptions: [
      'On-premise bare metal servers',
      'Hybrid cloud architecture',
      'Full cloud deployment (Azure/AWS/GCP)',
      'Containerized microservices',
      'Serverless architecture'
    ],
    industries: [
      'Healthcare and pharmaceuticals',
      'Manufacturing and logistics',
      'Education and e-learning',
      'Real estate and property management',
      'Telecommunications',
      'Government and public sector'
    ]
  }
]

export const aiTools = [
  {
    id: 'ai-chatbot-platform',
    name: 'AI Chatbot Platform',
    status: 'coming-soon',
    description: 'Intelligent conversational AI platform for customer service automation.',
    features: [
      'Natural language processing and understanding',
      'Multi-language support',
      'Integration with existing systems',
      'Continuous learning and improvement',
      'Analytics and performance tracking'
    ],
    releaseDate: 'Q3 2025'
  },
  {
    id: 'content-generation-ai',
    name: 'Content Generation AI',
    status: 'coming-soon',
    description: 'AI-powered content creation tool for marketing and communications.',
    features: [
      'Automated content generation',
      'Brand voice consistency',
      'Multi-format output (blog, social, email)',
      'SEO optimization',
      'Plagiarism detection'
    ],
    releaseDate: 'Q4 2025'
  }
]