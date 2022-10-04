import Link from "next/link";
import styles from '../styles/A.module.css'

export default function A({children, href}) {
    return (
        <>
            <Link className={styles.link} href={href}>
                <a className={styles.link}>{children}</a>
            </Link>
        </>
    )
}