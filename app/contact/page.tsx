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
                    <CardTitle className="text-xl text-slate-900">India (Headquarters)</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      <strong>Address:</strong>
                      <br />
                      No. 63/1, 1st Floor, K.S. Arcade,
                      <br />
                      Virat Nagar Main Road, Bommanahalli,
                      <br />
                      Bangalore - 560068, India
                    </p>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+91 9193990000</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>08041530315 (Landline)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Mail className="h-4 w-4 text-blue-600 mt-0.5" />
                      <div>
                        <div>info@royalatlasmarine.com</div>
                        <div>royalatlasmarinepvtltd@gmail.com</div>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-blue-800">
                        License No: RPSL-CHN-162280
                        <br />
                        Director General Of Shipping, Govt. Of India Approved
                      </p>
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
                        Tel: +965 565 77000
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
                        STI Motor Centre, Unit 301, 3rd Floor
                        <br />
                        19 Lorong 8, Toa Payoh
                        <br />
                        Singapore 589822
                        <br />
                        Tel: +65 8169 7138
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Dubai, UAE</h4>
                      <p className="text-sm text-gray-600">
                        8th Floor, Al Moosa Tower 2<br />
                        Sheikh Zayed Road, Dubai, UAE
                        <br />
                        Tel: +971 545 498 293, +971 545 439 263
                        <br />
                        Email: royalatlasmarine.dxb@gmail.com
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
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Find Our Headquarters</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-12 w-12 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">
                  No. 63/1, 1st Floor, K.S. Arcade,
                  <br />
                  Virat Nagar Main Road, Bommanahalli,
                  <br />
                  Bangalore - 560068, India
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
