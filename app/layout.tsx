import { ConvexClientProvider } from "@/components/providers/convex-provide";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notion Clone",
  description:
    "A new tool that blends your everyday work apps into one. It's the all-in-one workspace for you and your team.",
  icons: {
    icon: [
      {
        media: "(prefer-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefer-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            storageKey="notion-clone-theme-2"
          >
            <EdgeStoreProvider>{children}</EdgeStoreProvider>
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
