import Image from "next/image";
import Link from "next/link";

import { Icon } from "./Icon";

const feedbackUrl = "https://sonahabitsapp.userjot.com/";

/** Shared footer used across the homepage and sub-pages (articles, legal). */
export function SiteFooter() {
  return (
    <footer className="footer">
      <Link href="/" className="brand-lockup" aria-label="Daybreak home">
        <Image
          src="/brand-icon.png"
          alt=""
          width={28}
          height={28}
          className="brand-icon"
        />
        <span>Daybreak</span>
      </Link>
      <div className="footer-links">
        <Link href="/articles">Articles</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/support">Support</Link>
        <a href={feedbackUrl}>Feedback</a>
        <a
          href="https://www.reddit.com/r/SonaHabits/"
          target="_blank"
          rel="noreferrer"
          aria-label="Daybreak on Reddit"
        >
          <Icon icon="simple-icons:reddit" className="h-4 w-4" />
        </a>
        <a
          href="https://x.com/sonahabits"
          target="_blank"
          rel="noreferrer"
          aria-label="Daybreak on X"
        >
          <Icon icon="simple-icons:x" className="h-4 w-4" />
        </a>
      </div>
      <p>© 2026 Daybreak.</p>
    </footer>
  );
}
