import { defineField, defineType } from "sanity";

export const comment = defineType({
    name: "comment",
    type: "document",
    title: "Comment",
    fields: [
        defineField({
            name: "name",
            type: "string"
        }),
        // defineField({
        //     name: "Approved",
        //     type: "boolean",
        //     title: "Approved",
        //     description: "Comments won't show on site without approval"
        // }),
        defineField({
            name: "email",
            type: "string"
        }),
        defineField({
            name: "comment",
            type: "text",
            validation: Rule => Rule.min(1).max(500)
        }),
        defineField({
            name: "post",
            type: "reference",
            to: { type: "post" }
        })
    ]
})