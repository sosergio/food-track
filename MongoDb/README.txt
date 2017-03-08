RUNNING MONGO DB ON WINDOWS

1 - Install MongoDb from their website.
2 - Open the terminal at "C:\Program Files\MongoDB\Server\[Version_Number]\bin"
3 - Connect to MongoDb on port 27017 with: "> mongod --dbpath [Path_To_Solution_Directory]\food-track\MongoDb\data"

To connect to database in command prompt
- Open another terminal prompt and connect to the default database with: "> mongo"

To create a database
- in command prompt: ">use [DbName]"
To create a collection
- in command prompt: ">db.createCollection('[Collection_Name]')"

