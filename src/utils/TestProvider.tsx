import { NextIntlClientProvider } from "next-intl";
import en from "../../messages/en.json";
import es from "../../messages/es.json";

export const TestProvider = ({
  children,
  locale,
}: {
  children: React.ReactElement;
  locale: string;
}) => {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={locale === "en" ? en : es}
    >
      {children}
    </NextIntlClientProvider>
  );
};
