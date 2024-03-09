import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

function Dashboard() {
  return (
    <div className={styles.wrapper}>
      <Link href='/dashboard/register'>Register</Link>
      <Link href='/dashboard/login'>Login</Link>
      <Link href='/dashboard/createPost'>Create Post</Link>
    </div>
  )
}

export default Dashboard