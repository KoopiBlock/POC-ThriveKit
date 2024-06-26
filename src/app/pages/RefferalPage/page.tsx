/* eslint-disable */
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'

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

  import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

  
  import { GoLink } from "react-icons/go";
  import { MdOutlineSms } from "react-icons/md";

  import { PiWhatsappLogoThin, PiTelegramLogoThin, PiFacebookLogoThin, PiInstagramLogoThin   } from "react-icons/pi";
import { Separator } from '@/components/ui/separator'



const RefferalPage = () => {
  return (
    <Drawer>
        <div>
            <div>
                <Image
                    src={'/img/share.avif'}
                    width={600}
                    height={500}
                    alt="Picture of the author"
                />
            </div>
            <div>

            <div className='text-right mx-3 my-4'>
                <h1>חבר מביא חבר</h1>
            </div>
                <div className='text-right mx-3 my-3'>
                    <p>
                    רוצים לזכות בפרסים שווים וגם לעזור לחברים שלכם לזכות בהם? זה פשוט! שתפו את הלינק האישי שלכם עם חברים, ואם הם יצטרפו, גם אתם וגם הם תקבלו פרס מדליק. זה פשוט כמו זה - חבר מביא חבר וזוכים יחד!
                    </p>
                </div>
                <div className='text-center my-9'>
    
                        <DrawerTrigger asChild>
                            <Button variant='default' className='px-9 py-4'>שתף עכשיו</Button>
                        </DrawerTrigger>
                </div>

                <DrawerContent className="h-[45em]">
              <DrawerHeader>
                <div className="text-center">
                  <DrawerTitle>שתף את הלינק וזכו בפרסים</DrawerTitle>
                </div>
                <div >
                  <div className="flex flex-col items-center text-center ">
                    <div className='flex flex-wrap justify-center'>
                        <PiWhatsappLogoThin className='text-5xl mx-6 my-6' />
                        <PiFacebookLogoThin className='text-5xl mx-6 my-6' />
                        <PiTelegramLogoThin className='text-5xl mx-6 my-6' />
                        <PiInstagramLogoThin className='text-5xl mx-6 my-6' />

                    </div>
                  </div>
                  <DrawerDescription className='mt-2 mx-auto  max-w-[80%]'>
                   <Separator className='my-7'/>
                    <Image
                        src={'/img/share.avif'}
                        width={600}
                        height={500}
                        alt="Picture of the author"
                        />
                    <Separator className='my-7'/>
                  </DrawerDescription>
                </div>
              </DrawerHeader>
              <DrawerFooter>
                <div className=" text-center w-[80%] mx-auto ">
                    <div className='flex flex-wrap  mb-[5em] justify-between'>
                        <div>
                            <MdOutlineSms className='text-5xl mx-9 my-3' />
                            <p>link & text</p>
                        </div>
                        <div>
                            <GoLink className='text-5xl mx-9 my-3'/>
                            <p>link & text</p>
                        </div>

                    </div>
                </div>
               
              </DrawerFooter>
            </DrawerContent>

            </div>
        </div>
    </Drawer>
  )
}

export default RefferalPage