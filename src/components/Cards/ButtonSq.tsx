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


import { CiLock } from "react-icons/ci";

import { Badge } from "@/components/ui/badge"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

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

import styles from './button.module.css'


type RewardsCardProps = {
    available: string;
  };

const ButtonSq = ({ available }:RewardsCardProps) => {

    const [avail, setAvail] = useState(false);
    const [redeem, setRedeem] = useState(false);
    const [inProgress, setInProgress ] = useState(false);

    const [isActive, setIsActive] = useState(false);


    const [confirm, setconfirm] = useState(false)
    const [load, setLoad] = useState(false)

   
  
    useEffect(() => {
      if (available === 'redeem') {
        setAvail(false);
        setInProgress(false);
        setRedeem(true)
  
      } else if (available === 'inProgress') {
        setAvail(false);
        setInProgress(true);
        setRedeem(false)
  
      } else if (available === 'available') {
        setAvail(true);
        setInProgress(false);
        setRedeem(false)
  
      } else {
        setAvail(false);
        setInProgress(false);
        setRedeem(false)
  
      }
    }, [available]);


    



// framer motion animations!

const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  
type AnimationSequence = Parameters<typeof animate>[0];




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

const [isVisible, setIsVisible] = useState(false);

const loadinShit = () => {
    setLoad(true)
}

const stopNConfirm = () => {
    setconfirm(true)
    setLoad(prev => !prev)
    console.log('stop')

    setIsVisible(true)
}

const onYesClick = () => {
    console.log('yee')

    setTimeout(loadinShit,1000)

    setTimeout(stopNConfirm,2000)

   
}






  return (
    <div>
        <Drawer>

            {redeem ?

                <DrawerTrigger>
                <div ref={scope}>
                    <div className={`${styles.redBtn} ${isActive ? styles.active : ''}`}  onClick={onButtonClick}>
                        <div className={styles.txtWrap}>
                            <h3 className={styles.btnTxt}>המרה לקופון</h3>
                        </div>
                        <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 z-10 block"
                        >
                        {Array.from({ length: 20 }).map((_, index) => (
                            <svg
                            className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                            key={index}
                            viewBox="0 0 122 117"
                            width="10"
                            height="10"
                            >
                            <path
                                className="fill-amber-400"
                                d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                            />
                            </svg>
                        ))}
                        </span>
                    </div>
                </div> 
                </DrawerTrigger>
           
 
            :  <></> }

            {inProgress ?
            
            <>
            <div className={styles.progBtn}>
                <div className={styles.iconWrap}>
                     <CiLock  className={styles.lockIcon} />
                </div>
            </div>
            </> 

            : <></> }


            <DrawerContent className="h-[45em]">
              <DrawerHeader>
                <div className="text-center ">
                  <DrawerTitle className='text-2xl'>קופון למילקה</DrawerTitle>
                </div>
                { load ? 
                    
                    <div className='mx-auto mt-9 '>
                        <Image
                          
                            src="/img/loadin.gif"
                            width={200}
                            height={100}
                            alt="Picture of the author"
                        />
                    </div>
                
                
                :
                    <div>
                    <div className="flex flex-col items-center text-center">
                        <Card className='mt-8'>
                        <CardContent className='w-[100%] p-2'>

                    

                        <div className='mt-5'>
                            <Image
                            
                                src={`/img/${confirm ? 'qr.png':'milka.webp'}`}
                                width={200}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>  
                        
                        
                            <div className='text-center text-3xl mt-5'>
                            
                        </div>
                            <div className='text-right'>
                            
                            </div>
                        
                            
                        </CardContent>
                        </Card>
                    </div>
                  <DrawerFooter className='mt-7'>
                    {confirm ? 
                    
                    <>
                        <h2>סרוק את הברקוד בצג שבקופה</h2>
                        <DrawerDescription>

                        הקופון ניתן למימוש בכל עת
                        </DrawerDescription>
                    
                    </>
                    
                    : 
                    
                    <>
                        <div>
                            <h2>האם אתה בטוח?</h2>
        
                        <div className='flex flex-row-reverse justify-center mt-5'>
                            <p className='text-lg font-extrabold mt-[1px]'> 69 אתה תחוייב ב</p>
                            <RiCopperCoinFill className='text-amber-400 pr-2 text-3xl' />
                        </div>
                        </div>
                        <div className='flex flex-row justify-between w-[50%] mx-auto mt-8 mb-6'>
                        <div ref={scope}>
                            <div className='relative' onClick={onButtonClick}>
                            <Button className=' font-black px-[1.2rem]' onClick={onYesClick}>כן</Button>
                                <span
                                aria-hidden
                                className="pointer-events-none absolute inset-0 z-10 block"
                                >
                                    {Array.from({ length: 20 }).map((_, index) => (
                                        <svg
                                        className={`absolute left-1/2 top-1/2 opacity-0 sparkle-${index}`}
                                        key={index}
                                        viewBox="0 0 122 117"
                                        width="10"
                                        height="10"
                                        >
                                        <path
                                            className="fill-amber-400"
                                            d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"
                                        />
                                        </svg>
                                    ))}
                                </span>
                                </div>
                            </div>
                            <DrawerClose><Button className=' font-black'>לא</Button></DrawerClose>
                            </div>
                        
                        <DrawerDescription>
                            <p>הקופון ניתן למימוש בכל עת</p>
                        </DrawerDescription>
                        
                    </>
                    
                    }
                    
                  </DrawerFooter>
                </div>
                }
              </DrawerHeader>
            
            </DrawerContent>



        </Drawer>
    </div>
  )
}

export default ButtonSq