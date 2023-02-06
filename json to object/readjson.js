const fs = require('fs')

var obj = JSON.parse(fs.readFileSync('./WarmingStation.json'));
// console.log(obj);

const output = obj.map(a => {
    
    let [long, lati] = a.Coordinates.split(",");
    return { "ID ":a.ID, "Name ":a["Name "],"Phone Number":a["Phone Number "],"Address ":a["Address "],
    "Description ":a["Description "], "Coordinates ":{ "lat " :long,"lng ": lati},"Travel Route": a["Travel Route "]}
  })

  console.log(output)


