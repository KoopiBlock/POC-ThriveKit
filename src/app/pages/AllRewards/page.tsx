'use client'
import React, { useState } from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import GiftCard from '@/components/Cards/GiftCard'
import { Separator } from "@/components/ui/separator"
import { RiCopperCoinFill } from "react-icons/ri";
import ButtonSq from '@/components/Cards/ButtonSq'

interface rewards {
    id: number,
    image: string,
    desc: string
  }

const rewards = [
      {
        id:0,
        image:'/img/milka.webp',
        desc:'קופון הנחה למילקה',
        price:'69',
        status:'redeem',
    },
    {
        id:1,
        image:'/img/cocacolas.jpg',
        desc:'20% הנחה לשישית קולה',
        price:'100',
        status:'inProgress',
    },
    {
        id:2,
        image:'/img/jackies.jpg',
        desc:'69% הנחה על גק דניאלס',
        price:'420',
        status:'inProgress',
    },
    {
      id: 3,
      image:'/img/cigs.jpg',
      desc:'קופסת סיגריות חינם ',
      price:'300',
      status:'inProgress',
    },
]

const AllRewards = () => {

    
  return (
    <div>
        <div>
          <GiftCard />
      </div>
      <div className="grid grid-cols-2 gap-4 m-5" >
          {rewards.map(msg => (

            <>
            <Drawer>
            <Card  className="flex flex-col justify-between m-2 max-w-[180px]">
            <CardHeader className=" items-center p-3 ">
                  <div>
                    <Image
                        src={msg.image}
                        width={600}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </CardHeader>
            <Separator className="" />
            <CardContent className='w-full p-2'>
                <div className='text-right'>
                  <div className='flex flex-row-reverse'>
                  <p className='text-lg font-extrabold mt-[1px]'> {msg.price} </p>
                  <RiCopperCoinFill className='text-amber-400 pr-2 text-3xl' />
                  </div>
                </div>
                <div className='text-right text-3xl mt-1'>
                  <CardTitle className='text-right text-lg'>{msg.desc}</CardTitle>
                </div>
                
            </CardContent>
            
            <CardFooter className="flex justify-between pb-3 px-7 ">
                <ButtonSq available={msg.status}/>
              
              </CardFooter>
            </Card>


            <DrawerContent className="h-[45em]">
            <DrawerHeader>
              <div className="text-center">
                <DrawerTitle className='text-3xl'>{msg.desc}</DrawerTitle>
              </div>
              <div>
                <div className="flex flex-col items-center text-center mt-[4em]">
                  <Card className='mt-8'>
                    <CardContent className='w-[100%] p-2'>
                      <div className=''>
                          <Image
                            
                              src="/img/qr.png"
                              width={200}
                              height={100}
                              alt="Picture of the author"
                          />
                      </div>
                      
                    </CardContent>
                  </Card>
                </div>
                <DrawerDescription className='mt-8'>
                  <h2>סרוק את הברקוד בצג שבקופה</h2>
                </DrawerDescription>
              </div>
            </DrawerHeader>
            <DrawerFooter className="mb-[3em]">
                <div className="mb-[5em] text-center">
                  <h3>ניתן לבחור עד התאריך 6.9.2030</h3>
                </div>
              <DrawerClose>
                <Button variant="outline" className='mb-[6em] '>ביטול</Button>
              </DrawerClose>
            </DrawerFooter>
            </DrawerContent>
        </Drawer>
        </>
            ))}
      </div>
  </div>
  )
}

export default AllRewards