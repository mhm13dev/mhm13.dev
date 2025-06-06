import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ReactNode, ComponentProps } from "react";
import NextLink from "next/link";

const linkVariants = cva(
  "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        nav: "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100",
        brand:
          "text-neutral-900 dark:text-neutral-100 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700 hover:decoration-neutral-900 dark:hover:decoration-neutral-300",
        muted:
          "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200",
      },
      external: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "nav",
      external: false,
    },
  }
);

type BaseProps = VariantProps<typeof linkVariants> & {
  children: ReactNode;
  className?: string;
};

type InternalLinkProps = BaseProps & {
  external?: false;
} & Omit<ComponentProps<typeof NextLink>, "className">;

type ExternalLinkProps = BaseProps & {
  external: true;
} & Omit<ComponentProps<"a">, "className" | "rel">;

export type LinkProps = InternalLinkProps | ExternalLinkProps;

export function Link({
  children,
  className,
  variant,
  external,
  target,
  ...props
}: LinkProps) {
  const classes = cn(linkVariants({ variant, external, className }));

  if (external) {
    return (
      <a
        rel="noopener noreferrer"
        className={classes}
        {...(props as Omit<ComponentProps<"a">, "className" | "rel">)}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink
      className={classes}
      {...(props as Omit<ComponentProps<typeof NextLink>, "className">)}
    >
      {children}
    </NextLink>
  );
}

export { linkVariants };
