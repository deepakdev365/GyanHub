import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Cpu, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function DevOpsEngineerPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/" className="text-green-600 hover:underline flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Cpu className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">DevOps Engineer</h1>
          </div>
          <Badge className="bg-green-100 text-green-800 text-sm">₹18–45 LPA</Badge>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    DevOps Engineers automate software development pipelines and manage infrastructure. They ensure
                    seamless integration, testing, deployment, and monitoring of applications, bridging the gap between
                    development and operations teams.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Key Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">CI/CD Pipelines</p>
                          <p className="text-sm text-gray-600">Continuous integration and deployment automation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Containerization</p>
                          <p className="text-sm text-gray-600">Docker, Kubernetes, container orchestration</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Infrastructure as Code</p>
                          <p className="text-sm text-gray-600">Terraform, Ansible, CloudFormation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Monitoring & Logging</p>
                          <p className="text-sm text-gray-600">ELK Stack, Prometheus, Grafana</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Jenkins</Badge>
                      <Badge variant="outline">GitLab CI</Badge>
                      <Badge variant="outline">Terraform</Badge>
                      <Badge variant="outline">Ansible</Badge>
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">GCP</Badge>
                      <Badge variant="outline">Azure</Badge>
                      <Badge variant="outline">Prometheus</Badge>
                      <Badge variant="outline">Grafana</Badge>
                      <Badge variant="outline">Datadog</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Career Path & Growth</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">Junior DevOps</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Entry-level position focused on implementing CI/CD pipelines, basic infrastructure management,
                        and monitoring setup.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">DevOps Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Mid-level role responsible for designing and implementing DevOps practices, automation, and
                        infrastructure optimization.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">Site Reliability Engineer (SRE)</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Specialized role focused on system reliability, performance optimization, and scalability.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">DevOps Architect</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Leadership role responsible for DevOps strategy, toolchain selection, and enterprise-wide
                        implementation.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Educational Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>B.Tech in CS/IT or equivalent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>M.Tech or certifications preferred</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Recommended Certifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>AWS Certified DevOps Engineer</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Docker Certified Associate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>HashiCorp Certified: Terraform Associate</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>Work Environment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    DevOps Engineers work in agile teams in product companies, SaaS startups, or cloud teams. The role
                    involves close collaboration with developers, QA engineers, and operations staff to streamline the
                    software delivery process.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge className="justify-center py-1.5">Amazon</Badge>
                    <Badge className="justify-center py-1.5">Microsoft</Badge>
                    <Badge className="justify-center py-1.5">Atlassian</Badge>
                    <Badge className="justify-center py-1.5">Uber</Badge>
                    <Badge className="justify-center py-1.5">Netflix</Badge>
                    <Badge className="justify-center py-1.5">Infosys</Badge>
                    <Badge className="justify-center py-1.5">TCS</Badge>
                    <Badge className="justify-center py-1.5">Wipro</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
