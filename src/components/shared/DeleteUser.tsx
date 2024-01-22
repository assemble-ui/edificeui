import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useUsersStore } from '../../stores/users'

export const DeleteUser = () => {
    const [userId, setUserId] = React.useState('')

    const deleteUser = useUsersStore((state) => state.deleteUser)
    return (
        <>
            <Input
                type="text"
                placeholder="Enter user id"
                onChange={(e) => setUserId(e.target.value)}
            />
            <Button onClick={() => deleteUser(userId)}>Delete</Button>
        </>
    )
}
