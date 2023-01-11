import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

// Get all users form the DB
export const GET =
    (
        async ({ params, url, cookies, request }) => {
            // Get all registred users from the client cookies
            const users = JSON.parse(cookies.get("users") || JSON.stringify([]));

            // Create a json response
            const res = json(users)

            // Set this response to the client.
            return res;
        }
    ) satisfies RequestHandler;

// Create a new user
export const POST =
    (
        async ({ request, cookies }) => {
            // Get [username and password] data from the body
            const { username, password } = await request.json()

            // Then get all users stored into the client cookies
            const users = JSON.parse(cookies.get("users") || JSON.stringify([]))

            // Get the last registred user [id] from the client
            const newId = users.length > 0 ? users[users.length - 1].id + 1 : 0

            // Create the users update
            const newUsers = users.length > 0 ?
                [...users, { id: newId, username: username, password: password }] :
                [{ id: newId, username: username, password: password }]

            // Add the new user data
            cookies.set(
                "users",
                JSON.stringify(newUsers),
                {
                    expires: new Date(Date.now() + 2000000),
                    path: "/"
                }
            )
            return new Response();
        }
    ) satisfies RequestHandler

// delete all users
export const DELETE =
    (
        async ({ cookies }) => {
            // delete all user saved in the cookie
            const users = JSON.parse(cookies.get("users") || JSON.stringify([]))
            cookies.delete("users")
            return users.length > 0 ? new Response(null, { status: 200 }) :
                new Response(null, { status: 204 })
        }
    ) satisfies RequestHandler;