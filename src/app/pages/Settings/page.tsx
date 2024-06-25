import React, { useState } from 'react'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { RiCopperCoinFill } from "react-icons/ri";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from 'next/image'

interface msgs {
    id: number,
    image: string,
    title: string,
    desc: string,
    reward: string,
    progress: string,
  }

const msgs = [
    {
        id: 0,
        image: '/img/bamba.jpg',
        desc: 'קנה 5 מארזי במבמה וקבל פרס',
        reward: '40',
        progress: '2 / 5',
        title: 'מלך המאנצים',
    },
    {
        id: 1,
        image: '/img/milka.webp',
        desc: 'קנה 10 מארזי מילקות וקבל פרס',
        reward: '100',
        progress: '5 / 10',
        title: 'אלוף השוקולד',
    },
    {
        id: 2,
        image: '/img/cigs.jpg',
        desc: ' קנה 20 סיגריות וקבל פרס',
        reward: '250',
        progress: '9 / 20',
        title: 'אלוף הסיגריות',
    },
]

const Settings = () => {

    
  return (
    <div className="flex flex-col" >
        {msgs.map(msg => (
        <Card className="flex flex-col mx-5 my-3 " key={msg.id}>
            <div className='flex flex-row-reverse '>
            <CardHeader className="flex-row gap-4  items-center">
              <div>
                      <Image
                          src={msg.image}
                          width={70}
                          height={70}
                          alt="Picture of the author"
                      />
                </div>
            </CardHeader>
            <CardContent className='text-right pt-4 min-w-[70%] '>
              <div className='flex flex-col'>
                <div className='flex flex-row-reverse justify-between'>
                  <p className='text-2xl font-extrabold' >{msg.title}</p>
                  <p className='font-bold text-xl text-gray-500' >{msg.progress}</p>
                  
                </div>
                <p className=' text-sm text-gray-400 ' >{msg.desc}</p>
              </div>
              <div className='flex flex-row justify-end '>
                <RiCopperCoinFill className='text-amber-400 pr-2 text-3xl mt-[0.5rem]' />
                <p className='mt-3 font-bold'>{msg.reward}</p>
              </div>
            </CardContent>
            </div>
           

          </Card>
          ))}
    </div>
  )
}

export default Settings