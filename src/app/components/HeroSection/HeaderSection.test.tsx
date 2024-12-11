import { render, screen, act } from "@testing-library/react";
import HeroSection from "./HeroSection";

jest.useFakeTimers();

describe("Given a HeroSection component", () => {
  describe("When it is rendered", () => {
    render(<HeroSection />);
    test("Then it should render the initial state for the compo & the logo", () => {
      expect(screen.queryByText("Hola,")).not.toBeInTheDocument();

      const image = screen.getByAltText("logo colors");
      expect(image).toBeInTheDocument();
      expect(image).toHaveClass("rounded-full shadow-3d");
    });

    test("Then it should write the first line 'Hola,'", () => {
      render(<HeroSection />);

      act(() => {
        jest.advanceTimersByTime(500);
      });

      expect(screen.getByText("Hola,")).toBeInTheDocument();
    });
  });
});
