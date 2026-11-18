# hello-pipeline

A tiny Node.js project for walking through CircleCI onboarding. No dependencies, a handful of tests, runs in a few seconds.

## Run locally

```bash
npm test          # run the tests
npm start         # http://localhost:3000/?name=Ada
```

## Push to GitHub

```bash
git init && git add . && git commit -m "Initial commit"
gh repo create hello-pipeline --public --source=. --push
```

## CircleCI

There is intentionally **no `.circleci/config.yml`**, so onboarding will offer to generate one.
If you'd rather start from a known-good config, copy `extras/circleci-config.yml` to `.circleci/config.yml`.

Useful scripts for the pipeline:

- `npm run lint`: syntax check
- `npm run test:ci`: tests plus a JUnit report in `test-results/` (shows up in the Tests tab with `store_test_results`)

## Demo moments

- **Red build:** change `'$19.99'` to `'$20.00'` in `test/index.test.js` and push.
- **Green again:** revert and push.
- **PR check:** do the red-build change on a branch and open a pull request.
