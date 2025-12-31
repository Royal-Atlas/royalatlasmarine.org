import { Building, Ship, Globe, Award, Users, CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SubsidiariesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Royal Atlas Group Companies</h1>
            <p className="text-xl text-blue-100 mb-8">
              A comprehensive network of specialized maritime entities delivering world-class services
            </p>
          </div>
        </div>
      </section>

      {/* Atlas Registering Shipping */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-600 rounded-full">
                  <Ship className="h-12 w-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Atlas Registering Shipping</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our dedicated ship registration entity ensuring vessels meet stringent technical and safety standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Core Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Ship Registration Services</h4>
                      <p className="text-gray-600">
                        Complete vessel registration across multiple flag states with 2,500+ vessels under management.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Classification Services</h4>
                      <p className="text-gray-600">
                        Working with major classification societies to ensure vessel certification and compliance.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-slate-900">Technical Standards</h4>
                      <p className="text-gray-600">
                        Ensuring all vessels meet international technical standards and safety requirements.
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
                  <CardTitle className="text-xl text-slate-900">Key Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">2,500+</div>
                      <div className="text-sm text-gray-600">Vessels Registered</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">7</div>
                      <div className="text-sm text-gray-600">Flag States</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">48hrs</div>
                      <div className="text-sm text-gray-600">Avg Processing</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">99.9%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Group Structure */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Royal Atlas Group Structure</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrated maritime services across specialized business units
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-600 rounded-lg">
                    <Building className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-slate-900">Royal Atlas Marine</CardTitle>
                    <Badge variant="secondary">Parent Company</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  The flagship company providing comprehensive maritime solutions and ship management services globally.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ship Management Services</li>
                  <li>• Freight Forwarding</li>
                  <li>• Customs Clearance</li>
                  <li>• Maritime Consulting</li>
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
                    <CardTitle className="text-lg text-slate-900">Atlas Registering Shipping</CardTitle>
                    <Badge variant="secondary">Registration Specialist</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Dedicated ship registration entity specializing in flag state services and vessel compliance.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Ship Registration</li>
                  <li>• Flag State Services</li>
                  <li>• Classification Support</li>
                  <li>• Compliance Management</li>
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
                    <CardTitle className="text-lg text-slate-900">Atlas Maritime Consulting</CardTitle>
                    <Badge variant="secondary">Advisory Services</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Strategic maritime consulting services for governments, shipowners, and maritime authorities.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Maritime Strategy</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Fleet Optimization</li>
                  <li>• Market Analysis</li>
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
                    <CardTitle className="text-lg text-slate-900">Atlas Crew Management</CardTitle>
                    <Badge variant="secondary">Human Resources</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive crew management services providing qualified seafarers worldwide.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Officer Recruitment</li>
                  <li>• Crew Training</li>
                  <li>• Certification Management</li>
                  <li>• Payroll Services</li>
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
                    <CardTitle className="text-lg text-slate-900">Atlas Technical Services</CardTitle>
                    <Badge variant="secondary">Technical Support</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Technical management and engineering services for vessel operations and maintenance.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Technical Management</li>
                  <li>• Maintenance Planning</li>
                  <li>• Spare Parts Supply</li>
                  <li>• Engineering Support</li>
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
                    <CardTitle className="text-lg text-slate-900">Atlas Port Services</CardTitle>
                    <Badge variant="secondary">Port Operations</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Comprehensive port agency and husbandry services across major global ports.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Port Agency</li>
                  <li>• Ship Husbandry</li>
                  <li>• Cargo Operations</li>
                  <li>• Logistics Coordination</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Operations Network</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Integrated operations across five continents with local expertise and global standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Asia Pacific Hub</CardTitle>
                <CardDescription>Regional coordination center</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Main Office:</strong> Sharjah, UAE
                  </p>
                  <p>
                    <strong>Regional Offices:</strong> India, Singapore, Australia
                  </p>
                  <p>
                    <strong>Services:</strong> Full spectrum maritime services
                  </p>
                  <p>
                    <strong>Fleet Management:</strong> 1,200+ vessels
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Middle East Operations</CardTitle>
                <CardDescription>Strategic regional presence</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Primary Office:</strong> Sharjah, UAE
                  </p>
                  <p>
                    <strong>Secondary Office:</strong> Kuwait
                  </p>
                  <p>
                    <strong>Specialization:</strong> Oil & gas transportation
                  </p>
                  <p>
                    <strong>Fleet Management:</strong> 800+ vessels
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Global Partnerships</CardTitle>
                <CardDescription>Strategic alliances worldwide</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Flag States:</strong> 7 international registries
                  </p>
                  <p>
                    <strong>Classification:</strong> Major society partnerships
                  </p>
                  <p>
                    <strong>Government:</strong> PPP agreements
                  </p>
                  <p>
                    <strong>Fleet Management:</strong> 500+ vessels
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
          <h2 className="text-3xl font-bold mb-6">Partner with Royal Atlas Group</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Experience the power of integrated maritime services through our comprehensive group structure. From ship
            registration to technical management, we deliver excellence across all maritime disciplines.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-colors">
              Explore Partnership Opportunities
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-md font-medium transition-colors bg-transparent">
              Contact Group Services
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
