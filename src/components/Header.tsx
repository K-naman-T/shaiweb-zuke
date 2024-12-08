'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "../lib/utils"
import { Button } from "./ui/button"
import { Menu, X } from "lucide-react"

const navigation = [
  { title: "About", href: "/about" },
  { title: "Team", href: "/team" },
  { title: "What We Do", href: "/what-we-do" },
  { title: "Impact", href: "/impact" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" }
]

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="text-2xl font-bold text-slate-100">
          SH&AI
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-slate-100",
                pathname === item.href 
                  ? "text-slate-100" 
                  : "text-slate-400"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <Link href="/enquiry">Contact Us</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-slate-900/95 border-t border-slate-800">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-slate-100",
                  pathname === item.href 
                    ? "text-slate-100" 
                    : "text-slate-400"
                )}
              >
                {item.title}
              </Link>
            ))}
            <Button asChild className="w-full mt-4">
              <Link href="/enquiry">Contact Us</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}