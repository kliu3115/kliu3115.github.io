import LayoutBase from './components/layoutbase';
import Link from 'next/link';
import { visibleProjects as projectsData } from './data/projects';

export default function Home() {
  return (
    <LayoutBase>
      <article className="max-w-5xl mx-auto px-8 py-16">
        {/* Prose section — personal, reflective, minimal */}
        <section className="prose-custom mb-20">
          <h1 className="text-2xl font-semibold mb-8">Kelly Liu</h1>
          <p>
            I study Computer Science, Math and Philosophy at Yale University. My favorite animal is a dachshund (their little legs!). I love thinking through fun problems, whether it be a logic puzzle, machine learning challenge or philosophical debate. In my free time, I love trying new food spots and taking dance classes in NYC!
          </p>
        </section>

        {/* Projects preview */}
        <section>
          <div className="flex justify-between items-baseline mb-6">
            <h2 className="text-lg font-semibold">Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-[var(--foreground-muted)] hover:text-[var(--foreground)]"
            >
              View all
            </Link>
          </div>
          <ul className="space-y-4">
            {projectsData.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/projects/${p.slug}`}
                  className="flex gap-4 group"
                >
                  {p.image && (
                    <div className="flex-shrink-0 w-16 h-16 rounded overflow-hidden border border-[var(--border)]">
                      <img src={p.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="min-w-0">
                    <span className="font-medium group-hover:underline">{p.title}</span>
                    <span className="text-[var(--foreground-muted)]"> — {p.description}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </LayoutBase>
  );
}
