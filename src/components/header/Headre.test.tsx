import React from "react";
import { cleanup, render } from "@testing-library/react";
import Header from './Header';

describe('<Header />', () => {
    afterEach(cleanup);

    it('Renders correctly', () => {
        const { getByText } = render(<Header />)
        const title = getByText(/Dynamic Charts/i);
    
        expect(title).toBeInTheDocument();
        
    });
});
