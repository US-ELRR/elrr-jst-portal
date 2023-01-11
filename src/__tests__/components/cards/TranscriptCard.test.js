import { act, fireEvent, render } from "@testing-library/react";
import TranscriptCard from "@/components/cards/TranscriptCard";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("TranscriptCard Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <TranscriptCard title={"Test title"} description={"description"} type={"complete"}/>
        </MemoryRouterProvider>
    );
    expect(getByText(/Test title/i)).toBeInTheDocument();
    expect(getByText(/description/i)).toBeInTheDocument();

    const button = getByText('Download');
    act(() => {
        fireEvent.click(button);
    });

  });
});