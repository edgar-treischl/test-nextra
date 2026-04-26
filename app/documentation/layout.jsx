import { Layout } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'

export default async function DocumentationLayout({ children }) {
  return (
    <Layout
      pageMap={await getPageMap('/documentation')}
      editLink={null}
      feedback={{ content: null }}
    >
      {children}
    </Layout>
  )
}
