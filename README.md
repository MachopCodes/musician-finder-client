**Musician Finder** is a single-page application with user authentication that allows you to create and view musician profiles which include: name, contact, location, instruments, interests (lessons, gigs or jams) and a blurb about yourself. Search the profiles and if you find a profile that interests you, reach out to that profile using the contact information.

**[Deployed Server Application](https://stormy-taiga-24589.herokuapp.com)** |
**[Server Repository](https://github.com/MachopCodes/musician-finder-server/)** |
**[Deployed Client Application](https://machopcodes.github.io/musician-finder-client/)**

**Technologies Used:**
javaScript
CSS
Sass
HTML
Handlebars

**Unsolved Problems for future iterations:**
Create a method to search for profiles based on location, instruments and interests.
Create a method to view, create, update and delete reviews on other accounts.
Create auto sign up, sign in functionality

**Planning, Development and Problem-Solving Strategy**
Initial planning included building mongoose models on the server side based on the entity relationship diagram.
Below is a diagram of how the different files were to interact with each other and create modular programming with the goal of keeping all handling events in app.js, events (after handlers) in events.js, ajax requests in api.js and user interface changes are held in ui.js.

![Problem Solving Flow](https://github.com/MachopCodes/musician-finder-client/blob/master/Problem%20Solving%20Flow.PNG)


**User Stories:**
As a user, I want to be able to sign in and sign out
As a user, I want to be able to create/update/delete my profiles
As a user I want to be able to view other profiles.
As a user, I don't want any other users to be able to edit or update my information

**Wireframe**

![wireframe](https://github.com/MachopCodes/musician-finder-client/blob/master/Musician%20Finder%20wireframe.PNG)
