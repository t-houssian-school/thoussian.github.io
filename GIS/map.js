// ArcGIS libraries use AMD format.  To use the libraries, 
// we specify a list of modules (e.g. Map, MapView) in a list
// with the require.  The second parameter defines a function
// that will use these modules.  We specify the module names
// in order in the function parameter list.  When this javascript
// file is loaded by the html, it will run this function using these
// modules.

// Read more here: https://dojotoolkit.org/documentation/tutorials/1.10/modules/index.html

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"	
  ], function(Map, MapView, Graphic, GraphicsLayer) {

        // Create a basemap for the map view
        var map = new Map({
            basemap: "topo-vector"
        });

        // Create a map view for the HTML centered at Rexburg
        // (Long = -111.7896876, Lat = 43.8260227) using the basemap
        // previously created.
        var view = new MapView({
            container: "viewDiv",  // Where in the html to put this 
            map: map,              // The basemap we created above
            center: [-111.7896876, 43.8260227], // Rexburg longitude, latitude
            zoom: 7                // zoom in level
        });

        // Create a Graphics Layer which can be used to draw graphics
        // on the map
        var graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);        

        // We will use the XMLHttpRequest object to read data from the USGS
        // server and populate graphics on our map based on the results
        // https://www.w3schools.com/js/js_ajax_http.asp
        var xmlhttp = new XMLHttpRequest();

        // This long function below is what will happen when we get a result
        // The actual sending of the http request and reading response occurs
        // after the definition of this function.
        xmlhttp.onreadystatechange = function() {
            // Did we get a response (4) and was the response successful (200)
            if (this.readyState == 4 && this.status == 200) {
                
                // Convert the JSON text to JSON object that we
                // can loop through
                var data = JSON.parse(this.responseText);

                // The structure of the earthquake data can be found
                // at the USGS website:
                // https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php
                
                // Loop through each feature in the features list
                for (feature of data.features) {    

                    // Define location to draw
                    // This JS map is expected by ArcGIS to make a graphic
                    var point = {
                        type: "point",
                        longitude: feature.geometry.coordinates[0],
                        latitude: feature.geometry.coordinates[1]
                    };
            
                    // Determine symbol color based on the earthquake magnitude
                    var mag_color;
                    var mag = feature.properties.mag;
                    if (mag > 6) {
                        mag_color = [168,78,50];
                    }
                    else if (mag > 4) {
                        mag_color = [247,241,54];
                    }
                    else if (mag > 2) {
                        mag_color = [52,168,50];
                    }
                    else {
                        mag_color = [50, 54, 168];
                    }

                    // Create a symbol
                    // This JS map is expected by ArcGIS to make a graphic                 
                    var simpleMarkerSymbol = {
                        type: "simple-marker",
                        color: mag_color,  
                        outline: {
                        color: [255, 255, 255], // white
                        width: 1
                        }
                    };
            
                    // Combine location and symbol to create a graphic object
                    // Also include the earthquake properties data so it
                    // can be used in the popup template.
                    var pointGraphic = new Graphic({
                        geometry: point,
                        symbol: simpleMarkerSymbol,
                        attributes: feature.properties // this is just a JS Map
                    });

                    // Add popup.  The items in curly braces within the 
                    // template are the key names from the graphic attributes.
                    var d = new Date(0);
                    d.setUTCSeconds(feature.properties.time)
                    pointGraphic.popupTemplate = {
                        "title" : "Earthquake",
                        "content" : "<b>Mag</b>: {mag}<br><b>Location</b>: {place}<br><b><br><b>Time</b>: " + d + " <br><b>"
                    }
            
                    // Add the graphic (with its popup) to the graphics layer
                    graphicsLayer.add(pointGraphic);
                } // End of Loop
            }
        }; // End of XML Call back Function

        // Time to actually send the GET request to the USGS.  When we get a response
        // it will call and execute the function we defined above.
        xmlhttp.open("GET", "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson", true);
        xmlhttp.send();


        

});