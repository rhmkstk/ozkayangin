import Link from 'next/link'
import styles from './navigation.module.css'
import { useRouter } from 'next/router'

function Navigation() {
  const router = useRouter()

  const data = [
    { name: 'Hakkımızda', href: '/#about' },
    { name: 'Hizmetler', href: '/#services' },
    { name: 'Belgeler', href: '/#documents' },
    { name: 'Ürünler', href: '/urunler' },
    { name: 'İletişim', href: '/#communication' }
  ]
  return (
    <nav className={styles.navbar}>
      {data.map((item, index) => (
        <Link key={index} href={item.href}>
          <a className={router.asPath == item.href ? `${styles.active}` : ''}>
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
