import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 mb-8">
              We would love to hear from you and discuss how Royal Atlas Marine can assist with your maritime needs
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Send us a Message</CardTitle>
                <CardDescription>
                  Our dedicated team is ready to provide personalized solutions and answer any questions you may have.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input id="phone" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <Input id="company" placeholder="Your company name" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="ship-registry-consultancy">Ship Registry Consultancy</option>
                      <option value="crew-manning-training">Crew Manning & Training</option>
                      <option value="technical-management">Technical Management</option>
                      <option value="offshore-support">Offshore Industry Support</option>
                      <option value="maritime-training">Maritime Training Programs</option>
                      <option value="strategic-investment">Strategic Investment Services</option>
                      <option value="export-facilitation">Export Facilitation</option>
                      <option value="freight-forwarding">Freight Forwarding</option>
                      <option value="customs-clearance">Customs Clearance</option>
                      <option value="container-shipping">Container Shipping</option>
                      <option value="warehousing">Warehousing & Distribution</option>
                      <option value="ship-agency">Ship Agency Services</option>
                      <option value="marine-surveying">Marine Surveying</option>
                      <option value="project-cargo">Project Cargo Management</option>
                      <option value="chartering">Chartering Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" rows={4} placeholder="Tell us about your requirements..." />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-xl text-slate-900">Royal Atlas marine LLC SHJ -Branch</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      <strong>Address:</strong>
                      <br />
                      Al Nayeli 16
                      <br />
                      89CQ+3F9 , Al Wahda st Al Darari
                      <br />
                      Commercial: Industrial area
                      <br />
                      Sharjah UAE
                    </p>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <div>
                        <div>+971 545498293</div>
                        <div>+971 585637900</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Mail className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <div>info@royalatlasmarine.com</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-xl text-slate-900">Global Offices</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900">Kuwait</h4>
                      <p className="text-sm text-gray-600">
                        Al Dabbous Mall, Behind Crown Plaza
                        <br />
                        Habib Munawar Street, PO BOX # 18478
                        <br />
                        Farwaniyah - 81005, Kuwait
                        <br />
                        Tel: +965 5657000
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Australia</h4>
                      <p className="text-sm text-gray-600">
                        84 Hotham Street, Preston 3072
                        <br />
                        Melbourne, Victoria, Australia
                        <br />
                        Tel: +61 468 408 732
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Singapore</h4>
                      <p className="text-sm text-gray-600">
                        STI Motor Centre, 19 Lorong 8
                        <br />
                        Toa Payoh, Singapore
                        <br />
                        Tel: +65 9423 2850
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">United Kingdom</h4>
                      <p className="text-sm text-gray-600">
                        54A High Street, Deal, Kent
                        <br />
                        CT14 6HE, United Kingdom
                        <br />
                        Tel: +44 771 715 1977
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Bahrain</h4>
                      <p className="text-sm text-gray-600">
                        Shop No: 21, Building 1007, Street 1821
                        <br />
                        Block 718, Zayed Town, Bahrain
                        <br />
                        Tel: +973 3234 3592
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Royal Atlas marine LLC SHJ -Branch</h4>
                      <p className="text-sm text-gray-600">
                        Al Nayeli 16
                        <br />
                        89CQ+3F9 , Al Wahda st Al Darari
                        <br />
                        Commercial: Industrial area
                        <br />
                        Sharjah UAE
                        <br />
                        Tel: +971 545498293
                        <br />
                        +971 585637900
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Royal Atlas Marine - Trivandrum</h4>
                      <p className="text-sm text-gray-600">
                        Amaura Building (2nd Floor)
                        <br />
                        M. P 1/46C, Near HDFC BANK
                        <br />
                        Peyad po Trivandrum
                        <br />
                        695573
                        <br />
                        Tel: +91 9538359000
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-xl text-slate-900">Business Hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                    <p className="text-sm text-blue-600 mt-3">*Emergency services available 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Find Our Main Office</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">
                  Royal Atlas marine LLC SHJ -Branch
                  <br />
                  Al Nayeli 16
                  <br />
                  89CQ+3F9 , Al Wahda st Al Darari
                  <br />
                  Commercial: Industrial area, Sharjah UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-100">
            Trust our experienced team to navigate the complexities of global trade and take your maritime ventures to
            new horizons.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8 py-3">
              Request Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 bg-transparent"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
