import LogoIcon from './icons/logo-icon'
import styles from './logo.module.css'
import Link from 'next/link'

function Logo() {
  return (
    <Link href="/">
    <div className={styles.logo}>
      <LogoIcon/>
    </div>
    </Link>
  )
}

export default Logo
