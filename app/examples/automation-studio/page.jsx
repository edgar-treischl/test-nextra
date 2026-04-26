import Link from 'next/link'
import styles from '../../site.module.css'

export const metadata = {
  title: 'Automation Studio',
  description: 'See how a productized workflow page can look outside the docs section.'
}

export default function AutomationStudioPage() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.subpageHero}>
        <p className={styles.kicker}>Example page</p>
        <h1 className={styles.subpageTitle}>Automation Studio</h1>
        <p className={styles.subpageLead}>
          Turn repetitive operations into guided workflows with reusable templates,
          approval gates, and delivery checklists.
        </p>
      </section>

      <section className={styles.contentGrid}>
        <article className={styles.featureCard}>
          <h2>Reusable playbooks</h2>
          <p>
            Package launches, handoffs, and recurring maintenance into ready-to-run
            templates for every team.
          </p>
        </article>
        <article className={styles.featureCard}>
          <h2>Clear ownership</h2>
          <p>
            Assign reviewers, define due dates, and keep every stakeholder aligned on
            the next action.
          </p>
        </article>
        <article className={styles.featureCard}>
          <h2>Fewer manual steps</h2>
          <p>
            Connect docs, tasks, and release checks so teams spend less time
            coordinating work by hand.
          </p>
        </article>
      </section>

      <section className={styles.inlineCta}>
        <div>
          <h2>Want the implementation details?</h2>
          <p>
            The documentation section shows how the site is structured and where the
            MDX content lives.
          </p>
        </div>
        <Link href="/documentation" className={styles.secondaryButton}>
          Open documentation
        </Link>
      </section>
    </main>
  )
}
