"use client"

import React, { useState, useEffect } from 'react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import Image from 'next/image'
  
import { RiCopperCoinFill } from "react-icons/ri";
import { FaLock } from "react-icons/fa";

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

import { stagger, useAnimate, animate } from "framer-motion";

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
import ButtonC from './Button';
import ButtonSq from './ButtonSq';

type RewardsCardProps = {
  available: string;
  id: number,
  image: string,
  desc: string,
  price: string,
};






//<Button variant='secondary' className='mt-[1.41rem] ' >קנה עכשיו</Button>

const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

type AnimationSequence = Parameters<typeof animate>[0];

const RewardsCard = ({ available, image, id, desc, price }:RewardsCardProps) => {

  
  const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const onButtonClickDelay = async () => {
    await delay(1000); // Delay for 1000 milliseconds (1 second)
    // Logic to open the drawer goes here
    // Example:
    // drawer.open();
  };


  const [avail, setAvail] = useState(false);
  const [redeem, setRedeem] = useState(false);
  const [inProgress, setInProgress ] = useState(false);

  useEffect(() => {
    if (available === 'redeem') {
      setAvail(prevState => !prevState);
      setInProgress(prevState => !prevState);
      setRedeem(true)

    } else if (available === 'inProgress') {
      setAvail(prevState => !prevState);
      setInProgress(true);
      setRedeem(prevState => !prevState)

    } else if (available === 'available') {
      setAvail(true);
      setInProgress(prevState => !prevState);
      setRedeem(prevState => !prevState)

    } else {
      setAvail(prevState => !prevState);
      setInProgress(prevState => !prevState);
      setRedeem(prevState => !prevState)

    }
  }, [available]);

  const [scope, animate] = useAnimate();

  const onButtonClick = () => {
    const sparkles = Array.from({ length: 20 });
    const sparklesAnimation: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: randomNumberBetween(-100, 100),
        y: randomNumberBetween(-100, 100),
        scale: randomNumberBetween(1.5, 2.5),
        opacity: 1,
      },
      {
        duration: 0.4,
        at: "<",
      },
    ]);

    const sparklesFadeOut: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        opacity: 0,
        scale: 0,
      },
      {
        duration: 0.3,
        at: "<",
      },
    ]);

    const sparklesReset: AnimationSequence = sparkles.map((_, index) => [
      `.sparkle-${index}`,
      {
        x: 0,
        y: 0,
      },
      {
        duration: 0.000001,
      },
    ]);

    animate([
      ...sparklesReset,
      [".letter", { y: -32 }, { duration: 0.2, delay: stagger(0.05) }],
      ["button", { scale: 0.8 }, { duration: 0.1, at: "<" }],
      ["button", { scale: 1 }, { duration: 0.1 }],
      ...sparklesAnimation,
      [".letter", { y: 0 }, { duration: 0.000001 }],
      ...sparklesFadeOut,
    ]);
  };



  return (
    <div>
      <Drawer>
        <Card  className="flex flex-col justify-between m-2 max-w-[180px] ">
            <CardHeader className=" items-center p-3 ">
                  <div>
                    <Image
                        src={image}
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
                  <p className='text-lg font-extrabold mt-[1px]'> {price} </p>
                  <RiCopperCoinFill className='text-amber-400 pr-2 text-3xl' />
                  </div>
                </div>
                <div className='text-right text-3xl mt-1 min-h-[2em]'>
                  <CardTitle className='text-right text-lg'>{desc} </CardTitle>
                </div>
                
            </CardContent>
            
            <CardFooter className="flex justify-between pb-3 px-7 ">

              {redeem ? 
              <>
                <ButtonSq  available='redeem'/>
              </>
              : 
              <>
              </>
              }

              {avail ? 
              
              <ButtonSq available='redeem'/>
              
              
              : 
              
              <>
              </>
              
              }

            {inProgress ? 
              
              <>
               <ButtonSq  available='inProgress'/>
              </> 
              
              
              : 
              
              <>
              </>
              
              }

            </CardFooter>
           
          </Card>

          
        </Drawer>
          
    </div>
  )
}

export default RewardsCard