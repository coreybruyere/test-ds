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

## Contributing

(Contributing docs coming soon)

### Commits

Follow [Conventional Commit spec](https://www.conventionalcommits.org/en/v1.0.0/#summary) when making commits to the project. This convention dovetails with [SemVer](https://semver.org/), by describing the features, fixes, and breaking changes made in commit messages. These conventions will automatically generate a CHANGELOG for the project and each package while effectively communicating the nature of the changes to teammates.

Commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

- A commit type of `fix` patches a bug in the codebase and correlates with `PATCH` in Semantic Versioning.
- A commit type of `feat` introduces a new feature to the codebase and correlates with `MINOR` in Semantic Versioning.
- A commit type of `BREAKING CHANGE` introduces a new feature to the codebase and correlates with `MAJOR` in Semantic Versioning.
- Other commit types are allowed, recommended types are `build`, `chore`, `ci`, `docs`, `style`, `refactor`, `perf`, and `test`

## Publishing

- Commit any changes
- Run `npm run publish` from root

## To Do

- Document reasoning behind DS, API, theme etc. Quick summary in README and point to docs for further reading
- Add semantic-release and Changelog
- Move storybook to root of project
- Create contributing docs (install, dev, and publishing docs)
- Add icon library
- Set default tab to 'Docs'
