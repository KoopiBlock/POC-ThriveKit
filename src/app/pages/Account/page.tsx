import React, { useState } from 'react'
import Link from 'next/link'

import { GiCoins } from "react-icons/gi";
import { RiHandCoinFill } from "react-icons/ri";
import { AiOutlineStock } from "react-icons/ai";

import Image from 'next/image';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import RewardsCard from "@/components/Cards/RewardsCard"


import { FaCrown } from "react-icons/fa";

const Account = () => {


  const rewardsCards = [
    {
      id: 0,
      image: '/img/milka.webp',
      desc: 'קופון הנחה למילקה' ,
      price: '69',
      available: 'redeem',
  },
  {
      id: 1,
      image: '/img/cocacolas.jpg',
      desc: '20% הנחה לשישית קולה' ,
      price: '100',
      available: 'inProgress',
  },
  {
      id: 2,
      image: '/img/jackies.jpg',
      desc: '69% הנחה על גק דניאלס' ,
      price: '420',
      available: 'inProgress',
  },
  {
    id: 3,
    image: '/img/cigs.jpg',
    desc: ' קופסת סיגריות חינם ' ,
    price: '300',
    available: 'inProgress',
  },
]


const bgImage = '/img/chars.png'
    
  return (
    <div className="flex flex-col" >
      <div className="flex flex-col justify-between mx-5">
      <Card  className="flex flex-col justify-between ">
            <CardHeader className="flex-row gap-4  items-center">
              <Avatar className=" w-20 h-20">
                <AvatarImage src={`/img/pfp.webp`} alt="recipe img" />
                <AvatarFallback>
                card 1
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="flex flex-row">
                  <CardTitle>דרגת זהב </CardTitle>
                < FaCrown className="text-amber-400 text-2xl ml-3"/>
                </div>
                <CardDescription>69 / 100 :לדרגה באה</CardDescription>
              </div>
            </CardHeader>
            <CardContent className='mb-2'>
              <Progress value={69} />
            </CardContent>
              
            </Card>
        </div>
        <div>
          <div className="grid grid-cols-3 gap-3 m-5">
            <Card>
            <div className="flex flex-col justify-center items-center">   
                  <div className="m-auto mt-3">
                        <Image
                            src="/img/coupon.webp"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                    </div>
                    <p className='mt-3 font-bold'>4</p>
                    <p className='text-sm'> קופונים שנוצלו</p>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col justify-center items-center">   
                  <div className="m-auto mt-3">
                        <Image
                            src="/img/coinz.webp"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                    </div>
                    <p className='mt-3 font-bold'>69</p>
                    <p className='text-sm'> מטבעות שנצברו</p>
              </div>
            </Card>
            <Card>
            <div className="flex flex-col justify-center items-center mb-3">   
                  <div className="m-auto mt-3">
                        <Image
                            src="/img/card.webp"
                            width={40}
                            height={40}
                            alt="Picture of the author"
                        />
                    </div>
                    <p className='mt-3 font-bold'>15</p>
                    <p className='text-sm'> קניות שבצעו</p>
              </div>
            </Card>
          </div>
        </div>
        <div className='mx-5 my-2'>
          <Card style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
            <CardHeader>
              <CardTitle className='text-right text-lg font-extrabold'>שתפו את המועדון עם חברים שלכם וקבלו פרסים </CardTitle>
            </CardHeader>
            <CardContent>
             
            </CardContent>
          </Card>
        </div>

        <div className='mx-5 my-2'>
          <Carousel className="w-full max-w-[420px] mx-2 my-3" 
            opts={{
              align: "end",
              
            }}
          >
            <div className=" flex flex-row-reverse justify-between text-right mx-5">
              <h3 className="text-right font-black pt-2 pb-2 text-2xl">היסטוריית ההטבות</h3>
              <Link href='/pages/AllRewards'><p className="text-right">{`<`} להכל</p></Link>
            </div>
            <CarouselContent>
              {rewardsCards.map((card, i) => (
                <RewardsCard
                  key={i}
                  available={'inProgress'}
                  id={card.id}
                  image={card.image}
                  desc={card.desc}
                  price={card.price}

                />
              ))}
            </CarouselContent>
          
          </Carousel>
        </div>
    </div>
  )
}

export default Account