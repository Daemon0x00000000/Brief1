import clientsList from "../data/clients.js";


const isClient = (req,res, next) => {
    if(req.body && req.body.clientMail && clientsList.find(client => client.email === req.body.clientMail)){
        next();
    }else{
        res.status(401).send({message: "Vous n'êtes pas autorisé à accéder à cette ressource"});
    }
}


export default isClient;