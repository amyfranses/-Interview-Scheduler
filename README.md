# Interview Scheduler

Interview Scheduler is a single-page application built using React.js for the front end. It makes requests to an API to fetch and store appointment data from a database.

The app allows the users to book, edit or cancel technical interviews between students and mentors from 12pm - 5pm, Monday to Friday.

# Screenshots

### View of Monday with no interviews scheduled

![Monday](/docs/Screen-Shot-01.png)

### View of interview booking form before save

![Booking form before save](/docs/Screen-Shot-02.png)

### View of saved appointment, with edit and delete buttons. Number of remaining spots available for Monday has been updated

![Saved appointment](/docs/Screen-Shot-03.png)

### View of Friday, with 2 booked appointments and 3 spots available

![Friday](/docs/Screen-Shot-04.png)

## Dependencies

Interview Scheduler uses Node.js and Postgres and the following NPM packages:

- react
- react-dom
- react-test-renderer
- axios

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
