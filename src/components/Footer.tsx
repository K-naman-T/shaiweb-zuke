import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-50 py-8">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SH&AI</h3>
            <p className="text-sm text-slate-400">
              Revolutionizing healthcare through AI-driven solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-slate-400 hover:text-slate-200">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-slate-200">About Us</Link></li>
              <li><Link href="/team" className="text-slate-400 hover:text-slate-200">Team</Link></li>
              <li><Link href="/what-we-do" className="text-slate-400 hover:text-slate-200">What We Do</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-slate-200">Products</Link></li>
              <li><Link href="/enquiry" className="text-slate-400 hover:text-slate-200">Enquiry</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-sm text-slate-400">
              123 AI Healthcare Street<br />
              Bangalore, Karnataka 560001<br />
              India<br />
              <br />
              Email: info@shai.com<br />
              Phone: +91 123 456 7890
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-slate-400">
          © {new Date().getFullYear()} SH&AI. All rights reserved.
        </div>
      </div>
    </footer>
  )
}