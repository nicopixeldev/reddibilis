import '@testing-library/jest-dom'
import { render, screen, getByTestId } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
    describe('Homepage', () => {
        it('renders a heading', () => {
            render(<Page />);
            expect(getByTestId(document, 'main-description')).toBeInTheDocument();
        });
        it('renders the login Link', () => {
            render(<Page />);
            expect(getByTestId(document, 'link-login')).toBeInTheDocument();
        });
        it('renders the main desktop image', () => {
            render(<Page />);
            expect(getByTestId(document, 'image-desktop')).toBeInTheDocument();
        });
        it('renders a main mobile image', () => {
            render(<Page />);
            expect(getByTestId(document, 'image-mobile')).toBeInTheDocument();
        });
        it('renders a heading', () => {
            render(<Page />);
            expect(getByTestId(document, 'main-description')).toBeInTheDocument();
        });
    });
})