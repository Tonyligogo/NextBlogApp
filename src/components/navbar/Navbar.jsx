'use client'
import Link from 'next/link'
import React from 'react'
import styles from "./page.module.css"
import logo from '../../../public/logo.svg'
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/"
  },
  {
    id: 2,
    title: "Blogs",
    url: "/blog"
  },
  {
    id: 3,
    title: "About",
    url: "/about"
  },
  {
    id: 4,
    title: "Contact",
    url: "/contact"
  },
  {
    id: 5,
    title: "Dashboard",
    url: "/dashboard"
  }
]; 

function Navbar() {
  const {data: session} = useSession()
  const location = usePathname()
  const paths = ['login', 'register']
  if(paths.some(path => location.includes(path))){
    return <Image src={logo} alt='logo' width={100} height={40}/>
  }

  return (
    <div className={styles.nav}>
      <Link href="/" className={styles.logo}> <Image src={logo} alt='logo' width={100} height={40}/> </Link>
      <div className={styles.links}>
        {links.map((link)=>(
          <Link key={link.id} href={link.url}>{link.title}</Link>
        ))}
        {session && 
          <span className={styles.user}>
            <span>{session.user.name}</span>
            <Image src={session.user.image} alt='user image' height={24} width={24} className={styles.userImage}/>
          </span>
        }
        {session ? 
          <button className={styles.logout} onClick={()=>signOut('google')}>Logout</button>
          :
          <Link href='/dashboard/login'><button className={styles.logout}>Log in</button></Link>
         }
      </div>
    </div>
  )
}

export default Navbar