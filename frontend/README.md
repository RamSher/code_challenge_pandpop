# frontend

This is the frontend for the coding challenge. We use VueJS/NuxtJS as a JS framework. We use tailwind CSS for CSS styling.

- VueJS: https://vuejs.org/v2/guide/
- NuxtJS: https://nuxtjs.org/guide/
- Tailwind CSS: https://tailwindcss.com/

To start the frontend, run:

```sh
# install dependencies
$ npm install

# serve with hot reload at localhost:3000 (for development!)
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

To get started on coding, have a look at `pages/index.vue`. This is the page that is served after you run `npm run dev`.

Don't panic if you don't know Vue. We don't need a perfect execution from you - as of now we need a working one. It can be hacky if it works (:

## Setting up node and npm

For development, you will need Node.js and npm. In our projects we usually enforce minimal versions. Here, we _recommend_ minimal versions. The recommended versions are:
```
  "node": ">=14.0.0"
  "npm": ">=7.0.0"
```
_Don't let this recommendation block you! It is also fine if you just work with whatever you have. Setting up the recommended tooling may just block you unnecessarily and stop you from making progress on the actual challenge!_

You will find information below on how to best setup these tools if you

  1. don't already have them
  2. have problems running the code and suspect that it may be due to outdated node and npm
  3. want to work with the recommended engines.


### Node

- #### Node installation on Ubuntu using NVM
Just go on [How to Install and Manage Node.js via NVM](https://tecadmin.net/install-nodejs-with-nvm/) and install the node using NVM.

  You can install nodejs and npm easily with NVM which is known as Node Version Manager, just run the following commands.

  1.  Install NVM

      ```
      $ sudo apt update && sudo apt install curl -y
      $ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
      ```
      Reload the system environment
      ```
      # Debian based systems:
        $ source ~/.profile
      # CentOS, Fedora and Redhat systems:
        $ source ~/.bashrc
      ```
   2. Find Available Node.js Version
      ```
        $ nvm ls-remote
        ...
         ...
         v14.15.0   (LTS: Fermium)
         v14.15.1   (LTS: Fermium)
         v14.15.2   (LTS: Fermium)
         v14.15.3   (LTS: Fermium)
         v14.15.4   (LTS: Fermium)
         v14.15.5   (LTS: Fermium)
         v14.16.0   (Latest LTS: Fermium)
         ...
         ...
         v15.10.0
         v15.11.0
         v15.12.0
      ```
  3. Installing Node.js with NVM

      Now install the node.js version you need to use for running node.js application. Below command will install node.js 14.16.0 the LTS release on your system.
      ```
      $ nvm install v14.16.0
      ```

  4. Set A Default Version

      ```
        $ nvm list
        $ nvm use v14.16.0
        $ node --version
        v14.16.0
      ```
- #### Node installation on macOS

  Just go on [How To Install NVM on macOS with Homebrew](https://tecadmin.net/install-nvm-macos-with-homebrew//)

- #### Node installation on Windows

  Just go on [Node Version Manager (nvm) for Windows](https://github.com/coreybutler/nvm-windows)  and download the installer.


If the installation was successful, you should be able to run the following command.
```
    $ node --version
    v14.16.0
    $ npm --version
    7.20.3
```
