const fs = require('fs')

var warmingStationsObj = JSON.parse(fs.readFileSync('./WarmingStation.json'));
   var countForPermanent=1;
   var countForTemporary=1;

const output = warmingStationsObj.map( station => {
  
		if (station.ID == "All Year") {
      station.ID = "P"+countForPermanent
      countForPermanent++    	
		}
    else{
          station.ID = "T"+countForTemporary
          countForTemporary++   
        }
        
    let Coordinates = station.Coordinates.split(",");
    let lat = parseFloat(Coordinates[0].trim().replace(/[ ()]/g,'')) 
    let lng =  parseFloat(Coordinates[1].trim().replace(/[ ()]/g,''));
    station.Coordinates = {lat,lng};
    return station;
  })
  const resultJson = JSON.stringify(output)
  console.log(resultJson)
  // console.log(output);
  


