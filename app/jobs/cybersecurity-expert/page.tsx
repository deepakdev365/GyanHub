import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Shield, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CybersecurityExpertPage() {
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
              <Shield className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Cybersecurity Expert</h1>
          </div>
          <Badge className="bg-green-100 text-green-800 text-sm">₹20–55 LPA</Badge>
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
                    Cybersecurity experts protect digital assets, networks, and infrastructure from cyberattacks. They
                    implement firewalls, penetration testing, and security audits to identify vulnerabilities and
                    prevent data breaches.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Key Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Network Security</p>
                          <p className="text-sm text-gray-600">Firewalls, VPNs, intrusion detection</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Ethical Hacking</p>
                          <p className="text-sm text-gray-600">Penetration testing, vulnerability assessment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Risk Assessment</p>
                          <p className="text-sm text-gray-600">Security audits, compliance frameworks</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Threat Analysis</p>
                          <p className="text-sm text-gray-600">Malware analysis, incident response</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Wireshark</Badge>
                      <Badge variant="outline">Nmap</Badge>
                      <Badge variant="outline">Metasploit</Badge>
                      <Badge variant="outline">Splunk</Badge>
                      <Badge variant="outline">SIEM tools</Badge>
                      <Badge variant="outline">Burp Suite</Badge>
                      <Badge variant="outline">Kali Linux</Badge>
                      <Badge variant="outline">Firewalls</Badge>
                      <Badge variant="outline">IDS/IPS</Badge>
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
                      <h4 className="font-bold text-gray-800">Security Analyst</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Entry-level position focused on monitoring security systems, analyzing alerts, and basic
                        incident response.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">Security Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Mid-level role responsible for implementing security solutions, conducting assessments, and
                        hardening systems.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">Security Architect</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Advanced role focused on designing secure systems, creating security frameworks, and leading
                        security initiatives.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">CISO (Chief Information Security Officer)</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Executive role responsible for organization-wide security strategy, governance, and risk
                        management.
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
                      <span>B.Tech/M.Tech in CSE, Cybersecurity, or IT</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>Short courses also accepted for blue team roles</span>
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
                      <span>CEH (Certified Ethical Hacker)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>CompTIA Security+</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>CISSP, CISM (for senior roles)</span>
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
                    Cybersecurity experts work in banks, fintech firms, cybersecurity agencies, and IT consultancies.
                    The role often involves working in security operations centers (SOCs) and collaborating with IT
                    teams to protect organizational assets.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge className="justify-center py-1.5">Cisco</Badge>
                    <Badge className="justify-center py-1.5">IBM</Badge>
                    <Badge className="justify-center py-1.5">Deloitte</Badge>
                    <Badge className="justify-center py-1.5">TCS</Badge>
                    <Badge className="justify-center py-1.5">Palo Alto Networks</Badge>
                    <Badge className="justify-center py-1.5">EY</Badge>
                    <Badge className="justify-center py-1.5">FireEye</Badge>
                    <Badge className="justify-center py-1.5">CrowdStrike</Badge>
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
