import styles from './products-navigation.module.css'
import HamburgerMenu from './hamburger-menu'
import { useRouter } from 'next/router'

import Link from 'next/link'

function ProductsNavigation() {
  const router = useRouter()
  const data = [
    { title: 'Yangın Söndürme Cihazları', href: 'yangin-sondurme-cihazlari' },
    {
      title: 'Yangın Dolapları ve Hortumları',
      href: 'yangin-dolaplari-hortumlari'
    },
    { title: 'Özel Söndürme Sistemleri', href: 'ozel-sondurme-sistemleri' },
    {
      title: 'Davlumbaz Söndürme Sistemleri',
      href: 'davlumbaz-sondurme-sistemleri'
    },
    { title: 'Sulu Söndürme Sistemleri', href: 'sulu-sondurme-sistemleri' },
    { title: 'Gazli Söndürme Sistemleri', href: 'gazli-sondurme-sistemleri' },
    {
      title: 'Yangın Algılama ve İhbar Sistemleri',
      href: 'yangin-algilama-ihbar-sistemleri'
    },
    {
      title: 'Aydınlatma ve Yönlendirme Armatürleri',
      href: 'aydinlatma-yonlendirme-armaturleri'
    },
    {
      title: 'Duman ve Isı Tahliye Sistemleri',
      href: 'duman-isi-tahliye-sistemleri'
    },
    {
      title: 'Yangın Kapıları',
      href: 'yangin-kapilari'
    }
  ]
  return (
    <div>
      <div className={styles.menu}>
        {data.map((item, index) => (
          <Link key={index} href={`/urunler/${item.href}`}>
            <a
              className={
                router.asPath.includes(item.href) ? `${styles.active}` : ''
              }
            >
              {item.title}
            </a>
          </Link>
        ))}
      </div>
      <div className={styles.menuResponsive}>
        <HamburgerMenu className={styles.hamburgerResponsive} data={data} />
      </div>
    </div>
  )
}

export default ProductsNavigation
