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
    initAuth: () => Promise<void>
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
            // 应用启动时检查本地 token 并恢复登录态
            initAuth: async () => {
                const storedToken =
                    localStorage.getItem('user_token') ||
                    get().token
                if (!storedToken) return
                // 确保 Axios 拦截器能读到 token
                if (!localStorage.getItem('user_token')) {
                    localStorage.setItem('user_token', storedToken)
                }
                if (!get().token) {
                    set({ token: storedToken })
                }
                await get().fetchCurrentUser()
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
