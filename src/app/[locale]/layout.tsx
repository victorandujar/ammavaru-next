import "../globals.css";
import Header from "../components/Header/Header";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { Montserrat } from "next/font/google";
import { getMessages } from "../helpers/getMessages";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "400", "700", "900"],
});

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  const messages = await getMessages(locale, notFound);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
