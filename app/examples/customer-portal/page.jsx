import Link from 'next/link'
import styles from '../../site.module.css'

export const metadata = {
  title: 'Customer Portal',
  description: 'A second example page linked from the navbar menu.'
}

export default function CustomerPortalPage() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.subpageHero}>
        <p className={styles.kicker}>Example page</p>
        <h1 className={styles.subpageTitle}>Customer Portal</h1>
        <p className={styles.subpageLead}>
          Give customers a branded hub for onboarding guides, release notes, and
          self-serve resources without losing the shared site navigation.
        </p>
      </section>

      <section className={styles.storyGrid}>
        <article className={styles.storyCard}>
          <h2>Onboarding journeys</h2>
          <p>
            Highlight the best next step for new customers with curated paths and
            focused calls to action.
          </p>
        </article>
        <article className={styles.storyCard}>
          <h2>Always-current resources</h2>
          <p>
            Keep product guides, FAQs, and changelogs in one place so support content
            stays easy to discover.
          </p>
        </article>
      </section>

      <section className={styles.inlineCta}>
        <div>
          <h2>Need the underlying docs structure?</h2>
          <p>
            Explore the documentation area to see how content pages and the Nextra
            route setup fit together.
          </p>
        </div>
        <Link href="/documentation/getting-started" className={styles.secondaryButton}>
          View docs structure
        </Link>
      </section>
    </main>
  )
}
