import Head from 'next/head'
import Header from '../components/homePage/Header'
import Sections from '../components/homePage/Sections'
import Footer from '../components/homePage/Footer'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>線上英語會話 NativeCamp. | 英語會話7內免費試用實施中</title>
        <link href="https://nativecamp.net/user/favicon.ico?v=1" type="image/x-icon" rel="icon" />
      </Head>

      {/* Header */}
      <Header />

      <main className="">
        {/* Sections */}
        <Sections />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
