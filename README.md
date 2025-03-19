# html-boilerplate

A simple HTML boilerplate to get your website project started in seconds.

## Pre-requisites

- Git
- Node
- Yarn

### Node

To set up your repo for active development work, make sure you have **Node** installed on your machine. To do this, you can head over to [node.js.org/en](node.js.org/en) to download the runtime environment. This will provide you the ability to run `node` commands directly from your terminal and also install `node` packages using **NPM**.

Once you have **Node** installed you can verify by opening a terminal to see if you can check its version like so:

```bash
node -v && npm -v
```

### Yarn

Yarn is a faster & more efficient dependency management tool and it is advisable to use this to manage your dependencies.

To install, run the following commands like so:

```bash
npm install -g yarn
```

To verify it is installed, please run:

```bash
yarn -v
```

### Git

Git is a version control system that enables software engineers collaborate & work together easily. Download the CLI for your operating system using the following link:

```bash
https://git-scm.com/downloads
```

## Setting Up Your Repo

To begin, clone the Git repo by running the following command on your terminal like so:

```bash
git clone https://github.com/badasswp/html-boilerplate.git
```

Once you have cloned the repo to your local machine, run the following command to install the project dependencies and load up your website:

```bash
yarn install && yarn build && yarn dev
```

## Compiling CSS & JS

To compile your CSS & JS assets, you can run the following command from your terminal:

```bash
yarn compile:css
```

**AND**

```bash
yarn compile:js
```

You can also watch for changes on your assets during development by running:

```bash
yarn watch
```
