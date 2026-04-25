import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  title: {
    default: 'Nextra Example Docs',
    template: '%s | Nextra Example Docs'
  },
  description: 'A small Nextra documentation app with example pages and MDX content.'
}

const banner = (
  <Banner storageKey="nextra-example-banner">
    This example app now uses the supported Nextra 4 App Router pattern.
  </Banner>
)
const navbar = (
  <Navbar
    logo={<b>Nextra Example</b>}
  />
)
const footer = <Footer>{new Date().getFullYear()} © Nextra Example.</Footer>

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
          banner={banner}
          navbar={navbar}
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
