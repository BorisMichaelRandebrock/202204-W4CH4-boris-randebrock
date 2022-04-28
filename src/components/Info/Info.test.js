import { render, screen } from "@testing-library/react";
import PhoneContext from "../../contexts/PhoneContext";
import Info from "./Info";

describe("Given the Component Info", () => {
  describe("When calling is true", () => {
    test("then it should render the string 'Calling...'", () => {
      const expectedResult = "Calling...";

      render(
        <PhoneContext.Provider value={""}>
          <Info />
        </PhoneContext.Provider>
      );

      const createdSpan = screen.getByText(expectedResult);

      expect(createdSpan.textContent).toEqual(expectedResult);
    });
  });
});
