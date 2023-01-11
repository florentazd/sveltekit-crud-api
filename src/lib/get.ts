export const getUsers = async () => {
    const response = await fetch("/api/users")
    const users = await response.json()
    return users;
}

export const getUser = async (id: number) => {
    const response = await fetch("/api/users/" + id)
    const user = await response.json()
    return user;
}