import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Brain, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AIMLEngineerPage() {
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
              <Brain className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">AI/ML Engineer</h1>
          </div>
          <Badge className="bg-green-100 text-green-800 text-sm">₹30–70 LPA (Can exceed ₹1 Cr in senior roles)</Badge>
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
                    AI/ML Engineers design, build, and deploy intelligent systems that learn from data. They develop
                    machine learning models and algorithms for tasks like prediction, classification, and automation in
                    various industries, such as finance, healthcare, retail, and technology.
                  </p>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Key Skills</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Deep Learning</p>
                          <p className="text-sm text-gray-600">Neural networks, backpropagation, optimization</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Natural Language Processing</p>
                          <p className="text-sm text-gray-600">Text analysis, sentiment analysis, chatbots</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Computer Vision</p>
                          <p className="text-sm text-gray-600">Image recognition, object detection, segmentation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Data Preprocessing</p>
                          <p className="text-sm text-gray-600">Cleaning, normalization, feature engineering</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Tools & Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">R</Badge>
                      <Badge variant="outline">TensorFlow</Badge>
                      <Badge variant="outline">PyTorch</Badge>
                      <Badge variant="outline">Scikit-learn</Badge>
                      <Badge variant="outline">OpenCV</Badge>
                      <Badge variant="outline">NLTK</Badge>
                      <Badge variant="outline">Hugging Face</Badge>
                      <Badge variant="outline">Jupyter</Badge>
                      <Badge variant="outline">Google Colab</Badge>
                      <Badge variant="outline">Docker</Badge>
                      <Badge variant="outline">AWS Sagemaker</Badge>
                      <Badge variant="outline">MLFlow</Badge>
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
                      <h4 className="font-bold text-gray-800">Junior AI Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Entry-level position focused on implementing ML models under supervision, data preprocessing,
                        and model evaluation.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">Machine Learning Engineer</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Mid-level role responsible for designing and implementing ML solutions, model deployment, and
                        optimization.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">Senior AI Scientist</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Advanced role focused on research, developing novel algorithms, and leading ML projects.
                      </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold text-gray-800">AI Architect / Director of AI</h4>
                      <p className="text-sm text-gray-600 mt-1">
                        Leadership role responsible for AI strategy, team management, and enterprise-wide AI
                        initiatives.
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
                      <span>B.Tech/M.Tech in CS, AI/ML, Data Science, or equivalent</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>PhD for research-intensive roles</span>
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
                      <span>TensorFlow Developer Certificate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>AWS Certified Machine Learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <span>IBM AI Engineering Professional Certificate</span>
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
                    Mostly remote or hybrid roles in tech firms, research labs, or startups. AI/ML Engineers often work
                    in collaborative environments with data scientists, software engineers, and domain experts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Companies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Badge className="justify-center py-1.5">Google</Badge>
                    <Badge className="justify-center py-1.5">Microsoft</Badge>
                    <Badge className="justify-center py-1.5">Amazon</Badge>
                    <Badge className="justify-center py-1.5">NVIDIA</Badge>
                    <Badge className="justify-center py-1.5">OpenAI</Badge>
                    <Badge className="justify-center py-1.5">Meta</Badge>
                    <Badge className="justify-center py-1.5">Fractal Analytics</Badge>
                    <Badge className="justify-center py-1.5">IBM</Badge>
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
