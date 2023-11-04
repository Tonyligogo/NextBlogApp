import Image from 'next/image'
import React from 'react'
import styles from './page.module.css'
import bigimage1 from '../../../public/featured1.jpg'
import bigimage2 from '../../../public/featured2.jpg'
import bigimage3 from '../../../public/featured3.jpg'
import bigimage4 from '../../../public/featured4.jpg'
import bigimage5 from '../../../public/featured5.jpg'
import image1 from "../../../public/author-1.jpg"
import image2 from "../../../public/author-2.jpg" 
import image3 from "../../../public/author-3.jpg" 
import image4 from "../../../public/author-4.jpg" 

function Blog() {
  return (
    <div className={styles.container}>
        <div className={styles.stories}>Get started with our <strong>best stories</strong></div>
        <div className={styles.imgContainer}>
            <div className={styles.cards}>
                <div className={styles.images}>
                    <Image className={styles.img} width={360} height={432} src={bigimage1} alt="image"/>
                    <div className={styles.smallImages}>
                        <Image className={styles.smallImage} width={28} height={28} src={image1} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image2} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image3} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image4} alt="image"/>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.tags}>
                        <ul className={styles.listItems}>
                            <li>Design</li>
                            <li>Idea</li>
                            <li>Review</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>New technology is not good or evil in and of itself</h3>
                    </div>
                    <div>
                        <p className={styles.text}>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta,...
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.images}>
                    <Image className={styles.img} width={360} height={432} src={bigimage2} alt="image"/>
                    <div className={styles.smallImages}>
                        <Image className={styles.smallImage} width={28} height={28} src={image1} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image2} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image3} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image4} alt="image"/>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.tags}>
                        <ul className={styles.listItems}>
                            <li>Design</li>
                            <li>Idea</li>
                            <li>Review</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>New technology is not good or evil in and of itself</h3>
                    </div>
                    <div>
                        <p className={styles.text}>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta,...
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.images}>
                    <Image className={styles.img} width={360} height={432} src={bigimage3} alt="image"/>
                    <div className={styles.smallImages}>
                        <Image className={styles.smallImage} width={28} height={28} src={image1} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image2} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image3} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image4} alt="image"/>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.tags}>
                        <ul className={styles.listItems}>
                            <li>Design</li>
                            <li>Idea</li>
                            <li>Review</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>New technology is not good or evil in and of itself</h3>
                    </div>
                    <div>
                        <p className={styles.text}>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta,...
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.images}>
                    <Image className={styles.img} width={360} height={432} src={bigimage4} alt="image"/>
                    <div className={styles.smallImages}>
                        <Image className={styles.smallImage} width={28} height={28} src={image1} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image2} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image3} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image4} alt="image"/>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.tags}>
                        <ul className={styles.listItems}>
                            <li>Design</li>
                            <li>Idea</li>
                            <li>Review</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>New technology is not good or evil in and of itself</h3>
                    </div>
                    <div>
                        <p className={styles.text}>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta,...
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.cards}>
                <div className={styles.images}>
                    <Image className={styles.img} width={360} height={432} src={bigimage5} alt="image"/>
                    <div className={styles.smallImages}>
                        <Image className={styles.smallImage} width={28} height={28} src={image1} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image2} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image3} alt="image"/>
                        <Image className={styles.smallImage} width={28} height={28} src={image4} alt="image"/>
                    </div>
                </div>
                <div className={styles.cardContent}>
                    <div className={styles.tags}>
                        <ul className={styles.listItems}>
                            <li>Design</li>
                            <li>Idea</li>
                            <li>Review</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={styles.heading}>New technology is not good or evil in and of itself</h3>
                    </div>
                    <div>
                        <p className={styles.text}>Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta,...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog