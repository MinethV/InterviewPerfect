import { useAuth0 } from '@auth0/auth0-react';

const profile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
                <article  className='column'>
                        {JSON.stringify(user)}
                </article>
        )
    )
}

export default profile
