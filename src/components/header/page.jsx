'use client'
import styles from './style.module.css'
import { useEffect, useState,  } from 'react';
import Nav from './nav/page';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; 
import Link from 'next/link';

import { FaBell } from "react-icons/fa";
import { RiCopperCoinFill } from "react-icons/ri";
import { Badge } from "@/components/ui/badge"

export default function Home() {

  const [isActive, SetIsActive] = useState(false);
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) SetIsActive(false)
  }, [pathname])

  return (
    <>
    <div className={styles.main}>
      <div className={styles.heady}>
       <Link href='/pages/Notifications'><FaBell className={styles.bellIcon}/></Link> 
       <Badge variant="outline" className='text-xl font-black pl-3 '>69 <RiCopperCoinFill className='text-amber-400 pl-3 text-4xl' /></Badge>
      </div>
      <div className={styles.header}>
        <div onClick={() => {setIsActive(!isActive)}} className={styles.button}>
          <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
        </div>
    </div>

    </div>
    <AnimatePresence mode="wait">
      {isActive && <Nav />}
    </AnimatePresence>
    </>
  )
}
