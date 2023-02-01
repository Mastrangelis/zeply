# Zeply assignement

For the assignement you can find usefull information about the available scripts, the structure and how to run tests below.

For the project the following technologies and libraries are used

- NextJS 13
- React 18
- Typescript
- Framer motion for beautiful and smooth transitions
- React skeleton loading
- Many custom reusable components Toasters, Buttons, Cards, TextFields, etc.
- Taildind CSS for styling
- Jest testing library
- Component Testing storybook (manual testing)
- Dockerfile for containerizing the application

## Folder structure

- Under app folder you will find the starter files as per NextJS 13 experimental feauture where you can define your appDir.
- Under sections you will find section components that define the layout of the application such as (Layout, Navbar, Body, Footer)
- Under components you will find all the components created for this project
- Under constants folder you will find some files containing some constant variables that are used across the application.
- Under context folder you will find context providers for variables and functions to be shared in components.
- Under hooks folder you will find some custom react hooks that are used across the application.
- Under utils folder you will find utility functions that are used across the application
- Under types folder you will find the typescript types
- Under **tests** folder you will find jest tests
- Under stories folder you can find stories for component testing using storybook
- Under styles you will find the global.css file that contains CSS classes
- Dockerfile included in the root dir of the project
- Configuration files such as (tailwind.config.js, tsconfig.json, next.config.js) can be found at the root dir of the project

## Application Screenshots

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits (due to hot-reload).\
You will also see any lint errors in the console.

### Dockerfile

To build the application using the provided Dockerfile you need to do the following steps

1. Build the image

```
docker build -t zeply-assignement .
```

2. Run a container with that image when the build is finished (port should be 3000 due to proxy)

```
docker run --name <your-container-name> -p 3000:3000 zeply-assignement
```

3. Open http://localhost:3000 to view it in the browser.

## Storybook

Storybook is a frontend workshop for building UI components and pages in isolation.

Stories capture the “known good” states of UI components.

They’re a pragmatic, reproducible way to keep track of UI edge cases.

Reuse stories to power automated tests.

You can learn more about Storybook from the official [link](https://storybook.js.org/)

### `npm run storybook`

The above script will set up a development storybook server at port **6066**.

You can visit the dev server at **http://localhost:6006/**

When storybook dev server is up and running you will be able to see the following view
