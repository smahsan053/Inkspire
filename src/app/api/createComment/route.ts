import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";

// POST handler for creating a comment
export async function POST(req: Request) {
    try {
        const { _id, name, email, comment } = await req.json(); // Parse the JSON body

        await client.create({
            _type: "comment",
            post: {
                _type: "reference",
                _ref: _id, // Reference the post ID
            },
            name,
            email,
            comment,
        });

        console.log("Comment Submitted");
        return NextResponse.json({ message: "Comment Submitted" }, { status: 200 });
    } catch (error) {
        console.error("Error submitting comment:", error);
        return NextResponse.json(
            { message: "Couldn't submit comment", error },
            { status: 500 }
        );
    }
}
