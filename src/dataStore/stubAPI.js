import _ from "lodash";

class StubAPI {
    constructor() {
        this.posts = [
        {
            id: 1,
            title: "Why You Can No Longer Get Lost in the Crowd",
            link: "https://www.nytimes.com/2019/04/17/opinion/data-privacy.html",
            author: "Woodrow Hartzog",
            comments: [],
            upvotes: 10
        },
        {
            id: 2,
            title: "Samsung's folding phone breaks for reviewers",
            link: "https://www.bbc.com/news/technology-47970788",
            author: "Dave Lee",
            comments: [],
            upvotes: 14
        }
        ];
    }

    getAll() {
        return this.posts;
    }

    add(title, author, link) {
        let id = 1;
        let last = _.last(this.posts);
        if (last) {
        id = last.id + 1;
        }
        let len = this.posts.length;
        let newLen = this.posts.push({
        id,
        title,
        author,
        link,
        comments: [],
        upvotes: 0
        });
        return newLen > len;
    }

    upvote(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        if (index !== -1) {
        this.posts[index].upvotes += 1;
        return true;
        }
        return false;
    }

    getPost(id) {
        let index = _.findIndex(this.posts, post => post.id === id);
        let result = index !== -1 ? this.posts[index] : null;
        return result;
    }

    addComment(postId, c, n) {
        let post = this.getPost(postId);
        let id = 1;
        let last = _.last(post.comments);
        if (last) {
        id = last.id + 1;
        }
        post.comments.push({ id: id, comment: c, author: n, upvotes: 0 });
    }

    upvoteComment(postId, commentId) {
        let post = this.getPost(postId);
        let index = _.findIndex(post.comments, c => c.id === commentId);
        if (index !== -1) {
        post.comments[index].upvotes += 1;
        }
    }
}

export default new StubAPI();