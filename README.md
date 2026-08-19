# Tags Slave repository

This repository is the passive target of the cross-repository release test. It contains
source branches and receives annotated tags, GitHub Releases and release metadata. It
does not contain or execute release workflows.

After committing this fixture to `main`, create and push the source branches:

```bash
git branch release/1.0 main
git branch boost/demo/1.0 main
git push origin main release/1.0 boost/demo/1.0
```

The Master workflow checks out the selected commit on its own runner and executes
`npm ci` followed by `npm test`.
