import { Award, Users, Globe, Shield, Clock, Target } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="absolute inset-0">
          <Image
            src="/about-bg.jpg"
            alt="About Royal Atlas Marine Background"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Royal Atlas Marine</h1>
            <p className="text-xl text-blue-100 mb-8">
              Leading QSSHE-certified maritime solutions provider with focus on Quality, Safety, Security, Health, and Environmental excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-600">
              <p className="text-lg leading-relaxed mb-6">
                Royal Atlas Services has a highly qualified and well-experienced management team from the Marine
                Industry. All our offices in India are staffed by highly experienced officials with international and
                local expertise who are adept and fully trained to handle the highly challenging shipping and freight
                environment.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Driven to exceed the expectations of our customers, we take the priorities of our customers as our very
                own by providing safe and cost-effective management of the ships – synergistically working in
                partnership with our customers.
              </p>
              <p className="text-lg leading-relaxed">
                At Royal Atlas, we strive for Operational Excellence. We see challenges as opportunities and enjoy
                working diligently to make things happen. Our global presence across India, Kuwait, Australia,
                Singapore, and Dubai ensures we can serve our clients wherever they need us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="border-2 border-blue-100">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-slate-900">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  To provide exceptional maritime solutions that exceed customer expectations through operational
                  excellence, safety, and innovative service delivery across global markets.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-2xl text-slate-900">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-lg">
                  To be the world's most trusted maritime solutions provider, recognized for our commitment to quality,
                  safety, and customer satisfaction in every aspect of our operations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">QSSHE Excellence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ISO 9001:2015 certified quality management system ensuring excellence in every maritime operation and ship registry service.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  SOLAS, MARPOL, and ISM Code compliance with zero major incidents across 2,500+ vessels managed.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ISPS Code implementation with comprehensive security protocols for vessel and crew protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl text-slate-900">Health & Environment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ISO 14001:2015 environmental management and OHSAS 18001:2007 occupational health standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Global Presence</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">India (Headquarters)</CardTitle>
                <CardDescription>Bangalore, Karnataka</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Address:</strong> No. 63/1, 1st Floor, K.S. Arcade, Virat Nagar Main Road, Bommanahalli,
                    Bangalore - 560068
                  </p>
                  <p>
                    <strong>Phone:</strong> +91 9193990000
                  </p>
                  <p>
                    <strong>Landline:</strong> 08041530315
                  </p>
                  <p>
                    <strong>License:</strong> RPSL-CHN-162280 (Director General Of Shipping, Govt. Of India Approved)
                  </p>
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
                  <p>
                    <strong>Address:</strong> Al Dabbous Mall, Behind Crown Plaza
                  </p>
                  <p>Habib Munawar Street</p>
                  <p>
                    <strong>PO Box:</strong> 18478, Farwaniyah - 81005, Kuwait
                  </p>
                  <p>
                    <strong>Phone:</strong> +965 5657000
                  </p>
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
                  <p>
                    <strong>Address:</strong> 84 Hotham Street
                  </p>
                  <p>Preston 3072</p>
                  <p>Melbourne, Victoria</p>
                  <p>Australia</p>
                  <p>
                    <strong>Phone:</strong> +61 468 408 732
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Singapore</CardTitle>
                <CardDescription>Toa Payoh</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Address:</strong> STI Motor Centre, Unit 301, 3rd Floor, 19 Lorong 8, Toa Payoh, Singapore
                    589822
                  </p>
                  <p>
                    <strong>Phone:</strong> +65 8169 7138
                  </p>
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
                  <p>
                    <strong>Address:</strong> 54A High Street
                  </p>
                  <p>Deal, Kent</p>
                  <p>CT14 6HE, United Kingdom</p>
                  <p>
                    <strong>Phone:</strong> +44 771 715 1977
                  </p>
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
                  <p>
                    <strong>Address:</strong> Shop No: 21
                  </p>
                  <p>Building 1007, Street 1821</p>
                  <p>Block 718, Zayed Town</p>
                  <p>Bahrain</p>
                  <p>
                    <strong>Phone:</strong> +973 3234 3592
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Royal Atlas Group</CardTitle>
                <CardDescription>Toa Payoh, Singapore</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Address:</strong> 185 Toa Payoh Central
                  </p>
                  <p>#01-332, #02 Singapore 310185</p>
                  <p>
                    <strong>Phone:</strong> +65 9423 2850
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle className="text-slate-900">Dubai, UAE</CardTitle>
                <CardDescription>Sheikh Zayed Road</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <strong>Address:</strong> 8th Floor, Al Moosa Tower 2, Sheikh Zayed Road, Dubai, UAE
                  </p>
                  <p>
                    <strong>Phone:</strong> +971 545 498 293, +971 545 439 263
                  </p>
                  <p>
                    <strong>Email:</strong> royalatlasmarine.dxb@gmail.com
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/team/team-1.jpg"
                    alt="Team Member 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-slate-900">Captain James Wilson</CardTitle>
                <CardDescription className="text-blue-600 font-medium">CEO & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Over 25 years of maritime experience with expertise in ship management and international operations.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/team/team-2.jpg"
                    alt="Team Member 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-slate-900">Sarah Chen</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Operations Director</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Specialized in logistics optimization and global supply chain management across multiple continents.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src="/team/team-3.jpg"
                    alt="Team Member 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardTitle className="text-xl text-slate-900">Ahmed Al-Rashid</CardTitle>
                <CardDescription className="text-blue-600 font-medium">Technical Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Expert in vessel technical management and compliance with international maritime regulations.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
