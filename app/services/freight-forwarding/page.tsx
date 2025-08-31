import { Ship, Globe, Package, Clock, Shield, Users, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FreightForwardingPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Freight Forwarding Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive logistics management and freight forwarding solutions for global trade
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Get Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Freight Forwarding?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional freight forwarding services with global network coverage and industry expertise
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
                  Extensive network covering 150+ countries with local expertise and partnerships.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">24/7 Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Round-the-clock customer support and real-time shipment tracking.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Secure Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive insurance coverage and secure handling of all cargo types.
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
                  Experienced professionals with deep knowledge of international trade regulations.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Freight Forwarding Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive logistics solutions tailored to your specific requirements
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
                    <CardTitle className="text-xl text-slate-900">Ocean Freight</CardTitle>
                    <Badge variant="secondary">FCL & LCL</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Full container load (FCL) and less than container load (LCL) services with competitive rates.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Global port coverage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Flexible scheduling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cargo consolidation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Air Freight</CardTitle>
                    <Badge variant="secondary">Express & Standard</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Fast and reliable air freight services for time-sensitive shipments worldwide.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Same-day pickup
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority handling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temperature control
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
                    <CardTitle className="text-xl text-slate-900">Land Transport</CardTitle>
                    <Badge variant="secondary">Road & Rail</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive land transportation solutions including road and rail freight services.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cross-border expertise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Customs clearance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Real-time tracking
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
                    <CardTitle className="text-xl text-slate-900">Customs Clearance</CardTitle>
                    <Badge variant="secondary">Expert Support</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Professional customs clearance services ensuring smooth import/export operations.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Documentation handling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Duty calculation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regulatory compliance
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
                    <CardTitle className="text-xl text-slate-900">Project Cargo</CardTitle>
                    <Badge variant="secondary">Specialized</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Specialized handling of oversized, heavy-lift, and complex project cargo shipments.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Route planning
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Special permits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Escort services
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
                    <CardTitle className="text-xl text-slate-900">Warehousing</CardTitle>
                    <Badge variant="secondary">Storage Solutions</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Secure storage facilities and inventory management services worldwide.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Climate control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Inventory tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Value-added services
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Freight Forwarding Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined process ensuring efficient and reliable cargo transportation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Consultation</h3>
                <p className="text-gray-600">
                  Initial consultation to understand your requirements and provide customized solutions.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Planning</h3>
                <p className="text-gray-600">
                  Route optimization, carrier selection, and comprehensive logistics planning.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Execution</h3>
                <p className="text-gray-600">
                  Professional handling of cargo pickup, transportation, and delivery.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Monitoring</h3>
                <p className="text-gray-600">
                  Real-time tracking and continuous communication throughout the process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ship Your Cargo?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Trust our experienced team to handle your freight forwarding needs with professionalism and efficiency.
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
