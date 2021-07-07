import styles from './product-card-child.module.css'

import NextImage from 'next/image'

function ProductCard({ title, photo }) {
  return (
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
  )
}

export default ProductCard
