import { Ship, Globe, FileText, Shield, Clock, Award, CheckCircle, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ShipRegistryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full border border-blue-400/30">
                <Ship className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">International Ship Registry Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive ship registration services across multiple flag states with 200-500 vessels under management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Register Your Vessel
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                Download Registry Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-gray-600">Vessels Registered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Flag States</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">48hrs</div>
              <div className="text-gray-600">Average Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Flag State Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Flag State Portfolio</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Direct operational experience with multiple international flags and registry management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Panama Flag</CardTitle>
                    <Badge variant="secondary">World's Largest Registry</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive registration services for the world's largest ship registry with over 8,000 vessels
                  under our management.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast-track registration (24-48 hours)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Competitive tonnage fees
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Global port acceptance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Full technical support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Belize Flag</CardTitle>
                    <Badge variant="secondary">Quality Registry</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Premium flag state services with emphasis on quality and compliance for commercial and private
                  vessels.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    White list flag state
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellent PSC record
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Yacht registration specialty
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dedicated support team
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">San Marino Flag</CardTitle>
                    <Badge variant="secondary">European Excellence</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  European flag state with high standards and excellent reputation for quality vessel registration.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    European flag advantage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    High quality standards
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellent PSC performance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Personal service approach
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Barbados Flag</CardTitle>
                    <Badge variant="secondary">Caribbean Excellence</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Caribbean flag state with strong maritime tradition and excellent regulatory framework.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Strong maritime heritage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Competitive fees
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellent port reception
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Specialized yacht services
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Ship className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Antigua & Barbuda</CardTitle>
                    <Badge variant="secondary">Premium Services</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Premium flag state services with focus on luxury yachts and commercial vessels.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Luxury yacht specialty
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast registration process
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Excellent reputation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    24/7 support available
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">St. Kitts & Nevis</CardTitle>
                    <Badge variant="secondary">Efficient Processing</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Efficient flag state services with streamlined processes and competitive pricing.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Rapid processing times
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Competitive pricing
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Simplified procedures
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Professional support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Atlas Registering Shipping */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Atlas Registering Shipping</h2>
            <p className="text-lg text-gray-600">
              Our dedicated ship registration entity ensuring vessels meet stringent technical and safety standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Specialized Registration Services</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Technical Compliance</h4>
                    <p className="text-gray-600">
                      Ensuring all vessels meet international technical standards and classification requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Safety Standards</h4>
                    <p className="text-gray-600">
                      Comprehensive safety assessments and compliance with SOLAS, MARPOL, and ISM codes.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Classification Services</h4>
                    <p className="text-gray-600">
                      Working with major classification societies to ensure vessel certification and maintenance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Registry Management</h4>
                    <p className="text-gray-600">
                      Complete registry management services for flag administrations and maritime authorities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900">Registration Process</CardTitle>
                <CardDescription>Streamlined 5-step registration process</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium">Initial Assessment</h4>
                      <p className="text-sm text-gray-600">Vessel documentation review</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium">Flag State Selection</h4>
                      <p className="text-sm text-gray-600">Optimal flag recommendation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium">Documentation</h4>
                      <p className="text-sm text-gray-600">Complete paperwork preparation</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium">Registration</h4>
                      <p className="text-sm text-gray-600">Official flag state registration</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      5
                    </div>
                    <div>
                      <h4 className="font-medium">Ongoing Support</h4>
                      <p className="text-sm text-gray-600">Continuous compliance management</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regulatory Expertise */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Regulatory Expertise</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Deep familiarity with international maritime conventions and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">SOLAS Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Safety of Life at Sea convention compliance and certification services for all vessel types.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">MARPOL Standards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Marine pollution prevention compliance and environmental protection certification.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">ISM Code</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  International Safety Management code implementation and audit services for shipping companies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">ISPS Code</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  International Ship and Port Facility Security code compliance and security certification.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Government Partnerships */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Government Partnerships</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic Public-Private Partnerships (PPP) with maritime authorities worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Suriname Maritime Registry</CardTitle>
                <CardDescription>Proposed International Flag Ship Registry</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    <strong>Investment Proposal:</strong> Establishment of International Maritime Flag Ship Registry
                  </p>
                  <p>
                    <strong>Vessel Commitment:</strong> 200-500 vessels within first 1-2 years
                  </p>
                  <p>
                    <strong>Partnership Type:</strong> Strategic Public-Private Partnership (PPP)
                  </p>
                  <p>
                    <strong>Benefits:</strong> Revenue generation, international recognition, job creation
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">DG Shipping India</CardTitle>
                <CardDescription>Director General of Shipping Services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    <strong>License:</strong> RPSL-CHN-162280
                  </p>
                  <p>
                    <strong>Services:</strong> Survey and inspection services
                  </p>
                  <p>
                    <strong>Compliance:</strong> Indian maritime regulations
                  </p>
                  <p>
                    <strong>Authority:</strong> Government of India approved
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Federal Transport Authority</CardTitle>
                <CardDescription>Maritime Regulatory Services</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    <strong>Services:</strong> Technical and regulatory expertise
                  </p>
                  <p>
                    <strong>Compliance:</strong> IMO conventions adherence
                  </p>
                  <p>
                    <strong>Inspections:</strong> Flag state inspection services
                  </p>
                  <p>
                    <strong>Support:</strong> Maritime safety authorities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Register Your Vessel?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Join over 2,500 vessels already registered through our comprehensive flag state services. Experience the
            Royal Atlas Marine advantage with our proven track record and global expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              <Link href="/contact">Start Registration Process</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            >
              <Link href="/services/flag-state-services">Compare Flag States</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
