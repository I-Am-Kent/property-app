# Real Estate Data Map App

### Purpose

To provide an easy to use platform where users can get an informed idea of individual housing prices of properties within Sydney.  
Users are able to click on different properties on the map and get the respective sales information.

### Users

Our target demographic is mostly NSW first home buyers where they can use a simple straightforward and interactive app that can give them the pricing history and time between sales on various properties.

### Project Milestones:

-   Week 9:

    -   **DONE** React Skeleton Implemented
    -   **DONE** Basic Website Front-End Structure
    -   **DONE** Google Maps API Embedded
    -   **DONE** Google Maps API connection with Front-End components

-   Week 10:

    -   **DONE** Back End Implementation
    -   **DONE** Data source Implementation: Bulk Data Clean up or Domain API Implementation
    -   **DONE** BULK DATA Separated and cleaned into Suburb data sets and Annual data sets
    -   **DONE** BULK DATA Stored on Amazon s3 where we can retrieve suburb_data based on requested data
    -   **DONE** API POST request sends GET request to Amazon s3 and receives appropriate response
    -   **DONE** Backend: Amazon s3 response data is correctly filtered and correct data response is passed to front-end
    -   **DONE** Map marker displayed on click

-   Week 11:

    -   **DONE** User Click Functionality for Maps returns: Address and Sales History if applicable
    -   **DONE** Search Bar Implemented
    -   **DONE** Search Bar disappears on map click for better map visibility
    -   **DONE** Search Bar reappears on scroll
    -   **DONE** Map opacity gets reduced when search bar appears
    -   **DONE** Map opacity gets increased when search bar disappears
    -   **DONE** Redux implementation
    -   **DONE** Search Bar result interacts with map via redux
    -   **DONE** Search Bar result shows map marker
    -   **DONE** Search bar result moves map to searched location
    -   **DONE** Display simple details of most recent sale of address
    -   **DONE** Display sales history data from on-click/search
    -   **DONE** CSS Styling
    -   **DONE** Test deployment for any errors

-   Week 12:
    -   **DONE** Control Behaviour (Error control)
    -   **DONE** Back-End Testing
    -   **DONE** Front-End Testing
    -   **DONE** Additional Functionality & CSS touchups: Implemented bar graph for previous sales
    -   **DONE** Commit to full deployment

### Requirements:

Requirements needed to run app:

-   npm
-   nodemon

Requiremends needed to run data conversion code (rawRead.java):

-   java (ver. >=11)
-   gson (2.6.2): https://github.com/google/gson
-   json-simple (1.1.1): https://code.google.com/archive/p/json-simple/

### Data Sources: (Currently we are using 2001-2020)

NSW Bulk Property Sales Data: https://valuation.property.nsw.gov.au/embed/propertySalesInformation  
Data was taken from the above source to create both: annual json files and suburb json files.  
Raw data, converted json data and more information can be found in the git repo: https://github.com/I-Am-Kent/COMP3120_Data_Store.

### Usage

Clone:

```
git clone https://github.com/MQCOMP3120-2021/group-web-project-group-k.git
```

Project Installation:

```
npm install
```

Front end:

```
npm start
```

Back end:

```
npm run dev
```

### Further information:

#### Project Source Code Guide:

-   **Back-End:**

    -   Back-End related components can be found in: `./Server/`
    -   Back-End main functionality can be found in: `./Server/app.js`
    -   Back-End port requirement can be found in: `./Server/server.js/`
    -   Functions used to convert raw NSW Real Estate Data are found in: `./Server/rawRead.java`

-   **Front-End:**
    -   **Functionality**:
        -   Front-End related components can be found in: `./client/src/`
        -   Map functionality is found in: `./client/src/page/map/Map.js`
        -   Search functionality is found in: `./client/src/page/map/Search.js`
        -   Graph functionality is found in: `./client/src/page/graph/graph.js`
        -   Redux Store functionality is found in: `./client/src/store/reducers/rootReducer.js`
    -   **Display**:
        -   Recent listing display is found in: `./client/src/page/ProductValues.js`
        -   Graph results display is found in: `./client/src/page/ProductCategories.js`
        -   Map/Search display is found in: `./client/src/page/ProductHeroLayout.js`

#### Project Source Code Folder Structure:

