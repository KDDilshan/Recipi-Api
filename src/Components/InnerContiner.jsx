import styles from './InnerContainer.module.css'

export default function InnerContiner({children}){
    return <div className={styles.innerContainer}>{children}</div>
}