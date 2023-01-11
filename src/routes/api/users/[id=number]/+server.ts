// import { getSingleUser } from "$lib/getUser";
import type { RequestHandler } from "../$types";
import { json } from "@sveltejs/kit";

// Get a single user from the db
export const GET = (
    ({ params }) => {
        // return json(getSingleUser(params.id))
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
        async () => {
            return new Response("user deleted", {
                status: 200
            })
        }
    ) satisfies RequestHandler