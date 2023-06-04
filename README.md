## Movie-Logham
![mobile](https://github.com/nafihpp/movie-logham/assets/49452140/b4a3b160-7e4f-4c3e-90cf-52d845f0b990)

# Technologies Used

The app is built using with the following tech:
- React JS - React Library is used for creating the complete webapp.
- Context API: For State Management.
- React Router DOM v6: For navigating between pages, implementing protected routing and Lazy loading.
- Local Storage: For storing the authentication token.
- Sass/Scss: For styling and responsive user interface.
- Axios: For HTTP handling.
- Vite: For bundling and serving the app.

## Features
- Custom Font Family - Roboto
- Dark mode /Light Mode switch: Toogle between light and dark mode has been included on the home page.
- Login functionality: Users can enter username and password. demo(username:test, password:test), and if they are authenticated, they will be redirected to the home page else you are not allowed to enter the homepage.
- Log out button: Users can log out of the app which clears the token in the localstorage and also navigates to login page.
- Protected Login Route - After authentication user can't access login/register or forgot password page without doing the logout.
- Search - Filtering the movies based on your Search.
- Custom Hook - useDebouce, useLocalstograge (work Ongoing)

## How to Run
Install Dependencies
Run <code>npm install</code> to install the app's dependencies.

Start the App
Run <code>npm run dev</code> to start the app. The app will be served at http://localhost:5171.
