export const deleteUser = async (id: number) => {
    const response = await fetch("/api/users/" + id, {
        method: "DELETE"
    })
    return response.status
}
export const deleteUsers = async () => {
    const response = await fetch("/api/users", {
        method: "DELETE"
    })
    return response.status
}