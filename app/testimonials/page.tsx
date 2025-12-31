import { Star, Quote, Building, Ship, Globe } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Captain James Morrison",
      title: "Fleet Manager",
      company: "Global Shipping Consortium",
      country: "United Kingdom",
      rating: 5,
      text: "Royal Atlas Marine has been our trusted partner for over 8 years. Their ship management services are unparalleled, and their technical expertise has saved us millions in operational costs. The crew management division consistently provides highly qualified seafarers.",
      project: "Fleet Management - 45 Vessels",
      industry: "Container Shipping",
    },
    {
      name: "Dr. Sarah Chen",
      title: "Director of Maritime Operations",
      company: "Pacific Trade Lines",
      country: "Singapore",
      rating: 5,
      text: "The professionalism and efficiency of Royal Atlas Marine's customs clearance services have streamlined our operations across 12 countries. Their deep understanding of international maritime regulations is exceptional.",
      project: "Multi-Port Customs Operations",
      industry: "International Trade",
    },
    {
      name: "Ahmed Al-Rashid",
      title: "CEO",
      company: "Middle East Petroleum Transport",
      country: "UAE",
      rating: 5,
      text: "Royal Atlas Marine's flag state services for our tanker fleet have been outstanding. Their expertise with Panama and Belize registrations, combined with their technical management capabilities, makes them our go-to maritime partner.",
      project: "Tanker Fleet Registration - 28 Vessels",
      industry: "Oil & Gas",
    },
    {
      name: "Maria Santos",
      title: "Logistics Director",
      company: "South American Mining Corp",
      country: "Brazil",
      rating: 5,
      text: "The project cargo management services provided by Royal Atlas Marine for our mining equipment transportation have been flawless. They handled oversized cargo worth $500M with zero incidents.",
      project: "Heavy Lift Project Cargo",
      industry: "Mining",
    },
    {
      name: "Captain Lars Andersen",
      title: "Marine Superintendent",
      company: "Nordic Bulk Carriers",
      country: "Norway",
      rating: 5,
      text: "Royal Atlas Marine's technical management and survey services have maintained our fleet at the highest standards. Their ISM and ISPS compliance expertise is world-class.",
      project: "Technical Management - 32 Bulk Carriers",
      industry: "Dry Bulk",
    },
    {
      name: "Jennifer Williams",
      title: "VP Maritime Operations",
      company: "Atlantic Container Lines",
      country: "USA",
      rating: 5,
      text: "Royal Atlas Marine's container shipping solutions have optimized our trans-Atlantic routes. Their warehousing and distribution network has reduced our logistics costs by 25%.",
      project: "Container Line Operations",
      industry: "Container Shipping",
    },
    {
      name: "Hiroshi Tanaka",
      title: "Fleet Operations Manager",
      company: "Pacific Auto Carriers",
      country: "Japan",
      rating: 5,
      text: "The RoRo vessel management services provided by Royal Atlas Marine for our automotive cargo operations have been exceptional. Their crew training programs are industry-leading.",
      project: "RoRo Fleet Management - 18 Vessels",
      industry: "Automotive",
    },
    {
      name: "Klaus Mueller",
      title: "Director",
      company: "European Wind Energy Transport",
      country: "Germany",
      rating: 5,
      text: "Royal Atlas Marine's specialized project cargo services for wind turbine transportation have been crucial to our renewable energy projects. Their heavy-lift expertise is unmatched.",
      project: "Wind Turbine Transportation",
      industry: "Renewable Energy",
    },
    {
      name: "Captain Roberto Silva",
      title: "Marine Operations Director",
      company: "Caribbean Cruise Holdings",
      country: "Barbados",
      rating: 5,
      text: "Royal Atlas Marine's flag state services and port agency operations have been instrumental in our Caribbean expansion. Their Barbados flag expertise is comprehensive.",
      project: "Cruise Ship Flag Registration",
      industry: "Cruise & Passenger",
    },
    {
      name: "David Thompson",
      title: "Chief Maritime Officer",
      company: "Australian Mining Transport",
      country: "Australia",
      rating: 5,
      text: "The bulk cargo management services provided by Royal Atlas Marine have revolutionized our iron ore export operations. Their port coordination across 15 countries is seamless.",
      project: "Iron Ore Export Operations",
      industry: "Mining",
    },
    {
      name: "Fatima Al-Zahra",
      title: "Maritime Consultant",
      company: "Gulf Maritime Advisory",
      country: "Kuwait",
      rating: 5,
      text: "Royal Atlas Marine's maritime consulting services have guided our fleet expansion strategy. Their market analysis and regulatory expertise have been invaluable.",
      project: "Fleet Expansion Consulting",
      industry: "Maritime Consulting",
    },
    {
      name: "Captain Michael O'Brien",
      title: "Fleet Manager",
      company: "Celtic Sea Shipping",
      country: "Ireland",
      rating: 5,
      text: "Royal Atlas Marine's crew management division has provided us with highly skilled officers and ratings for over 6 years. Their training standards exceed industry requirements.",
      project: "Crew Management Services",
      industry: "General Cargo",
    },
    {
      name: "Li Wei",
      title: "Operations Director",
      company: "China Logistics International",
      country: "China",
      rating: 5,
      text: "The freight forwarding services of Royal Atlas Marine have streamlined our Asia-Europe trade routes. Their documentation accuracy rate is 99.8%.",
      project: "Asia-Europe Trade Routes",
      industry: "International Trade",
    },
    {
      name: "Captain Nikos Papadopoulos",
      title: "Technical Manager",
      company: "Hellenic Tanker Management",
      country: "Greece",
      rating: 5,
      text: "Royal Atlas Marine's technical management and survey services have maintained our chemical tanker fleet at zero deficiencies for 3 consecutive years.",
      project: "Chemical Tanker Management",
      industry: "Chemical Transport",
    },
    {
      name: "Isabella Rodriguez",
      title: "Logistics Manager",
      company: "Latin American Commodities",
      country: "Mexico",
      rating: 5,
      text: "Royal Atlas Marine's warehousing and distribution services have optimized our supply chain across 8 countries. Their inventory management system is state-of-the-art.",
      project: "Multi-Country Distribution",
      industry: "Commodities",
    },
    {
      name: "Captain Olaf Eriksson",
      title: "Marine Superintendent",
      company: "Arctic Shipping Solutions",
      country: "Iceland",
      rating: 5,
      text: "Royal Atlas Marine's specialized ice-class vessel management has enabled our Arctic operations. Their cold weather expertise is unparalleled in the industry.",
      project: "Arctic Shipping Operations",
      industry: "Specialized Shipping",
    },
    {
      name: "Jean-Pierre Dubois",
      title: "Fleet Operations Manager",
      company: "Mediterranean Ferries",
      country: "France",
      rating: 5,
      text: "The passenger vessel management services provided by Royal Atlas Marine have enhanced our Mediterranean routes. Their SOLAS compliance expertise is comprehensive.",
      project: "Passenger Ferry Operations",
      industry: "Passenger Transport",
    },
    {
      name: "Captain Hassan Al-Mahmoud",
      title: "Marine Operations Director",
      company: "Red Sea Shipping Company",
      country: "Saudi Arabia",
      rating: 5,
      text: "Royal Atlas Marine's port agency services across the Red Sea have streamlined our operations. Their local expertise in each port is exceptional.",
      project: "Red Sea Port Operations",
      industry: "Regional Shipping",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-blue-100 mb-8">
              Trusted by the world's leading maritime companies across 50+ countries
            </p>
            <div className="flex justify-center items-center space-x-8 text-blue-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2,500+</div>
                <div className="text-sm">Vessels Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.8%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Global Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">$50B+</div>
              <div className="text-gray-600">Cargo Value Managed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">Zero</div>
              <div className="text-gray-600">Major Incidents</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from maritime industry leaders who trust Royal Atlas Marine with their most critical operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-2 border-blue-100">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3 flex-1">
                      {index < 5 && (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={`/testimonials/testimonials-${index + 1}.jpg`}
                            alt={`${testimonial.name} testimonial`}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1">
                        <CardTitle className="text-lg text-slate-900">{testimonial.name}</CardTitle>
                        <CardDescription className="text-sm">
                          {testimonial.title}
                          <br />
                          <span className="font-medium text-blue-600">{testimonial.company}</span>
                          <br />
                          <span className="text-gray-500">{testimonial.country}</span>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">
                      <Building className="h-3 w-3 mr-1" />
                      {testimonial.industry}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Ship className="h-3 w-3 mr-1" />
                      {testimonial.project}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <Quote className="h-8 w-8 text-blue-200 absolute -top-2 -left-2" />
                    <p className="text-gray-600 italic pl-6 leading-relaxed">{testimonial.text}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Industry Recognition</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">IMO Recognition</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Recognized by the International Maritime Organization for excellence in maritime safety and
                  environmental protection.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Ship className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Lloyd's List Awards</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Multiple Lloyd's List Awards for Ship Management Company of the Year and Maritime Innovation
                  Excellence.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Government Partnerships</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Trusted partner for government maritime projects across UAE, Kuwait, Singapore, and Australia.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-2 border-blue-100">
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-blue-600 rounded-full w-fit">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl text-slate-900">Quality Certifications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  ISO 9001:2015, ISO 14001:2015, and OHSAS 18001:2007 certified for quality, environmental, and safety
                  management.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Experience the Royal Atlas Marine difference. Let us help you achieve operational excellence in your
            maritime operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-colors">
              Request Consultation
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 rounded-md font-medium transition-colors bg-transparent">
              View Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
