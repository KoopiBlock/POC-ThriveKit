/* eslint-disable */

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

interface rewards {
    id: number,
    image: string,
    desc: string
  }

const rewards = [
    {
      
        image: '/img/milka.webp',
        desc: 'קופון הנחה למילקה'
    },
    {
        
        image: '/img/bamba.jpg',
        desc: 'מארז במבה מתנה'
    },
    {
        
        image: '/img/eggs.jpg',
        desc: "הנחה 10% על מארז ביצים" ,
    },
    
]

const MyCoupons = () => {

    
  return (
    <>
    <div className='text-center font-black'>
      <h1>ההטבות שלך</h1>
    </div>
      <div className="grid grid-cols-2 gap-4 m-5" >
          {rewards.map((msg, i) => (

            <>
            <Drawer>
              <Card  className="flex flex-col justify-between items-center " key={i}>
              <CardHeader className="flex-row gap-4 ">
                <div>
                  <CardTitle className='text-right'>{msg.desc}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className='w-full p-2'>
                <div>
                    <Image
                        src={msg.image}
                        width={600}
                        height={500}
                        alt="Picture of the author"
                    />
                </div>
            </CardContent>
              <CardFooter className="flex justify-between mt-4">
                <DrawerTrigger asChild><Button variant='default' >ממש עכשיו!</Button></DrawerTrigger>
              
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
    </>
  )
}

export default MyCoupons