import { Ship, Globe, Container, Truck, Anchor, FileText, Search, Package, Users, Building, GraduationCap, Heart, Zap, Briefcase, Database, Shield, Award, Clock } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Comprehensive maritime solutions tailored to meet your global shipping and logistics needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Ship Registry Consultancy */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Database className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Ship Registry Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Strategic planning and development of international ship registry operations for maritime authorities and governments.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Registry infrastructure planning</li>
                  <li>• Legal framework development</li>
                  <li>• Digital platform integration</li>
                  <li>• Global promotion strategies</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/ship-registry">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Crew Manning & Training */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Crew Manning & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Comprehensive crew recruitment, certification, and training services for maritime operations worldwide.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Seafarer recruitment</li>
                  <li>• STCW certification</li>
                  <li>• Maritime training programs</li>
                  <li>• Crew management</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/crew-manning">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Technical Management */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Shield className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Technical Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Professional technical management services ensuring vessel compliance with international standards.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Vessel technical oversight</li>
                  <li>• Classification society liaison</li>
                  <li>• Maintenance planning</li>
                  <li>• Technical documentation</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/technical-management">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Freight Forwarding */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Ship className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Freight Forwarding</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Complete logistics management including documentation, customs clearance, transportation arrangement,
                  and coordination.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• International shipping coordination</li>
                  <li>• Documentation management</li>
                  <li>• Route optimization</li>
                  <li>• Multi-modal transportation</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/freight-forwarding">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Customs Clearance */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Customs Clearance</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Expert handling of import/export regulations, customs duties, and legal compliance requirements.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Import/Export documentation</li>
                  <li>• Customs duty calculation</li>
                  <li>• Regulatory compliance</li>
                  <li>• Government liaison</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/customs-clearance">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Container Shipping */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Container className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Container Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Secure and efficient container transportation via ships, trucks, and trains worldwide.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• FCL & LCL services</li>
                  <li>• Container tracking</li>
                  <li>• Special cargo handling</li>
                  <li>• Door-to-door delivery</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/container-shipping">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Warehousing */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Package className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Warehousing & Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Comprehensive storage facilities and distribution management to final destinations.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Secure storage facilities</li>
                  <li>• Inventory management</li>
                  <li>• Distribution services</li>
                  <li>• Value-added services</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/warehousing">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Ship Agency */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Anchor className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Ship Agency Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Comprehensive ship agency services including port operations, crew management, and vessel support.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Port operations management</li>
                  <li>• Crew change coordination</li>
                  <li>• Vessel provisioning</li>
                  <li>• Port clearance</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/ship-agency">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Marine Surveying */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Search className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Marine Surveying</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Professional marine survey services for vessels, cargo, and maritime insurance purposes.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Vessel condition surveys</li>
                  <li>• Cargo damage assessment</li>
                  <li>• Insurance surveys</li>
                  <li>• Pre-purchase inspections</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/marine-surveying">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Project Cargo */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Truck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Project Cargo Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Specialized handling of oversized, heavy-lift, and complex project cargo shipments.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Heavy-lift operations</li>
                  <li>• Route surveys</li>
                  <li>• Special equipment handling</li>
                  <li>• Project coordination</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/project-cargo">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Chartering */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Chartering Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Professional vessel chartering services for bulk cargo, tankers, and specialized vessels.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Vessel sourcing</li>
                  <li>• Charter negotiations</li>
                  <li>• Market analysis</li>
                  <li>• Contract management</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/chartering">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Offshore Industry Support */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Building className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Offshore Industry Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Comprehensive support services for offshore oil, gas, and renewable energy operations.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Offshore vessel support</li>
                  <li>• Platform logistics</li>
                  <li>• Supply chain management</li>
                  <li>• Emergency response</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/offshore-support">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Maritime Training Programs */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <GraduationCap className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Maritime Training Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Professional development and certification programs for maritime professionals and administrators.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Flag state inspection training</li>
                  <li>• Maritime law education</li>
                  <li>• Safety management courses</li>
                  <li>• Professional certification</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/maritime-training">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Strategic Investment Services */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Briefcase className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Strategic Investment Services</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Strategic investment facilitation across education, healthcare, port development, and renewable energy sectors.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Education sector development</li>
                  <li>• Healthcare infrastructure</li>
                  <li>• Port modernization</li>
                  <li>• Renewable energy projects</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/strategic-investment">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Export Facilitation */}
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100 hover:border-blue-300">
              <CardHeader className="text-center">
                <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Export Facilitation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-6">
                  Comprehensive export support services for natural resources, minerals, timber, and seafood products.
                </CardDescription>
                <ul className="text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Market access facilitation</li>
                  <li>• Logistics coordination</li>
                  <li>• Documentation support</li>
                  <li>• Global trade networks</li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/export-facilitation">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need a Custom Solution?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our experienced team can design tailored maritime solutions to meet your specific requirements. Contact us
            to discuss your project needs.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
            <Link href="/contact">Contact Our Experts</Link>
          </Button>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Global Offices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategically located offices across key maritime hubs worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Bengaluru, Karnataka</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> 1st Floor, K/S Arcade</p>
                  <p>Above Med Plus</p>
                  <p>Bommanahalli, Bengaluru</p>
                  <p>Karnataka 560068</p>
                  <p><strong>Phone:</strong> +91 939900000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Trivandrum, Kerala</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Opp. Neyyar Residency (Old Hotel Silver Dew)</p>
                  <p>NMC.40/527(Old.Xll/477D), Keezhekulam Lane</p>
                  <p>Alummoodu, Neyyattinkara</p>
                  <p>Trivandrum, Kerala - 695121</p>
                  <p><strong>Phone:</strong> +91 9538359000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Mumbai, Maharashtra</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Shop No-5, Ground Floor, 484/B</p>
                  <p>Munna Villa CHS Ltd</p>
                  <p>Gabriel Street, Near Canosa Primary School</p>
                  <p>Mahim West, Mumbai - 400016</p>
                  <p><strong>Phone:</strong> +91 9483629000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group Kuwait</CardTitle>
                <CardDescription>Farwaniyah</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Al Dabbous Mall, Behind Crown Plaza</p>
                  <p>Habib Munawar Street</p>
                  <p>PO BOX # 18478</p>
                  <p>FARWANIYAH - 81005, KUWAIT</p>
                  <p><strong>Tel:</strong> +965 5657000</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Melbourne, Victoria</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> 84 Hotham Street</p>
                  <p>Preston 3072</p>
                  <p>Melbourne, Victoria</p>
                  <p>Australia</p>
                  <p><strong>Phone:</strong> +61 468 408 732</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Singapore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> STI Motor Centre, 19 Lorong 8</p>
                  <p>Toa Payoh, Singapore</p>
                  <p><strong>Phone:</strong> +65 9423 2850</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Deal, Kent, United Kingdom</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> 54A High Street</p>
                  <p>Deal, Kent</p>
                  <p>CT14 6HE, United Kingdom</p>
                  <p><strong>Phone:</strong> +44 771 715 1977</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Zayed Town, Bahrain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Shop No: 21</p>
                  <p>Building 1007, Street 1821</p>
                  <p>Block 718, Zayed Town</p>
                  <p>Bahrain</p>
                  <p><strong>Phone:</strong> +973 3234 3592</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Dubai, UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Montana Building</p>
                  <p>Office 110-113, Zee Beel Road</p>
                  <p>St. Al Karama, Dubai</p>
                  <p>United Arab Emirates</p>
                  <p><strong>Phone:</strong> +971 545498293</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
