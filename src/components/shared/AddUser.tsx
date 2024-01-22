import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useUsersStore } from '../../stores/users'
import { TUser } from '../../types/TUser'
export const AddUser = () => {
    const addUser = useUsersStore((state) => state.addUser)

    const [user, setUser] = useState<TUser>({
        id: Math.random(),
        name: '',
        email: '',
        created_at: new Date(Date.now()),
        updated_at: new Date(Date.now()),
    })
    return (
        <div className="flex flex-col w-full gap-4">
            <Input
                placeholder="Name"
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUser({ ...user, name: e.target.value })
                }}
            />
            <Input
                placeholder="Email"
                type="email"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUser({ ...user, email: e.target.value })
                }}
            />
            <Button variant="outline" onClick={() => addUser(user)}>
                AddUser{' '}
            </Button>
        </div>
    )
}
