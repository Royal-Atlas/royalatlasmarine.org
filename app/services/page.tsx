import { Ship, Globe, Container, Truck, Anchor, FileText, Search, Package } from "lucide-react"
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
    </div>
  )
}
