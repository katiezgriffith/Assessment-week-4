const jobs = require('./db.json')
globalId= 8


module.exports ={
    getJobs:(req, res) => res.status(200).send(jobs),
    deleteJobs:(req, res) => {
        let index= jobs.findIndex(elem => elem.id === +req.params.id)
        jobs.splice(index, 1)
        res.status(200).send(jobs)
    },
    createJobs:(req,res) => {
        let {job, salary,imageURL} = req.body
        let newJob = {
            id:globalId,
            job,
            salary,
            imageURL,
            
        }
        jobs.push(newJob)
        res.status(200).send(jobs)
        globalId++
    },
    updateJobs: (req, res) => {
        let {id} = req.params
        let {type}= req.body
        let index = jobs.findIndex(elem => +elem.id === +id)

        // if(jobs[index].salary === 0 && type === "minus"){
        //   res.status(400).send('Cannot reduce below 0')
        // } else if (
        //     jobs[index].salary ++){
        //     res.status(200).send(jobs)
        // }else{
        //     res.sendStatus(400)

        if (jobs[index].salary <= 10000 && type === 'minus') {
            jobs[index].salary = 100000
            res.status(200).send(jobs)
        } else if (type === 'plus') {
            jobs[index].salary += 1000
            res.status(200).send(jobs)
        } else if (type === 'minus') {
            jobs[index].salary -= 1000
            res.status(200).send(jobs)
        } else {
            res.sendStatus(400)
        }
    }
}


