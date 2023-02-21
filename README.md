# Zeply assignement

For the assignement you can find usefull information about the available scripts, the structure and how to run tests below.

For the project the following technologies and libraries are used

- NextJS 13
- React 18
- Typescript
- Axios
- React-Query
- Framer motion for beautiful and smooth transitions
- React skeleton loading
- Many custom reusable components Toasters, Buttons, Cards, TextFields, etc.
- Taildind CSS for styling
- Functional and Unit Testing with Jest/RTL
- Component Testing storybook (manual testing)
- Dockerfile for containerizing the application
- Husky for pre-commit scripts
- Eslint for linting code before commit
- Prettier for formatting

## Folder structure

- Under **app** folder you will find the starter files as per NextJS 13 experimental feauture where you can define your appDir.
- Under **sections** you will find section components that define the layout of the application such as (Layout, Navbar, Body, Footer)
- Under **components you will find all the components created for this project
- Under **constants folder you will find some files containing some constant variables that are used across the application.
- Under **context folder you will find context providers for variables and functions to be shared in components.
- Under **hooks folder you will find some custom react hooks that are used across the application.
- Under **utils folder you will find utility functions that are used across the application
- Under **types folder you will find the typescript types
- Under **__tests__** folder you will find jest tests
- Under **stories** folder you can find stories for component testing using storybook
- Under **styles** you will find the global.css file that contains CSS classes
- Dockerfile included in the root dir of the project
- Configuration files such as (tsconfig.json, next.config.js, .eslintrrc.json, .prettierrc.json, jest.config.js, jest.setup.ts, lint-stages.config.js) can be found at the root dir of the project

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

## Application Screenshots
![Screenshot 2023-02-01 at 3 25 04 AM](https://user-images.githubusercontent.com/48323010/215926669-a9d4da3b-f76f-462c-9926-7c0e90566964.png)
![Screenshot 2023-02-01 at 3 25 17 AM](https://user-images.githubusercontent.com/48323010/215926729-cbcd0bbd-e82c-4807-bb7a-40ea27fd5a58.png)
![Screenshot 2023-02-01 at 3 25 26 AM](https://user-images.githubusercontent.com/48323010/215926730-db81ba4a-8bf8-43bf-851a-b3dbca231dec.png)
![Screenshot 2023-02-01 at 3 25 52 AM](https://user-images.githubusercontent.com/48323010/215926732-afcf6aec-769d-4d2b-9346-cf3763c0d17f.png)
![Screenshot 2023-02-01 at 3 26 04 AM](https://user-images.githubusercontent.com/48323010/215926733-8b79e6a4-7bd2-4a50-9c8b-bdc0a89a9f83.png)
![Screenshot 2023-02-01 at 3 26 08 AM](https://user-images.githubusercontent.com/48323010/215926735-b70de8ea-c7dc-4f52-8ffb-f6aca7384805.png)
![Screenshot 2023-02-01 at 3 26 20 AM](https://user-images.githubusercontent.com/48323010/215926738-31795723-d79e-46db-b4d3-cd3d3e389827.png)
![Screenshot 2023-02-01 at 3 26 26 AM](https://user-images.githubusercontent.com/48323010/215926739-83f4c031-208c-4eb0-9bfe-03e50062d95e.png)
![Screenshot 2023-02-01 at 3 26 39 AM](https://user-images.githubusercontent.com/48323010/215926741-3b38af0c-f25e-4f8a-9281-6174a53f2900.png)
![Screenshot 2023-02-01 at 3 26 41 AM](https://user-images.githubusercontent.com/48323010/215926744-98187fd0-162c-4fd6-a2c7-2d214c60c44c.png)
![Screenshot 2023-02-01 at 3 26 45 AM](https://user-images.githubusercontent.com/48323010/215926748-6d82e551-69a8-47cb-a6ca-7fbdc63215ac.png)
![Screenshot 2023-02-01 at 3 26 56 AM](https://user-images.githubusercontent.com/48323010/215926751-d89bd75d-4db4-45a3-a841-25eacd61e7ed.png)
![Screenshot 2023-02-01 at 3 27 34 AM](https://user-images.githubusercontent.com/48323010/215926754-dd5a1959-0a9b-462e-b57d-d5e850abde5f.png)
![Screenshot 2023-02-01 at 3 27 41 AM](https://user-images.githubusercontent.com/48323010/215926756-3dd652e4-133a-4122-a6f9-e2cf587571f0.png)


