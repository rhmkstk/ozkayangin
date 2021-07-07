import { getTable } from '@/api/airtable'
import Layout from '@/components/products-layout'
import Card from '@/components/product-card-child'

function OzelSondurmeSistemleri({ data }) {
  return (
    <Layout>
      {data.map((item) => (
        <Card key={item.Id} title={item.Name} photo={item.Attachments[0]} />
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getTable('OzSoSi')
  return {
    props: {
      data
    },
    revalidate: 600
  }
}

export default OzelSondurmeSistemleri
