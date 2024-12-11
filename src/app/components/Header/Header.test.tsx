import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { headerSections } from "./utils/headerSections";

const mockedUsedRouter = jest.fn();
jest.mock("next/navigation", () => ({
  usePathname: () => "es",
  useRouter: () => mockedUsedRouter,
  useParams() {
    return {
      params: { locale: "es" },
    };
  },
}));

jest.mock("next-intl", () => ({
  useTranslations: jest.fn(() => (key: string) => key),
}));

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of items", () => {
      render(<Header />);

      headerSections.forEach((section) => {
        const name = screen.getByText(section.name);

        expect(name).toBeInTheDocument();
      });
    });
  });
});
