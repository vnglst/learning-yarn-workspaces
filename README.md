# Learning Yarn Workspaces

Example project for doing experiments with Yarn Workspace and Lerna.

- Philosophy: no need to think about packages when developing
- When you're done: publish packages with 1 command
- Or, even better: completely automated (not sure if possible since sometimes you want to keep packages on lower version)
- Don't forget to use 'useWorkSpace' option
- Flow when publishing: only allow this on master? See:

> https://github.com/lerna/lerna/tree/master/commands/version#--allow-branch-glob
>
> With the configuration above, the lerna version will fail when run from any branch other than master. It is considered a best-practice to limit lerna version to the primary branch alone.

```json
{
  "command": {
    "publish": {
      "allowBranch": ["master", "feature/*"]
    }
  }
}
```

- How to handle downgrading to previous version after doing a lerna publish?
  - Idea: first run `lerna version`, review changes and then `lerna publish`? Could this be done on master or safer on feature branch?
