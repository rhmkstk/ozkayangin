import Navigation from './navigation'
import Head from 'next/head'
import Logo from './logo'
import Footer from './footer'
import Hamburger from './hamburger-menu'

function Layout({ children }) {
  const hamburgerData = [
    { title: 'Hakkımızda', href: '/#about' },
    { title: 'Hizmetler', href: '/#services' },
    { title: 'Belgeler', href: '/#documents' },
    { title: 'Ürünler', href: '/urunler' },
    { title: 'İletişim', href: '/#communication' }
  ]

  return (
    <div>
      <Head>
        <title>Özkayangın</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Logo />
      <Hamburger data={hamburgerData} />
      <Navigation />
      <main> {children} </main>
      <Footer />
    </div>
  )
}

export default Layout
