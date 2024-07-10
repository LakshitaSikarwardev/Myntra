import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function JoinGroup() {
  return (
     <section className="container mx-auto my-8 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Cart</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Premium Wireless Headphones</h3>
                    <p className="text-muted-foreground">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-lg font-bold">$99.99</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Product Image"
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">Ergonomic Office Chair</h3>
                    <p className="text-muted-foreground">Quantity: 1</p>
                  </div>
                </div>
                <span className="text-lg font-bold">$199.99</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Group with Friends</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="groupCode">Enter Group Code</Label>
                <div className="flex gap-2">
                  <Input id="groupCode" placeholder="Enter code" />
                  <Button>Join Group</Button>
                </div>
              </div>
              <div>
                <p className="text-muted-foreground">Or create a new group to share with your friends:</p>
                <Button>Create Group</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
