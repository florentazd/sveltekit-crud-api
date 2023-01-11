// import { getSingleUser } from "$lib/getUser";
import type { RequestHandler } from "../$types";
import { json } from "@sveltejs/kit";

// Get a single user from the db
export const GET = (
    ({ params, cookies }) => {
        // Get the user we want to delete id
        const id = params.id;

        // get all users from cookies
        let users = JSON.parse(cookies.get("users") || JSON.stringify([]))

        // filter the user id to get the seach id
        users = users.find((user: any) => {
            return user.id == id
        })
        // Set the cookies in the client side
        // cookies.set("users", JSON.stringify(users), {
        //     expires: new Date(Date.now() + 200000),
        //     path: "/"
        // })
        const status = users ? 200 : 404

        return json(users, {
            status: status
        })
    }
) satisfies RequestHandler

// update a single user from db
export const PUT =
    (
        async ({ params }) => {
            console.log(params);
            return new Response()
        }
    ) satisfies RequestHandler

// Delete single user from the db
export const DELETE =
    (
        async ({ cookies, params }) => {
            // Get the user we want to delete id
            const id = params.id;

            // get all users from cookies
            let users = JSON.parse(cookies.get("users") || JSON.stringify([]))

            // detect if the user is in the array
            const userToDelete = users.find((user: any) => user.id === id)

            // filter the user id to remove the seach id
            users = users.filter((user: any) => {
                return user.id != id
            })

            console.log(users);

            // Set the cookies in the client side
            cookies.set("users", JSON.stringify(users), {
                expires: new Date(Date.now() + 200000),
                path: "/"
            })

            // return a custom response if user was found or not
            const status = userToDelete ? 200 : 304

            return new Response(null, {
                status: status
            })
        }
    ) satisfies RequestHandler