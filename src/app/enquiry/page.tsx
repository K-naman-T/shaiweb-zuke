'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'AI-Powered Diagnostic Imaging System', price: 50000 },
  { id: 2, name: 'Smart Patient Monitoring Device', price: 2000 },
  { id: 3, name: 'Robotic Surgical Assistant', price: 100000 },
  { id: 4, name: 'High-Precision Pipette Tips (Pack of 1000)', price: 200 },
  { id: 5, name: 'Advanced Microplates (Pack of 100)', price: 500 },
  { id: 6, name: 'Specialized Culture Media (1L)', price: 150 },
]

export default function ProductEnquiry() {
  return (
    <main className="flex-grow container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-16 text-slate-100">Product Enquiry</h1>
        <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
          <CardHeader>
            <CardTitle className="text-slate-100">Tell us what you're looking for</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="product" className="text-slate-200">Product</Label>
                <Select>
                  <SelectTrigger className="bg-slate-900 border-slate-700 text-slate-200">
                    <SelectValue placeholder="Select a product" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900 border-slate-700">
                    {products.map((product) => (
                      <SelectItem 
                        key={product.id} 
                        value={product.id.toString()}
                        className="text-slate-200 focus:bg-slate-800 focus:text-slate-100"
                      >
                        {product.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="organization" className="text-slate-200">Organization Name</Label>
                  <Input 
                    id="organization" 
                    placeholder="Your organization" 
                    className="bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity" className="text-slate-200">Quantity</Label>
                  <Input 
                    id="quantity" 
                    type="number" 
                    min="1" 
                    placeholder="1" 
                    className="bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-400"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contactPerson" className="text-slate-200">Contact Person</Label>
                <Input 
                  id="contactPerson" 
                  placeholder="Full name" 
                  className="bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  className="bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-slate-200">Phone</Label>
                <Input 
                  id="phone" 
                  type="tel" 
                  placeholder="+91 123 456 7890" 
                  className="bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="requirements" className="text-slate-200">Additional Requirements</Label>
                <Textarea 
                  id="requirements" 
                  placeholder="Any specific requirements or questions..."
                  className="min-h-[100px] bg-slate-900 border-slate-700 text-slate-200 placeholder:text-slate-400"
                />
              </div>
              <Button type="submit" className="w-full">Submit Enquiry</Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  )
}