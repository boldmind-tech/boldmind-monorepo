import React, { Component, ReactNode, ErrorInfo } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

interface NavbarProps {
    logoSrc?: string;
    links: {
        href: string;
        label: string;
    }[];
    cta?: {
        href: string;
        label: string;
    };
}
declare const Navbar: React.FC<NavbarProps>;

interface FooterLink {
    href: string;
    label: string;
}
interface FooterSection {
    title: string;
    links: FooterLink[];
}
interface FooterProps {
    logoSrc?: string;
    sections?: FooterSection[];
    className?: string;
    copyright?: string;
}
declare const Footer: React.FC<FooterProps>;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
    isLoading?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'outline';
    padding?: 'none' | 'sm' | 'md' | 'lg';
}
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface LogoProps {
    src?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | number;
    className?: string;
    alt?: string;
}
declare const Logo: React.FC<LogoProps>;

interface SocialLink {
    href: string;
    icon: React.ReactNode;
    ariaLabel: string;
}
interface SocialLinksProps {
    links: SocialLink[];
}
declare const SocialLinks: React.FC<SocialLinksProps>;

interface StatusBadgeProps {
    status: string;
    color?: string;
}
declare const StatusBadge: React.FC<StatusBadgeProps>;

declare const LoadingSpinner: React.FC;

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}
interface State {
    hasError: boolean;
    error?: Error;
}
declare class ErrorBoundary extends Component<Props, State> {
    state: State;
    static getDerivedStateFromError(error: Error): State;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): string | number | boolean | react_jsx_runtime.JSX.Element | Iterable<React.ReactNode> | null | undefined;
}

declare function cn(...inputs: ClassValue[]): string;
declare function formatCurrency(amount: number): string;
declare function formatDate(date: Date | string): string;
declare function truncateText(text: string, maxLength: number): string;

export { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, ErrorBoundary, Footer, Input, LoadingSpinner, Logo, Navbar, SocialLinks, StatusBadge, cn, formatCurrency, formatDate, truncateText };
