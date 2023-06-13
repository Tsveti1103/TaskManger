import { render, screen } from '@testing-library/react';
import Navigation from './Navigation'
import { AuthContext } from '../../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
const MockNavigationtWithUser = () => {
    let user = {
        email: "peter77@abv.bg",
        token: "1bfb758ea52e76198c47ac8b8b3323df642492a4",
        user_id: 3,
        username: "Pesho"
    }
    const values = { user }
    return (
        <BrowserRouter>
            <AuthContext.Provider value={values}>
                <Navigation />
            </AuthContext.Provider>
        </BrowserRouter >
    )
}
const MockNavigationtWithoutUser = () => {
    let user = false
    const values = { user }
    return (
        <BrowserRouter>
            <AuthContext.Provider value={values}>
                <Navigation />
            </AuthContext.Provider>
        </BrowserRouter >
    )
}
describe('Navigation', () => {
    test('With user have Logout link', () => {
        render(
            <MockNavigationtWithUser />
        )
        const linkElement = screen.getByText(/Logout/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('With user have Profile link', () => {
        render(
            <MockNavigationtWithUser />
        )
        const linkElement = screen.getByText(/Profile/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('With user have Tasks link', () => {
        render(
            <MockNavigationtWithUser />
        )
        const linkElement = screen.getByText(/Tasks/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('Withoth user have Tasks link', () => {
        render(
            <MockNavigationtWithoutUser />
        )
        const linkElement = screen.getByText(/Tasks/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('Withoth user have Login link', () => {
        render(
            <MockNavigationtWithoutUser />
        )
        const linkElement = screen.getByText(/Login/i);
        expect(linkElement).toBeInTheDocument();
    })
    test('Withoth user have Register link', () => {
        render(
            <MockNavigationtWithoutUser />
        )
        const linkElement = screen.getByText(/Register/i);
        expect(linkElement).toBeInTheDocument();
    })
})