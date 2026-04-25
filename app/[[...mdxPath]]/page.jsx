import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../mdx-components'

export const generateStaticParams = generateStaticParamsFor('mdxPath')

const Wrapper = useMDXComponents().wrapper

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(params.mdxPath)

  return metadata
}

export default async function Page(props) {
  const params = await props.params
  const { default: MDXContent, metadata, toc } = await importPage(params.mdxPath)

  return (
    <Wrapper metadata={metadata} toc={toc}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
