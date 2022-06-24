# react-interview

**Checklist**

- Create a React or React Native or Expo or NextJS app - ok
- Use Typescript for any of these project types - ok
- Create 3 screens - ok



- Home 
    - default landing page - ok 
    - should have a top navigation bar - ok
    - When user is not signed in: should have a top navigation bar with a "sign in" link, which links to /sign-in - ok
    - When user is signed in: should have a top navigation bar with a "dashboard" link to "/dashboard" & a "sign out" button which will sign out the user when clicked


- Dashboard
    - should have a top navigation bar
    - should be accessible only if the user is signed in
    - should have a title "Dashboard"
    - Should fetch a list of posts & its comments from
        - Posts API - https://jsonplaceholder.typicode.com/posts
        - Comments API - https://jsonplaceholder.typicode.com/comments 
        - The list of posts can be displayed either as a table or as a list of cards, with a count of its comments
    - List of posts should be paginated to show 10 records with an ability to move to next/previous page
    - Ensure the API URLs are stored in proper environment files as required




- Sign In
    - should NOT have a top navigation bar
    - should allow the user to enter a username & password (both required fields, username should be an email address)
    - should validate input
    - when user click the "submit" then, it should login & redirect to the "/dashboard" if everything is successful



- State Management
    - use Redux or MobX or React Context API to manage state of the user login
    - Post sign in, if the screen is refreshed, the user login state should remain



- Unit Testing
    - write unit tests using any framework of your choice to test the UI components & the client State
    - integrate your test script into the package.json so that it can be triggered from `npm test` command



- UI styling:
    - use any of the open source CSS toolkits (e.g.: Bootstrap, w3css etc.), if you want to improve the UI or feel free to write your own




**Submitting your work**

To submit your finished work:
- Clone the Master branch of this repo
    - It will include a README file and a .gitlab-ci.yml file
    - The README will include all instructions for completing this test
    - The .gitlab-ci.yml file will have CI/CD steps to run `npm run build` & `npm test` to validate your code builds and unit tests are run & a temporary environment is created for your code so that the ITWox team can review your work
- please create a branch with your name & role in the format as below:
    - Format: role-fullname
    - Example: reactdeveloper-johndoe
- Submit a PR with your code & the relevant comments for your work

**General notes & comments**

- Follow the standard coding conventions & practises as prescribed for React development
- Insert code comments if necessary to explain your thinking
- Ensure proper error handling & logging techniques are followed as per conventions
- While 80% unit testing coverage is ideal, we are mostly looking for your approach to unit testing rather than a coverage%
