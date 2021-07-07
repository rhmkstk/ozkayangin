import { getTable } from '@/api/airtable'

import MainLayout from '@/components/main-layout'
import Welcome from '@/components/welcome'
import About from '@/components/about'
import Services from '@/components/services'
import Document from '@/components/documents'
import Communication from '@/components/communication'

function Home({ welcome, services,documents }) {
  return (
    <>
      <MainLayout>
        <Welcome photo={welcome} />
        <About />
        <Services photo={services} />
        <Document photos={documents} />
        <Communication />
      </MainLayout>
    </>
  )
}

export async function getStaticProps() {
  const data = await getTable('Main')
  const welcome = data.filter(p => p.Name === 'welcome')[0]
  const services = data.filter(p => p.Name === 'services')[0]
  const documents = data.filter(p => p.Catagory === 'Document')

  return {
    props: {
      welcome,
      services,
      documents
    },
    revalidate: 600
  }
}

export default Home
