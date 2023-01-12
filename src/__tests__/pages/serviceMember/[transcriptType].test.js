import TranscriptView from "@/pages/serviceMember/transcripts/[transcriptType]";
import { render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';

describe("Transcript Type View Component", () => {
  it("should render the component", () => {
    const { getByText } = render(
        <MemoryRouterProvider>
            <TranscriptView />
        </MemoryRouterProvider>
    );

    expect(getByText('undefined Transcript')).toBeInTheDocument();
    expect(getByText('Request Official Transcript')).toBeInTheDocument();
    expect(getByText('Transcript')).toBeInTheDocument();
    expect(getByText('Return to Transcript Page')).toBeInTheDocument();
    expect(getByText('Download')).toBeInTheDocument();

  });
});