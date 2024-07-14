"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
export function Group() {
  const router = useRouter();
  return (
    <div>
      <div className="h-100% w-100% flex items-center justify-center bg-stone-100">
        <section className="container mx-auto my-8 px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="p-11">
              <img
                src="shoes1.jpg"
                alt="Product Image"
                width={200}
                height={200}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Comfortable casual shoes</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 1200</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button onClick={() => router.push('/joingroup')} variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="watch1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Women Analogue Watch</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 2200</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="sweatshirt1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Women Printed Sweatshirt</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 1000</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>


            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="tshirt1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Cotton Lounge T-shirt</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 600</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>

{/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="cargo1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Men Straight Cargo Style</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 900</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>
            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="shirt1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Stiped Casual Shirt</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 850</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>


            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="top1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Printed Cotton peplum top</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 950</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>


            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="kurti1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Printed kurti</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 550</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>


            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="sandal1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Women Glam Party Sandals</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 999</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>


            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="crocs1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Unisex Crocs</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 2210</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>


            {/* Product 2 */}
            <div className="p-11">
            <div>
              <img
                src="sunglasses1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">unisex Round Sunglasses</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 710</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>

            {/* Product 3 */}
            <div className="p-11">
            <div>
              <img
                src="bag1.jpg"
                alt="Product Image"
                width={280}
                height={300}
                className="w-full h-auto rounded-lg object-cover"
              />
              <div className="mt-4 space-y-6">
                <div>
                  <h1 className="text-xl sm:text-[15px] md:text-[23px] font-bold">Side Striped Hobo Bag</h1>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-[15px] md:text-[22px] font-bold">Rs 3500</span>
                  <div className="flex items-center justify-between space-x-4">
                    <Button variant="outline">Add to Cart</Button>
                    <Button>Create Group</Button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
