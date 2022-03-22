Doctors APP

# Pre Requisits

1. Node Js
2. MySQL Local Setup
3. Nodemon (Optional)

# Installation Steps
1. Create a .env file at the root Directory
2. Add the DATABASE_URL valiable as below:
        
        DATABASE_URL="mysql://root:Somnath7%23@localhost:3306/test"

    Note: For special Characters in the URL replace based on the link below:
    
    https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding

        Example: "Somnath7#" to "Somnath7%23"

3. Run:
    
        npm install

4. On the root directory Run the following command to start the server:

        npm start

    or

        nodemon

5. Run migration command to Create the table in DB:

        npx prisma migrate dev --name init


6. (Otional) [If you can insert data to db directly don't follow this step] Insert a sample Data (Insert API was not part of the Scope so very basis version was built for ease of access)

    End Point:  
        
        http://localhost:3000/doctors
    
    Method:     
        
        POST

    Request Body Type: 

        JSON

    Sample JSON (Email & Phone are unique fields | Need to change everytime they are inserted): 

        {
            first_name: "Dr. Sumit",
            last_name: "Panday",
            phone_num: "+919232661325",
            email: "somnath.ghosh2011@gmail.com"
        }

7. Test out Doctors Listing End Point (Filters/Pagination not implemented as it was out of Scope): 

    End Point:  
        
        http://localhost:3000/doctors
    
    Method:     
        
        GET

	Success Status: 200 (Implemented)
	
	Validation/Authorization Error: 4xx (Not Implemented)

    Sample Response:

        [
			{
				"id": 1,
				"first_name": "Dr. Partha",
				"last_name": "Sarathy Roy",
				"phone_num": "+919232661324",
				"email": "somnath.ghosh2010@gmail.com",
				"created_at": "2022-03-22T11:42:07.910Z",
				"modified_at": "2022-03-22T11:42:07.910Z",
				"is_active": true
			},
			{
				"id": 3,
				"first_name": "Dr. Sumit",
				"last_name": "Panday",
				"phone_num": "+919232661325",
				"email": "somnath.ghosh2011@gmail.com",
				"created_at": "2022-03-22T11:56:09.272Z",
				"modified_at": "2022-03-22T11:56:09.272Z",
				"is_active": true
			}
		]
