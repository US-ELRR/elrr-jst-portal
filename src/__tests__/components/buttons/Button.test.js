import { act, fireEvent, render } from "@testing-library/react";
import Button from "@/components/buttons/Button";

describe("Button Component", () => {
  it("should render the component", () => {
    const { getByText } = render(<Button btnText={"Test Button"} link={"www.google.com"} />);
    expect(getByText(/Test Button/i)).toBeInTheDocument();
    
    const button = getByText('Test Button');
    act(() => {
        fireEvent.click(button);
    });
  });

});