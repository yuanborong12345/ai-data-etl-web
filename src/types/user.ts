
export interface BaseResponse<T> {
    code: number
    data: T
    message: string
}

export interface LoginUserVO {
    id: number
    userAccount: string
    userName: string
    userAvatar: string
    userProfile: string
    userRole: string
    createTime: string
    token: string
}

export interface UserVO {
    id: number
    userAccount: string
    userName: string
    userAvatar: string
    userProfile: string
    userRole: string
    createTime: string
    status: number
}

export interface UserLoginRequest {
    userAccount: string
    userPassword: string
}

export interface UserRegisterRequest {
    userAccount: string
    userPassword: string
    checkPassword: string
}

export interface UserUpdateRequest {
    userName?: string
    userAvatar?: string
    userProfile?: string
}

export interface UserAdminEditRequest {
    userId: number
    userName?: string
    userAvatar?: string
    userProfile?: string
    userRole?: string
    status?: number
}

export interface UserQueryRequest {
    id?: number
    userAccount?: string
    userName?: string
    userRole?: string
    status?: number
    pageNum: number
    pageSize: number
}
