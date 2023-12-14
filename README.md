# Yarn Version 4.0.1 Migration Guide

## Why Upgrade?

Yarn 4.0.1 brings exciting enhancements, notably with the adoption of Yarn Plug'n'Play (PnP) as the default installation strategy. This replaces the conventional `node_modules` folder, offering a more efficient and streamlined dependency management process.

## Upgrade Steps

1. **Set Yarn to the Latest Stable Version:**

   ```bash
   yarn set version stable
   yarn install
   ```

2. **Configure Yarn to Use Node Modules (Optional):**

   If you prefer using the traditional `node_modules` folder, execute the following command:

   ```bash
   yarn config set nodeLinker node-modules
   ```

## Back to the Previous Version Steps (If necessary)

You can use the following command to switch to a different Yarn version:

```bash
yarn set version <version>
```

For example, if you want the latest version, you can run:

```bash
yarn set version latest
```

You can also set it to a specific number, for example:

```bash
yarn set version <version_number> // 1.22.19
```

## How Yarn PnP Works

- **No More `node_modules`:**

  Yarn PnP generates a single Node.js loader file (`.pnp.cjs`) instead of the usual `node_modules` folder. This file encapsulates all information about your project's dependencies.

- **Efficient Dependency Tracking:**

  The loader file informs tools about package locations on the disk, facilitating quick and efficient resolution of `require` and `import` calls.

## Note on Yarn PnP

Yarn PnP is the default installation strategy in modern Yarn releases. While alternative approaches are available, Yarn PnP is recommended for new projects due to its numerous benefits.

## Additional Resources

Check the [official readme](https://yarnpkg.com/getting-started/migration#upgrading-to-yarn-2) for comprehensive details.

## Conclusion

Upgrading to Yarn Version 4.0.1 with Yarn PnP streamlines your project's dependency management, enhancing efficiency and providing a more modern development experience. Embrace the future of package management with Yarn!

```

Feel free to copy and paste this into your README.md file.
```
