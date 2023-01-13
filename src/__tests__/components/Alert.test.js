import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import { act, fireEvent, render } from "@testing-library/react";
import Alert from '@/components/Alert';

describe("Alert Component", () => {
    
    it("should render the component", () => {
        const { getByText } = render(
            <MemoryRouterProvider>
                <Alert />
            </MemoryRouterProvider> );
            
        expect(getByText("Alert")).toBeInTheDocument();
        expect(getByText("Close")).toBeInTheDocument();

        const button = getByText('Close');
        act(() => {
            fireEvent.click(button);
        });
    });
});
