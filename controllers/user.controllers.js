

function getHome(req,res){
    res.render('user/home');

}

function getAbout(req,res){
    res.render('user/about');
}

function getProjects(req,res){
    res.render('user/projects');
}

function getContact(req,res){
    res.render('user/contact');
}
module.exports={
    getHome:getHome,
    getAbout:getAbout,
    getProjects:getProjects,
    getContact:getContact,
}