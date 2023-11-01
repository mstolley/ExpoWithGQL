# Mavely Evaluation

1. Unzip to desired directory, cd to directory
2. `npm install`
3. `npm start --web`

## Design Decisions

* I elected to go with Expo for simplicity

* The UI, using basic React Native components is simple, yet effective, and scales as necessary.

* The User object is rendered upion login, mocking a "real" login, and is then stored in UserContext in order to easily tap into the User data throughout the app, such as the Links screen. My assumption is that the app would grow over time, and coding this UserContext during inception would be better than removing passed props from various components and screens at a later date.

* Since the app is only two screens at the time, you will notice I allowed the React Navigation to handle the routing based on whether the user is logged in. Normally routing would be covered by `navigation.navigate()`.

* I elected to go with the Apollo client to fetch data; it is the cleanest solution, and very straightforward.

* In the App.ts file you notice a `useEffect` - it is there simply to help demonstrate the User object when logged in while viewing the console.

## Performance

* The performance is adequate for now, but there could be impovements in time via memoization. Perceived performance could be improved thorugh lazy loading and proper skeleton usage.

## Solution Time

* I estimate roughly six hours of coding the application, but I ran into an immovable force while attempting to connect with the Mavely API (more below).

## Scope Cut

* As mentioned above, I was unable to fetch data from the Mavely API. I could see what the fields I wanted to query were by introspection within Postman. You can view the query under the `src/gql/Query.ts` file, and the query is named `AFFILIATE_LINKS_QUERY` - if it is not correct, it sure is close.

When queried, I kept recieving a `"message": "Not authenticated"` response. In order to at least demonstrate the User Experience and application flow, I elected to use another public API, Trevor Blades's Countries API, that yielded results.

*NOTE:* If you want to switch to your API (in case you want to verify errors, etc.) I have two uris in `src/gql/Client.ts` - one is for Mavely (commented out), and the other is for the Countries API.

1. Simply toggle the commented line wit hthe uri you want to run.
2. In `src/qgl/Query.ts` there are two queries. One is for Mavely API (`AFFILIATE_LINKS_QUERY`), and the other for Countries API (`CONTINENT_QUERY`). Select one and swap it in both places in `src/screens/Links.ts`.

## To Do (with more time)

* Obviously, I would like to get the application fetching from the correct Mavely  API, change the basic associated data typing, and display the desired data as expected.

* I would optimize the application performance via memoization, and lazy loading. Perceived performance would also benefit from skeleton markers, particularly where data is loaded on the Links screen.

* Application development and code quality, especially with more than one engineer, would improve with more opinionated, stringent linting rules, such as `eslint-config-airbnb-typescript`

* The UI is quite generic, and would benefit from branding or a general theme. Also, considering using a third party component library could offer more options, such as React Native Material UI Kit, or React Native Paper.
