import { useAuth0 } from '@auth0/auth0-react';

export const Logoutbutton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button onClick={() => logout()}>
                Sign Out
            </button>
        )
    )
}

