const DoctorModel = function () {

    const { PrismaClient } = require('@prisma/client')
    const prisma = new PrismaClient()

    this.fetchAllDoctors = async params => {
        return await prisma.doctor.findMany()

        // Here are a few sample usecases below
        
        // Selective Selects
        // ============================================
        // return await prisma.doctor.findMany({
        //     select: {
        //         first_name: true,
        //         email: true
        //     }
        // })
        // ============================================

        // Selective Selects with where condition
        // ============================================
        // return await prisma.doctor.findMany({
        //     select: {
        //         first_name: true,
        //         email: true
        //     },
        //     where: {
        //         id: 2
        //     }
        // })
        // =============================================
    }

    // ***************************************************************
    // For Developemnt Purpose only
    this.insertDoctorInfo = async data => {
        await prisma.doctor.create({
            data: data
        })

        return true
    }
    // ***************************************************************


    // {
    //     first_name: "Dr. Sumit",
    //     last_name: "Panday",
    //     phone_num: "+919232661325",
    //     email: "somnath.ghosh2011@gmail.com"
    // }
}

module.exports = new DoctorModel()