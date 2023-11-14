### Migrate to yarn Version 4.0.1

##### How does it work?

If you look into the files in your project, you may notice the absence of a node_modules folder. This is unusual! We regularly get asked on Discord where the folder is, by people thinking yarn install silently failed.

The thing is, this is actually expected! The way Yarn PnP works, it tells Yarn to generate a single Node.js loader file in place of the typical node_modules folder. This loader file, named .pnp.cjs, contains all information about your project's dependency tree, informing your tools as to the location of the packages on the disk and letting them know how to resolve require and import calls.

- Steps

1. First of all put this command to your terminal for upgrade to the new version

```
yarn set version stable
yarn install
```

2. Yarn's new version uses the pnp js folder for track dependencies by default. If you wanted to use "node_module" folder you have put this command in your project terminal

```
yarn config set nodeLinker node-modules
```

##### Note : Yarn Plug'n'Play (generally referred to as Yarn PnP) is the default installation strategy in modern releases of Yarn. It can be swapped out for more traditional approaches (including node_modules installs, or pnpm-style symlink-based approaches), but we recommend it when creating new projects due to its numerous improvements.
