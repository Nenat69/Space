import { Comment, Post, Subreddit } from "@prisma/client";

export type ExtendedPosts = Post & {
    subreddit: Subreddit
    votes: Vote[]
    author: User
    comments: Comment[]
}