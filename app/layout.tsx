import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import CustomCursor from '@/components/CustomCursor';
import { PROFILE } from '@/lib/data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#060608' },
    { media: '(prefers-color-scheme: light)', color: '#f8f9fc' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://thesahilalam.github.io'),
  title: {
    default: `${PROFILE.name} — ${PROFILE.title}`,
    template: `%s | ${PROFILE.name}`,
  },
  description: 'Aspiring Cybersecurity Analyst skilled in Network Security, Penetration Testing, and Web Development. Creator of practical security tools including EncoGuard, EncoPDF, and EncoXaudio.',
  keywords: [
    'Md Sahil Alam',
    'Sahil Alam',
    'Aspiring Cybersecurity Analyst',
    'Cybersecurity Analyst',
    'Network Security',
    'Penetration Testing',
    'Web Development',
    'EncoGuard',
    'EncoPDF-Unlocker',
    'EncoXaudio',
    'Jamia Hamdard',
    'Security Tools',
    'Python Developer',
  ],
  authors: [{ name: PROFILE.name, url: 'https://github.com/thesahilalam' }],
  creator: PROFILE.name,
  publisher: PROFILE.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thesahilalam.github.io',
    siteName: `${PROFILE.name} Portfolio`,
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: 'Aspiring Cybersecurity Analyst skilled in Network Security, Penetration Testing, and Web Development. Creator of practical security tools — EncoGuard, EncoPDF, EncoXaudio.',
    images: [
      {
        url: '/images/portrait-3.jpg',
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} - Aspiring Cybersecurity Analyst`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: 'Aspiring Cybersecurity Analyst skilled in Network Security, Penetration Testing, and Web Development. Creator of practical security tools — EncoGuard, EncoPDF, EncoXaudio.',
    images: ['/images/portrait-3.jpg'],
    creator: '@thesahilalam',
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="antialiased min-h-screen relative selection:bg-blue-500/30 font-sans">
        {/* Global noise overlay for texture */}
        <div className="noise-overlay" />
        
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
