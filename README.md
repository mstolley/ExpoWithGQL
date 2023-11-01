# Expo With GQL

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

## To Do

* I would optimize the application performance via memoization, and lazy loading. Perceived performance would also benefit from skeleton markers, particularly where data is loaded on the Links screen.

* Application development and code quality, especially with more than one engineer, would improve with more opinionated, stringent linting rules, such as `eslint-config-airbnb-typescript`

* The UI is quite generic, and would benefit from branding or a general theme. Also, considering using a third party component library could offer more options, such as React Native Material UI Kit, or React Native Paper.
