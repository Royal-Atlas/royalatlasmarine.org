import { Building, MapPin, Phone, Mail, Globe, Users, Award, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function IndiaOfficePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-600/20 rounded-full border border-blue-400/30">
                <Building className="h-12 w-12 text-blue-400" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Royal Atlas Marine - India</h1>
            <p className="text-xl text-blue-100 mb-8">
              Regional office providing comprehensive maritime services across the Indian subcontinent
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
              >
                View Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Office Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our India Office</h2>
              <p className="text-lg text-gray-600 mb-6">
                Located in the heart of Bengaluru, our India office serves as the central hub for Royal Atlas Marine's 
                operations across the Indian subcontinent. We provide comprehensive maritime services including ship 
                registry consultancy, crew management, technical services, and strategic investment solutions.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Address</h3>
                    <p className="text-gray-600">
                      Royal Atlas Group<br />
                      1st Floor, K/S Arcade<br />
                      Above Med Plus<br />
                      Bommanahalli, Bengaluru<br />
                      Karnataka 560068, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-gray-600">+91 9399000000</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-gray-600">info@royalatlasmarine.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-100 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> Emergency support available 24/7 for urgent maritime operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Services Available in India</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive maritime services tailored to the Indian market and regional requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Ship Registry Consultancy</CardTitle>
                    <Badge variant="secondary">Primary Service</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Expert consultancy services for ship registry operations and flag state compliance.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Strategic planning
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Legal framework development
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Compliance support
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
                    <CardTitle className="text-xl text-slate-900">Crew Management</CardTitle>
                    <Badge variant="secondary">Personnel</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive crew management services including recruitment, training, and certification.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Seafarer recruitment
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Training programs
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Certification support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-slate-900">Technical Management</CardTitle>
                    <Badge variant="secondary">Operations</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Technical management services for vessels including maintenance, operations, and compliance.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Maintenance planning
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Operational support
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Quality assurance
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
                    <CardTitle className="text-xl text-slate-900">Strategic Investment</CardTitle>
                    <Badge variant="secondary">Business</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Strategic investment services in maritime infrastructure and related industries.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Investment planning
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Market analysis
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Partnership development
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
                    <CardTitle className="text-xl text-slate-900">Export Facilitation</CardTitle>
                    <Badge variant="secondary">Trade</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Export facilitation services for Indian businesses looking to expand globally.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Market access
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Documentation support
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Logistics coordination
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
                    <CardTitle className="text-xl text-slate-900">Training Programs</CardTitle>
                    <Badge variant="secondary">Education</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Maritime training programs for professionals and organizations in the industry.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Professional development
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Certification courses
                  </li>
                  <li className="flex items-center">
                    <Clock className="h-4 w-4 text-green-500 mr-2" />
                    Custom training
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Regional Presence in India</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategic office locations across key Indian cities for comprehensive coverage
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <h3 className="text-xl font-semibold text-slate-900">Bengaluru (Headquarters)</h3>
                <p className="text-blue-600 font-medium">Karnataka</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Central hub for operations across South India and primary administrative center.
                </p>
                <Badge variant="secondary">Primary Office</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <h3 className="text-xl font-semibold text-slate-900">Trivandrum</h3>
                <p className="text-blue-600 font-medium">Kerala</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Strategic location serving the maritime industry in Kerala and surrounding regions.
                </p>
                <Badge variant="secondary">Regional Office</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <h3 className="text-xl font-semibold text-slate-900">Mumbai</h3>
                <p className="text-blue-600 font-medium">Maharashtra</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Key office serving the major maritime hub of Mumbai and Western India.
                </p>
                <Badge variant="secondary">Regional Office</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work with Our India Team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Contact our India office for comprehensive maritime services and strategic partnership opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            >
              <Link href="/offices">View All Offices</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
