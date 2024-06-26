import React, { useState } from 'react'
/* eslint-disable */
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

interface msgs {
    id: number,
    image: string,
    desc: string
  }

const msgs = [
    {
        
        image: '/img/pfp.webp',
        desc: 'ברוך הבא למועדון של קופי סופר'
    },
    {
        
        image: '/img/golds.jpg',
        desc: 'שתף אותנו למשפחה ולחברים ותזקו בפרסים שווים'
    },
    {
        
        image: '/img/gift.gif',
        desc: 'קיבלת מתנה שווה! ממש אותה עכשיו'
    },
]

const Notifications = () => {

    
  return (
    <div className="flex flex-col" >
        {msgs.map((msg, i) => (
        <Card className="flex flex-row-reverse justify-between mx-5 my-3 " key={i}>
            <CardHeader className="flex-row gap-4  items-center">
              <Avatar className='m-auto'>
                <AvatarImage src={msg.image} alt="recipe img" />
                <AvatarFallback>
                card 1
                </AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className='m-auto pt-4 text-right'>
              <p>{msg.desc}</p>
            </CardContent>

          </Card>
          ))}
    </div>
  )
}

export default Notifications