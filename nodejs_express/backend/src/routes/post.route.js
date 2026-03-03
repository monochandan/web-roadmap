import {Router} from 'express';

import {createPost, getPost, updatePost, deletePost} from '../controller/post.controller.js';

const router = Router();

// post, users post from post.controller.js
router.route('/create').post(createPost);

// get posts
router.route('/get').get(getPost);

// update post
// patch -> updating some data
router.route('/update/:id').patch(updatePost);

// delete post
router.route('/delete/:id').delete(deletePost);

export default router;