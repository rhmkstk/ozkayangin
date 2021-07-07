import styles from './products-layout.module.css'

import ProcutsNavigation from '@/components/products-navigation'
import MainLayout from '@/components/main-layout'

function ProductsLayout({ children }) {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <ProcutsNavigation />
        <div className={styles.main}>{children}</div>
      </div>
    </MainLayout>
  )
}

export default ProductsLayout
