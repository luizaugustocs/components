# Changesets

This folder contains changeset files. Each changeset describes a set of changes and which packages they affect.

## Creating a changeset

Run `yarn changeset` to create a new changeset. You'll be prompted to select packages and change types (major, minor, or patch).

## Versioning

Run `yarn version` to consume all changesets and update package versions accordingly.

## Publishing

Run `yarn release` to build and publish packages to npm.
