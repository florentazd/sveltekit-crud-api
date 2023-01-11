export const createUser = async (username: string, password: string) => {
    const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
            username: username,
            password: password
        })
    })

    return response.status
}
