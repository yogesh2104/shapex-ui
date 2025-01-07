'use client'

import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/default/ui/table"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Download, MoreVertical, Settings, Filter, PlusCircle, Trash2 } from 'lucide-react'

interface Customer {
  id: string
  name: string
  username: string
  avatar: string
  paymentMethod: "visa" | "mastercard"
  cardNumber: string
  categories: Array<{
    name: string
    color: string
  }>
  clickthrough: number
}

const customers: Customer[] = [
  {
    id: "1",
    name: "Bulla",
    username: "@bulla",
    avatar: "/character/bulla.jpg",
    paymentMethod: "visa",
    cardNumber: "****-**18",
    categories: [
      { name: "open", color: "bg-purple-100 text-purple-700" },
      { name: "Gunda", color: "bg-orange-100 text-orange-700" },
      { name: "Lamboo Aata", color: "bg-red-100 text-red-700" }
    ],
    clickthrough: 40
  },
  {
    id: "2",
    name: "Majnu Bhai",
    username: "@majnubhai",
    avatar: "/character/majnu-bhai.jpg",
    paymentMethod: "mastercard",
    cardNumber: "****-**99",
    categories: [
      { name: "Khokha", color: "bg-purple-100 text-purple-700" },
      { name: "Painting", color: "bg-blue-100 text-blue-700" }
    ],
    clickthrough: 10
  },
  {
    id: "3",
    name: "Vasooli",
    username: "@vasooli",
    avatar: "/character/Vasooli.webp",
    paymentMethod: "mastercard",
    cardNumber: "****-**69",
    categories: [
      { name: "number bol", color: "bg-purple-100 text-purple-700" },
      { name: "Panvel", color: "bg-pink-100 text-pink-700" }
    ],
    clickthrough: 70
  },
]

export function CustomerTable() {
  return (
    <div className="rounded-2xl border mt-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 space-y-4 sm:space-y-0">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold">Your Customers</h2>
          <Badge variant="secondary" className="bg-primary/10 text-primary">New</Badge>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="gap-2 rounded-2xl">
            <Filter className="h-4 w-4" />
            <span className="sm:inline">Filter</span>
          </Button>
          <Button variant="outline" size="sm" className="gap-2 rounded-2xl">
            <Settings className="h-4 w-4" />
            <span className="sm:inline">Settings</span>
          </Button>
          <Button size="sm" className="gap-2 rounded-2xl">
            <PlusCircle className="h-4 w-4" />
            <span className="sm:inline">Add User</span>
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Full Name</TableHead>
              <TableHead className="hidden sm:table-cell">Payment Methods</TableHead>
              <TableHead className="hidden sm:table-cell">Category</TableHead>
              <TableHead className="text-right hidden sm:table-cell">Clickthrough Percentage</TableHead>
              <TableHead className="w-[150px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {customers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={customer.avatar} alt={customer.name} />
                      <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{customer.name}</div>
                      <div className="text-sm text-muted-foreground">{customer.username}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="flex items-center gap-2">
                    {customer.paymentMethod === "visa" ? (
                      <svg className="h-4 w-6" viewBox="0 0 36 24" xmlns="http://www.w3.org/2000/svg" stroke="#0a27ff"><g id="SVGRepo_bgCarrier" strokeWidth="0"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="0" fill="#7ed0ec"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z"></path></g></svg>
                    ) : (
                      <svg className="h-4 w-6" viewBox="0 0 36 24" fill="none">
                        <rect width="36" height="24" rx="4" fill="#EB001B"/>
                        <circle cx="13" cy="12" r="7" fill="#FF5F00"/>
                        <circle cx="23" cy="12" r="7" fill="#F79E1B"/>
                      </svg>
                    )}
                    <span className="text-sm text-muted-foreground">
                      Ends in {customer.cardNumber}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {customer.categories.map((category, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${category.color}`}
                      >
                        {category.name}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-right hidden sm:table-cell">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-32 h-2 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full bg-blue-600"
                        style={{ width: `${customer.clickthrough}%` }}
                      />
                    </div>
                    <span className="text-sm font-medium">{customer.clickthrough}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

