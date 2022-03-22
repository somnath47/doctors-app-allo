const DoctorController = function () {

    const DocImplementation = require('../implementations/DoctorImplementation')

    this.fetchDoctors = async (req, res, next) => {
        try{
            // Validations on request Body and Params

            // On failure send error message with 4xx Status code 
            
            // Finalize the arguments
            
            // For the time being just passing the raw value
            let args = req.body

            // Calling the implementation/business logic layer
            const data = await DocImplementation.fetchAllDoctorsImplementation(args, next)

            // Sending response back to the Client
            res.status(200).json(data)
        } catch (e) {
            // Logging for the time being
            console.log(e)

            // Should be passed to the Error Handeller Middleware for debugging with next(e)
            next(e)

            res.status(500).send("Internal Server Error")
        }
    }

    this.addDoctor = async (req, res, next) => {
        try{
            // Validations on request Body and Params
            
            // Finalize the arguments
            
            // For the time being just passing the raw value
            let args = req.body

            // Calling the implementation/business logic layer
            const data = await DocImplementation.insertDoctorsImplementation(args, next)
            console.log(data)

            // Sending response back to the Client
            res.status(201).send("Created")
        } catch (e) {
            // Logging for the time being
            console.log(e)

            // Should be passed to the Error Handeller Middleware for debugging with next(e)
            next(e)

            res.status(500).send("Internal Server Error")
        }
    }

}

module.exports = new DoctorController()