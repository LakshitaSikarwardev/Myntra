import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Fullscreen } from "lucide-react"

export default function Groupcode() {
  return (
    <div className="flex flex-col min-h-screen mt-[100px]">
      
      
      <section className="container mx-auto my-8 px-4 md:px-6 ">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-4">Your Group Code</h2>
            <div className="bg-muted rounded-lg p-6 flex flex-col items-center justify-center">
              <span className="text-4xl font-bold">ABCD1234</span>
              <p className="text-muted-foreground mt-2">Share this code with your friends to start group purchasing.</p>
              <div className="mt-4 flex gap-2">
                <Button variant="outline">Copy Code</Button>
                <Button>Share</Button>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">How it Works</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <UsersIcon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Invite Friends</h3>
                  <p className="text-muted-foreground">
                    Share the unique group code with your friends to join the group.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShoppingCartIcon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Group Purchasing</h3>
                  <p className="text-muted-foreground">
                    Add products to the shared cart and checkout together to unlock group discounts.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShoppingCartIcon className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="font-semibold">Group Discounts</h3>
                  <p className="text-muted-foreground">
                    The more people in your group, the higher the discounts you'll receive.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-[40px]">
            <img src="/placeholder.svg" alt="Side Image" width={700} height={700} className="rounded-lg object-cover ml-9" />
          </div >
          <div className="mt-[40px]">
            <img src="/placeholder.svg" alt="Side Image" width={700} height={700} className="rounded-lg object-cover ml-9" />
          </div>
        </div>
      </section>
    </div>
  )
}

function ShoppingCartIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    )
  }
  
  
  function UsersIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
      
    )
  }
  









