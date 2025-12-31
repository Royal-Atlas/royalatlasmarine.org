"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 group">
            <div className="relative w-16 h-16 p-2 bg-blue-600/10 rounded-full border border-blue-200 group-hover:bg-blue-600/20 transition-colors">
              <Image
                src="/logo.png"
                alt="Royal Atlas Marine Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>About Royal Atlas</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/about"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Company Overview</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Global maritime leadership since inception
                        </p>
                      </Link>
                    </NavigationMenuLink>

                    <NavigationMenuLink asChild>
                      <Link
                        href="/about/subsidiaries"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Atlas Registering Shipping</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Our dedicated ship registration entity
                        </p>
                      </Link>
                    </NavigationMenuLink>

                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Maritime Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[900px] grid-cols-4 gap-3 p-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-slate-900 border-b pb-2">Core Services</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/freight-forwarding"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Freight Forwarding</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/customs-clearance"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Customs Clearance</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/container-shipping"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Container Shipping</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/warehousing"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Warehousing</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-slate-900 border-b pb-2">Ship Management</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/ship-registry"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Ship Registry Consultancy</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/crew-manning"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Crew Manning & Training</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/technical-management"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Technical Management</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/ship-agency"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Ship Agency</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-slate-900 border-b pb-2">Specialized Services</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/offshore-support"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Offshore Industry Support</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/maritime-training"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Maritime Training</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/marine-surveying"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Marine Surveying</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/project-cargo"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Project Cargo</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-slate-900 border-b pb-2">Strategic Services</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/strategic-investment"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Strategic Investment</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/export-facilitation"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Export Facilitation</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services/chartering"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Chartering</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium text-blue-600">View All Services →</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Flag State Operations</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/flag-states/belize"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Belize Flag</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Comprehensive registry services
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/flag-states/san-marino"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">San Marino Flag</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          European flag state services
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/flag-states/panama"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Panama Flag</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          World's largest ship registry
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/flag-states/barbados"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Barbados Flag</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Caribbean maritime excellence
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/flag-states/antigua-barbuda"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Antigua & Barbuda</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Premium flag state services
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/flag-states/st-kitts-nevis"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">St. Kitts & Nevis</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Efficient registration process
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Global Network</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[700px] grid-cols-3 gap-3 p-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-slate-900 border-b pb-2">Middle East</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/offices/sharjah"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Sharjah, UAE (Main Office)</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/offices/kuwait"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Kuwait</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-slate-900 border-b pb-2">Asia Pacific</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/offices/singapore"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Singapore</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/offices/australia"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Australia</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-slate-900 border-b pb-2">Partnerships</h4>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/partnerships/government"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Government PPP</div>
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="/partnerships/classification"
                          className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                        >
                          <div className="text-sm font-medium">Classification Societies</div>
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Industry Solutions</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/industries/oil-gas"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Oil & Gas</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Specialized tanker operations
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/industries/mining"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Mining & Minerals</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Bulk carrier expertise
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/industries/automotive"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Automotive</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          RoRo and container solutions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/industries/agriculture"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Agriculture</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Grain and commodity shipping
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/industries/renewable-energy"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Renewable Energy</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Wind turbine transportation
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/industries/government"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Government Projects</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Public sector partnerships
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="/contact"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  >
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link href="/services" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">Get Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
