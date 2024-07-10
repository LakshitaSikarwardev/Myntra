
"use client"

import { useState } from "react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export function joingroup() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 7499.99,
      quantity: 1,
      user: {
        name: "Lakshita",
        email: "lakshita@example.com",
        avatar: "/placeholder-user.jpg",
      },
    },
    {
      id: 2,
      name: "Ergonomic Office Chair",
      price: 14999.99,
      quantity: 1,
      user: {
        name: "Khushi",
        email: "khushi@example.com",
        avatar: "/placeholder-user.jpg",
      },
    },
  ])
  const [groupCode, setGroupCode] = useState("")
  const [groupMembers, setGroupMembers] = useState([])
  const handleGroupCodeChange = (e) => {
    setGroupCode(e.target.value)
  }
  const handleJoinGroup = () => {
    fetchGroupDetails(groupCode)
      .then((group) => {
        setGroupMembers(group.members)
        updateCartPrices(group.members)
      })
      .catch((error) => {
        console.error("Error joining group:", error)
      })
  }
  const handleCreateGroup = () => {
    const newGroupCode = createGroup()
    setGroupCode(newGroupCode)
    setGroupMembers([])
  }
  const fetchGroupDetails = (code) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (code === "ABC123") {
          resolve({
            members: ["Lakshita", "Khushi", "John", "Jane"],
          })
        } else {
          reject(new Error("Invalid group code"))
        }
      }, 1000)
    })
  }
  const createGroup = () => {
    return "ABC123"
  }
  const updateCartPrices = (members) => {
    const discountedPrice = 100000 / members.length
    setCart(
      cart.map((item) => ({
        ...item,
        price: discountedPrice,
      })),
    )
  }
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-background text-foreground">
      <section className="container mx-auto my-16 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-card p-4 rounded-lg shadow-md w-full md:w-[800px]"
                >
                  <div className="flex items-center gap-5">
                    <Avatar className="w-10 h-10 border">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>{item.user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-muted-foreground">Quantity: {item.quantity}</p>
                      <p className="text-muted-foreground">Added by: {item.user.name}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-lg font-bold text-primary">₹{item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-lg font-bold ">
                  Total: <span className="text-primary">₹{totalPrice.toFixed(2)}</span>
                </p>
                <p className="text-muted-foreground">Total Quantity: {totalQuantity}</p>
              </div>
              <Button className="px- py-2 rounded-lg">Checkout</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-16 px-4 md:px-6 flex justify-center">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <img src="/placeholder.svg" alt="Side Image" width={600} height={400} className="rounded-lg object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mt-11">Group with Friends</h2>
            <div className="space-y-4">
              <div className="p-7 ">
                <Label htmlFor="groupCode" className="font-medium">
                  Enter Group Code
                </Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id="groupCode"
                    placeholder="Enter code"
                    value={groupCode}
                    onChange={handleGroupCodeChange}
                    className="flex-1 rounded-lg border border-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button onClick={handleJoinGroup} className="px-6 py-2 rounded-lg">
                    Join Group
                  </Button>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground mb-6">Or create a new group to share with your friends:</p>
                <Button onClick={handleCreateGroup} className="px-6 py-2  rounded-lg">
                  Create Group
                </Button>
              </div>
              {groupMembers.length > 0 && (
                <div>
                  <p className="text-muted-foreground">Group Members:</p>
                  <ul className="space-y-2 mt-2">
                    {groupMembers.map((member, index) => (
                      <li key={index} className="bg-card p-2 rounded-lg shadow-md">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
