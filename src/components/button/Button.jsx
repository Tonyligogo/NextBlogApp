import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'

function Button({url, text}) {
  return (
    <Link href={url}>
        <button className={styles.button}>{text}</button>
    </Link>
  )
}

export default Button