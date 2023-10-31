const express=require('express');
const router=express.Router();

const userRoutes=require('../controllers/user.controllers');

router.get('/',userRoutes.getHome);

router.get('/about',userRoutes.getAbout);

router.get('/projects',userRoutes.getProjects);

router.get('/contact',userRoutes.getContact);

module.exports=router;