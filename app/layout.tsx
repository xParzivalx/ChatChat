import '@/styles/globals.css';
import 'tippy.js/dist/tippy.css';

import { ClerkProvider } from '@clerk/nextjs';
import { esES } from "@clerk/localizations";
import { dark } from '@clerk/themes';
import type { Metadata, Viewport } from 'next';
import { Onest } from 'next/font/google';

import RootProvider from '@/app/provider';

const onest = Onest({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'NotasAI Chat',
    description: 'NotasAI Chat - Desbloquea conversaciones de otro nivel con IA en español',
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'NotasAI Chat',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
    userScalable: true,
};

export default function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    return (
        <ClerkProvider 
        localization={esES}
        appearance={{
            baseTheme: dark,
            elements: {
              footer: "hidden",
            },
          }}>
            <html lang={locale} className={onest.className} suppressHydrationWarning>
                <RootProvider>
                    <body>{children}</body>
                </RootProvider>
            </html>
        </ClerkProvider>
    );
}
