import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents } from '../../../mdx-components'

const generateAllStaticParams = generateStaticParamsFor('mdxPath')
const Wrapper = useMDXComponents().wrapper

function getDocumentationPath(mdxPath = []) {
  return ['documentation', ...mdxPath]
}

export async function generateStaticParams() {
  const params = await generateAllStaticParams()

  return params
    .filter(({ mdxPath = [] }) => mdxPath[0] === 'documentation')
    .map(({ mdxPath = [] }) => ({
      mdxPath: mdxPath.slice(1)
    }))
}

export async function generateMetadata(props) {
  const params = await props.params
  const { metadata } = await importPage(getDocumentationPath(params.mdxPath))

  return metadata
}

export default async function DocumentationPage(props) {
  const params = await props.params
  const { default: MDXContent, metadata, toc } = await importPage(
    getDocumentationPath(params.mdxPath)
  )

  return (
    <Wrapper metadata={metadata} toc={toc}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}
