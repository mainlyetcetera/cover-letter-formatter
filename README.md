## What is this

This is a very simple app that helps one properly format a cover letter.
Duly, I am calling it the Cover Letter Formatter. Yes. Very original. I know.
My inspiration for this was the very lengthy process of tailoring a cover letter for each company I am applying to.
The hope is that this will cut down on the time it takes to write a solid cover letter by at least half! 

## What does it do

The Cover Letter Formatter gives you 8 input fields, takes your responses to those fields, and formats it into a cover letter.
There is a fair amount of boilerplate cover letter, but allows you to adjust the important bits.
Once you hit submit, you are shown the entire cover letter, and may easily copy-paste from there.
This should be put into a pretty document if allowed, but many places want you to just paste the letter directly.

## To Begin

- fork the project, repo can be found [here]()
- run `yarn start`
- adjust the `tsconfig.json` as described below

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

`yarn start` is causing some unusual behavior with TypeScript. It resets the `tsconfig.json` to a setting that does not recognize `jsx`.
To fix, manually adjust line 21 of `tsconfig.json` to `"jsx": "react"`. This suppresses the jsx warning.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The `--template Typescript` was applied.

## Future Iterations

There are several things I would like to do with this app over time:
- fully deploy the app, making it more readily available
- attach a PostgreSQL database which will store completed cover letters, making it easy to access them again
- allow the user to edit the cover letter after one has been generated to allow further customization before sending
- style the app...
- update the cover letter live as the user inputs their responses
  - it would be neat if the user could still update the cover letter in the field itself even with live-update allowed

## Wins

- increased experience using `TypeScript` alongside `React`
- built something I will actually use on a regular basis!

## Challenges

- still some typing I want to make more strict, particularly as it comes to `Events`
- app is frail and could easily be broken in its current form
  - hence why it is not yet deployed
