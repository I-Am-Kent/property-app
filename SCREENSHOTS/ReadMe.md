# Screenshots of Property Tracker

1. Home_Welcome
   Image show the application when it first loaded. Change view from Map to Satellite in the top left corner to get better view of the property from above

2. Home_Map_Interactive
   Users can click, drag, zoom in and out the map as their needs. When user click on the map, a function is called to get the Coordinates and processed by Geocoding API to return the closest address to that point.

3. Home_Map_WithData
   Data is shown on the menu below the map if we have data for that property. Server will fetch data from Amazon S3 and send it to Frontend

4. Home_AutoComplete
   if user doesn't want the hassle of scrolling map, we also provide a search bar that user can type in their desired address. We utilised Places API in order to provide suggestion and have consistent structured address name

5. Home_Analytics
   Below the map,. we also shows graph that provides visual representative of the data to the user. these graphs are rendered based on the data for the property. We would like to provide more graphs such as prices around the particular property and suburb but due to time constraint we were unable to finish the implementation

6. AWS_Data
   A glimpse to our data storage, they are stored as JSON and can be retrieved by our application via URL. Safety features such as authentication header must be implemented in order to avoid random internet user access our data
7. Google_MapsAPI
   a glimpse to our Google developer console. we can see the statistic of our usage for each API.
8. Home_StreetView
   Google maps also provide street view that users can use to have a closer look at the property and surrounding.
