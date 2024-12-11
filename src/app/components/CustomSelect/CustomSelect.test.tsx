import { render, screen } from "@testing-library/react";
import CustomSelect from "./CustomSelect";
import userEvent from "@testing-library/user-event";

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

describe("Given a CustomSelect component", () => {
  describe("When it is rendered and it is clicked", () => {
    test("Then it should show a list with ES & EN", async () => {
      const options = ["ES", "EN"];

      render(<CustomSelect />);

      const selectButton = screen.getByRole("button");

      await userEvent.click(selectButton);

      options.forEach((option) => {
        const elements = screen.getAllByText(option);
        const dropdownItem = elements.find(
          (element) => element.tagName === "LI",
        );

        expect(dropdownItem).toBeInTheDocument();
      });
    });
  });
});
