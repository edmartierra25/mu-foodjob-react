<h1 align="center"><b>MUX</b> + <b>Vite</b> React Template</h1>

<p align="center">
  <a href="https://github.com/manulife-innersource/mux-core"><img src="https://img.shields.io/badge/UI-%7B%20MUX%20%7D-green.svg?logo=react&colorB=00a758&colorA=282b3e"/></a>
</p>

<p align="center">
  A <a href="https://vitejs.dev">Vite</a> + <a href="https://reactjs.org">React</a> starter template for <a href="https://mux.manulife.com">MUX</a>.
</p>

## Overview

This is a Manulife starter template for React using [Vite](https://vitejs.dev) development server and [MUX](https://mux.manulife.com) component library.

## Artifactory

To use this template, your global NPM registry needs to point to [Artifactory](https://artifactory.manulife.ca). You can accomplish this with either an `.npmrc` file in your user's global folder (`C:\Users\<YourID>` or `/Users/<YourID>`) or running the following command:

```bash
npm config set registry https://artifactory.manulife.ca/artifactory/api/npm/npm/
```

## Usage

To use this template as the base of your project, clone it using git:

```bash
git clone git@github.com:manulife-innersource/mux-vite-template.git <project-name>
cd <project-name>
```

Then make it your own:

```bash
rm -rf .git && git init && npm init -y
git add .
git commit -m "Initial commit"
```

Install dependencies:

```bash
npm install
```

Now, you can start a local web server on port `3000` by running:

```bash
npm start
```

And then open http://localhost:3000 to view it in the browser.

This runs the `dev` script, with port `3000` specified.

### Available Scripts

In this project, you can run the following scripts:

| Script        | Description                                         |
| ------------- | --------------------------------------------------- |
| npm run dev   | Runs the app in the development mode.               |
| npm run start | Runs the app in the development mode on port 3000.  |
| npm run build | Builds the app for production to the `dist` folder. |
| npm run serve | Serves the production build from the `dist` folder. |

See the official [Vite docs](https://vitejs.dev/guide/) for more info on its usage.

## Support

Have questions or issues? See the [Support Guide](https://github.com/manulife-innersource/mux-vite-template/blob/master/SUPPORT.md).
