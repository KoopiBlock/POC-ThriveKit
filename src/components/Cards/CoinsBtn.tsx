import React from 'react'

import Image from "next/image"

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

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Button } from "@/components/ui/button"

const CoinsBtn = () => {
  return (
    <>
    <Drawer>
        <DrawerTrigger asChild>
            <div className="flex flex-col justify-center items-center">
                        <div className="m-auto ml-[15px]">
                            <Image
                                src="/img/coinz.webp"
                                width={40}
                                height={40}
                                alt="Picture of the author"
                            />
                        </div>
                        <p>קבל מטבעות</p>
            </div>
        </DrawerTrigger>
        <DrawerContent className="h-[45em]">
              <DrawerHeader>
                <div className="text-center">
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                </div>
                <div>
                  <div className="flex flex-col items-center text-center">
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
                  <DrawerDescription className='mt-7'>
                    <h2>סרוק את הברקוד בצג שבקופה</h2>
                  </DrawerDescription>
                </div>
              </DrawerHeader>
              <DrawerFooter>
                  <div className="mb-3 text-center">
                    <h3>ניתן לבחור עד התאריך 6.9.2030</h3>
                  </div>
                <DrawerClose>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>

    </Drawer>
    </>
  )
}

export default CoinsBtn