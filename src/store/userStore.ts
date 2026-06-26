import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import type { LoginUserVO, UserVO, UserUpdateRequest } from '../types/user'
import * as userApi from '../services/api/user'

interface UserState {
    currentUser: LoginUserVO | UserVO | null
    token: string | null
    isLoggedIn: boolean
    loading: boolean

    login: (data: { userAccount: string; userPassword: string }) => Promise<void>
    logout: () => Promise<void>
    fetchCurrentUser: () => Promise<void>
    updateProfile: (data: UserUpdateRequest) => Promise<void>
    clearUser: () => void
}

const useUserStore = create<UserState>()(
    persist(
        (set, get) => ({
            currentUser: null,
            token: null,
            isLoggedIn: false,
            loading: false,
            // 登录
            login: async (data) => {
                const user = await userApi.login(data)
                localStorage.setItem('user_token', user.token)
                set({
                    currentUser: user,
                    token: user.token,
                    isLoggedIn: true,
                })
            },
            //退出登录
            logout: async () => {
                try {
                    await userApi.logout()
                } finally {
                    get().clearUser()
                }
            },
            //获取当前用户
            fetchCurrentUser: async () => {
                try {
                    const user = await userApi.getCurrentUser()
                    set({
                        currentUser: user,
                        isLoggedIn: true,
                    })
                } catch {
                    get().clearUser()
                }
            },
            //更新用户信息
            updateProfile: async (data) => {
                await userApi.updateUser(data)
                await get().fetchCurrentUser()
            },
            //清除token
            clearUser: () => {
                localStorage.removeItem('user_token')
                set({
                    currentUser: null,
                    token: null,
                    isLoggedIn: false,
                })
            },
        }),
        // persist 持久化配置块
        {
            name: 'user-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({ token: state.token }),
        }
    )
)

export default useUserStore
