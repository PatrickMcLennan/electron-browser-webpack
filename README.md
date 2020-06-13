# Electron + Browser Projects

**Note -- everything about this is still a W.I.P, including this README.**

#### What is this?

The goal here was to create a tool that allows you to build the same application for both Desktop and Web environments with as little effort and code duplication as possible. Leaning heavily on an opinionated approach to writing React, I created this Webpack config that allows us to freely and easily share tested and styled components within different build targets.

#### Opinionated? How?

As of the current build, the approach to keep in mind using this tool is to be heavily component geared. Build components, style them, and unit test them before implementing them anywhere. The end goal of this is to be able to apply our components to any environment with no implementation logic needed, as this kind of logic can differ between our build targets. While this _is_ a necessary evil from time to time, this is exactly the kind of thing we're hoping to avoid - logic and mistakes here can lead to A) more work, and B) inconsitencies between our applications. Our approach can be best described by the **Build Once, Deploy Anywhere** methodology.

#### What does this support?

- TypeScript
- React
- styled-components
- Jest
- Framer Motion

We use `Webpack` to compile these techonologies into our build targets of choice -- standard Browser code for our Browser targets, and `Electron` for our Desktop applications.
