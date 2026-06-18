import Image from "next/image";
import Link from "next/link";

import { Icon } from "./Icon";

const appStoreUrl =
  "https://apps.apple.com/us/app/habit-tracker-sona/id6758967586";

/**
 * Lightweight static header for sub-pages (articles, legal). No theme toggle
 * or scroll wiring — those live only on the interactive homepage. Theme still
 * applies via the persisted-theme script in layout.tsx.
 */
export function SubHeader() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-lockup" aria-label="Daybreak home">
        <Image
          src="/brand-icon.png"
          alt=""
          width={34}
          height={34}
          className="brand-icon"
        />
        <span>Daybreak</span>
      </Link>
      <nav className="site-nav" aria-label="Sections">
        <Link href="/articles">Articles</Link>
        <Link href="/#spaces">Your worlds</Link>
        <Link href="/#features">How it works</Link>
      </nav>
      <div className="header-actions">
        <a
          href={appStoreUrl}
          target="_blank"
          rel="noreferrer"
          className="cta-button cta-button-sm"
          aria-label="Download Daybreak on the App Store"
        >
          <Icon icon="simple-icons:apple" className="h-[18px] w-[18px]" />
          <span>Download</span>
        </a>
      </div>
    </header>
  );
}
