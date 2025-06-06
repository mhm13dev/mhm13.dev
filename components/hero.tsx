import { Link } from "@/components/ui/link";

export default function Hero() {
  return (
    <section className="mb-16">
      <h1 className="text-3xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Hey, I&apos;m Mubashir Hassan 👋
      </h1>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
        I&apos;m a full stack developer, currently building great software at{" "}
        <Link
          href="https://kwanso.com"
          variant="brand"
          external
          target="_blank"
        >
          Kwanso
        </Link>{" "}
        in Lahore, Pakistan.
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
        I work primarily in the JavaScript/TypeScript ecosystem using React.js,
        Next.js, Node.js, and other modern technologies to create digital
        experiences — one commit at a time 💥
      </p>
    </section>
  );
}
