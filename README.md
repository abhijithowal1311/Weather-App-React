# Weather App
A Simple Weather App made by using React. For state management this app uses React Context and Hooks and tries to mimic Redux using the combination of useReducer and context API. <br/> <br/>
The application makes use of openweatherAPI, radar.io's AutoComplete API for geocoding and bigdatacloud's API for reverse geocoding
## App Architecture
 ### /assets
  ```This folder is used for managing all the assets like images, logo, etc. in the App ```
 <br/>
 ### /components 
  ```This folder contains all the UI components which are used inside the application.This folder further contains other subdirectories for keeping the components separate for the specific use case```<br />
  <br />             
 ### /context 
  ```This folder contains the logic for app level state management and makes use of React's Context API and useReducer hook to create a redux like store and reducer where we can dispatch our actions.``` <br />
 ### /helpers 
 ```contains all the helper files which expose the helper functions which are used for location access, caching the data, caching user data, etc.```<br />
 ### /hooks  
  ```contains the custom hooks``` <br />
 ### /routing 
  ```contains the routing logic for app```<br />
 ### service 
 ``` This is the API layer which contains all the different APIs used in the app. Implemented using fetch API```<br />
 ### /utils
 ``` contains all the utility functions ```<br />
 ### /styles
  ```contains the styling for the application (scss,css,etc.)```<br />
 ### App.js
 ``` Main component for the app```<br />
 ### constants.js
 ```contains the constant variables```<br />
 
 ### How To:
 1. Downlaod the code/ clone repo <br/>
 2. npm install (The project was built with node v14.10)
 3. npm start
 
 ### To run tests:
 #### npm run test
 
     
 

