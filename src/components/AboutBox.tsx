import Link from 'next/link'
import styles from './AboutBox.module.scss'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface aboutProps {
    iconURL: string,
    imageURL: string,
    title: string,
    linkURL: string
}

export default function AboutBox (props: aboutProps) {
    return(
        <Link href={props.linkURL} className={styles.container}>
            <span className={styles.titleContainer}>
                <div className={`${styles.imageContainer} ${styles.icon}`}>
                    <Image 
                        alt="icon"
                        src={props.iconURL}
                        width={1925} // this would be much smaller in actuality
                        height={1925}
                    />
                </div>
                <strong className={styles.title}>{props.title.toUpperCase()}</strong>
                <FontAwesomeIcon 
                    icon={faArrowRight} 
                />
            </span>
            <div className={`${styles.imageContainer} ${styles.primary}`}>
                <Image 
                    alt={props.title}
                    src={props.imageURL}
                    width={1920}
                    height={1038}
                />

            </div>
        </Link>
    )
}