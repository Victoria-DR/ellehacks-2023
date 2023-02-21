# Gardenize

* Built at ElleHacks 2023
* 🥈 2nd Place Overall
* 🥇 Best Use of Cohere API - 1st Place

![Gardenize logo](https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/388/177/datas/original.png)

## 💡 Inspiration
We live in an age where city populations are rapidly growing outwards, encroaching on forests and parks that have been inhabited by thousands of native species for millennia. This urban sprawl is incredibly harmful to the environment, displacing animals and killing plants. Native species have never been more at risk of extinction, which is why green areas full of possible life-giving resources are more essential now than ever. Transforming an old lot into a flourishing garden will not only give back to nature but will provide the community with a united project that will foster and strengthen community bonds. By tackling the “Earth” challenge, we wanted to help promote biodiversity in our urban areas in a time of increasing urbanization.

## 🌱 What it does
Gardenize is designed to motivate individuals into making a difference in their community. It’s very simple to set up and simplifies the process of starting a community garden by picking out personalized plant recommendations based on species native to your location. It will track the plants for you, telling you when to water and harvest each plant so that your plants can be well taken care of. It will also tell you important details about each specific plant, giving instructions on how to plant them properly. Lastly, we create a sense of communal responsibility for the garden by giving members of the community a social platform to share their garden updates, ideas, and experiences. These posts can be enjoyed by everybody in the community.

## 🧰 How we built it
**React, Tailwind CSS, and Material UI:** The front end of our web app was created using React and components from Tailwind CSS and Material UI.

**Express.js:** The back end ran on an Express.js server with several routes and endpoints to integrate with the front end.

**Cohere:** Generative and classification models were used to create a post title generator and a toxicity detector for the social community aspect of our app.

**Autocode:** A helpful gardening-related chatbot, PlantPal, was created using Autocode and OpenAI’s Davinci model, while the Stability AI standard library was used to generate images for community hub posts when users did not provide their own images.

**Firebase:** All data for users, gardens, and posts were stored in Firebase Cloud Firestore. Images for posts were stored in a provisioned Firebase Cloud Storage bucket.

**Figma:** A high-fidelity prototype of Gardenize was created on Figma in the initial stages of planning.

## 🤔 Challenges we ran into
* Learning how to use Tailwind CSS: having used Bootstrap before, we thought it would be a good idea to try and use Tailwind. However, after struggling with it for some time, we decided to simultaneously use it with Material UI which resulted in several styling conflicts we had to resolve.
* Working with promises in JavaScript: we initially struggled with making async/await calls and obtaining proper and resolved responses, but were able to successfully integrate them into the backend by the end of the hackathon.
* Uploading images to and downloading images from Firebase Cloud Storage: outdated documentation and incorrect image formats made it difficult to properly store images for social platform posts.

## 🏆 Accomplishments that we're proud of
* Learning to effectively engineer prompts for Cohere and integrating it into our code
* Creating a functional back end and database integration with little external help
* Implementing a front end having never used React and Tailwind CSS before

## 🧠 What we learned
* How to upload and download files from Firebase Cloud Storage
* Deeply exploring and idea and planning out necessary components is important
* Using two design frameworks in the same project is cumbersome
* Some people shouldn't pull all-nighters

## ❓ What's next for Gardenize
* Mapping out different zones of a garden for different plants based on a scan created using phone cameras
* Using the Google Maps API and Google Places API to determine a user's location for better plant suggestions
* Finding a more extensive plant database to make the availability of attributes more reliable
