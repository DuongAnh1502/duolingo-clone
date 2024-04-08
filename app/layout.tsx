import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    icons: "/mascot.svg",
    title: "Duolingo",
    description: "Duolingo",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang='en'>
                <body className={font.className}>{children}</body>
            </html>
        </ClerkProvider>
    );
}
