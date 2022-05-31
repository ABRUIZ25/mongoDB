let getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {

    const sortParams = {}
    sortParams[sortField] = sortOrder

    const filterParams = {}
    filterParams[filterField] = filterValue

    const dbResult = db.posts.find(filterParams).limit(limit).skip(skip).sort(sortParams).toArray()

    return dbResult
}

console.log(getPosts(10, 0, "createdAt", 1, "author", "Jacqueline Hudson"))



let findSingleBlog = (blogKey, blogValue) => {


    const singleBlog = db.posts.find(
        { [blogKey]: blogValue }).toArray()

    return singleBlog
}


console.log(findSingleBlog('categor', 1))

let getPostsCollectionLength = () => {
    let ammountOfPosts = db.posts.find({}).toArray().length

    return ammountOfPosts
}
console.log(getPostsCollectionLength())


let getPostsCollectionLength = () => {
    let ammountOfPosts = db.posts.find({}).toArray().length + 1

    return ammountOfPosts
}



let makePost = (title, text, author, category) => {

    let creatPost = db.posts.insertOne(
        {
            createdAt: new ISODate(),
            lastModified: ISODate(),
            title: title,
            text: text,
            author: author,
            category: category,
            id: getPostsCollectionLength()
        })
    return creatPost
}
console.log(makePost('test', 'test', 'test', 'test'))




let findSingleBlog = (singleBlogId,) => {


    const singleBlog = db.posts.find(
        { id: singleBlogId }).toArray()

    return singleBlog
}



let updatePost = (findSingleBlog, title, text, author, category) => {
    let updatedBlog = db.posts.update(
        { id: findSingleBlog },
        {
            $set: {
                title: title,
                text: text,
                author: author,
                category: category
            }
        },

    )
    return updatedBlog
}
console.log(updatePost(1, 'new test', 'test', 'test', 'test'))





let deleteBlogs = (blogKey, blogValue) => {


    const deletedBlog = db.posts.deleteOne(
        { [blogKey]: blogValue })

    return deletedBlog
}

console.log(deleteBlogs('id', 50))