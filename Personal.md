# my-spotify

Structure of React Apps:
In simple words: index.html is where all your UI is rendered by React and index.js is where all your JS codes exist. So browser, first get index.html and then renders the file. then JS in index.js is responsible for all the logical rendering of UI, which takes element with id root to be its base element for rendering all the UIs.

Like in vanilla JS, React searches for element with ID 'root' and keeps all the UI to be rendered inside that element using the virtual DOM concept. You can view this concept.

After you complete the React development, you have to use a build tool to build React App by npm build or yarn build, which merges all your codes to single file. So when a client requests your site, the server sends .html with the JS files. So, at last, JS files manipulates the single .html file.

About the create-react-app, react-scripts package that comes when you create a react app with npx create-react-app handles all the requirements to serve a development serve using node. All the files of packages are inside node_moudles.



React loads index.html first to load all the UI and index.js is for the JS code to exist. Index.js acts as the root
There is App.js and is at the top of the heiarchy, but is not necessary. Apparently it is used to be cleaner
App.js is a component and Index.js is calling that component. 

Index.js mounts the app.js component ontop of your root element which is marked on your html file
What should be at the root? Just a background? Or the actual UI? Should the UI be in the component?
Is a react app nothing but components?
Since my root is at the root, maybe I should make seperate components and just add them to my containers in html.

padding makes space around the content
margin makes space between elements.


Both “App” and “Index” are just file naming conventions people follow, but in no way their content and purpose is set in stone. Its generally accepted “index” to represent the file a browser would open initially, and it usually represents the basic html. Many tools and programs open files named “index” by default, even if you dont specify such name. Regarding React, index.js is where you would usually mount/render your main react component onto your “root” element(which you mark in your html). “App” is what people tend to call the file which contains the main logic of your file, or in React case, the main component, the one that represents your entire application/web-site. “App.js” would usually refer to just that, your main component.
Looking at your code and based on my previous experience with React, seing you import “App”, im surprised you dont render it in your ReactDOM.render method. Usually we use that render method to render our main component, i.e. it should be “App” in this case. I dont know however, what are the requirements in the said challenge

Components:
The goal of making components is to make developer's life as easy as possible. Mainly through reusability and easily readable code. Based on that, it's up to you to decide.
