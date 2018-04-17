/***** planRouter.js - Plan routes *****/

export const PlanRouter = function(router,passport,planModel,userAuthenticated){
    router.post('/plan', userAuthenticated,
        (req, res) => {     
        planModel.create({userId: req.user.id,                       
                          title: req.body.title,
                          description: req.body.description,           
                        
                        })                                     
        .then((plan) => {          
            res.status(200).send({message: 'Plan successfully saved!'})        
        }).catch(error => {
            console.log(error);
            res.status(406).send({message: 'Plan was not saved!'})
        })
        }
    ); 

    router.get('/plan', userAuthenticated,
        (req, res) => {
            planModel
            .findAndCountAll({
                attributes: ['id','title','description'],
                where: {
                userId: req.user.id
                }
            }).then(result => {
                res.status(200).json({plans: result.rows});
            }).catch(error => {
                res.status(400).send({message:'Bad Request. Plan not sent!'})
            });      
        }
    );

    router.put('/plan', userAuthenticated,
    (req, res) => {
        planModel
        .update(
            {            
              inspirationId: req.body.inspirationId
            },
            {
            where: 
              {
                id: req.body.id
              }
        }).then(result => {
            res.status(200).json({plans: result.rows});
        }).catch(error => {
            res.status(400).send({message:'Bad Request. Plan not updated!'})
        });      
    }
);


    

    return router;
}    