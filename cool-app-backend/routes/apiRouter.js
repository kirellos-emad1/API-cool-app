import Api from "../module/apiModule.js";
import  { Router } from "express";

const apiRouter = Router()

apiRouter.route('/').get((req, res)=>{
    Api.find()
    .then(users=> res.json(users))
    .catch(err=> res.status(400).json('Error ' + err))
})

apiRouter.route('/add').post((req, res)=>{
    const API = req.body.API
    const Description = req.body.Description
    const Link = req.body.Link
    const Category = req.body.Category

    const data = new Api ({
        API,
        Description,
        Link,
        Category
    })
    data.save()
    console.log(data)
    .then(() => res.json('API Added'))
    .catch(err => res.status(400).json('Error: ' + err));
})
apiRouter.route('/:id').delete((req, res) => {
    Api.findByIdAndDelete(req.params.id)
      .then(() => res.json('API deleted.'))
      .catch(err => res.status(400).json('Error: ' + err));
});




export default apiRouter
