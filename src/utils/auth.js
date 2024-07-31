let isAuthenticated = false
let userInfo = null

export async function checkAuth() {
    const storedUserInfo = localStorage.getItem('userInfo')
    if (storedUserInfo) {
        userInfo = JSON.parse(storedUserInfo)
        isAuthenticated = true
    } else {
        isAuthenticated = false
        userInfo = null
    }
    return isAuthenticated
}

export function getUserInfo() {
    return userInfo || { name: 'Guest', avatar: '/images/default-avatar.png' }
}

export async function login(googleUser) {
    isAuthenticated = true
    userInfo = {
        name: googleUser.name,
        avatar: googleUser.imageUrl,
        email: googleUser.email,
        phone: null
    }
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}

export function logout() {
    isAuthenticated = false
    userInfo = null
    localStorage.removeItem('userInfo')
}

export function register(phone) {
    if (userInfo) {
        userInfo.phone = phone
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
    }
}

export function isPhoneBound() {
    return userInfo && userInfo.phone !== null
}

// 初始化
checkAuth()