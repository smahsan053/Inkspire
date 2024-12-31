import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
    name: "post",
    type: "document",
    title: "Post",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "Post Title",
            hidden: false,
            readOnly: false,
            description: "Write a catchy title for your blog",
            initialValue: "My Title",
            validation: (Rule) =>
                Rule.required().error("Title is required").min(5).warning("Title must be at least 5 characters long").max(50).warning("Title should not exceed 50 characters"),
        }),
        defineField({
            name: "gender",
            type: "string",
            title: "Gender",
            options: {
                list: [
                    { title: "Male", value: "male" },
                    { title: "Female", value: "female" },
                ],
                layout: "radio",
                direction: "horizontal",
            },
            validation: (Rule) =>
                Rule.required().error("Please select a gender"),
        }),
        defineField({
            name: "slug",
            type: "slug",
            title: "Slug",
            options: {
                source: "title",
                maxLength: 50
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "summary",
            type: "text",
            title: "Summary",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "image",
            type: "image",
            title: "Image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "content",
            type: "array",
            title: "Content",
            of: [
                defineArrayMember({
                    type: "block"
                })
            ]
        }),
        defineField({
            name: "author",
            type: "reference",
            title: "Author",
            to: [{ type: "author" }]
        })
    ],
});
