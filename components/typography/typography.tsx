import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// H1 - Largest heading
export function H1({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1 
      className={`text-[clamp(2.5rem,8vw,6rem)] leading-[clamp(1.1,1.2vw,1.2)] font-bold tracking-[clamp(-0.02em,-0.3vw,0em)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </h1>
  );
}

// H2 - Second largest heading
export function H2({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 
      className={`text-[clamp(1.8rem,5vw,4.2rem)] leading-[clamp(1.15,1.3vw,1.25)] font-bold tracking-[clamp(-0.02em,-0.3vw,0em)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </h2>
  );
}

// H3 - Third heading
export function H3({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 
      className={`text-[clamp(1rem,3vw,2.9rem)] leading-[clamp(1.2,1.4vw,1.3)] font-bold tracking-[clamp(-0.01em,-0.2vw,0em)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </h3>
  );
}

// H4 - Fourth heading
export function H4({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4 
      className={`text-[clamp(1.125rem,3vw,2rem)] leading-[clamp(1.25,1.5vw,1.35)] font-bold tracking-[clamp(-0.01em,-0.2vw,0em)]  ${className}`}
      style={style}
      {...props}
    >
      {children}
    </h4>
  );
}

// H5 - Fifth heading
export function H5({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5 
      className={`text-[clamp(1.2rem,2.4vw,1.9rem)] leading-[clamp(1.3,1.6vw,1.4)] font-bold tracking-[clamp(-0.01em,-0.15vw,0em)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </h5>
  );
}

// H6 - Smallest heading
export function H6({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6 
      className={`text-[clamp(0.875rem,2vw,1.25rem)] leading-[clamp(1.35,1.7vw,1.45)] font-bold tracking-[clamp(0em,0.1vw,0.05em)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </h6>
  );
}

// P - Paragraph
export function P({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p 
      className={`text-[clamp(0.875rem,1.8vw,1.125rem)] leading-[clamp(1.6,2.2vw,1.8)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </p>
  );
}

// Small - Small text
export function Small({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <small 
      className={`text-[clamp(0.75rem,1.5vw,0.875rem)] leading-[clamp(1.5,2vw,1.7)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </small>
  );
}

// A - Link
export function A({ children, className = '', style, href, ...props }: TypographyProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a 
      href={href}
      className={`text-[clamp(0.875rem,1.8vw,1.125rem)] leading-[clamp(1.6,2.2vw,1.8)] ${className}`}
      style={style}
      {...props}
    >
      {children}
    </a>
  );
}

// Strong - Bold text
export function Strong({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <strong 
      className={`font-bold ${className}`}
      style={style}
      {...props}
    >
      {children}
    </strong>
  );
}

// Em - Italic text
export function Em({ children, className = '', style, ...props }: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  return (
    <em 
      className={`italic ${className}`}
      style={style}
      {...props}
    >
      {children}
    </em>
  );
}
