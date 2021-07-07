import styles from '@/pages/urunler.module.css'
import NextImage from 'next/image'
import { getTable } from '@/api/airtable'
import ProductCardMain from '@/components/product-card-main'
import MainLayout from '@/components/main-layout'

function Products({ cover, products }) {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <section className={styles.head}>
          <NextImage src={cover.Attachments[0].url} layout="fill" />
        </section>
        <div className={styles.content}>
          <div className={styles.container}>
            {products.map((item) => (
              <ProductCardMain
                key={item.Id}
                title={item.Name}
                photo={item.Attachments[0]}
                href={item.href}
              />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const data = await getTable('Products-main')
  const [cover, ...products] = data
  return {
    props: {
      cover,
      products
    },
    revalidate: 600
  }
}

export default Products
