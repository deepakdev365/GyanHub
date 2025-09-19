"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import SearchBar from "@/components/search-bar"
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  Code,
  Brain,
  CheckCircle,
  Award,
  TrendingUp,
  Globe,
  Cloud,
  Shield,
  Cpu,
} from "lucide-react"
import { motion } from "framer-motion"

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(49,87,181,0.15),transparent_70%),radial-gradient(circle_at_top_right,rgba(255,191,0,0.15),transparent_70%)] z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold">
                Leading and Innovative <span className="gradient-text">Career Counselling</span> Centre
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Discover the perfect career path based on your education, skills, and interests. Get comprehensive
                guidance for your professional journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/jobs">Explore Careers</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gold-500/50 text-gold-600 hover:text-gold-700 hover:bg-gold-50"
                >
                  <Link href="/education">Education Paths</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-400 to-navy-500 rounded-lg blur opacity-30 animate-pulse"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jqzZBna3htMkcdS8WRyeGilo5EBSRJ.png"
                  alt="Career Guidance"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-2xl relative z-10"
                />
              </div>
            </motion.div>
          </div>

          {/* Search Bar */}
          <motion.div
            className="container mx-auto px-4 md:px-6 mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <SearchBar />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-100 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text">OUR SERVICES</h2>
            <p className="text-muted-foreground mt-2">Comprehensive career guidance services to help you succeed</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item}>
              <Card className="gradient-card hover:scale-105 transition-all duration-300 group overflow-hidden h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy-800">
                    <GraduationCap className="h-5 w-5 text-gold-600 group-hover:text-gold-700 transition-colors" />
                    Education Pathways
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Discover career options based on your education level - 10th, 12th, or higher degrees. Explore
                    detailed paths for Science, Commerce, and Arts streams.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-gold-600 group-hover:text-gold-700 transition-colors">
                    <Link href="/education" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="gradient-card hover:scale-105 transition-all duration-300 group overflow-hidden h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy-800">
                    <Briefcase className="h-5 w-5 text-gold-600 group-hover:text-gold-700 transition-colors" />
                    High-Paying Jobs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Explore top-paying career options across various industries and multinational corporations with
                    excellent salary packages and growth opportunities.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-gold-600 group-hover:text-gold-700 transition-colors">
                    <Link href="/jobs/high-paying" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="gradient-card hover:scale-105 transition-all duration-300 group overflow-hidden h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-navy-800">
                    <BookOpen className="h-5 w-5 text-gold-600 group-hover:text-gold-700 transition-colors" />
                    Skill Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground group-hover:text-foreground transition-colors">
                    Master in-demand skills required for your dream job through expert guidance, curated resources, and
                    personalized learning paths.
                  </CardDescription>
                  <Button variant="link" className="mt-4 p-0 text-gold-600 group-hover:text-gold-700 transition-colors">
                    <Link href="/skills" className="flex items-center">
                      Learn More <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skill Development Section */}
      <section id="skill-development" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text">SKILL DEVELOPMENT</h2>
            <p className="text-muted-foreground mt-2">Essential skills for the modern professional landscape</p>
          </motion.div>

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

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="glass-card border-gold-500/20 hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg text-black-800">
                    <Code className="h-5 w-5 text-gold-600 mr-2" />
                    Programming & DSA
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master algorithms and data structures to crack coding interviews at top tech companies.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Languages: C++, Java, Python, JavaScript</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Data structures: Arrays, Trees, Graphs</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Algorithms: Sorting, Searching, DP</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Problem-solving techniques</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gold-600 font-semibold">RESOURCES:</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      LeetCode, GeeksforGeeks, Codeforces, NeetCode, HackerRank, InterviewBit
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="glass-card border-gold-500/20 hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg text-black-800">
                    <Globe className="h-5 w-5 text-gold-600 mr-2" />
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Build responsive websites and web applications using modern frameworks and tools.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Frontend: HTML, CSS, JavaScript, React</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Backend: Node.js, Express, Django</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Database: MongoDB, PostgreSQL</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Responsive design & accessibility</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gold-600 font-semibold">PROJECTS TO BUILD:</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      To-do app, E-commerce site, Portfolio website with blog, Social media clone
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="glass-card border-gold-500/20 hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg text-black-800">
                    <Cloud className="h-5 w-5 text-gold-600 mr-2" />
                    DevOps & Cloud
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Learn infrastructure management and deployment automation for scalable applications.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Cloud platforms: AWS, Azure, GCP</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Containerization: Docker, Kubernetes</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">CI/CD: Jenkins, GitHub Actions</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Infrastructure as Code: Terraform</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gold-600 font-semibold">CERTIFICATIONS:</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      AWS Cloud Practitioner, Azure Fundamentals, Docker Certified Associate
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={item} whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="glass-card border-gold-500/20 hover:shadow-gold-500/10 hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-lg text-black-800">
                    <Brain className="h-5 w-5 text-gold-600 mr-2" />
                    AI & Data Science
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Develop skills in machine learning, data analysis, and artificial intelligence.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Python, Pandas, NumPy, Scikit-learn</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Deep learning: TensorFlow, PyTorch</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">Data visualization: Matplotlib, Tableau</p>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      <p className="text-sm">SQL and database querying</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-200">
                    <p className="text-xs text-gold-600 font-semibold">PROJECTS:</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Spam classifier, Stock price predictor, Customer segmentation, Image recognition
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="mt-10 bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Universal Skills for Everyone</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div>
                <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Communication
                </h4>
                <p className="text-sm text-gray-600">
                  Present ideas clearly and effectively through public speaking, writing, and presentations.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Problem-Solving
                </h4>
                <p className="text-sm text-gray-600">
                  Develop analytical thinking through case studies, hackathons, and real-world challenges.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800 mb-2 flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Teamwork & Leadership
                </h4>
                <p className="text-sm text-gray-600">
                  Learn to collaborate effectively, manage conflicts, and lead diverse teams.
                </p>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/skills">Explore All Skills</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* High Paying Jobs Section */}
      <section id="high-paying-jobs" className="py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.1),transparent_70%)] z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text">HIGH PAYING JOBS</h2>
            <p className="text-muted-foreground mt-2">
              Explore lucrative careers with exceptional compensation packages at leading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-black-800">AI/ML Engineer</CardTitle>
                  <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-200">₹20-70 LPA</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Design intelligent systems that learn from data to automate tasks or make predictions.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-black-800">Skills Required:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline" className="text-xs">
                        Python
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        TensorFlow
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        PyTorch
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Deep Learning
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black-800">Top Recruiters:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline" className="text-xs">
                        Google
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Meta
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Amazon
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        NVIDIA
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                  <Link href="/jobs/ai-ml-engineer" className="flex items-center">
                    View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-black-800">Software Architect</CardTitle>
                  <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-200">₹30-90 LPA</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Design the architecture and technology stack of complex software systems.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-black-800">Skills Required:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline" className="text-xs">
                        System Design
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Microservices
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Cloud
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        DevOps
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black-800">Top Recruiters:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline" className="text-xs">
                        Oracle
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SAP
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Infosys
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Google
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                  <Link href="/jobs/software-architect" className="flex items-center">
                    View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300 h-full">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-black-800">Investment Banker</CardTitle>
                  <Badge className="bg-gold-100 text-gold-800 hover:bg-gold-200">₹25-100+ LPA</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Advise companies on mergers, IPOs, and capital investments.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-black-800">Skills Required:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline" className="text-xs">
                        Finance Modeling
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        M&A Analysis
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        CFA
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Excel
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-black-800">Top Recruiters:</h4>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="outline" className="text-xs">
                        Goldman Sachs
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        JP Morgan
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Morgan Stanley
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        HSBC
                      </Badge>
                    </div>
                  </div>
                </div>
                <Button variant="link" className="p-0 text-gold-600 hover:text-gold-700 mt-3">
                  <Link href="/jobs/investment-banker" className="flex items-center">
                    View Career Path <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black-800">
                  <Award className="h-5 w-5 text-gold-600" />
                  Educational Pathways
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  High-paying careers typically require specialized education and continuous skill development.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Advanced degrees (MBA, MS, PhD) from prestigious institutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Professional certifications (CFA, PMP, AWS, Azure, etc.)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Specialized technical training in emerging technologies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-black-800">
                  <TrendingUp className="h-5 w-5 text-gold-600" />
                  Career Growth Strategies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Strategies to accelerate your career trajectory and maximize earning potential.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Build expertise in high-demand, specialized domains</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Develop leadership and management capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Badge variant="secondary" className="mt-1 h-2 w-2 p-0 rounded-full flex-shrink-0 bg-gold-400" />
                    <span className="text-sm">Strategic job transitions to progressive roles</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/jobs/high-paying">Explore All High-Paying Jobs</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Popular Jobs Section */}
      <section id="education-pathways" className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,191,0,0.1),transparent_70%)] z-0"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold gradient-text">HIGH PAYING CAREERS IN B.TECH CSE</h2>
            <p className="text-muted-foreground mt-2">
              Explore lucrative technical careers with exceptional growth potential at top MNCs
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                role: "AI/ML Engineer",
                salary: "₹30-70 Lakhs",
                companies: ["Google", "Microsoft", "Amazon", "NVIDIA", "OpenAI"],
                description:
                  "Design, develop and deploy sophisticated machine learning models and AI solutions for complex business problems.",
                skills: ["Deep Learning", "NLP", "Computer Vision", "Python", "TensorFlow/PyTorch"],
                icon: <Brain className="h-5 w-5 text-gold-600" />,
              },
              {
                role: "Cloud Architect",
                salary: "₹25-60 Lakhs",
                companies: ["AWS", "Microsoft", "Google Cloud", "IBM", "Oracle"],
                description: "Design and implement scalable, secure, and resilient cloud infrastructure solutions.",
                skills: ["AWS/Azure/GCP", "Infrastructure as Code", "Microservices", "Kubernetes", "Security"],
                icon: <Cloud className="h-5 w-5 text-gold-600" />,
              },
              {
                role: "DevOps Engineer",
                salary: "₹18-45 Lakhs",
                companies: ["Amazon", "Microsoft", "Netflix", "Uber", "Atlassian"],
                description:
                  "Implement CI/CD pipelines, automate infrastructure, and ensure reliable system operations.",
                skills: ["CI/CD", "Docker", "Kubernetes", "Infrastructure as Code", "Monitoring"],
                icon: <Cpu className="h-5 w-5 text-gold-600" />,
              },
              {
                role: "Cybersecurity Expert",
                salary: "₹20-55 Lakhs",
                companies: ["IBM", "Cisco", "Deloitte", "TCS", "Palo Alto Networks"],
                description:
                  "Protect systems, networks, and data from cyber threats through security measures and protocols.",
                skills: ["Network Security", "Ethical Hacking", "Security Auditing", "Threat Analysis", "SIEM"],
                icon: <Shield className="h-5 w-5 text-gold-600" />,
              },
              {
                role: "Software Architect",
                salary: "₹35-80 Lakhs",
                companies: ["Google", "Microsoft", "Oracle", "Adobe", "SAP"],
                description:
                  "Design complex software systems, define technical standards, and mentor development teams.",
                skills: ["System Design", "Microservices", "Design Patterns", "Technical Leadership"],
                icon: <Code className="h-5 w-5 text-gold-600" />,
              },
              {
                role: "Blockchain Developer",
                salary: "₹20-50 Lakhs",
                companies: ["ConsenSys", "Polygon", "IBM", "Infosys", "TCS"],
                description:
                  "Create decentralized apps, smart contracts, and cryptographic systems using blockchain platforms.",
                skills: ["Solidity", "Web3.js", "Smart Contracts", "Cryptography"],
                icon: <Globe className="h-5 w-5 text-gold-600" />,
              },
              {
                role: "Data Scientist",
                salary: "₹25-60 Lakhs",
                companies: ["Amazon", "Microsoft", "IBM", "Flipkart", "Fractal Analytics"],
                description:
                  "Analyze large data sets to find insights, build ML models, and help businesses make data-driven decisions.",
                skills: ["Statistical Analysis", "Machine Learning", "Data Cleaning", "Storytelling with Data"],
                icon: <Brain className="h-5 w-5 text-gold-600" />,
              },
              {
                role: "Product Manager",
                salary: "₹25-60 Lakhs",
                companies: ["Google", "Microsoft", "Amazon", "Flipkart", "Zomato"],
                description:
                  "Lead the strategy, roadmap, and execution of products, bridging engineering, marketing, and business teams.",
                skills: ["Product Strategy", "Market Research", "Agile/Scrum", "UX/UI Principles"],
                icon: <Briefcase className="h-5 w-5 text-gold-600" />,
              },
            ].map((job, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="gradient-card border-gold-500/20 h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg text-black-800">
                      {job.icon}
                      {job.role}
                    </CardTitle>
                    <p className="text-gold-600 font-semibold">{job.salary}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{job.description}</p>
                    <div className="mb-3">
                      <p className="text-xs text-black-800 font-medium mb-1">Key Skills:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.skills.map((skill, i) => (
                          <span key={i} className="text-xs bg-gold-100 text-gold-800 px-2 py-1 rounded">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-xs text-black-800 font-medium mb-1">Top Companies:</p>
                      <div className="flex flex-wrap gap-1">
                        {job.companies.slice(0, 3).map((company, i) => (
                          <span key={i} className="text-xs bg-white-200 text-black-700 px-2 py-1 rounded">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      <p>Required qualifications: B.Tech in CSE or related field</p>
                      <p>Key skills: {job.skills.join(", ")}</p>
                      <p>Top companies: {job.companies.join(", ")}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-black-950 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/jobs">View All Careers</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-800 to-navy-950 z-0"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] bg-repeat opacity-5 z-0"></div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="dark-section py-12 px-6 rounded-xl"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Ready to Find Your Perfect Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Get personalized career guidance based on your education, skills, and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-gold-500 text-gold-400 hover:text-gold-300 hover:bg-navy-800/50 animate-pulse-glow"
              >
                <Link href="/get-started">Get Started</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gold-500 text-gold-400 hover:text-gold-300 hover:bg-navy-800/50"
              >
                <Link href="/contact">Contact Our Counselors</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
