const prendaCtrl = {};
const Prenda = require('../models/Prenda')

prendaCtrl.renderBuscador = (req, res) =>{
    res.render('buscador');
}

prendaCtrl.buscar = async (req, res) =>{
    code = req.body.code
    const prendas = await Prenda.findOne({code: code});
    console.log(prendas);
    if(prendas){
        console.log(prendas._id);
        console.log(prendas.bodyPart);
        res.redirect('/app/id');
    }
    if(prendas==null){
        req.flash('noFindCode_message', 'Prenda no registrada');
        res.redirect('/search');
    }
}

prendaCtrl.renderMostrarPrendas = async(req, res) =>{
    const prenda = await Prenda.findOne({code}); 
    console.log(code);
    res.render('app', { prenda });
}

module.exports = prendaCtrl; 


