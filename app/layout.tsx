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
  description: 'Cybersecurity researcher, systems developer, and network engineer building practical security tools like EncoGuard, EncoPDF, and EncoXaudio.',
  keywords: [
    'Md Sahil Alam',
    'Sahil Alam',
    'Cybersecurity Researcher',
    'Network Security Analyst',
    'Systems Developer',
    'EncoGuard',
    'EncoPDF-Unlocker',
    'EncoXaudio',
    'Jamia Hamdard',
    'Security Tools',
    'Python Developer',
    'Rust Developer',
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
    description: 'Cybersecurity researcher and systems developer building practical security tools — EncoGuard, EncoPDF, EncoXaudio.',
    images: [
      {
        url: '/images/portrait-3.jpg',
        width: 1200,
        height: 630,
        alt: `${PROFILE.name} - Cybersecurity & Systems Researcher`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PROFILE.name} — ${PROFILE.title}`,
    description: 'Cybersecurity researcher and systems developer building practical security tools — EncoGuard, EncoPDF, EncoXaudio.',
    images: ['/images/portrait-3.jpg'],
    creator: '@thesahilalam',
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
