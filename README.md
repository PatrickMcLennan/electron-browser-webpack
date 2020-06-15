# Electron + Browser Projects

**Note -- everything about this is still a W.I.P, including this README.**

#### What is this?

The goal here was to create a tool that allows you to build the same application for both Desktop and Web environments with as little effort and code duplication as possible. Leaning heavily on an opinionated approach to writing React, I created this Webpack config that allows us to easily share styled, tested and components within different build targets.

#### Opinionated? How?

The approach to keep in mind using this tool is to be heavily component geared. Build components, style them, and unit test them in isolation. **Build Once, Deploy Anywhere.**

#### What kind of tools can I use?

- TypeScript
- React + react-router
- styled-components
- Jest + @react-testing-library
- Framer Motion

We use `Webpack` to compile these techonologies into our build targets of choice -- standard Browser code for our Browser targets, and `Electron` for our Desktop applications.
