# danone_frontend_hackaton
## Install 
Clone this repo \
Install dependencies with ```npm i``` \
Run with ```npm run dev```
## Usage
Once the project has started, you can view the home page, access the calorie calculator which uses the Harris-Benedict formula and, if you log in, you can save those calories to view them on your profile by clicking on the user icon on the upper right corner of the screen.

Users are created at login and saved to LocalStorage, they can be deleted by clicking the gear on the profile screen in the upper right corner under the user icon.

## Stack
I use react with typescript and some libraries  \
![react.svg](/src/assets/react.svg) 
![typeScript.svg](/src/assets/typeScript.svg)

## Decision making
I had no experience with a headless CMS so I decided to leave this functionality last in case I had time to investigate about it.

I decided to start with the home page because it is where the other screens would be displayed, focusing on responsive design and a clean interface, as well as getting visual resources from Danone and defining the bases for what the all app would be, testing with differents styles until I get the current one.

I continued with the calorie calculator researching about it, until I found the Harris-Benedict formula to do something real, functional and not just something visual.

Continue with the creation of the screen for the user, for which I decided to make a fake login, saving the user information in the LocalStorage to make the data persistent on the pc.

All this logic took me longer than expected, so I did not have time to continue with the products section, but I think I made important features.
