1) How long did you spend on the coding assignment? 
   6 - 8 hours.
  a) What would you add to your solution if you had more time?
    - I can create book cover a link and on clicking it would bring up all the related books covers.
    - find the work of an author by typing author name on text box.
    - add pagination for results.
    - Lazy loading of images if needed for performance improvement.
  b) If you didn't spend much time on the coding test, then use this as an opportunity to explain what you would add.
     - add spinner for API calls. I added a state for loading. I would have used that for showing and hiding the spinner. 
     - add sorting functionality through latest publish date.
     - improve styling
     - add more test cases for sorting, api calls, input field, table
     - show thumbnail if  cover photos is not available.
     - delete duplicates from data and then show the results.
2) What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.
     - currently at my job I am using react-hook-form while handling form data. I found that its a very useful feature. its easy, flexible and reuseable. I didn't get chance to showcase that in this project since there is only one input field.  
     - in the current project I used react hook. useState(). it renderes the component again when state is updated
3) How would you track down a performance issue in production? Have you ever had to do this?
  - by using lighhouse extension.
  - in dev tools there is also an option for performace testing.
  - in this app if we get very huge date as a response, I can create a pagination with lazy loading to improve performace.
  - last time when one of my project was in production, the bundle size was very big due to routes, images and fontawesome. To solve that I have implemented react lazy routes to split the bundle.
4) How would you improve the API that you just used?
  - lot of repeatative information in json files. duplicate data needs to be removed. 
  - need to improve documentation. 
  - need to add cover photos against all isbn numbers.
5) Please describe yourself using correctly formatted JSON.
   {
    "data" : {
      "name": "sehrish khawaja",
      "age" : "30 years",
      "profession" : "Front-end developer",
      "residence" : "Toronto, Canada",
      "strengths" : ["hardworking", "time management" , "quick learner" , "Team work" , "passionate"],
      "hobbies" : ["talking" , "watching TV"]
    }
   }

