import { Link } from "@/components/ui/link";

export default function Header() {
  return (
    <header className="mb-16">
      <nav className="flex items-center justify-between mb-8">
        <div className="font-medium text-neutral-900 dark:text-neutral-100">
          Mubashir.
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <Link href="/" variant="nav">
            About
          </Link>
          <Link href="/resume" variant="nav" external target="_blank">
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
