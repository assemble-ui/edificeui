import React from 'react'
import { useUsersStore } from '../../../stores/users'

export const Users = () => {
    const allUsers = useUsersStore((state) => state.users)
    return (
        <>
            <pre>{JSON.stringify(allUsers, null, 2)}</pre>
        </>
    )
}