```
Group-Web-Project-Group-K:
│   README.md
│   Deployment.md
│   package-lock.json
│   package.json
│   .gitignore
│
└───.vscode
│   │   settings.json
│
└───Server
│   │
│   └───Controllers
│   │   │ api-controller.js
│   │
│   └───Data
│   │   │ gson-2.6.2.jar
│   │   │ json-simple-1.1.1.jar
│   │
│   └───Models
│   │   │ Admin.js
│   │   │ User.js
│   │
│   └───Tests
│   │   │ apiTest.http
│   │
│   └───bin
│   │   │ .nomedia
│   │
│   └───routes
│   │   │ login.route.js
│   │   │ server.status.route.js
│   │   │ SuburbRouter.js
│   │
│   └───test-util
│   │   │ testutil.js
│   │
│   │ app.js
│   │ mongotest.txt
│   │ rawRead.java
│   │ server.js
│
└───client
│   │ api.test.js
│   │ babel.config.js
│   │ package-log.json
│   │ package.json
│   │ react.test.js
│   │
│   └───info
│   │   │ data_json_example_structure.txt
│   │
│   └───public
│   │   │ appFooterFacebook.png
│   │   │ appFooterTwitter.png
│   │   │ favicon.ico
│   │   │ index.html
│   │   │ logo192.png
│   │   │ logo512.png
│   │   │ manifest.json
│   │   │ producBuoy.svg
│   │   │ productCurvyLines.png
│   │   │ productHeroArrowDown.png
│   │   │ productHeroWonder.png
│   │   │ productHowItWorks1.svg
│   │   │ productHowItWorks2.svg
│   │   │ productHowItWorks3.svg
│   │   │ productValues1.svg
│   │   │ productValues2.svg
│   │   │ productValues3.svg
│   │   │ robots.txt
│   │
│   └───src
│   │   │ Home.js
│   │   │ index.js
│   │   │ reportWebVitals.js
│   │   │ setupTests.js
│   │   │ theme.js
│   │   │ withRoot.js
│   │   │
│   │   └───assets
│   │   │   └───img
│   │   │       │ House1.jpg
│   │   │
│   │   └───components
│   │   │   │ AppBar.js
│   │   │   │ Button.js
│   │   │   │ Markdown.js
│   │   │   │ Paper.js
│   │   │   │ Snackbar.js
│   │   │   │ TextField.js
│   │   │   │ Toolbar.js
│   │   │   │ Typography.js
│   │   │
│   │   └───form
│   │   │   │ AppForm.js
│   │   │   │ defer.js
│   │   │   │ FormButton.js
│   │   │   │ FormFeedback.js
│   │   │   │ RFTextField.js
│   │   │   │ validation.js
│   │   │
│   │   └───layout
│   │   │   │ AppAppBar.js
│   │   │   │ AppFooter.js
│   │   │
│   │   └───page
│   │   │   │
│   │   │   └───graph
│   │   │   │   │ graph.js
│   │   │   │   │ graphing.module.css
│   │   │   │
│   │   │   └───home
│   │   │   │   │ ProductCategories.js
│   │   │   │   │ ProductCTA.js
│   │   │   │   │ ProductHero.js
│   │   │   │   │ ProductHeroLayout.js
│   │   │   │   │ ProductSmokingHero.js
│   │   │   │   │ ProductValues.js
│   │   │   │
│   │   │   └───legal
│   │   │   │   │ Privacy.js
│   │   │   │   │ Terms.js
│   │   │   │   │
│   │   │   │   └───map
│   │   │   │   │   │ privacy-pt.md
│   │   │   │   │   │ privacy-zh.md
│   │   │   │   │   │ privacy.md
│   │   │   │   │   │ terms.md
│   │   │   │
│   │   │   └───map
│   │   │   │   │ API.js
│   │   │   │   │ Map.js
│   │   │   │   │ Map.module.css
│   │   │   │   │ res.data.json
│   │   │   │   │ SampleResult.json
│   │   │   │   │ Search.js
│   │   │   │   │ SendAPI.js
│   │   │   │   │ Sideinfo.js
│   │   │   │
│   │   └───store
│   │   │   │ rootReducer.js
│   │   │   └───reducers


```

#### JSON Data Structure example:

