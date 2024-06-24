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
  
  import Image from "next/image"
  
  import { CiLock } from "react-icons/ci";
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
  import { stagger, useAnimate, animate } from "framer-motion";
  
  import { Button } from "@/components/ui/button"
  import styles from './button.module.css'

const bgImage = '/img/giftss.jpg'

const cardData = [
  { id: 1, src: '/img/milka.webp', alt: 'Picture of the author', title: 'קופון הנחה למילקה'  },
  { id: 2, src: '/img/bamba.jpg', alt: 'Picture of the author', title: 'מארז במבה מתנה' },
  { id: 3, src: '/img/eggs.jpg', alt: 'Picture of the author', title: "הנחה 10% על מארז ביצים" },
  { id: 4, src: '/img/jackies.jpg', alt: 'Picture of the author', title: 'View 69% הנחה על גק דניאלס' },
];



const GiftCard = () => {


  const [confirm, setconfirm] = useState(false)
  const [load, setLoad] = useState(false)



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





  const [redeemed, setRedeemed] = useState(false)
  const redeemGift = () => {
    console.log('yeettt')

    setTimeout(() => setRedeemed(true),255)
  }


  const [select, setSelect] = useState<number | null>(null)

  const handleCardClick = (id: number) => {
    setSelect(id);
  };

  return (
    <div>
      {redeemed ? <></> : <>
        <Drawer>
        
        
          <Card className="flex flex-row-reverse  m-5 " style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
           <DrawerTrigger asChild className=''>
                <CardHeader className=" pt-6 h-full flex flex-col justify-start gap-3">
                <h1 className='text-right text-3xl font-black'>קיבלת מתנה</h1>
                
                  
                    <Button variant='secondary' className=' mt-3 w-[80%] ml-[2em]' >לבחירה</Button>
                
                
                </CardHeader>
              </DrawerTrigger>
             
            </Card>
          

            <DrawerContent>
              <DrawerHeader className="h-[40em]">
                <div className="flex flex-col text-center">
                <div className=' mx-auto pb-4 '>
                      <Image
                          src="/img/gift.gif"
                          width={80}
                          height={80}
                          alt="Picture of the author"
                      />
                  </div>
                  <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                </div>

                {confirm ? 
                
                  <>
                    <div className='mx-auto mt-9 '>
                            <Image
                                src="/img/qr.png"
                                width={200}
                                height={100}
                                alt="Picture of the author"
                            />
                    </div>
                    <div>  
                          <h2>סרוק את הברקוד בצג שבקופה</h2>
                          <DrawerDescription>

                          הקופון ניתן למימוש בכל עת
                          </DrawerDescription>
                      
                      </div>

                  </>

                  :
                  <>
                    {load ? 
                      
                        <>
                        <div className='mx-auto mt-9 '>
                            <Image
                              
                                src="/img/loadin.gif"
                                width={200}
                                height={100}
                                alt="Picture of the author"
                            />
                        </div>
                        </>
                      
                      : 

                    <div className='mx-2 mt-2 mb-1'>

                      
                        <div className="grid grid-cols-2 gap-3  ">

                        {cardData.map((card) => (
                          <Card key={card.id} 
                          className={`flex flex-col justify-between items-center m-2 cursor-pointer ${
                            select === card.id ? 'border-2 border-yellow-500' : ''
                          }`}
                          onClick={() => handleCardClick(card.id)}
                          >
                            <CardContent className="w-[90%] p-2">
                              <div className='min-h-[8em]'>
                                <Image src={card.src} width={200} height={100} alt={card.alt} />
                              </div>
                              <div>
                                <h3>{card.title}</h3>
                              </div>
                            </CardContent>
                          </Card>
                        ))}

                        </div>
                      
                    </div>
                    }
                  </>}
              </DrawerHeader>

                  
              <DrawerFooter className='mb-3'> 
                {confirm ? 
                
                <div className='mx-auto text-center mb-5' >
                 <DrawerClose> <Button onClick={redeemGift} className=''>Close</Button></DrawerClose>
                </div >
                
                :
                <>
                

                { load ? <>
                  <div className=" mt-[4.6em] mb-3 text-center">
                    <h3>ניתן לבחור עד התאריך 6.9.2030</h3>
                </div>
                </> 
                
              : 
              <>
                
                <div className=' mx-auto mb-7'>
                  {select !== null ? <>
                    

                   <div ref={scope} className='relative' onClick={onButtonClick}>
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
                    



                </> : <>
                <div className={styles.progBtnG}>
                  <div className={styles.iconWrap}>
                      <CiLock  className={styles.lockIcon} />
                  </div>
                </div>
                </>}
                </div>
                <div className="mb-3 text-center">
                    <h3>ניתן לבחור עד התאריך 6.9.2030</h3>
                </div>

                  </>}
                  </>}
              </DrawerFooter>
         
            </DrawerContent>
        
      </Drawer>
      </>}
    </div>
  )
}

export default GiftCard