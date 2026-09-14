import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-auto">
      <div className="max-w-2xl mx-auto px-6 py-8">
        <ul className="flex gap-6 text-[var(--foreground-muted)]">
          <li>
            <a
              href="mailto:kelly.liu@yale.edu"
              className="hover:text-[var(--foreground)] transition-colors"
              aria-label="Email"
            >
              <Image src="/images/gmail-icon.svg" className="w-5 h-5" alt="" width={20} height={20} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kliu3115"
              className="hover:text-[var(--foreground)] transition-colors"
              aria-label="GitHub"
            >
              <Image src="/images/github-icon.svg" className="w-5 h-5" alt="" width={20} height={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kelly-liu-792235364/"
              className="hover:text-[var(--foreground)] transition-colors"
              aria-label="LinkedIn"
            >
              <Image src="/images/linkedin-icon.svg" className="w-5 h-5" alt="" width={20} height={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
