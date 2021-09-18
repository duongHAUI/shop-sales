
class SingnController{
    sign(req,res,next){
        res.render('register');
    }
}

module.exports = new SingnController;