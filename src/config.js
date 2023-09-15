// const pgConfig = {
// 	host: process.env.DB_HOST,
// 	port: process.env.DB_PORT,
// 	user:process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// 	database: process.env.DB_NAME
// }

const pgConfig = {
	host: 'dpg-ck1vm2821fec739nsokg-a',
	port: 5432,
	user:'book_backend_user',
	password: 'aXSCmDA8nVqZ2YaLNCUk7TrOQqhzj4nl',
	database: 'book'
}

const options = {
	definition:{
		openapi:'3.0.1',
		info:{
			title:'Node js api Books',
			version:'1.0.0'
		},
		servers:[
			{
				url:'http://localhost:5000/'
			}
		],
		
	},
	apis:['./routes']
}

module.exports = {
    pgConfig,
	options
}