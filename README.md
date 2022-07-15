# Poem A Day App

## Initial Idea

Create an app where people can go to discover different poets and their works.

The reason I made this app is because I am always looking for a chance to be inspired by something new that I have read. Poetry is unique and much less time is needed to read a full poem. As someone who wants to find more time to read, I thought this would be a perfect oppurtunity to create something that does just that. The "Poem a Day" App is for anyone looking to discover something new and get in some reading that only requires a short amount of time. This allows people to feel productive while also finding inspiration for their day. It is also a great way for people to share something new with their co-workers, friends, family, etc.

## Features

- Random "Poem of the Day"
  - When clicked takes to page where user can view a random poem that is being fetched from the Poemist API.
- Favorite button for random poems
  - Under the poem of the day there is a favorite button for users to 'favorite' a poem they like and is then saved to the 'poem list page' and is added to the json server. The favorite button on click takes the user to the poem list page. This feature only works if json server is running.
- Favorited poems will display under "poem list"
  - Displays all favorited poems. Feature only works if json server is running.
- Toggle between dark mode/light mode
  - Allows user to change background between dark and light mode.

## Requirements - pulled from project requirements

1. Your app must be a HTML/CSS/JS frontend that accesses data from a public API. All interactions between the client and the API should be handled asynchronously and use JSON as the communication format. Try to avoid using an API that requires a key. APIs that are free and require no authorization will be easiest to use. For ideas, see this list of no-auth APIs. If you would like to use an API that requires a key, please consult with your instructor on how to protect that key. NEVER push your API key to github!

2. Your entire app must run on a single page. There should be NO redirects. In other words, your project will contain a single HTML file.

3. Use at least 3 unique event-listeners that enable interactivity. Think search or filter functionality, toggling dark/light mode, upvoting posts, etc. Each of your event listeners should have its own unique callback function.

4. Your project must implement at least one instance of array iteration using available array methods (map, forEach, filter, etc). Manipulating your API data in some way should present an opportunity to implement your array iteration.

5. Follow good coding practices. Keep your code DRY (Do not repeat yourself) by utilizing functions to abstract repetitive code.

## Stretch Goals

1. Use json-server in your project to persist your app's interactivity.

## Installation Instructions

1. Open index.html in browser --> in terminal type: "open index.html"
2. Run JSON server for db.json --> in terminal type: "json-server --watch db.json"
3. Use nav bar to click and view "random poem", "poem list", "dark/light mode" and "poem homepage"
4. Favorite random poems you like so they are added to the json server :)

## Inspiration

1. I watched Enoch Griffith's "Random Joke" phase one project video, which was incredibly helpful to me for getting started.
2. Brian Munoz for CodingLead has an article all about dark mode and how to initialize it. This was extremely helpful since I am new to front end development and was not sure where to start.

## Future Development

As I get better at coding there are a few features I would like to add and fix.

1. Fix the Dark Mode initialization so that the nav bar and main div also toggle between dark/light mode when the button is "clicked."
2. Have all favorite poems displayed on their own card rather than them all existing on the main div together. Create some sort of grid so that when users are interacting with the webpage they can also upvote/downvote poems.
3. I would also like to add categories and a search bar so that anyone who interacts with the app can search for favorite poems.
4. Interactivity --- It would be nice to allow users to drag and drop poem cards into categories so that the page can stay organized.
5. Add a comment section/ blog section so users can comment and interact with one another.
