"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowRight, ArrowLeft } from "lucide-react"

export default function HighPayingJobsPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set loading to false after a short delay to ensure the component renders
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-16">
        <p>Loading high-paying jobs...</p>
      </div>
    )
  }

  return (
    <main className="flex min-h-screen flex-col pt-16">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/jobs" className="text-green-600 hover:underline flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Jobs
            </Link>
          </div>
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">High-Paying Career Paths</h1>
            <p className="text-lg text-gray-700 mt-2 max-w-2xl mx-auto">
              Explore lucrative careers with exceptional compensation packages at leading organizations
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Technical Degrees Section */}
            <Card className="col-span-full mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  🧠 Technical Degrees (BSc, MSc in Computer Science, IT, etc.)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">AI/ML Engineer</h3>
                    <p className="text-sm text-muted-foreground">Salary Range: ₹20–70 LPA</p>
                    <p className="mt-2">
                      Design intelligent systems that learn from data to automate tasks or make predictions.
                    </p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Skills Required:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">TensorFlow</Badge>
                        <Badge variant="outline">PyTorch</Badge>
                        <Badge variant="outline">Deep Learning</Badge>
                        <Badge variant="outline">NLP</Badge>
                        <Badge variant="outline">Computer Vision</Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Top Recruiters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Google</Badge>
                        <Badge variant="outline">Meta</Badge>
                        <Badge variant="outline">Amazon</Badge>
                        <Badge variant="outline">NVIDIA</Badge>
                        <Badge variant="outline">Microsoft</Badge>
                        <Badge variant="outline">TCS AI Labs</Badge>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                      <Link href="/jobs/ai-ml-engineer" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Data Engineer</h3>
                    <p className="text-sm text-muted-foreground">Salary Range: ₹18–50 LPA</p>
                    <p className="mt-2">
                      Build robust, scalable data pipelines and architecture for analytics and ML workflows.
                    </p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Skills Required:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">SQL</Badge>
                        <Badge variant="outline">Apache Spark</Badge>
                        <Badge variant="outline">Kafka</Badge>
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">Big Data Tools</Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Top Recruiters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Snowflake</Badge>
                        <Badge variant="outline">Uber</Badge>
                        <Badge variant="outline">LinkedIn</Badge>
                        <Badge variant="outline">Accenture</Badge>
                        <Badge variant="outline">Wipro</Badge>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                      <Link href="/jobs/data-engineer" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Cybersecurity Analyst</h3>
                    <p className="text-sm text-muted-foreground">Salary Range: ₹15–45 LPA</p>
                    <p className="mt-2">Protect systems and networks from cyber threats and breaches.</p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Skills Required:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Network Security</Badge>
                        <Badge variant="outline">Ethical Hacking</Badge>
                        <Badge variant="outline">Firewalls</Badge>
                        <Badge variant="outline">Cryptography</Badge>
                        <Badge variant="outline">SIEM tools</Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Top Recruiters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Palo Alto Networks</Badge>
                        <Badge variant="outline">IBM</Badge>
                        <Badge variant="outline">Deloitte</Badge>
                        <Badge variant="outline">EY</Badge>
                        <Badge variant="outline">HCL</Badge>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                      <Link href="/jobs/cybersecurity-expert" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Engineering Degrees Section */}
            <Card className="col-span-full mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">
                  ⚙️ Engineering Degrees (BTech/MTech - CSE, Mechanical, Electrical, etc.)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Software Architect</h3>
                    <p className="text-sm text-muted-foreground">Salary Range: ₹30–90 LPA</p>
                    <p className="mt-2">Design the architecture and technology stack of complex software systems.</p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Skills Required:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">System Design</Badge>
                        <Badge variant="outline">Microservices</Badge>
                        <Badge variant="outline">Cloud</Badge>
                        <Badge variant="outline">Java/Python</Badge>
                        <Badge variant="outline">DevOps</Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Top Recruiters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Oracle</Badge>
                        <Badge variant="outline">SAP</Badge>
                        <Badge variant="outline">Infosys</Badge>
                        <Badge variant="outline">Google</Badge>
                        <Badge variant="outline">ThoughtWorks</Badge>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                      <Link href="/jobs/software-architect" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">DevOps Engineer</h3>
                    <p className="text-sm text-muted-foreground">Salary Range: ₹20–50 LPA</p>
                    <p className="mt-2">Manage CI/CD pipelines and streamline development operations.</p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Skills Required:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Jenkins</Badge>
                        <Badge variant="outline">Docker</Badge>
                        <Badge variant="outline">Kubernetes</Badge>
                        <Badge variant="outline">AWS</Badge>
                        <Badge variant="outline">Linux</Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Top Recruiters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Amazon</Badge>
                        <Badge variant="outline">GitHub</Badge>
                        <Badge variant="outline">Atlassian</Badge>
                        <Badge variant="outline">Red Hat</Badge>
                        <Badge variant="outline">Zoho</Badge>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                      <Link href="/jobs/devops-engineer" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">Robotics Engineer</h3>
                    <p className="text-sm text-muted-foreground">Salary Range: ₹25–60 LPA</p>
                    <p className="mt-2">
                      Build and maintain robots for industrial automation, defense, and healthcare.
                    </p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Skills Required:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Mechatronics</Badge>
                        <Badge variant="outline">ROS</Badge>
                        <Badge variant="outline">Control Systems</Badge>
                        <Badge variant="outline">Python</Badge>
                        <Badge variant="outline">Embedded C</Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Top Recruiters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">ABB</Badge>
                        <Badge variant="outline">Boston Dynamics</Badge>
                        <Badge variant="outline">DRDO</Badge>
                        <Badge variant="outline">FANUC</Badge>
                        <Badge variant="outline">ISRO</Badge>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                      <Link href="/jobs/robotics-engineer" className="flex items-center">
                        View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Healthcare Degrees Section */}
            <Card className="col-span-full mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">🧬 Healthcare Degrees (MBBS, BDS, BPT, Pharmacy, Nursing)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Healthcare job content here - similar structure to above */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Radiologist</h3>
                    <p className="text-sm text-muted-foreground">Salary Range: ₹30–80 LPA</p>
                    <p className="mt-2">Use imaging technology (MRI, X-ray) to detect and diagnose diseases.</p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Skills Required:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Radiology</Badge>
                        <Badge variant="outline">Imaging Interpretation</Badge>
                        <Badge variant="outline">DICOM Tools</Badge>
                        <Badge variant="outline">Medical Licensing</Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Top Recruiters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Fortis</Badge>
                        <Badge variant="outline">Apollo</Badge>
                        <Badge variant="outline">AIIMS</Badge>
                        <Badge variant="outline">Manipal Hospitals</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Business & Finance Degrees Section */}
            <Card className="col-span-full mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">💼 Business & Finance Degrees (BBA, MBA, BCom, MCom, CA)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold">Investment Banker</h3>
                    <p className="text-sm text-muted-foreground">Salary Range: ₹25–100+ LPA</p>
                    <p className="mt-2">Advise companies on mergers, IPOs, and capital investments.</p>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Skills Required:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Finance Modeling</Badge>
                        <Badge variant="outline">M&A Analysis</Badge>
                        <Badge variant="outline">CFA</Badge>
                        <Badge variant="outline">Excel</Badge>
                        <Badge variant="outline">Risk Management</Badge>
                      </div>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm font-medium">Top Recruiters:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <Badge variant="outline">Goldman Sachs</Badge>
                        <Badge variant="outline">JP Morgan</Badge>
                        <Badge variant="outline">Morgan Stanley</Badge>
                        <Badge variant="outline">HSBC</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Find Your Perfect Career?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Get personalized career guidance based on your education, skills, and interests.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Link href="/get-started">Get Started</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
