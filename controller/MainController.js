const main = {
    index:(req, res) =>{
        res.render('index');
    },
    contact:(req, res) => {
        res.render('contact');
    },
    about:(req, res ) =>{
        res.render('about');
    },
    address:(req, res) => {
        res.render('address');
    },
    pogi:(req, res) => {
        res.render('pogi');
    }


}
module.exports = main;