# Table of Contents

- [Overview](#overview)
- [Tickets](#tickets)
- [History](#history)
- [Settings and Profile](#settings-and-profile)
- [Security and Users](#security)
- [Tools and Technology](#tools-and-technology)

<a name="overview"></a>
## Overview

See the [desktop app](https://github.com/spaulsteinberg/a2z). Please note that all screenshots are external links, they were too large to embed.

<a name="tickets"></a>
## Tickets

The ticket screen consists of a feed of tickets within a 25 mile radius of the device. Users must grant location permissions to use this part of the app. On the selection of a ticket, they are brought to the ticket detail screen. Here, the total compensation, distance, estimated travel time, and more information about the poster can be viewed. It is also where users can apply for tickets. Additionally, users can map the trip to get a visual sense of the journey, leveraged by React Native Maps and the Google Directions API.


[Ticket Feed](https://user-images.githubusercontent.com/42621176/186244302-f191ddf2-957f-442d-8311-64cfcf535e3e.jpg)  
[Ticket Detail](https://user-images.githubusercontent.com/42621176/186245638-457050ee-0f21-4e40-a432-49fd2db3f467.jpg)  
[Ticket Detail Map](https://user-images.githubusercontent.com/42621176/186245675-d9f4c3bc-1762-4d28-b8df-f65914e688bf.jpg)  

<a name="history"></a>
## History


View the dashboard quick stats like completed trips, miles driven, and money earned for some extra motivation. Underneath the small dashboard are tiles for each ticket category: Open, In Progress, Completed, and Cancelled, plus Rejected tickets. On a click of the tile, the history logs for the selected category are listed out. A click of a log directs to the Ticket Detail Screen.


[History Screen](https://user-images.githubusercontent.com/42621176/186247197-c230a851-cfe4-4c0d-9976-365453022880.jpg)  
[History Screen Detail](https://user-images.githubusercontent.com/42621176/186247230-66f4d042-157d-4d1c-a482-2a89c14d11fb.jpg)  


<a name="settings-and-profile"></a>
## Settings and Profile

The account page is for account management. Here, users can edit their public/private information and profile picture, and change account credentials.  


[Settings Screen](https://user-images.githubusercontent.com/42621176/186247885-86724345-f86f-4a49-a4dd-aab1f35c282f.jpg)  
[Profile Screen](https://user-images.githubusercontent.com/42621176/186247866-ed6933b8-d965-4989-b165-68d8bd592bf2.jpg)  


<a name="security"></a>
## Security, Users, and Permissions

All features are managed through Google Firebase Authentication, and includes logins, signing up new users, password resetting, and updating existing credentials.

[Login Screen](https://user-images.githubusercontent.com/42621176/186248447-cb81293f-7693-4e53-8f6b-e70fc6a60c72.jpg)


<a name="tools-and-technology"></a>
## Tools and Technology

This project is written in React Native, Redux, Firebase Authentication, Firebase Firestore DB, and Google Maps API.
