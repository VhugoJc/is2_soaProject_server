const TravelPackage = require('../models/travelPackageModel');

const addTravelPackage=(req, res)=>{
    const {shortcut, name, date, price, totalPlaces} = req.body;
    const travelPackage = new TravelPackage;

    travelPackage.shortcut=shortcut;
    travelPackage.name=name;
    travelPackage.date=date;
    travelPackage.price=price;
    travelPackage.totalPlaces=totalPlaces;

    travelPackage.save((err, createdTravelPackage)=>{
        if(err){
            res.status(500).send({message: "Error del server"});
        }else{
            if(!createdTravelPackage){
                res.status(400).send({message: "Error al crear"});
            }else{
                res.status(200).send({message: "Creado"});
            }
        }
    })
}

const getAllTravelPackages=(req, res)=>{
    TravelPackage.find().then(packages=>{
        if(!packages){
            res.status(404).send({message: "No se encontraron registros"});
        }else{
            res.status(200).send({packages: packages});
        }
    })
}

const getTravelPackageByShortcut=(req,res)=>{
    const {shortcut} = req.query;
    TravelPackage.find({shortcut:shortcut}).then(packageFound=>{
        if(packageFound.length===0){
            res.status(404).send({message: "No se encontró el paquete"});
        }else{
            res.status(200).send({package: packageFound});
        }
    })
}

module.exports={
    addTravelPackage,getAllTravelPackages, getTravelPackageByShortcut
}