import React from "react";
import { cleanup, render } from "@testing-library/react";
import ModelsList from './ModelsList';

const modelsListProps = {
    handleClick: jest.fn(),
    charts: []
};

describe('<ModelsList />', () => {
    afterEach(cleanup);

    it('Renders list of available equities', () => {
        const { getByText } = render(<ModelsList {...modelsListProps} />)
        const availableModels = getByText(/Available equities/i);
        const apple = getByText(/AAPL/i);
        const tesla = getByText(/TSLA/i);
        const microsoft = getByText(/MSFT/i);

        expect(availableModels).toBeInTheDocument();
        expect(apple).toBeInTheDocument();
        expect(tesla).toBeInTheDocument();
        expect(microsoft).toBeInTheDocument();
    });
});
