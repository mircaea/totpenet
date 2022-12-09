## Oldie [totpenet](https://totpenet.ro)

- include the CMS, advertise it and name it "totpenet"
- user roles: client | admin
- score keeping
- ...
- game/s
- chat
- notes / lists

This monorepo uses uses [Turborepo](https://turbo.build/) (from Facebook) and [Yarn](https://classic.yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `host-tpn`: a [React.js](https://reactjs.org/) app created with [Vite](https://vitejs.dev/)
- [^1] `ui`: a stub React component library shared by the `host-tpn` application
- [^1] `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- [^1] `tsconfig`: `tsconfig.json`s used throughout the monorepo
- [^1] named `store`: localStorage persisted store with `Zustand` & suport for React's native `Context API`
- [^1] for managing general website settings: `theme, language, authentication`
- [^1] for working with Google Firebase `firebase_package`

[^1]: micro frontend package

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Develop

To develop all apps and packages, run the following command:

```
cd totpenet
yarn install
yarn dev
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```
cd totpenet
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your turborepo:

```
npx turbo link
```

### Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

### . . .

. . .

## Development. Steps I took / how to reproduce.

Set up the monorepo with turborepo: `npx create-turbo@latest`

Turborepo will cache localy by default. For an aditional speed boost, enable Remote Caching with Vercel:

- `npx turbo login`
- `npx turbo link`

(to disable Remote Caching run `npx turbo unlink`)

`yarn install`

Test that everything is good and your new monorepo runs as expected: `yarn run dev`.\
You should be able to access [hhttp://127.0.0.1:5173/](http://127.0.0.1:5173/).

### Scope down any command to certain app

`yarn [script] --scope=[name]` where name is the 'name' from package.json. This will only execute the script for the selected package.

## Development

### #1 Creating package `store`

In the terminal navigate to /packages and create folder named _store_. Inside folder _store_:

- `yarn init -y`
- `yarn add zustand`
- `yarn install` to install the dependencies
- create a file (custom hook) named **useStore.ts** and add the store details specific to zustand
- create a file _index.ts_ and add the export options

(apparently zustand allows use of redux toolkit by using _devtools_. **TODO**: test this vs. implementing Redux toolkit without Zustand)

dev++


### Build & deploy

To build all apps and packages, run the following command:

```
cd totpenet
yarn run build
```

Using Vercel for hosting, SSL & automatic deployments.\
I've already set up [my account](https://vercel.com/mircaea/totpenet-host-tpn) with Vercel to automatically deploy on every update on git repo branch `main`.
