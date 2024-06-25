
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

const bgImage = '/img/golds.jpg'


import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

import RewardsCard from "@/components/Cards/RewardsCard"
import Link from "next/link"
import { useState } from "react"
import MainCard from "@/components/Cards/MainCard"
import GiftCard from "@/components/Cards/GiftCard"
import CoinsBtn from "@/components/Cards/CoinsBtn"


interface Recipe {
  Title: string,
  image: string,
  time: number,
  desc: string,
  vegan: boolean,
  id: string
}

import { FaCrown } from "react-icons/fa";

async function getRecipes(): Promise<Recipe[]>  {
  const result = await fetch('http://localhost:5000/recipes')

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()
}

 
export default async function Home() {

  const recpies = await getRecipes()

  

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


  return (
    <main >
      <div className="mx-5">
          <div className="text-right mx-1 my-3">
            <h1> כיף שחזרת אלינו דניאל </h1>
          </div>
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
            <CardContent>
              <Progress value={69} />
            </CardContent>
            <CardFooter className="flex justify-around">
              <div className="flex flex-col justify-center items-center">
                <CoinsBtn />
              </div>
              <Link href='/pages/MyCoupons'>
                <div className="flex flex-col justify-center items-center">
                  
                <div className="m-auto">
                      <Image
                          src="/img/coupon.webp"
                          width={40}
                          height={40}
                          alt="Picture of the author"
                      />
                  </div>
                  
                  <p>הקופונים שלי</p>
                
                </div>
              </Link>
            </CardFooter>
          </Card>
      </div>

      <GiftCard />

      <div>
        <div className=" flex flex-row-reverse justify-between text-right mx-5">
          <h1 className="text-right">הטבות</h1>
          <Link href='/pages/AllRewards'><p className="text-right">{`<`} לכל ההטבות </p></Link>
        </div>
      
          <Carousel className="w-full max-w-[420px] mx-2 my-3" 
            opts={{
              align: "end",
              
            }}
          >
            <CarouselContent>
              {rewardsCards.map((card, i) => (
                <RewardsCard
                  key={i}
                  available={card.available}
                  id={card.id}
                  image={card.image}
                  desc={card.desc}
                  price={card.price}

                />
              ))}
            </CarouselContent>
          
          </Carousel>
        </div>
        <div>

          <div className="text-right mx-5">
            <h1>מבצעים</h1>
          </div>
          
          <div className="grid grid-cols-2 gap-3 m-5">
            <Link href='/pages/RefferalPage'>
              <MainCard />
            </Link>
            <div>
        
            <Card  className="flex flex-col justify-between  h-[12em] " style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
                <Link href='/pages/Settings'>
                  <CardContent className='w-full p-2 text-right font-extrabold '>
                      <div>
                          <CardTitle className='text-black'>אתגרים שווים</CardTitle>
                      </div>
                      <div className='w-[100%] h-[100px]  rounded-s ' />
                  </CardContent>
                </Link>
            </Card>
          </div>
          </div>
          

        </div>
    </main>
  );
}
