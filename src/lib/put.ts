export const updateUser = async (id: number, username: string, password: string) => {
    const response = await fetch("/api/users/" + id, {
        method: "POST",
        body: JSON.stringify(
            {
                username: username,
                password: password
            }
        )
    })
    return response.status
}