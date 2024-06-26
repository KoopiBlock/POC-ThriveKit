/* eslint-disable */

import React, { useState } from 'react'
import styles from './style.module.css';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';


const navItems = [
  {
    title: "דף הבית",
    href: "/",
  },
  {
    title: "חדשות",
    href: "/pages/Notifications",
  },
  {
    title: "הפרופיל שלי",
    href: "/pages//Account",
  },
  {
    title: "ההטבות שלי",
    href: "/pages/MyCoupons",
  },
  {
    title: "אתגרים",
    href: "/pages/Settings",
  },
]

export default function index() {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className={styles.nav}>           
                    {
                      navItems.map( (data, index) => {
                        return <Link key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}></Link>
                      })
                    }
            </div>
            
        </div>
        <Curve />
    </motion.div>
  )
}