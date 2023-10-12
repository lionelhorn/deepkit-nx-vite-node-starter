Repro nx + deepkit + vite-node

## Windows
- node v20.8.0
- win 10
- pnpm 8.8.0

```shell
pnpm install
nx run automation-console:vite-node
```

Errors with
```
micromatch.contains is not a function
```


## Ubuntu with WSL
- node v18.18.1
- Ubuntu 22.04.2 LTS
- pnpm 8.9.0
- 
```shell
pnpm install
cd apps/automation-console
vite-node src/index.ts
```

Errors with
```
micromatch.contains is not a function
```