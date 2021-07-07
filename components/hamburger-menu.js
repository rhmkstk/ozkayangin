import { useState } from 'react'

import Link from 'next/link'

import styles from './hamburger-menu.module.css'
import HamburgerIcon from '@/components/icons/hamburger-icon'
import CloseIcon from '@/components/icons/close-icon'

function HamburgerMenu({ className, data }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleOpen() {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <div className={`${styles.icon} ${className}`} onClick={toggleOpen}>
        <HamburgerIcon />
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.openMenu : ''}`}>
        <div className={styles.close} onClick={toggleOpen}>
          <CloseIcon />
        </div>
        <ul onClick={toggleOpen}>
          {data.map((item, index) => (
            <Link key={index} href={item.href} as={`/urunler/${item.href}`}>
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HamburgerMenu
