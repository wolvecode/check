# fimiti-logistic

fimistic logistic is an easy app for making order for pick-up and delivery inside the city of ibadan.

## Getting Started

Installing the application (as a developer) is simple in the following steps:

- Fork and Clone this repository

```git
git clone https://github.com/astratech/fimiti-react.git && cd fimiti-react
```

- Make your forked repo the remote upstream (at origin)

```
    git remote add origin https://github.com/astratech/fimiti-react.git
```

- Inside the cloned directory, install dependencies with NPM

```npm
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server at `localhost:8080` and open up a browser window. Most changes are reflected live without having to restart the server.

```console
npm run format
```

This command will format your code using prettier on eslint rule.

```console
npm run lint
```

This command will lint your code and provide you with hint of what problem or rules you are to use for your code.

```console
    Note:
```

```
husky and lint staged is installed and configure.

```

This will run eslint and prettier on your staged files whenever you attempt to create a new commit. So all your new code now will be following the eslint quality and prettier formatting rules.

## Contributing.

- Before contributing, ensure you create a branch for a particular feature you'd want to work on, so we wouldn't be having issues of merge conflict
- You can create a branch this way;

```git
        git checkout -b [branch-name]
```

- Make your changes, add them and make your commits

  ```
  git commit -m "your message"
  ```

  Write good commit messages as this is important to know the essence of your commit

- When you're done with your fixes push to that current branch

```git
        git push origin [name-of-branch]
```

- The command above pushes your your commits to the current branch you're in.
- Then make your Pull Request to the dev branch

## Commit Structure

- type: subject e.g body, footer

The title consists of the type of the message and subject.
The type is contained within the title and can be one of these types:

- feat: a new feature

- fix: a bug fix

- docs: changes to documentation

- style: formatting, missing semi colons, etc; no code change

- refactor: refactoring production code

- test: adding tests, refactoring test; no production code change

An example of a good commit message

> Happy Coding !!!
