# Learning Yarn Workspaces

Example project for doing experiments with Yarn Workspace and Lerna.

- Philosophy: no need to think about packages when developing
- When you're done: publish packages with 1 command
- Or, even better: completely automated (not sure if possible since sometimes you want to keep packages on lower version)
- Don't forget to use 'useWorkSpace' option
- Flow when publishing: only allow this on master?
- How to handle downgrading to previous version after doing a lerna publish?
- - Idea: first run `lerna version`, review changes and then `lerna publish`? Could this be done on master or safer on feature branch?
