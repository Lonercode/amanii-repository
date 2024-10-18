# amanii-resources

> ***The app targets Node.js 18.7.0***\
> Link to the website can be found here: <https://amanii-resources.netlify.app/>

## Table of Contents
1. [Start Here](#start-here)
2. [How to Set Up MongoDB](#how-to-set-up-mongodb)
3. [How to Set Up Node.js](#how-to-set-up-nodejs)
4. [Alternative (Docker) - Recommended for Fast Setup](#alternative-docker---recommended-for-fast-setup)
5. [Steps to Run Project (Without Docker)](#steps-to-run-project-without-docker)
6. [Future Features](#future-features)
7. [Contribution](#contribution)
8. [License](#license)


## Start Here

To use the app, you will need MongoDB, Node.js, and npm installed.

### How to Set Up MongoDB

> Install MongoDB on your machine.\
> Refer to the <a href="https://www.mongodb.com/docs/manual/installation">*MongoDB Installation Guide*</a> for instructions based on your operating system.\
> After installation, start the `mongod` service in your command line.

### How to Set Up Node.js

> Install Node.js from <a href="https://nodejs.org">*nodejs.org*</a> by following the instructions for your operating system.

#### Installation of Node.js and npm on Different Operating Systems

**Windows**

> Install using the link above and follow the instructions.

**macOS**

> Install Node.js and npm using Homebrew. Open the terminal and run:

```bash
brew install node
```

**Linux**

> Use apt to install nodejs and npm. In the terminal run:

```bash
    sudo apt update
    sudo apt install nodejs npm
```
## Alternative (Docker) - recommended for a fast setup
> Alternatively, you can set up Docker. If docker is not installed in your machine, follow the guide here <a href='https://docs.docker.com/guidesgetting-started'>docker guide</a>.

> This Docker configuration is specifically designed for running the application in a **development environment**. The setup includes development dependencies and other configurations optimized for local development.

> Clone the project
``` bash
    git clone https://github.com/Lonercode/amanii-resources.git
    cd amanii-resources
```

> Remember to set up a .env.development file using the env example.

> Run the command to start up and build the project:
```bash
    docker-compose up --build
```

## Steps to run project (Without docker)


1. *Clone the Repository*

``` bash
    git clone https://github.com/Lonercode/amanii-resources.git
    cd amanii-resources
```

2. *Backend Setup*

```bash
    cd server
    npm install
```

3. *Frontend Setup*

```bash
    cd ../client/amanii-resources
    npm install
```

4. *Environment variables*

> Create a .env.development file using the .env.example file as a guide.
> Create your PORT and DB_URI env variables depending on your setup.


5. *Start the Application*

>Start both backend and frontend servers. In each run:

```bash
    npm run dev
```
## Future Features

- **User Authentication**: Implement user sign-up and login.
- **Feedback System**: Add a feedback/rating system so users can identify the most helpful resources.
- **Mobile Responsiveness**: Improve UI for better usability on mobile devices.

## Contribution

I welcome contributions to the **amani-resources** project. You can do so easily:

1. **Fork the Repository**

2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/Lonercode/amanii-resources.git
   cd amanii-resources
   ```
3. **Create your branch**
   ```bash
    git checkout -b feature/YourFeatureName
   ```
4. **Work on and commit your branch**
   ```bash
   git commit -m "Hey Lonercode check out my contributions."
   ```
5. **Push to your forked repo**
    ```bash
    git push origin feature/YourFeatureName
    ```
6. **Make a pull request**

## License

MIT -  see the [LICENSE](LICENSE) file for details.
