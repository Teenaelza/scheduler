# Interview Scheduler

Built with modern React, Interview Scheduler is a ingle page application (SPA) that helps you to book, edit, and cancel interviews as you like.

!["Interview Sceduler "](https://github.com/Teenaelza/scheduler/blob/master/docs/interview-scheduler.gif)

## Technology Used

### The Scheduler client application

- HTML,SCSS
- React
- Webpack, Babel
- Axios
- Storybook, Webpack Dev Server, Jest, Testing Library

### Scheduler API server application

- Node, Express, PostgreSQL

## Interview Scheduler Functionality

### Book Inteview

- Interviews can be booked between Monday and Friday.
- A user can switch between weekdays.
- A user can book an interview in an empty appointment slot.
- Interviews are booked by typing in a student name and clicking on an interviewer from a list of available interviewers.

### Edit Inteview

- A user can edit the details of an existing interview.
- The list of days informs the user how many slots are available for each day.

### Cancel Interview

- A user can cancel an existing interview.
- A user is presented with a confirmation when they attempt to cancel an interview.

### Other

- The expected day updates the number of spots available when an interview is booked or canceled.
- A user is shown an error if an interview cannot be saved or deleted.
- A user is shown a status indicator while asynchronous operations are in progress.
- When the user presses the close button of the error they are returned to the Form or Show view .
- The application makes API requests to load and persist - data. We do not lose data after a browser refresh.

## The Scheduler client application

Setup

Install dependencies with `npm install`.

Dependencies

- axios : ^0.21.4,
- classnames: ^2.2.6,
- normalize.css: ^8.0.1,
- react: ^16.9.0,
- react-dom: ^16.9.0,
- react-scripts: 3.0.0

## Testing

Storybook, , Jest, Testing Library

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

## Running Scheduler API server

Download and install scheduler-api following the instructions on its repo.
From scheduler-api

```sh
npm start
```
