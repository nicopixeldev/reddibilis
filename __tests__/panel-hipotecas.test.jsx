import '@testing-library/jest-dom'
import { render, screen, getByTestId } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
    describe('/panel/hipotecas Page', () => {
        it('renders the hipotecas list', () => {
            render(<Page />);
            expect(getByTestId(document, 'hipotecas-list')).toBeInTheDocument();
        });
        it('renders the search box for hipotecas', () => {
            render(<Page />);
            expect(getByTestId(document, 'hipotecas-search-box')).toBeInTheDocument();
        });
        it('renders the main metrics for hipotecas', () => {
            render(<Page />);
            expect(getByTestId(document, 'hipotecas-main-metrics')).toBeInTheDocument();
        });
    });
});