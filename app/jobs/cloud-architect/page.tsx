import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Cloud, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CloudArchitectPage() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
      <section className="bg-gradient-to-r from-green-50 to-teal-50 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-6">
            <Link href="/" className="text-green-600 hover:underline flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Link>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <Cloud className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Cloud Architect</h1>
          </div>
          <Badge className="bg-green-100 text-green-800 text-sm">₹25–60 LPA</Badge>
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
                    Cloud Architects are responsible for designing and implementing cloud environments that are
                    scalable, secure, and resilient. They help businesses move infrastructure to cloud platforms like
                    AWS, Azure, or Google Cloud.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Key Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Cloud Platforms</p>
                          <p className="text-sm text-gray-600">AWS, Azure, GCP expertise and certification</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Infrastructure as Code</p>
                          <p className="text-sm text-gray-600">Terraform, CloudFormation, ARM templates</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Networking</p>
                          <p className="text-sm text-gray-600">VPCs, subnets, load balancers, CDNs</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Security & Compliance</p>
                          <p className="text-sm text-gray-600">
                            IAM, encryption, security groups, compliance frameworks
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Docker</Badge>
                      <Badge variant="outline">Kubernetes</Badge>
                      <Badge variant="outline">Jenkins</Badge>
                      <Badge variant="outline">GitHub Actions</Badge>
                      <Badge variant="outline">Ansible</Badge>
                      <Badge variant="outline">Terraform</Badge>
                      <Badge variant="outline">Prometheus</Badge>
                      <Badge variant="outline">Grafana</Badge>
                      <Badge variant="outline">AWS CloudFormation</Badge>
                      <Badge variant="outline">Azure Resource Manager</Badge>
                      <Badge variant="outline">Google Cloud Deployment Manager</Badge>
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
                      <h4 className="font-bold text-gray-800">Cloud Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Entry-level position focused on implementing cloud solutions, managing resources, and basic
                        automation.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">Cloud Architect</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Mid-level role responsible for designing cloud infrastructure, implementing best practices, and
                        optimizing cloud resources.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">Cloud Security Lead</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Specialized role focused on securing cloud environments, implementing compliance frameworks, and
                        managing security policies.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">CTO (Cloud Strategy)</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Leadership role responsible for overall cloud strategy, multi-cloud governance, and
                        enterprise-wide cloud initiatives.
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
                      <span>B.Tech/M.Tech in CSE, IT, Cloud Computing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Certifications are highly valued in this field</span>
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
                      <span>AWS Certified Solutions Architect</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Microsoft Azure Architect Expert</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Google Professional Cloud Architect</span>
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
                    Cloud architects work with DevOps and IT teams, mostly in large enterprises and IT firms. The role
                    often involves collaboration with multiple stakeholders and can be remote or hybrid.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge className="justify-center py-1.5">AWS</Badge>
                    <Badge className="justify-center py-1.5">Google Cloud</Badge>
                    <Badge className="justify-center py-1.5">Microsoft</Badge>
                    <Badge className="justify-center py-1.5">IBM</Badge>
                    <Badge className="justify-center py-1.5">Oracle</Badge>
                    <Badge className="justify-center py-1.5">Infosys</Badge>
                    <Badge className="justify-center py-1.5">TCS</Badge>
                    <Badge className="justify-center py-1.5">Accenture</Badge>
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
