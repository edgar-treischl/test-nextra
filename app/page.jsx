import Image from 'next/image'
import Link from 'next/link'
import { getAssetPath } from '../lib/get-asset-path'
import styles from './site.module.css'

export default function HomePage() {
  return (
    <main className={styles.pageShell}>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>A better docs website</p>
          <h1 className={styles.heroTitle}>
            Build a polished product home for docs, launches, and example experiences.
          </h1>
          <p className={styles.heroLead}>
            Aurora Platform combines a visual landing page, example product pages, and a
            dedicated documentation section, all connected by one shared navbar.
          </p>
          <div className={styles.heroActions}>
            <Link href="/documentation" className={styles.primaryButton}>
              Browse documentation
            </Link>
            <Link href="/examples/automation-studio" className={styles.secondaryButton}>
              Explore example pages
            </Link>
          </div>
        </div>

        <aside className={styles.heroPanel}>
          <div className={styles.heroVisual}>
            <Image
              src={getAssetPath('/images/demo.png')}
              alt="Aurora Platform dashboard preview"
              width={640}
              height={420}
              className={styles.heroImage}
              priority
            />
            <div className={styles.heroBadge}>New landing experience</div>
          </div>
          <div className={styles.heroMetrics}>
            <div>
              <p className={styles.panelEyebrow}>Navigation</p>
              <strong>Examples before docs</strong>
            </div>
            <div>
              <p className={styles.panelEyebrow}>Structure</p>
              <strong>Marketing plus documentation</strong>
            </div>
            <div>
              <p className={styles.panelEyebrow}>Delivery</p>
              <strong>Static export ready</strong>
            </div>
          </div>
        </aside>
      </section>

      <section className={styles.contentGrid}>
        <article className={styles.featureCard}>
          <h2>Marketing homepage</h2>
          <p>
            Use the front page for value messaging, calls to action, and product
            positioning instead of a docs-first layout.
          </p>
        </article>
        <article className={styles.featureCard}>
          <h2>Structured documentation</h2>
          <p>
            Keep MDX pages inside the documentation section so the sidebar and table
            of contents stay focused on reference content.
          </p>
        </article>
        <article className={styles.featureCard}>
          <h2>Navigation that scales</h2>
          <p>
            Combine top-level docs access, grouped example links, and a project
            repository shortcut in one shared navbar.
          </p>
        </article>
      </section>
    </main>
  )
}
