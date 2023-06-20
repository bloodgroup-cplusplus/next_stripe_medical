'use client'
import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProductCard(props) {
    const{product} = props
    const {id:price_id, unit_amount:cost,product:productInfo} = product
    const {name,description} = productInfo

    // link is important for seo 


    const router= useRouter()

    function onProductClick()
    {
        router.push('/product?price_id='+ price_id)
    }






  return (
    <div onClick={onProductClick} className='flex flex-col shadow bg-white hover:shadow-lg cursor-pointer'>
        <img className='w-full h-full object-cover' src={productInfo.images[0]} alt={name}/>
        <div className='flex flex-col gap-2 p-4'>
            <div className='flex items-center justify-between'>
                <h3>{name}</h3>
                <p>Rs {cost/100}</p>
            </div>
            <p className='text-sm'>{description}</p>
        </div>
    </div>
  )
}
