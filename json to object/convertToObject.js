let arrayObj =[
    {
     "ID": "All Year",
     "Name ": "The Salvation Army, Denton",
     "Phone Number ": "(940) 566-3800",
     "Address ": "1508 East McKinney St., Denton 76201",
     "Description ": "Open 9a - 5p Monday through Friday ",
     "Coordinates": "(33.2154868, -97.1133526)",
     "Travel Route ": "DCTA Bus Route 3 "
    },
    {
  "ID": "All Year",
  "Name ": "The Salvation Army, Garland",
  "Phone Number ": "(940) 272-2531",
  "Address ": "451 W. Ave D, Garland 75040",
  "Description ": "Open 9a - 5p Monday through Friday ",
  "Coordinates": "(32.9092279, -96.6360813)",
  "Travel Route ": "DART Bus Routes 377 and 380"
 },
]

const output = arrayObj.map(a => {
    let [long, lati] = a.Coordinates.split(",");
    return { "ID ":a.ID, "Name ":a["Name "],"Phone Number":a["Phone Number "],"Address ":a["Address "],
    "Description ":a["Description "], "Coordinates ":{ "lat " :long,"lng ": lati},"Travel Route": a["Travel Route "]}
  })
  console.log(output)