# Releases

1. Create a release branch off the default branch (Example: `release-0.4.0`).
2. While on that branch, run `npm run test`.
3. Run `npm run build`.
4. Update the version of the package using `npm version` (Example: `npm version 0.4.0`).
5. Run `npm publish`.
6. Push your changes to the release branch.
7. Create a PR to merge the release branch into the default branch.