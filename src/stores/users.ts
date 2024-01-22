import { create } from 'zustand'
import { TUser, TUsersState } from '../types/TUser'

export const useUsersStore = create<TUsersState>((set, get) => ({
    users: [],
    loading: false,
    addUser: (user: TUser) => {
        if (!user) return
        const state = get()
        const existingUser = state.users.find((u) => u.email === user.email)
        if (existingUser) return
        set((state) => ({
            users: [...state.users, user],
        }))
    },
    deleteUser: (userId: string) => {
        set((state) => ({
            users: state.users.filter((u) => u.id.toString() !== userId),
        }))
    },
}))
