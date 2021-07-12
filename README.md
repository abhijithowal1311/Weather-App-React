# Weather App
A Simple Weather App made by using React. For state management this app uses React Context and Hooks and tries to mimic Redux using the combination of useReducer and context API. 

## App Architecture
App
  |__
     /assets -> This foldcer is used for managing all the assets like images, logo, etc. in the App.
     |
     |
     /components -> This folder contains all the UI components which are used inside the application. 
                    This folder further contains other subdirectories for keeping the components separate for the specific use case
     |               
     |
     /context -> This folder contains the logic for app level state management and makes use of React's Context API and useReducer hook
                 to create a redux like store and reducer where we can dispatch our actions. 
     |
     |
     /helpers -> contains all the helper files which expose the helper functions which are used for location access, caching the data, caching user data, etc.
     |
     |
     /hooks -> contains the custom hooks 
     |
     |
     /routing -> contains the routing logic for app
     |
     |
     service -> This is the API layer which contains all the different APIs used in the app. Implemented using fetch API
     |
     |
     /utils -> contains all the utility functions 
     |
     |
     /styles -> contains the styling for the application (scss,css,etc.)
     |
     |
     App.js -> Main component for the app
     |
     |
     constants.js -> contains the constant variables
     

