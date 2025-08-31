import { Anchor, Ship, Globe, Shield, Clock, Users, CheckCircle, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PortServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full border border-blue-400/30">
                <Anchor className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Port Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive port and harbor services for efficient maritime operations and vessel support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Request Services
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                View Ports
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Port Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional port services with global reach and local expertise
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Global Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Extensive network of ports and terminals across major maritime regions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Safety First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Highest safety standards and compliance with international port regulations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">24/7 Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Round-the-clock port operations ensuring minimal vessel waiting times.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Experienced port professionals with deep knowledge of maritime operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Port Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive port solutions for all types of vessels and cargo operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Ship className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Vessel Berthing</CardTitle>
                    <Badge variant="secondary">Primary Service</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Efficient vessel berthing services with optimal positioning and safety protocols.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Berth allocation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mooring assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safety monitoring
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Anchor className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Cargo Handling</CardTitle>
                    <Badge variant="secondary">Operations</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Professional cargo handling services for all types of goods and containers.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Loading/unloading
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Container operations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Bulk cargo handling
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
                    <CardTitle className="text-xl text-slate-900">Security Services</CardTitle>
                    <Badge variant="secondary">Safety</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive security services including ISPS compliance and access control.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Access control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Surveillance systems
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    ISPS compliance
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
                    <CardTitle className="text-xl text-slate-900">Pilotage Services</CardTitle>
                    <Badge variant="secondary">Navigation</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Professional pilotage services for safe vessel navigation in port waters.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Harbor pilots
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Navigation assistance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Safety coordination
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
                    <CardTitle className="text-xl text-slate-900">Port Agency</CardTitle>
                    <Badge variant="secondary">Representation</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Complete port agency services representing vessel interests in port operations.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Documentation handling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customs clearance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Port coordination
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Support Services</CardTitle>
                    <Badge variant="secondary">Additional</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Additional support services including supplies, repairs, and emergency response.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Supply coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Emergency response
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technical support
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Service Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined process ensuring efficient port operations and vessel support
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Request</h3>
                <p className="text-gray-600">
                  Service request submission with vessel details and requirements.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Planning</h3>
                <p className="text-gray-600">
                  Service planning and resource allocation for optimal operations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Execution</h3>
                <p className="text-gray-600">
                  Professional service delivery with safety and efficiency standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Completion</h3>
                <p className="text-gray-600">
                  Service completion with documentation and follow-up support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for Professional Port Services?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Trust our experienced team to handle your port operations with efficiency and safety.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
