import nextra from 'nextra'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isProjectPagesSite =
  process.env.GITHUB_ACTIONS === 'true' &&
  repositoryName.length > 0 &&
  !repositoryName.endsWith('.github.io')
const basePath = isProjectPagesSite ? `/${repositoryName}` : ''

const withNextra = nextra({})

export default withNextra({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  basePath,
  assetPrefix: basePath || undefined
})
