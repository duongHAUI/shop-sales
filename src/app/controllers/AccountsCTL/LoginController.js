

class LoginController{
    login(req,res,next){
        res.render('login');
    }
}

module.exports = new LoginController;