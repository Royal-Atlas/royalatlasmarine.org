import { Building, MapPin, Phone, Mail, Globe, Users, Award, Clock, CheckCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function KuwaitOfficePage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Kuwait Office</h1>
            <p className="text-xl text-blue-100 mb-8">
              Strategic maritime operations center serving the Middle East and Gulf region
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Contact Office
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
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Office Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Royal Atlas Marine Kuwait<br />
                        Kuwait City, Kuwait<br />
                        P.O. Box: [Postal Code]
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+965 [Phone Number]</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Email</h3>
                      <p className="text-gray-600">kuwait@royalatlasmarine.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-600 rounded-lg">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Sunday - Thursday: 8:00 AM - 6:00 PM<br />
                        Friday - Saturday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Quick Contact</h3>
                <p className="text-gray-600 mb-6">
                  Get in touch with our Kuwait office for immediate assistance with your maritime needs.
                </p>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">Send Message</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Services in Kuwait</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive maritime services tailored for the Kuwait market and Gulf region
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
                    <CardTitle className="text-xl text-slate-900">Regional Operations</CardTitle>
                    <Badge variant="secondary">Primary Focus</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Maritime operations serving Kuwait and the broader Gulf Cooperation Council region.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Local expertise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Regional networks
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cultural understanding
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
                  Comprehensive crew management services for vessels operating in the Gulf region.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Crew recruitment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Training programs
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certification support
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
                    <CardTitle className="text-xl text-slate-900">Technical Services</CardTitle>
                    <Badge variant="secondary">Support</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Technical management and support services for vessels in the region.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Technical management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Maintenance support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Quality assurance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Our Kuwait Office?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Contact our Kuwait office for expert maritime services in the Gulf region.
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
