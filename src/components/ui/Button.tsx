import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-white hover:bg-accent-dark shadow-lg shadow-accent/30 hover:shadow-accent/40',
  secondary:
    'bg-primary text-white hover:bg-primary-700 shadow-lg shadow-primary/30',
  outline:
    'border-2 border-white/40 text-white hover:bg-white hover:text-primary-800 backdrop-blur-sm',
  ghost:
    'text-primary-700 hover:bg-primary-50',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-9 py-4 text-base',
};

const baseClasses =
  'inline-flex items-center justify-center gap-2 font-heading font-semibold tracking-wide rounded-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 uppercase';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  to,
  ...props
}: BaseProps & { to: string } & Omit<React.ComponentProps<typeof Link>, 'to'>) {
  return (
    <Link
      to={to}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  href,
  ...props
}: BaseProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
