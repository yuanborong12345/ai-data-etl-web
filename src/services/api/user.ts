import type {
    UserLoginRequest,
    UserRegisterRequest,
    UserUpdateRequest,
    UserAdminEditRequest,
    UserQueryRequest,
    LoginUserVO,
    UserVO,
} from '../../types/user'
import request from '../request'

export function register(data: UserRegisterRequest): Promise<number> {
    return request.post('/user/register', data)
}

export function login(data: UserLoginRequest): Promise<LoginUserVO> {
    return request.post('/user/login', data)
}

export function getCurrentUser(): Promise<UserVO> {
    return request.get('/user/current')
}

export function logout(): Promise<void> {
    return request.post('/user/logout')
}

export function updateUser(data: UserUpdateRequest): Promise<void> {
    return request.post('/user/update', data)
}

export function adminEditUser(data: UserAdminEditRequest): Promise<void> {
    return request.post('/user/admin/edit', data)
}

export function getUserList(data: UserQueryRequest): Promise<UserVO[]> {
    return request.post('/user/list', data)
}
