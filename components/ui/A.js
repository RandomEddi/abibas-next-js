import Link from "next/link";
import styles from '../../styles/A.module.css'
import React from "react";

function A({children, href}) {
    return (
        <>
            <Link href={href}>
                <a className={styles.link}>{children}</a>
            </Link>
        </>
    )
}
export default React.memo(A)