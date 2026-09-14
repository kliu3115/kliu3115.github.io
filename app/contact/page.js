import LayoutBase from '../components/layoutbase';

export default function Contact() {
  return (
    <LayoutBase>
      <article className="max-w-5xl mx-auto px-8 py-16">
        <h1 className="text-2xl font-semibold mb-8">Contact</h1>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href="mailto:kelly.liu@yale.edu"
              className="underline underline-offset-2 hover:text-[var(--foreground-muted)]"
            >
              kelly.liu@yale.edu
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kliu3115"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--foreground-muted)]"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kelly-liu-792235364/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-[var(--foreground-muted)]"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </article>
    </LayoutBase>
  );
}
