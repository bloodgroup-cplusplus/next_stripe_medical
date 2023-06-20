import ProductCard from '@/ProductCard';
import Image from 'next/image'
import Stripe from 'stripe'
async function getStripeProducts()
{
  const stripe= new Stripe(process.env.STRIPE_SECRET ?? '',{
    apiVersion:'2022-11-15'
  })
  const res = await stripe.prices.list({
    expand:['data.product']
  })
  const prices = res.data;
  return prices

}

export  default async function Home() {
  console.log("hellow")
  const products= await getStripeProducts()
  console.log(products)
  return (
    <main className="p-4">
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
      {products.map((product,productIndex)=>{

        return (
        <ProductCard key={productIndex} product={product}/>
        )

      })}
      </div>
    </main>
  )
}
