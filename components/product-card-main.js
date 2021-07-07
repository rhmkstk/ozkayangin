import styles from './product-card-main.module.css'

import Link from 'next/link'
import NextImage from 'next/image'

function ProductCard({ title, photo, href }) {
  return (
    <Link href={href}>
      <div className={styles.card}>
        <div className={styles.photo}>
          <NextImage
            src={photo.thumbnails.large.url}
            width={photo.thumbnails.large.width}
            height={photo.thumbnails.large.height}
          />
        </div>
        <div className={styles.title}>
          <h3>{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
