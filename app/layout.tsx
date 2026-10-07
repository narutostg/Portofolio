import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Naruto Sitanggang — Software Engineer',
  description: 'Software engineering student at ITS focused on backend systems, full-stack development, and the infrastructure behind useful products.',
  applicationName: 'Naruto Sitanggang Portfolio',
  openGraph: {
    title: 'Naruto Sitanggang — Software Engineer',
    description: 'Backend · Full-Stack · DevOps. Portfolio of academic and applied software projects.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
