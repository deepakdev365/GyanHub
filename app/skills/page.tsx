import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Brain, Globe, Cloud, Shield } from "lucide-react"

export default function SkillsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Skill Development</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Master in-demand skills required for your dream job through expert guidance, curated resources, and
              personalized learning paths.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Skill Development for Careers in Top MNCs</h2>
            <p className="text-gray-600 mt-2">
              Your guide to mastering skills that land you jobs in Google, Microsoft, TCS, Deloitte, Amazon & more.
            </p>
          </div>

          <div className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Why Skill Development Matters</h3>
            <p className="text-gray-700 mb-4">
              In today's job market, just having a degree is not enough. Companies look for:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Practical skills</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Hands-on project experience</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Soft skills</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span>Certifications & real-world tools</span>
              </li>
            </ul>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              For Engineering & Computer Science (CSE, IT, ECE, EEE)
            </h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">In-Demand MNC Roles:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Software Developer / Engineer</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Data Scientist</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">DevOps / Cloud Engineer</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Embedded Systems Engineer</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Cybersecurity Analyst</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-blue-600" />
                    Programming & DSA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">Cracking coding interviews at Google, Microsoft, Amazon.</p>

                  <p className="font-medium mb-2">Languages to Learn:</p>
                  <p className="text-gray-700 mb-4">C++, Java, Python, JavaScript</p>

                  <p className="font-medium mb-2">Resources:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>LeetCode – DSA problems with difficulty levels</li>
                    <li>GeeksforGeeks – Theory + code</li>
                    <li>Codeforces – Competitive programming</li>
                    <li>NeetCode – Roadmap-based prep</li>
                  </ul>

                  <p className="font-medium mb-2">Practice Plan:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>
                      <strong>Daily:</strong> Solve 1–2 problems
                    </li>
                    <li>
                      <strong>Topics:</strong> Arrays → Strings → Recursion → Trees → Graphs → DP
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-blue-600" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">
                    For roles in front-end, full-stack, backend in product-based MNCs.
                  </p>

                  <p className="font-medium mb-2">Tech Stack (MERN Example):</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>
                      <strong>Frontend:</strong> HTML, CSS, JavaScript, React.js
                    </li>
                    <li>
                      <strong>Backend:</strong> Node.js, Express.js
                    </li>
                    <li>
                      <strong>Database:</strong> MongoDB
                    </li>
                  </ul>

                  <p className="font-medium mb-2">Resources:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>freeCodeCamp</li>
                    <li>The Odin Project</li>
                    <li>YouTube (Code with Harry, Traversy Media)</li>
                  </ul>

                  <p className="font-medium mb-2">Projects to Build:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>To-do app</li>
                    <li>E-commerce site</li>
                    <li>Portfolio website with blog</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Cloud className="h-5 w-5 text-blue-600" />
                    DevOps & Cloud
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">
                    For infrastructure management roles in top cloud service companies.
                  </p>

                  <p className="font-medium mb-2">Skills:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>Linux basics, Shell scripting</li>
                    <li>Docker, Kubernetes, Jenkins</li>
                    <li>AWS, GCP, or Azure</li>
                  </ul>

                  <p className="font-medium mb-2">Resources:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>AWS Educate</li>
                    <li>Kubernetes.io</li>
                    <li>Docker Playground</li>
                  </ul>

                  <p className="font-medium mb-2">Certifications:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>AWS Cloud Practitioner</li>
                    <li>Microsoft Azure Fundamentals</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="h-5 w-5 text-blue-600" />
                    AI, Data Science & Machine Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">
                    High-paying roles in companies like Google AI, Meta, Nvidia, etc.
                  </p>

                  <p className="font-medium mb-2">Skills:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>Python, Pandas, NumPy</li>
                    <li>Scikit-learn, TensorFlow</li>
                    <li>Data Visualization: Matplotlib, Seaborn</li>
                    <li>SQL</li>
                  </ul>

                  <p className="font-medium mb-2">Resources:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>Kaggle Courses</li>
                    <li>Coursera – Andrew Ng's ML</li>
                    <li>Google Colab for practice</li>
                  </ul>

                  <p className="font-medium mb-2">Projects to Build:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Spam classifier</li>
                    <li>Stock price predictor</li>
                    <li>Customer segmentation (KMeans)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-blue-600" />
                    Cybersecurity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Why It's Needed:</p>
                  <p className="text-gray-700 mb-4">MNCs are investing in cybersecurity more than ever.</p>

                  <p className="font-medium mb-2">Skills:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>Networking concepts (OSI model, TCP/IP)</li>
                    <li>Ethical Hacking & Pen Testing</li>
                    <li>SIEM, Firewalls, OWASP Top 10</li>
                  </ul>

                  <p className="font-medium mb-2">Resources:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>TryHackMe</li>
                    <li>Hack The Box</li>
                    <li>Cybrary</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Soft Skills for Tech</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Problem Solving</li>
                    <li>Presentation of projects</li>
                    <li>Git & GitHub usage</li>
                    <li>Time management (use Trello/Notion)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              For Business, Management & Marketing (BBA, MBA, PGDM)
            </h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">In-Demand Roles:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Business Analyst</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Product Manager</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Digital Marketing Manager</Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Strategy Consultant</Badge>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>Business Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Skills:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>Advanced Excel (Pivot Tables, VLOOKUP)</li>
                    <li>Data Visualization (Power BI, Tableau)</li>
                    <li>SQL for business logic</li>
                  </ul>

                  <p className="font-medium mb-2">Resources:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Microsoft Learn</li>
                    <li>Tableau Public</li>
                    <li>DataCamp</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Digital Marketing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Skills:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>SEO, SEM, Google Ads</li>
                    <li>Social Media Marketing</li>
                    <li>Funnel Optimization</li>
                  </ul>

                  <p className="font-medium mb-2">Tools:</p>
                  <p className="text-gray-700 mb-4">Google Analytics, Meta Ads, HubSpot</p>

                  <p className="font-medium mb-2">Certifications:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Google Digital Garage</li>
                    <li>HubSpot Academy</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Product Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium mb-2">Skills:</p>
                  <ul className="list-disc pl-5 text-gray-700 mb-4">
                    <li>UX Research, Roadmapping, Agile</li>
                    <li>Prototyping & testing</li>
                    <li>Business Model Canvas</li>
                  </ul>

                  <p className="font-medium mb-2">Tools:</p>
                  <p className="text-gray-700 mb-4">Notion, Jira, Miro, Figma</p>

                  <p className="font-medium mb-2">Resources:</p>
                  <ul className="list-disc pl-5 text-gray-700">
                    <li>Reforge</li>
                    <li>Product School</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Universal Skills for Everyone</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Skill
                    </th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      How to Develop
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Communication</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Present your work regularly, join public speaking clubs, record videos
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Teamwork</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Work on group projects, lead student clubs, attend hackathons
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Time Management</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Use Notion, Google Calendar, Pomodoro Technique</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Leadership</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Organize events, mentor juniors, lead college initiatives
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Digital Literacy</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Use tools like Google Workspace, Slack, Trello, Zoom, ChatGPT, AI tools
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Final Project Ideas (Skill-Based)</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Field
                    </th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Project Ideas
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">CSE / IT</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Chat App, Resume Builder, Weather App, E-commerce site
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">BBA / MBA</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Business Plan for a Startup, Customer Feedback Report, Market Research Survey
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Commerce</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Analyze a Company's Annual Report, Create a Budget Tracker
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Arts & Design</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      App UI Redesign, Instagram Carousel Set, Brand Logo Design
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Medical / Pharma</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Public Awareness Campaign, Symptom Checker App, Medical Infographic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Skill Development for Top MNC Jobs</h2>
            <p className="text-gray-600 mt-2">
              "Get skilled, get hired." - This guide helps students and professionals understand what skills are in
              demand by top MNCs like Google, Amazon, TCS, Microsoft, Deloitte, Goldman Sachs, etc.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Engineering & Computer Science (B.Tech in CSE, IT, ECE, etc.)
            </h3>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">In-Demand Job Roles:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Software Engineer</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Data Scientist</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">DevOps Engineer</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Cybersecurity Analyst</Badge>
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Embedded Systems Engineer</Badge>
              </div>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Skills
                    </th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tools & Platforms
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Programming</td>
                    <td className="py-4 px-4 text-sm text-gray-500">C++, Java, Python, JavaScript, Go</td>
                    <td className="py-4 px-4 text-sm text-gray-500">HackerRank, LeetCode, Codeforces</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Data Structures & Algorithms</td>
                    <td className="py-4 px-4 text-sm text-gray-500">
                      Sorting, Searching, Trees, Graphs, DP, Recursion
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-500">GeeksforGeeks, NeetCode, InterviewBit</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Web Development</td>
                    <td className="py-4 px-4 text-sm text-gray-500">HTML, CSS, JavaScript, React.js, Node.js</td>
                    <td className="py-4 px-4 text-sm text-gray-500">VS Code, GitHub, Netlify</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Database Management</td>
                    <td className="py-4 px-4 text-sm text-gray-500">SQL, MongoDB, PostgreSQL</td>
                    <td className="py-4 px-4 text-sm text-gray-500">MySQL Workbench, MongoDB Atlas</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Cloud & DevOps</td>
                    <td className="py-4 px-4 text-sm text-gray-500">AWS, Azure, Docker, Jenkins, Kubernetes, CI/CD</td>
                    <td className="py-4 px-4 text-sm text-gray-500">AWS Educate, Udemy, Coursera</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">General Skills That Apply Across All Fields</h3>

            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Skill Area
                    </th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Importance
                    </th>
                    <th className="py-3 px-4 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      How to Build It
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Communication</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Present ideas clearly and effectively</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Public speaking, Toastmasters, debates</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Problem-Solving</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Handle real-world challenges</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Case studies, Hackathons, puzzles</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Teamwork & Leadership</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Work with diverse teams, manage conflicts</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Internships, group projects</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Time Management</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Juggle studies, projects, and goals</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Pomodoro, To-do lists, project trackers</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-sm font-medium text-gray-900">Digital Literacy</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Comfort with digital tools and data</td>
                    <td className="py-4 px-4 text-sm text-gray-500">Excel, Slack, Trello, Notion</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Final Tips</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li>
                <strong>Upskill Continuously:</strong> Trends change fast — keep learning new tech and tools.
              </li>
              <li>
                <strong>Get Certified:</strong> Certifications from Coursera, edX, AWS, Google, etc., are highly valued.
              </li>
              <li>
                <strong>Build a Portfolio/Resume:</strong> Projects, case studies, and internships make your skills
                tangible.
              </li>
              <li>
                <strong>Network Actively:</strong> Join LinkedIn groups, attend webinars, and connect with
                professionals.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
