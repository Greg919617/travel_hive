/***** inspirationRouter.js - Inspiration routes *****/

export const InspirationRouter = function(router,passport,inspirationModel,userAuthenticated){
    router.post('/inspiration', userAuthenticated,
        (req, res) => {     
        inspirationModel.create({userId: req.user.id,
                                 image: req.body.image,
                                 title: req.body.title,
                                 description: req.body.description,
                                 attribution: req.body.attribution,
                                 location: req.body.location
                                })                                     
        .then((inspiration) => {          
            res.status(200).send({message: 'Inspiration successfully saved!'})        
        }).catch(error => {
            console.log(error);
            res.status(406).send({message: 'Inspiration was not saved!'})
        })
        }
    ); 

    router.get('/inspiration', userAuthenticated,
        (req, res) => {
            inspirationModel
            .findAndCountAll({
                attributes: ['id','image','title','description','attribution'],
                where: {
                userId: req.user.id
                }
            }).then(result => {
                res.status(200).json({inspirations: result.rows});
            }).catch(error => {
                res.status(400).send({message:'Bad Request. Inspirations not sent!'})
            });      
        }
    );
    return router;
}    