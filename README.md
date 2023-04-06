# Project decsription

## Setup
### Prerequisites
- MongoDB needs to be locally installed on your system and running on the port 27017 (the default one).
- Node.js needs to be installed on your system.

### Process
For setup you need to run `npm install` in `app` and `server` subfolders.
Then for app to work you need to run `npm start` inside `server` folder and then inside the `app` folder.

## Description
- [x] React application
    - [x] 'Load More' / 'Show less' button working in 'Our products' section
    - [x] Basic adaptivity + burger
        - You can check that by opening Chrome debugging tools and choosing 768px screen width in device toolbar.
    - [x] Popups for product details and cart.
- [x] DB integration
    - [x] `Express` server application that connects to `MongoDB` database.
        - App communicates with this small server using `fetch` API for HTTP requests.
    - [x] Order is saved to the DB.
        - [x] Order can be modified in modal window.
        - [x] Discounts are calculated for each product.
- [x] BEM methodology usage.
    - It is very cool to use with `sass` selectors.
