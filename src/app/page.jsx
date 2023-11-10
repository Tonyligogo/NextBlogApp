'use client'
import styles from './page.module.css'
import { useEffect, useRef } from 'react'
import Lottie from 'lottie-web'
import Blog from './blog/page'


export default function Home() {

  const animationContainer = useRef(null)
  useEffect(()=>{
    const instance=Lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../public/animation.json')
    })
    return ()=> instance.destroy()
  },[])

  return (
    <div>
      <div className={styles.HomeContainer}>
        <div className={styles.left}>
          <h1 className={styles.title}>Hey, we&apos;re  Bloggy. <br /> <span className={styles.title2}>See our thoughts, stories and Ideas</span> </h1>
          <div className={styles.subscribe}>
            <span className={styles.text}>Subscribe to <strong>new posts</strong> </span>
            <div className={styles.inputBox}>
              <input
              className={styles.subscribeInput}
              type="email"
              placeholder='Your email address'
              />
              <button className={styles.subscribeBtn}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className={styles.right} ref={animationContainer}></div>
      </div>
      {/* <Blog/> */}
    </div>
  )
}
