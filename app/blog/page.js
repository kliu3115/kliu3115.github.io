import LayoutBase from '../components/layoutbase';
import Link from 'next/link';
import { getAllPosts } from '../lib/blog';

function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();
  const featured = posts.filter((post) => post.featured);
  const rest = posts.filter((post) => !post.featured);

  return (
    <LayoutBase>
      <article className="max-w-5xl mx-auto px-8 py-16">
        <h1 className="text-2xl font-semibold mb-4">Blog</h1>
        <p className="text-[var(--foreground-muted)] mb-12 max-w-prose">
          Occasional notes and essays.
        </p>

        {featured.length > 0 && (
          <div className="mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[var(--foreground-muted)] mb-4">
              Selected Writing
            </h2>
            <ul className="space-y-4">
              {featured.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-lg border border-[var(--border)] bg-[var(--surface-muted)] p-6 hover:border-[var(--foreground-muted)] transition-colors"
                  >
                    <h3 className="text-lg font-medium group-hover:underline mb-1">
                      {post.title}
                    </h3>
                    <div className="text-sm text-[var(--foreground-muted)]">
                      <time dateTime={post.date}>{formatDate(post.date)}</time>
                      {post.blurb && <span className="ml-2">— {post.blurb}</span>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {posts.length === 0 && (
          <p className="text-[var(--foreground-muted)]">No posts yet.</p>
        )}

        {rest.length > 0 && (
          <ul className="space-y-6">
            {rest.map((post) => (
              <li key={post.slug} className="border-b border-[var(--border)] pb-6 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  <h2 className="text-lg font-medium group-hover:underline mb-1">
                    {post.title}
                  </h2>
                  <div className="text-sm text-[var(--foreground-muted)]">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    {post.blurb && (
                      <span className="ml-2">— {post.blurb}</span>
                    )}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </article>
    </LayoutBase>
  );
}
