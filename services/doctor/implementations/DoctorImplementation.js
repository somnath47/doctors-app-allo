const DoctorImplementation = function () {

    // const { PrismaClient } = require('@prisma/client')
    // const prisma = new PrismaClient()
    const DocModel = require('../models/DoctorModel')

    this.fetchAllDoctorsImplementation = async (params, next) => {
        try{
           
            let data

            // Calling the model layer
            data = await DocModel.fetchAllDoctors(params)
            
            // Do some operations on the data 
            
            // Return the data
            return data
        } catch (e) {
            // Logging for the time being
            console.log(e)

            // Should be passed to the Error Handeller Middleware for debugging with next(e)
            next(e)
        }
    }

    this.insertDoctorsImplementation = async (params, next) => {
        try{
            // For temporaty insertions purpose (Dev)
            return await DocModel.insertDoctorInfo(params)
        } catch (e) {
            // Logging for the time being
            console.log(e)

            // Should be passed to the Error Handeller Middleware for debugging with next(e)
            next(e)
        }
    }

}

module.exports = new DoctorImplementation()