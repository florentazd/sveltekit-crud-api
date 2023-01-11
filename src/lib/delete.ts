export const deleteUser = async () => {

}
export const deleteUsers = async () => {
    const response = await fetch("/api/users", {
        method: "DELETE"
    })
    return response.status
}