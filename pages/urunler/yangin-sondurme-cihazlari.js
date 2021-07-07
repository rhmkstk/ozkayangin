import { getTable } from '@/api/airtable'
import Layout from '@/components/products-layout'
import Card from '@/components/product-card-main'

function YanginSondurmeCihazlari({ data }) {
  return (
    <Layout>
      {data.map((item) => (
        <Card
          key={item.Id}
          title={item.Name}
          photo={item.Attachments[0]}
          href={item.href}
        />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getTable('YaSoCi')
  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default YanginSondurmeCihazlari
