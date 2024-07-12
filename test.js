// function updateMap() 
// {
//     console.log("Updating map with realtime data")
//     fetch("newData.json")
//         .then(response => response.json())
//         .then(rsp => {
//             // console.log(rsp.data)
//             rsp.data.forEach(element => {
//                 latitude = element.region.lat;
//                 longitude = element.region.long;
//                 cases = element.confirmed;
//                 color=getColor(cases);
//                 if(element.region.province && element.region.province!="Unknown")
//                     place=element.region.province;
//                 else
//                     place=element.region.name;
//                 popup = new mapboxgl.Popup({ offset: 25 })
//                     .setText(`Infected cases: ${cases} (${place})`);

//                 // Mark on the map
//                 new mapboxgl.Marker({
//                     draggable: false,
//                     color:color,
//                     size:1

//                 })
//                     .setLngLat([longitude,latitude])
//                     .setPopup(popup)
//                     .addTo(map);
//             });
//         })
// }


// function getColor(cases) {
//     let r, g, b;

//     if (cases < 10000) {
//         // Green
//         r = 0;
//         g = 255;
//         b = 0;
//     } else if (cases > 10000000) {
//         // Dark Red
//         r = 0;
//         g = 0;
//         b = 0;
//     } else if (cases > 5000000) {
//         // Dark Red
//         r = 139;
//         g = 0;
//         b = 0;
//     } else if (cases > 3000000) {
//         // Dark Red
//         r = 178;
//         g = 34;
//         b = 34;
//     } else if (cases > 2000000) {
//         // Dark Red
//         r = 220;
//         g = 20;
//         b = 60;
//     } else {
//         // Gradient from green to yellow to light orange to dark orange to red
//         let proportion = (cases - 10000) / (2000000 - 10000);
        
//         if (proportion < 0.25) {
//             // Green to Yellow
//             r = Math.floor(proportion * 4 * 255);
//             g = 255;
//             b = 0;
//         } else if (proportion < 0.5) {
//             // Yellow to Light Orange
//             r = 255;
//             g = Math.floor(255 - (proportion - 0.25) * 4 * 127);
//             b = 0;
//         } else if (proportion < 0.75) {
//             // Light Orange to Dark Orange
//             r = 255;
//             g = Math.floor(128 - (proportion - 0.5) * 4 * 128);
//             b = 0;
//         } else {
//             // Dark Orange to Red
//             r = 255;
//             g = Math.floor(255 - (proportion - 0.75) * 4 * 255);
//             b = 0;
//         }
//     }

//     return `rgb(${r}, ${g}, ${b})`;
// }

// // interval = 2000;
// // setInterval( updateMap, interval); 
// updateMap();