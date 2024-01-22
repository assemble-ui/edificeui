import React from 'react'
import { AddUser } from './components/shared/AddUser'
import { Users } from './components/pages/home/Users'
import { DeleteUser } from './components/shared/DeleteUser'

export const App = () => {
    const name = 'process.env.name'

    return (
        <div className="max-w-xl mx-auto">
            <h1>Hello World my name is {name} and I am 27 years old</h1>
            <Users />
            <div className="p-4 space-y-4 border border-slate-500 rounded-lg">
                <AddUser />
                <DeleteUser />
            </div>
        </div>
    )
}