```
{"Entries":[
	{"C_Date":"2019-11-16", <- dates are handled as yyyy-MM-dd
	"D_Code":"001",         <- District Code
	"P_Sub":"ABERDARE",     <- Propert Suburb
	"Area_Type":"M",        <- Either M or H to signify Metres/Hectares respectively
	"P_Code":"2325",        <- Post Code
	"P_Purp":"RESIDENCE",   <- Purpose of Property
	"P_H_Num":"103",        <- Property House Number
	"S_Date":"2019-12-30",  <- Date of settlement
	"P_Area":"1011.83",     <- Area of Property
	"P_S_Name":"RAWSON ST", <- Property Street name
	"P_Price":"260000",     <- Property Price ($AUD)
	"D_Num":"AP807655",     <- Dealing Number
	"SL_Num":"",            <- Strata Lot Number
	"P_U_Num":""}           <- Property Unit Number
]}
```

### Interaction and Communication:

-   Our main interaction and communication during this project was done via Discord which is a VoIP, instant messaging and digital distribution platform.
-   Group meetings are held every Monday on a Discord Channel where we discuss our current progress with the project and any issues.
-   Further communication is done with instant-messaging in the Discord Server.
-   Resource distribution is done via the resource text-channel within the Discord Server.
-   A more in-depth weekly todo list is posted in the todo text-channel each week within the Discord Server whenever someone completes a task, this list also assigns the various tasks to team-members

### Post-Implementation: Next-steps

-   **Incorporate more data:** Our App currently only has data for 2001-2020. We could incorporate 2021's weekly data and all the years < 2001 for a more detailed sales representation
-   **Data Clean up:** There is currently no method for detecting whether the JSON_DATA in these entries are valid i.e. No typos, Correct address, Correct formatting, Required fields exist.
-   **Automatic Data retrieval:** With more time we could create a web scraper which runs periodically every week after the weekly data release date and automatically takes the data,extracts and cleans it into our suburb_data files.
-   **Add more States:** Expand the app for other states in Australia.
-   **Login Function:** Allow the user to save certain addresses and information
-   **Graphs implementation:** Present the data in a graphical format allowing for more clear and simplified information (implement more variety of graphs to give the user more information)

### Contributors/Contributions

-   45317755 - Kent Ye [Fullstack Development | Data acquisition and cleanup]

    -   Retrieved 2001-2021 Bulk Data and converting .dat format to to readable json
    -   Filtered annual data into suburbs
    -   Implemented redux store for prop functionality
    -   Implemented redux mapping methods for dispatch and state into components
    -   Implemented Graph functionality using d3.js
    -   Incorporated redux props for Search functionality
    -   Implemented Map/Search/Graph CSS Functionality
    -   Incorporated Map, Search, Graph into Homepage
    -   Incorporated recent-listing display
    -   CSS for Search Bar
    -   CSS for recent-list display

-   45782334 - Erick Hartawan [Fullstack Development | Connecting Frontend and Backend and Implement External APIs]

    -   Implemented Express Server Backend
    -   Hosted filtered Data to Amazon Simple Storage System (S3)
    -   Configured S3 to allow application fetch required data
    -   Configured communication between Frontend and Backend via POST api
    -   Created data structure to be used between components
    -   Initialised Google Maps API, Geocoding API and Places API for Frontend
    -   Configured Communication between Google Maps API, Geocoding API within the app
    -   Helped implemented Frontend features such as connecting Search bar to Map.
        -   Map pan to location selected in the search bar
        -   Application state updates when location is selected on the search dropdown
    -   Tidying CSS
    -   Debugged Frontend and Backend
    -   Full Deployment to Heroku link [https://property-tracker3120.herokuapp.com/]
    -   Maintained communication within the group

-   45953260 - Justin Lie [Frontend Development | Backend Assistance]

    -   CSS Touchups
        -   Sizeable Google Map API
        -   Material UI Icons
        -   Homepage Modifications
    -   Autoplaces API
        -   Initial Search bar functionality
    -   Material UI Implementation
        -   Initial CSS Framework

-   45577323 - Grishit taneja [Front end development | Error Control]
    -   Back-end and Front-end Error Control
    -   Back-end and Front-end Unit tests
    -   Login endpoint
    -   Sign up endpoint
