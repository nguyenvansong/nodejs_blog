
class NewControllers {

    //[GET]/news
    index(req,res){
        res.render('news');
    }

    show(req,res){
        res.send("NEW...");
    }
}

module.exports = new NewControllers;