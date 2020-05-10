# MyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



___________________________________________________________________________________________________________________________


Jazz Loft Online Music Archive
Software Design Document







Qin Quan Lin (Leader) - qinquanlin@stonybrook.edu 
Amber Li (Researcher) - amber.li@stonybrook.edu
Young Seok Seo (Secretary) - youngseok.seo@stonybrook.edu 

CSE/ISE 339 Benevolent Computing Spring 2020
Date: 05/08/2020




USER INSTRUCTION


Background:
This software is created to grant instant access to the music collections at Jazz Loft, Long Island. Music scholars and other students of music who want to research a particular artist, discover new knowledge, or are simply curious about a particular piece of music will no longer need to travel to Long Island.
Styled to create a Jazz vibe, this frontend software makes it both fun and easy to explore rare music collections, including scores, historical documentations, and other information that would further the user’s understanding of Jazz Music. Connecting to FileMaker API, where the data is digitized and stored, the user can play recordings directly on the website.

“Namari” template was used from OneLovePage: https://onepagelove.com/namari. This template is free to use and doesn’t require attribution.
Various Angular formats, such as table and filter, and libraries such as jQuery, FontAwesome, and Bootstrap were installed in the code. Their uses are limited and some even removed.

Requirements:
Running this website requires Angular to be installed on the local workstation or server.
For the website to be made accessible to the general public, it will need to be hosted on a web domain.

Setting Up:
We recommend that you run this website on either a local workstation or server. The code is stored in a Github repository, so future teams can clone it to continue developing this website.

Installing node.js
Node.js is required to use Angular. Download node.js from https://nodejs.org/en/download/ and install it on the local workstation or server.
	
Installing Angular CLI
In command prompt (Windows) or terminal (MacOS), run the command npm -v to check that the npm client is installed. Then, run the command npm install -g @angular/cli to install the Angular CLI. The installation may take a few minutes to complete.

	Importing website from Github
Download the code from https://github.com/QinQuanLin/JazzLoft. Note where the files are saved on the local drive.

Running:
Open command in Window or terminal in MAC OS
Direct to the file that contains Jazz Loft data
Type : “ng serve” in the file that contains Jazz Loft data and hit “Enter”

Wait until it is compiled.

After compiling is done, it will look like this:


Open Web browser and go to“http://localhost:4200/”


Functionality:
	Home page
This is the landing page for the website. It contains a short introduction to the Jazz Loft Archive, as well as buttons for navigating to the Archive page and the Jazz Loft main website.
	Archive page
This page houses the Jazz Loft archive. It displays a table of all the items in the database and allows the user to search and filter on the results. The user can also click on an item in the table, which takes them to a page that displays more detailed information (see Item page).
	Item page
This page shows detailed information about the item in the archive. This includes a scanned image of the score, the title, composer, arranger, artist, year, arrangement, and additional notes. If applicable, the user can also click on a play button to listen to an MP3 recording of the song.
	ForStaff page
This page is for staff to login or sign up to insert/edit/delete the item. If the editor has authorization, then they can log in using the login tab, otherwise they should ask for authorization on the sign up tab.

Future Improvements:
More visual details
Make HTTP connections in both Archive and Item page to insert/edit/delete the information between database and website
Create PDF/image viewer for multi-page scores on the Item page so the viewer can flip through the pages
Remove remains of In Memory Service and centralize all the data onto configuration
Recommended items section on Item page to suggest similar items based on composer, arranger, time period, etc.
More advanced search function: search bar in addition to filter criteria
Improve filter to recognize whitespace
Add/adjust proper licensing. The current software is licensed with MIT.
Authentication for user login requires a separate database for user accounts and passwords

License:
MIT License
Copyright (c) 2020 Jazz Loft
https://github.com/QinQuanLin/JazzLoft/blob/master/LICENSE.md 

