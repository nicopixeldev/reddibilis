import '@testing-library/jest-dom'
import { render, screen, getByTestId } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
    describe('/panel/inversiones Page', () => {
        it('renders the inversiones list', () => {
            render(<Page />);
            expect(getByTestId(document, 'inversiones-list')).toBeInTheDocument();
        });
        it('renders the search box for inversiones', () => {
            render(<Page />);
            expect(getByTestId(document, 'inversiones-search-box')).toBeInTheDocument();
        });
        it('renders the main metrics for inversiones', () => {
            render(<Page />);
            expect(getByTestId(document, 'inversiones-main-metrics')).toBeInTheDocument();
        });
    });
});
