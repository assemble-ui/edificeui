export type TUser = {
    id: number
    name: string
    email: string
    created_at: Date
    updated_at: Date
}

export type TUsersState = {
    users: TUser[]
    loading: boolean
    addUser: (user: TUser) => void
    deleteUser: (userId: string) => void
}
