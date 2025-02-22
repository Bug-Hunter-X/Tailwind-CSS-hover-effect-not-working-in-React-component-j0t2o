# Tailwind CSS Hover Effect Bug in React

This repository demonstrates an uncommon bug where a Tailwind CSS hover effect doesn't work as expected within a React component.  The issue is related to how Tailwind processes classes within dynamically rendered elements. The solution is provided in a separate file.

## Bug

The button in `bug.js` should change its background color on hover, but it doesn't. This is an example of how certain interactions between React's state management and Tailwind's class application can lead to unexpected behavior.

## Solution

The solution, provided in `bugSolution.js`, addresses the issue by ensuring proper class application using a different approach for updating the button's style based on the state.

## Setup

1.  Clone this repository.
2.  Navigate to the project directory.
3.  Run `npm install` to install the dependencies.
4.  Run `npm start` to start the development server.