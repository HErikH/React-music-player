# React music player

- Base functionality play and add songs more features read [here](#additional-features-added)
- [URL to web page](https://dreamy-lebkuchen-708652.netlify.app)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Project structure

+---node_modules  
+---public  
|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.html  
+---src  
|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.jsx  
|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.scss  
|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;App.test.js  
|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.jsx  
|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.scss  
|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mixins.scss  
|   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setupTests.js  
|  
+---components  
|   &nbsp;+---header  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Header.jsx  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style.scss  
|   |  
|   &nbsp;+---musicUploadForm  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MusicUploadForm.jsx  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MusicUploadForm.test.js  
  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style.scss  
|   |  
|   &nbsp;+---songList  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SongList.jsx  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style.scss  
|   |  
|   &nbsp;+---songRow  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SongRow.jsx  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SongRow.test.js  
|   |       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style.scss  
|   |  
|   \---ui  
|       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\---select  
|               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Select.jsx  
|
+---context  
|       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SongsContext.jsx  
|  
+---data  
|       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;songsData.js  
|  
+---hooks  
|       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useFetchUploadedSong.jsx  
|  
\---pages  
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\---MainPage  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MainPage.jsx  
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style.scss  

# Additional Features added

- Filtration by dropdown and search
- Play/Pause Song
- Upload song functionality with API testing server
- Realtime progress bar depended on song upload
- Adding an uploaded song to the current song list

# Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://chipper-monstera-69c32f.netlify.app/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/erik-harutyunyan-2588a9226/)

# Extensions

Add [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
in VSCODE for better readable comments
