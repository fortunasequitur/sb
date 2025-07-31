"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
import { Menu, X, Phone, Mail } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@sobatbermain.com</span>
            </div>
          </div>
          <div className="text-right">
            <span>Follow Us:</span>
            <div className="inline-flex ml-2 space-x-2">
              <a href="#" className="hover:text-secondary transition-colors">FB</a>
              <a href="#" className="hover:text-secondary transition-colors">IG</a>
              <a href="#" className="hover:text-secondary transition-colors">YT</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-travel-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SB</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Sobat Bermain</h1>
                <p className="text-sm text-muted-foreground">Tour & Travel</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink href="#home" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Home
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>Destinations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-4 w-80">
                      <NavigationMenuLink href="#destinations" className="block p-3 rounded-md hover:bg-accent">
                        <div className="text-sm font-medium">Domestic Tours</div>
                        <p className="text-xs text-muted-foreground">Explore Indonesia's hidden gems</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink href="#destinations" className="block p-3 rounded-md hover:bg-accent">
                        <div className="text-sm font-medium">International Tours</div>
                        <p className="text-xs text-muted-foreground">Discover amazing destinations worldwide</p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#packages" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Packages
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#services" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Services
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink href="#contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                    Contact
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-4">
              <Button className="hidden sm:flex bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Book Now
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-accent"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-2 pt-4">
                <a href="#home" className="px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">Home</a>
                <a href="#destinations" className="px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">Destinations</a>
                <a href="#packages" className="px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">Packages</a>
                <a href="#services" className="px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">Services</a>
                <a href="#about" className="px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">About</a>
                <a href="#contact" className="px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors">Contact</a>
                <Button className="mx-4 mt-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                  Book Now
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
