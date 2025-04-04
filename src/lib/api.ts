/**
 * API utilities for external service integrations
 */

// Define the company result type
export interface CompanyResult {
  name: string;
  website: string;
  valueProp: string;
  size: string;
  linkedProfile?: string;
  yearsOfOperation?: string;
}

/**
 * Function to search for similar ventures using mock data
 * @param description - The venture description to search for
 * @returns Promise with the search results
 */
export async function searchSimilarVentures(
  description: string,
): Promise<CompanyResult[]> {
  // Instead of calling the API, we'll use a creative approach with predefined data
  // and some basic keyword matching to simulate intelligent results

  return new Promise((resolve) => {
    // Simulate API call delay
    setTimeout(() => {
      // Extract keywords from the description
      const keywords = extractKeywords(description.toLowerCase());

      // Filter and sort the mock data based on keyword relevance
      const results = MOCK_COMPANIES.map((company) => {
        // Calculate a relevance score based on keyword matches
        const score = calculateRelevanceScore(company, keywords);
        return { ...company, score };
      })
        .sort((a, b) => b.score - a.score) // Sort by relevance score
        .slice(0, 5) // Take top 5 results
        .map(({ score, ...company }) => company); // Remove the score property

      resolve(results);
    }, 3000); // Simulate network delay
  });
}

// Extract meaningful keywords from the description
function extractKeywords(text: string): string[] {
  // Remove common words and punctuation
  const words = text
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !COMMON_WORDS.includes(word));

  return [...new Set(words)]; // Remove duplicates
}

// Calculate relevance score based on keyword matches
function calculateRelevanceScore(
  company: CompanyResult,
  keywords: string[],
): number {
  let score = 0;

  // Check company name and value proposition for keyword matches
  const companyText = `${company.name} ${company.valueProp}`.toLowerCase();

  keywords.forEach((keyword) => {
    if (companyText.includes(keyword)) {
      score += 1;
    }
  });

  // Add some randomness to make results more interesting
  score += Math.random() * 0.5;

  return score;
}

// Common words to filter out
const COMMON_WORDS = [
  "this",
  "that",
  "these",
  "those",
  "with",
  "from",
  "have",
  "will",
  "would",
  "could",
  "should",
  "about",
  "their",
  "there",
  "they",
  "them",
  "then",
  "than",
  "your",
  "which",
  "what",
  "when",
  "where",
  "who",
  "whom",
  "whose",
  "why",
  "how",
];

