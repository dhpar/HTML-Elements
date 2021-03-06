# Html components
This is a repository of well crafted basic accessible html, components, framework agnostic and non dependant of any other library, so they are as modular as possible. My main objective is to create a set of reusable widgets that can be used in a wide range of tecnology stack.

## Contents
[Styles](src/styles/styles.md)

## Quickstart
1. Install [Node](https://nodejs.org/en/) (currently using 14.1.0, other versions have not been tested)
2. Install Yarn globaly - [Windows](https://classic.yarnpkg.com/en/docs/install/#windows-stable) | [Mac](https://classic.yarnpkg.com/en/docs/install/#mac-stable) | [Ubuntu](https://classic.yarnpkg.com/en/docs/install/#debian-stable)
3. Clone the repository into your local, by clicking on the clone button. Or download specific file with - `git archive --remote=https://github.com/Trifit/componets.git HEAD README.md`.
4. Run `npm install` or `yarn install`, to install any missing local packages.
5. Run `npm run start` or `yarn start`.
6. (Optional) If you are using Visual Studio Code, there is a launch.json file in this project, which allows for VS Code debuging, just go to the sidebar icon for debuging and press run, this should open a new Chrome window with the site on it.
7. On Chrome, you should see a list of components and instructions on how to implement them (if not, I probably was too lazy or too forgetfull).

Something not working? Please, feel free to create an issue on this app repository, thanks!

## Requirements
* Accessible.
* Framework agnostic.
* Internet Explorer 11 compatible (so done with this).
* Responsive.
* Performant.

## Component list
1. **Modal dialog** [src/dialog/dialog.js](https://github.com/Trifit/HTML-Elements/tree/9d319835534967021b7937e516ebad8e8c05ec99/src/js/dialog) -> requires a trigger `<button>` or `<a>` or similar with `js-open-dialog` class in the html.


