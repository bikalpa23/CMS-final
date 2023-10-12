const { connectDatabase } = require("./database/database");
const Blog = require("./model/blog");
const express = require("express")
const app = express();

//nodejs lai form bat arko data parse gara vaneko
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// DATABASE CONNECTION FUNCTION
connectDatabase()


// GET API -> 
app.get("/", (req, res) => {
    res.json({
        status: 200,
        message: "Succcess"
    })
})

//Get API all blogs
app.get("/blogs", async (req, res) => {

    //fetching all blogs from Blog
    const blogs = await Blog.find() // check if blog contains data or not
    if (blogs.length == 0) {
        res.sendStatus(404).json({
            message: "Empty Blogs"
        })
    } else {
        res.json({
            status: 200,
            message: "Blogs feteched",
            data: blogs
        })
    }
})

//Read Blog
//Single Get API  /blogs/:id
app.get("/blogs/:id", async (req, res) => {
    const id = req.params.id
    //const{id} = req.params => alternative way
    // const blog = await Blog.find({_id : id})
    // if (blog.length == 0) {
    //     res.status(404).json({
    //         message: "NO blogs detected"
    //     })
    // } else {

    //     // Alternative
    //     res.status(200).json({
    //         message: "Blog Feteched Success",
    //         data: blog
    //     })
    // }
    const blog = await Blog.findById(id)
    if (blog) {
        res.status(200).json({
            message: "blog fetched success",
            data: blog
        })
    } else {
        res.status(404).json({
            message: "No Blog Found"
        })
    }
})

//Create BLOG API
app.post("/blogs", async (req, res) => {
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description;

    // Destructing mathi ko const haru 
    // const {title,subTitle, description} =req.body 

    //Database ma insert garney data haru
    await Blog.create({
        title: title,
        subTitle: subTitle,
        description: description
    })


    res.json({
        status: 201,
        message: "Blog crated sucess"
    })
    // Alternative 
    // res.status(200).json({
    //     message : "Blog created successfully"
    // })
})


//Update Blog API
app.patch("/blogs/:id", async (req, res) => {
    const id = req.params.id
    const title = req.body.title
    const subTitle = req.body.subTitle
    const description = req.body.description

    await Blog.findByIdAndUpdate(id, {
        title: title,
        subTitle: subTitle,
        description: description
    })
    res.status(200).json({
        message: "Bog Updated Sucessfully"
    })
})


// Delete API
app.delete("/blogs/:id", async (req, res) => {
    const id = req.params.id
    await Blog.findByIdAndDelete(id)

    res.status(200).json({
        message: "Blog Deleted Sucessfully"
    })
})

app.listen(2000, () => {
    console.log("Nodejs has started at port 2000")
})