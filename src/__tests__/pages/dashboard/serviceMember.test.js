import { act, fireEvent, render } from "@testing-library/react";
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import ServiceMemberDashboard from "@/pages/dashboard/serviceMember/serviceMemberDashboard";

describe("Card Component", () => {
  it("should render the component", () => {
    const { getByText, getAllByText } = render(
        <MemoryRouterProvider>
            <ServiceMemberDashboard />
        </MemoryRouterProvider>
    );
    expect(getByText('Transcripts')).toBeInTheDocument();
    expect(getByText('Inquiries')).toBeInTheDocument();
    expect(getByText('Degree Agreements')).toBeInTheDocument();
    expect(getByText('Degree Pathways')).toBeInTheDocument();

  });
});
