import { type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'ghost';

const variants: Record<Variant, string> = {
  primary:
    'bg-fg text-bg hover:bg-white border border-fg font-semibold tracking-wide uppercase text-sm',
  ghost:
    'bg-transparent text-fg border border-white/20 hover:border-white/40 hover:bg-white/5 font-semibold tracking-wide uppercase text-sm',
};

type SharedProps = {
  variant?: Variant;
  className?: string;
  children?: ReactNode;
};

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `inline-flex items-center justify-center px-6 py-3 rounded-none transition-colors duration-200 ${variants[variant]} ${className}`;

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  href,
  ...props
}: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const classes = `inline-flex items-center justify-center px-6 py-3 rounded-none transition-colors duration-200 ${variants[variant]} ${className}`;

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
