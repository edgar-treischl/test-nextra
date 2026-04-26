import { Footer, Layout } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { SiteNavbar } from '../components/site-navbar'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Aurora Platform',
    template: '%s | Aurora Platform'
  },
  description:
    'Aurora Platform pairs a marketing homepage, grouped example pages, and a Nextra-powered documentation section.'
}

const footer = (
  <Footer>
    {new Date().getFullYear()} © Aurora Platform. Built with Next.js and Nextra for a combined
    marketing site and documentation hub.
  </Footer>
)

export default async function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head />
      <body>
        <Layout
          navbar={<SiteNavbar />}
          pageMap={await getPageMap()}
          footer={footer}
          editLink={null}
          feedback={{ content: null }}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
