import React from 'react'
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
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

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

const bgImage = '/img/chars.png'

const MainCard = () => {
    return (
      <div>
        
            <Card  className="flex flex-col justify-between items-center h-[12em]" style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover' }}>
                    
                <CardContent className='w-full p-2 text-right '>
                    <div>
                        <CardTitle className='text-black'>חבר מביא חבר </CardTitle>
                    </div>
                    <div className='w-[100%] h-[100px]  rounded-s ' />
                </CardContent>
            </Card>
      </div>
    )
  }
  
  export default MainCard