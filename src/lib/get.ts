export const getUsers = async () => {
    const response = await fetch("/api/users")
    const users = await response.json()
    return users;
}

export const getUser = async (id: number) => {
    let response
    try {
        response = await fetch("/api/users/" + id)
        const user = await response.json()
        return {
            u: user,
            status: response.status
        }
    } catch {
        return {
            status: 404
        }
    }
    ;
}