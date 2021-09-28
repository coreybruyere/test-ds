# Sundae Design System

[Sundae Design System Documentation](Docs: https://sundae-inc.gitlab.io/frontend/sundae-design-system/?path=/docs/components-box--default
)

## Motivation

The Sundae Design Systems offers a collection of components available through different packages under the `@sundae-inc/` npm namespace to help engineers and designers quickly and effectively prototype or develop while adhering to Sundae's design standards and usability best practices.

## Available Packages

- [@sundae-inc/design-system](https://gitlab.com/sundae-inc/frontend/packages/-/packages) is the primary Sundae package that holds the core collection of modular components, which are built with React, [stitches](https://stitches.dev/docs/installation), and Typescript. These design system comopnents can be imported and used at the application level of any React project. This package can be found inside of the Sundae Design System monorepo in [`packages/core`](https://gitlab.com/sundae-inc/frontend/sundae-design-system/-/tree/master/packages/core).

## Installation

- Clone project
- `npm i` in root
- `npm run bootstrap` to install each packages dependencies in the monorepo

## Publishing

(Contributing docs coming soon)

- Commit any changes
- Run `npm run publish` from root

## To Do

- Document reasoning behind DS, API, theme etc. Quick summary in README and point to docs for further reading
- Add semantic-release and Changelog
- Move storybook to root of project
- Create contributing docs (install, dev, and publishing docs)
- Add icon library
- Set default tab to 'Docs'
