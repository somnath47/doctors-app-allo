const DoctorController = function () {

    const DocImplementation = require('../implementations/DoctorImplementation')

    this.fetchDoctors = async (req, res, next) => {
        try{
            // Validations on request Body and Params
            
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
        }
    }

}

module.exports = new DoctorController()