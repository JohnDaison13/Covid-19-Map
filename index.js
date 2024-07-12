const url = 'https://covid-19-statistics.p.rapidapi.com/reports';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '5378eea54dmshbeed4ed81317eddp106b40jsnd393d282e34e',
        'x-rapidapi-host': 'covid-19-statistics.p.rapidapi.com'
    }
};

async function updateMap() 
{
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result.data);
        result.data.forEach(element => {
            latitude = element.region.lat;
            longitude = element.region.long;
            cases = element.confirmed;
            if(element.region.province && element.region.province!="Unknown")
                place=element.region.province;
            else
                place=element.region.name;
            color=getColor(cases);

            popup = new mapboxgl.Popup({ offset: 25 })
                .setText(`Infected cases: ${cases} (${place})`);

            // Mark on the map
            new mapboxgl.Marker({
                draggable: false,
                color:color,
                size:1

            })
                .setLngLat([longitude,latitude])
                .setPopup(popup)
                .addTo(map);
        });
    } catch (error) {
        console.error(error);
    }
}


function getColor(cases) {
    let r, g, b;

    if (cases < 10000) {
        r = 0;
        g = 255;
        b = 0;
    } else if (cases > 10000000) {
        r = 0;
        g = 0;
        b = 0;
    } else if (cases > 5000000) {
        r = 139;
        g = 0;
        b = 0;
    } else if (cases > 3000000) {
        r = 178;
        g = 34;
        b = 34;
    } else if (cases > 2000000) {
        r = 220;
        g = 20;
        b = 60;
    } else {
        let proportion = (cases - 10000) / (2000000 - 10000);
        
        if (proportion < 0.25) {
            r = Math.floor(proportion * 4 * 255);
            g = 255;
            b = 0;
        } else if (proportion < 0.5) {
            r = 255;
            g = Math.floor(255 - (proportion - 0.25) * 4 * 127);
            b = 0;
        } else if (proportion < 0.75) {
            r = 255;
            g = Math.floor(128 - (proportion - 0.5) * 4 * 128);
            b = 0;
        } else {
            r = 255;
            g = Math.floor(255 - (proportion - 0.75) * 4 * 255);
            b = 0;
        }
    }

    return `rgb(${r}, ${g}, ${b})`;
}

// updateMap();

interval = 2000;
setInterval( updateMap, interval); 