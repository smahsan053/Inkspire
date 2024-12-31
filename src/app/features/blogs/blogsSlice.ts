import { client } from '@/sanity/lib/client';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { BlogType } from '../../../../typings';
// import { SanityImageAssetDocument } from 'next-sanity';
// import { userAPI } from './userAPI'

const query = `*[_type=='post'] | order(_createdAt asc){
  summary,title,image,"slug":slug.current
}`;
export const fetchBlogs = createAsyncThunk(
    "blogs/fetchBlogs",
    async (_, { rejectWithValue }) => {
        try {
            // Fetch blogs from the database
            const blogs = await client.fetch(query);
            return blogs;
        } catch (error) {
            if (error instanceof Error) {
                return rejectWithValue(error.message);
            }
            return rejectWithValue('An unknown error occurred');
        }

    }
)
const initialState: BlogType[] = [{
    title: "",
    summary: "",
    slug: "",
    image: null
}
]

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchBlogs.fulfilled, (state, action) => {
            // Add user to the state array
            return action.payload
        })
    },
})

export default blogSlice.reducer;