// Mock company data organized by industry
const MOCK_COMPANIES: CompanyResult[] = [
  // Tech startups
  {
    name: "CloudNative Solutions",
    website: "https://cloudnativesolutions.io",
    valueProp:
      "Kubernetes-based cloud infrastructure automation for enterprise deployments",
    size: "50-200 employees",
    linkedProfile: "https://linkedin.com/company/cloudnative-solutions",
    yearsOfOperation: "5-7 years",
  },
  {
    name: "DataSense AI",
    website: "https://datasense.ai",
    valueProp:
      "AI-powered data analytics platform for business intelligence and predictive insights",
    size: "20-50 employees",
    linkedProfile: "https://linkedin.com/company/datasense-ai",
    yearsOfOperation: "2-4 years",
  },
  {
    name: "SecureEdge",
    website: "https://secureedge.tech",
    valueProp:
      "Zero-trust security solutions for distributed workforce and cloud applications",
    size: "100-250 employees",
    linkedProfile: "https://linkedin.com/company/secureedge-tech",
    yearsOfOperation: "8-10 years",
  },
  {
    name: "QuantumCompute",
    website: "https://quantumcompute.dev",
    valueProp:
      "Quantum computing solutions for complex scientific and financial modeling",
    size: "30-80 employees",
    linkedProfile: "https://linkedin.com/company/quantum-compute",
    yearsOfOperation: "3-5 years",
  },
  {
    name: "DevOpsNinja",
    website: "https://devopsninja.tech",
    valueProp:
      "Automated CI/CD pipeline tools and DevOps consulting for enterprise teams",
    size: "40-100 employees",
    linkedProfile: "https://linkedin.com/company/devops-ninja",
    yearsOfOperation: "6-8 years",
  },

  // Fintech
  {
    name: "PaymentStream",
    website: "https://paymentstream.com",
    valueProp:
      "Real-time payment processing and financial reconciliation for global businesses",
    size: "150-300 employees",
    linkedProfile: "https://linkedin.com/company/paymentstream",
    yearsOfOperation: "7-9 years",
  },
  {
    name: "WealthFront",
    website: "https://wealthfront.finance",
    valueProp:
      "Automated investment management and financial planning for millennials",
    size: "50-100 employees",
    linkedProfile: "https://linkedin.com/company/wealthfront-finance",
    yearsOfOperation: "4-6 years",
  },
  {
    name: "LendingCircle",
    website: "https://lendingcircle.co",
    valueProp:
      "Peer-to-peer lending marketplace connecting borrowers with individual investors",
    size: "200-500 employees",
    yearsOfOperation: "10+ years",
  },
  {
    name: "CryptoVault",
    website: "https://cryptovault.finance",
    valueProp:
      "Secure cryptocurrency storage and trading platform with institutional-grade security",
    size: "60-150 employees",
    linkedProfile: "https://linkedin.com/company/crypto-vault",
    yearsOfOperation: "3-5 years",
  },
  {
    name: "InsureTech",
    website: "https://insuretech.io",
    valueProp:
      "AI-driven insurance underwriting and claims processing for digital-first carriers",
    size: "80-200 employees",
    linkedProfile: "https://linkedin.com/company/insuretech",
    yearsOfOperation: "5-7 years",
  },

  // Healthcare
  {
    name: "MedConnect",
    website: "https://medconnect.health",
    valueProp:
      "Telemedicine platform connecting patients with specialists across multiple disciplines",
    size: "100-250 employees",
    yearsOfOperation: "6-8 years",
  },
  {
    name: "BioGenomics",
    website: "https://biogenomics.life",
    valueProp:
      "Personalized medicine solutions based on genetic profiling and AI diagnostics",
    size: "50-150 employees",
    yearsOfOperation: "4-6 years",
  },
  {
    name: "CareCoordinate",
    website: "https://carecoordinate.org",
    valueProp:
      "Healthcare management software for streamlining patient care across providers",
    size: "75-200 employees",
    yearsOfOperation: "7-9 years",
  },
  {
    name: "MentalWellness",
    website: "https://mentalwellness.care",
    valueProp:
      "Digital mental health platform providing therapy, coaching, and self-care resources",
    size: "40-120 employees",
    linkedProfile: "https://linkedin.com/company/mental-wellness",
    yearsOfOperation: "2-4 years",
  },
  {
    name: "MedicalAI",
    website: "https://medicalai.health",
    valueProp:
      "AI-assisted diagnostic tools and clinical decision support for healthcare providers",
    size: "60-150 employees",
    linkedProfile: "https://linkedin.com/company/medical-ai",
    yearsOfOperation: "3-5 years",
  },

  // E-commerce
  {
    name: "ShopSmart",
    website: "https://shopsmart.market",
    valueProp:
      "AI-powered personalized shopping experience with dynamic pricing",
    size: "100-300 employees",
    yearsOfOperation: "5-7 years",
  },
  {
    name: "FulfillmentPro",
    website: "https://fulfillmentpro.com",
    valueProp:
      "End-to-end logistics and fulfillment solutions for e-commerce businesses",
    size: "300-750 employees",
    yearsOfOperation: "8-10 years",
  },
  {
    name: "RetailInsights",
    website: "https://retailinsights.co",
    valueProp:
      "Analytics platform for brick-and-mortar retailers to optimize inventory and staffing",
    size: "25-75 employees",
    yearsOfOperation: "3-5 years",
  },

  // Sustainability
  {
    name: "GreenEnergy Solutions",
    website: "https://greenenergysolutions.earth",
    valueProp:
      "Renewable energy infrastructure and carbon offset programs for corporations",
    size: "150-400 employees",
    yearsOfOperation: "7-9 years",
  },
  {
    name: "CircularEconomy",
    website: "https://circulareconomy.org",
    valueProp:
      "Supply chain solutions for reducing waste and implementing sustainable practices",
    size: "50-150 employees",
    yearsOfOperation: "4-6 years",
  },
  {
    name: "EcoTrack",
    website: "https://ecotrack.green",
    valueProp:
      "Environmental impact monitoring and reporting tools for regulatory compliance",
    size: "30-100 employees",
    yearsOfOperation: "2-4 years",
  },

  // Education
  {
    name: "LearnSphere",
    website: "https://learnsphere.edu",
    valueProp:
      "Adaptive learning platform with personalized curriculum for K-12 students",
    size: "75-200 employees",
    yearsOfOperation: "6-8 years",
  },
  {
    name: "SkillBridge",
    website: "https://skillbridge.training",
    valueProp:
      "Professional skills development and certification for career advancement",
    size: "100-250 employees",
    yearsOfOperation: "5-7 years",
  },
  {
    name: "EduMetrics",
    website: "https://edumetrics.io",
    valueProp:
      "Learning analytics and outcome measurement tools for educational institutions",
    size: "40-120 employees",
    yearsOfOperation: "3-5 years",
  },

  // Real Estate
  {
    name: "PropTech Innovations",
    website: "https://proptech-innovations.com",
    valueProp:
      "AI-driven property valuation and investment analysis for real estate professionals",
    size: "50-150 employees",
    yearsOfOperation: "4-6 years",
  },
  {
    name: "SmartSpace",
    website: "https://smartspace.properties",
    valueProp:
      "IoT solutions for commercial building management and energy optimization",
    size: "75-200 employees",
    yearsOfOperation: "5-7 years",
  },
  {
    name: "RentalSimplified",
    website: "https://rentalsimplified.co",
    valueProp:
      "End-to-end property management platform for landlords and property managers",
    size: "100-300 employees",
    yearsOfOperation: "6-8 years",
  },
];
