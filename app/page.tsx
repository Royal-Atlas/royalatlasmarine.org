import { ArrowRight, Globe, Shield, Clock, Award, Anchor, Ship, Container, Truck, Star, Users, Database, Building } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-20">
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Maritime Hero Background"
            fill
            className="object-cover opacity-25"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Logo and Brand Section */}
            <div className="flex flex-col items-center mb-8">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 bg-blue-600/50 rounded-full border-2 border-blue-400/60 mr-4">
                  <Anchor className="h-10 w-10 text-blue-200" />
                </div>
                <div className="text-left">
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight tracking-wide">
                    Royal Atlas Marine
                  </h1>
                </div>
              </div>
            </div>
            
            {/* Main Tagline */}
            <h2 className="text-xl lg:text-2xl xl:text-3xl font-semibold mb-4 text-blue-100">
              QSSHE Excellence in Maritime Operations
            </h2>
            
            {/* Description */}
            <p className="text-base lg:text-lg mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Your Trusted Maritime Solutions Provider with global presence across Kuwait, Australia, Singapore,
              and Sharjah. Delivering Quality, Safety, Security, Health, and Environmental excellence in every operation.
            </p>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg">
                <Link href="/services" className="flex items-center gap-2">
                  Our Services <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent shadow-lg"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">QSSHE Excellence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quality, Safety, Security, Health, and Environmental standards at the core of every maritime operation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  ISO 9001:2015 certified quality management system ensuring excellence in every maritime operation and ship registry service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  SOLAS, MARPOL, and ISM Code compliance with zero major incidents across 2,500+ vessels managed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  ISPS Code implementation with comprehensive security protocols for vessel and crew protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Health & Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  ISO 14001:2015 environmental management and OHSAS 18001:2007 occupational health standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">QSSHE-Certified Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive maritime solutions with Quality, Safety, Security, Health, and Environmental excellence
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Database className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-slate-900">Ship Registry Consultancy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strategic planning and development of international ship registry operations for maritime authorities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-slate-900">Crew Manning & Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive crew recruitment, certification, and training services for maritime operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-slate-900">Technical Management</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional technical management ensuring vessel compliance with international standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Building className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-slate-900">Offshore Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive support services for offshore oil, gas, and renewable energy operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/services" className="flex items-center gap-2">
                View All Services <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Global Presence</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Strategically located offices across key maritime hubs worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

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
                <CardTitle className="text-slate-900">Royal Atlas marine LLC SHJ -Branch</CardTitle>
                <CardDescription>Sharjah, UAE</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Address:</strong> Al Nayeli 16</p>
                  <p>89CQ+3F9 , Al Wahda st Al Darari</p>
                  <p>Commercial: Industrial area</p>
                  <p>Sharjah UAE</p>
                  <p><strong>Phone:</strong> +971 545498293</p>
                  <p>+971 585637900</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Testimonials Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Over 500 global clients trust Royal Atlas Marine with their most critical maritime operations
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Royal Atlas Marine has been our trusted partner for over 8 years. Their ship management services are
                  unparalleled, and their technical expertise has saved us millions in operational costs."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Captain James Morrison</div>
                  <div className="text-blue-600">Global Shipping Consortium, UK</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The professionalism and efficiency of Royal Atlas Marine's customs clearance services have
                  streamlined our operations across 12 countries. Exceptional service quality."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Dr. Sarah Chen</div>
                  <div className="text-blue-600">Pacific Trade Lines, Singapore</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardContent className="p-6">
                <div className="flex space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Royal Atlas Marine's flag state services for our tanker fleet have been outstanding. Their expertise
                  with Panama and Belize registrations is comprehensive."
                </p>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900">Ahmed Al-Rashid</div>
                  <div className="text-blue-600">Middle East Petroleum Transport, UAE</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/testimonials" className="flex items-center gap-2">
                View All Testimonials <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">QSSHE Excellence in Maritime Operations</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-blue-100">
            From ship registry consultancy and technical management to freight forwarding and strategic investment services, 
            our QSSHE-certified solutions ensure Quality, Safety, Security, Health, and Environmental compliance. 
            Trust our experienced team to navigate the complexities of global maritime regulations and development.
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
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
