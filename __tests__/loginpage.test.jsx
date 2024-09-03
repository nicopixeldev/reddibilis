import '@testing-library/jest-dom'
import { render, screen, getByTestId } from '@testing-library/react'
import Page from '../app/page'
 
describe('Page', () => {
    describe('Login Page', () => {
        it('renders the email input', () => {
            render(<Page />);
            expect(getByTestId(document, 'email-input')).toBeInTheDocument();
        });
        it('renders the password input', () => {
            render(<Page />);
            expect(getByTestId(document, 'password-input')).toBeInTheDocument();
        });
        it('renders the submit button', () => {
            render(<Page />);
            expect(getByTestId(document, 'submit-button')).toBeInTheDocument();
        });
    });
});