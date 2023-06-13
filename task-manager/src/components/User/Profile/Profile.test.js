import { fireEvent, render, screen } from '@testing-library/react';
import Profile from './Profile';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthContext';


describe('Profile page', () => {
    test('Showing User email', () => {
        let user = {
            email: "peter77@abv.bg",
            token: "1bfb758ea52e76198c47ac8b8b3323df642492a4",
            user_id: 3,
            username: "Pesho"
        }
        render(
            <BrowserRouter>
                <AuthContext.Provider value={{user}}>
                    <Profile />
                </AuthContext.Provider>
            </BrowserRouter >
        );
        const headingElement = screen.getByRole("heading", { name: /peter77@abv.bg/i });
        expect(headingElement).toBeInTheDocument();
    });
    test('Showing User username', () => {
        let user = {
            email: "peter77@abv.bg",
            token: "1bfb758ea52e76198c47ac8b8b3323df642492a4",
            user_id: 3,
            username: "Pesho"
        }
        render(
            <BrowserRouter>
                <AuthContext.Provider value={{user}}>
                    <Profile />
                </AuthContext.Provider>
            </BrowserRouter >
        );
        const headingElement = screen.getByRole("heading", { name: /Pesho/i });
        expect(headingElement).toBeInTheDocument();
    });
})