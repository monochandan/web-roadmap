import {Post} from "../models/post.model.js";

const createPost = async (request, response)  => {
    try {
        const {name, description, age} = request.body;

        if(!name ||!description || !age){
            return response.status(400).json({
                message: "All fields are reuqired"
            });
        }

        const post = await Post.create({
            name,
            description,
            age
        });

        response.status(201).json({
            message: "Post created successfully",
            post
        });

    } catch (error) {
        response.status(500).json({
            message: "Internal server error",
            error
        });
    }
}

// get the post
const getPost = async (request, response) => {
    try {
        const getpost = await Post.find();
        response.status(200).json({getpost});
    } catch (error) {

        response.status(500).json({
            message: "Internal server error",
            error
        });
    }
}

const updatePost = async (request, response) => {
    try {
        // basic validation for checking empty

        // {name: value, description: value, age: value} -> [name, description, age]
        // {} -> truthy value
        if(Object.keys(request.body) === 0){
            return response.status(400).json({
                message: "No data provided for update."
            });
        }

        const post = await Post.findByIdAndUpdate(request.params.id, request.body, { new : true});

        if(!post) return response.status(404).json({
            message: "Post not found"
        })
        response.status(200).json({
            message: "Post updated successfully",
            post
        });
    } catch (error) {
        response.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

const deletePost = async (request, response) => {
    try {
        const deleted = await Post.findByIdAndDelete(request.params.id);
        
        if(!deleted){
            return response.status(404).json({
                message: "Post not found"
            });
        }

        return response.status(200).json({
            message: "Post has been deletede"
        });
        
    } catch (error) {
        response.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

export {
    createPost,
    getPost,
    updatePost,
    deletePost,
};