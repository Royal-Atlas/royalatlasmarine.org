import { Package, Ship, Globe, Clock, Shield, Users, CheckCircle, Award } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BulkCargoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full border border-blue-400/30">
                <Package className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Bulk Cargo Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Professional bulk cargo transportation solutions with global coverage and specialized handling
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
                Track Shipment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose Our Bulk Cargo Services?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional bulk cargo services with extensive global network and specialized expertise
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
                  Extensive network covering major ports worldwide with local expertise and partnerships.
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
                  Comprehensive insurance coverage and secure handling of all bulk cargo types.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-lg text-slate-900">Reliable Schedules</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Consistent sailing schedules with regular departures and arrival times.
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
                  Dedicated support team with deep knowledge of bulk cargo operations.
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Bulk Cargo Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive bulk cargo solutions for all types of commodities and trade requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Package className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Dry Bulk Cargo</CardTitle>
                    <Badge variant="secondary">Primary Service</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Transportation of dry bulk commodities including grains, minerals, and construction materials.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Grain transportation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mineral ores
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Construction materials
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
                    <CardTitle className="text-xl text-slate-900">Liquid Bulk Cargo</CardTitle>
                    <Badge variant="secondary">Specialized</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Specialized transportation of liquid bulk cargo including chemicals and petroleum products.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Chemical transportation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Petroleum products
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Edible oils
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
                    <CardTitle className="text-xl text-slate-900">Break Bulk Cargo</CardTitle>
                    <Badge variant="secondary">General Cargo</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Handling of break bulk cargo including machinery, vehicles, and industrial equipment.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Machinery transport
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Vehicle shipping
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Industrial equipment
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
                    <CardTitle className="text-xl text-slate-900">Specialized Handling</CardTitle>
                    <Badge variant="secondary">Expert Support</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Specialized handling services for sensitive and high-value bulk cargo shipments.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temperature control
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Humidity monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security measures
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
                    <CardTitle className="text-xl text-slate-900">Express Services</CardTitle>
                    <Badge variant="secondary">Fast Delivery</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Express bulk cargo services for time-sensitive shipments and urgent deliveries.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Priority handling
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Fast-track customs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Dedicated support
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
                    <CardTitle className="text-xl text-slate-900">Value Added Services</CardTitle>
                    <Badge variant="secondary">Additional Support</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Additional services including cargo insurance, packaging, and documentation support.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cargo insurance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Packaging services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Documentation support
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Bulk Cargo Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Streamlined process ensuring efficient and reliable bulk cargo transportation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Cargo Assessment</h3>
                <p className="text-gray-600">
                  Initial assessment of cargo requirements and transportation planning.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Vessel Selection</h3>
                <p className="text-gray-600">
                  Selection of appropriate vessels and route optimization for optimal delivery.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Transportation</h3>
                <p className="text-gray-600">
                  Secure transportation with real-time tracking and monitoring throughout the journey.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Delivery</h3>
                <p className="text-gray-600">
                  Final delivery coordination and proof of delivery documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Ship Your Bulk Cargo?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Trust our experienced team to handle your bulk cargo transportation needs with professionalism and reliability.
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
