## Installation on a project

Use the package npm to install doga-lib.

```bash
npm install @baptistecfm/doga-library@0.0.3
```

## Work on the doga-lib

1. Download the project
```bash
git clone git@github.com:BaptisteCFM/doga-library.git
```
2. Install all package
```bash
npm install
```
3. Run your component (using Storybook)
```bash
npm run storybook
```
## Creation of a new component

We will take exemple on the creation of the Button Component.
Now we can create our first component. Because we are creating a library, we are going to create index files for each tier, and export our components from each one to make it as easy as possible for the people using our library to import them.

Within the root of your project, create the following file structure:
```bash
.
├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   └── index.ts
├── package.json
└── package-lock.json

```

Make sure to double check your structure. You should have three **index.ts** files, and a **Button.tsx** file inside of a Button directory.

Begin by creating **Button.tsx**:

--- **src/components/Button/Button.tsx** ---

```javascript
import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

export default Button;
```

After our button, we update the index file inside our Button directory:

--- **src/components/Button/index.ts** ---

```javascript
export { default } from "./Button";
```

Then we export that button from the components directory:

--- **src/components/index.ts** ---

```javascript
export { default as Button } from "./Button";
```
And finally, we will export all of our components from the base src directory:

--- **src/index.ts** ---

```javascript
export * from './components';
```

## Test of a new component

To add tests for our components we are using **jest**.
Inside of our Button directory, create a new file called **Button.test.tsx**

--- **src/components/Button/Button.test.tsx** ---

```javascript
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
});
```

Now we can run our tests with:
```bash
npm run test
```

## Visualisation of your component

Storybook is a a tool for visualizing UI components outside of your site / application. It's fantastic for prototyping and testing different visual states of components to ensure they work the way they are designed to, without the extra overhead of having other unrelated components on the screen.

Now let's create a simple story for our button. Create a new file in the Button directory called **Button.stories.tsx**:

--- **src/components/Button/Button.stories.tsx** ---

```javascript
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};
```

For now let's just run:

```bash
npm run storybook
```

## Visualisation of your component

The contents of each file should be as described above. Once you have confirmed this, run the following command:
```bash
npm run rollup
```
If everything has been configured correctly rollup will run without error and you will see a dist directory created in the root of your project.

. We need to configure our local install of NPM itself to be authorized to publish to your Github account. To do this we use a **.npmrc** file.

This file is NOT PART OF OUR PROJECT. This is a global file in a central location. For Mac/Linux users it goes in your home directory **~/.npmrc.**

For Windows users it goes in your home directory as well, though the syntax will be different. Something along the lines of **C:\Users\{YOUR_WINDOWS_USERNAME}**

For more information about this configuration file read this.
Once you have created the file, edit it to include the following information:

**~/.npmrc**

```bash
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN
```
Don't forget  => ask to your project manager to get the AUTH TOKEN.

At this point, once you **~/.npmrc** file has both your Github username and access token added, go back to your project directory and run the following command:

```bash
npm publish
```

Congratulations! You have now published a new version 0.0.X of the doga-library!





## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)