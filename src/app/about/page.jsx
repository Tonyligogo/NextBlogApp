import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import AboutImage from 'public/about.jpeg'
import Button from '@/components/button/Button'

function About() {
  return (
    <div>
      <div className={styles.imageContainer}>
        <Image src={AboutImage} alt='image' className={styles.image}/>
        <div className={styles.imageText}>
          <h2>Digital Storytellers</h2>
          <h3>Handcrafting award winning experiences</h3>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <h3 className={styles.title}>Who Are We</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque magnam suscipit iste, officiis rerum asperiores earum aperiam.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque magnam suscipit iste, officiis rerum asperiores earum aperiam qui laborum. Neque nam sunt fuga atque quo, aperiam, in consequuntur blanditiis quam error repellendus.</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora autem expedita deserunt.</p>
        </div>
        <div className={styles.right}>
          <h3 className={styles.title}>What We Do</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque magnam suscipit iste, officiis rerum asperiores earum aperiam qui laborum. Neque nam sunt fuga atque quo, aperiam, in consequuntur blanditiis quam error repellendus.</p>
          <ul className={styles.listItems}>
            <li>- Creative Illustrations</li>
            <li>- Dynamic Websites</li>
            <li>- Fast and Handy Mobile Apps</li>
          </ul>
          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  )
}

export default About