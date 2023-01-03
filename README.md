# Run fresh and surrealdb on acorn

This project should bring three things together:
- [Acorn](https://www.acorn.io/)
- [Fresh](https://fresh.deno.dev/)
- [SurrealDB](https://surrealdb.com/)

### Usage

You can make changes to the fresh app's source code and have a hot-reload experience:
```
$ acorn run -n fresh-surreal -i .
```

Run without the dev stuff:
```
$ acorn run -n fresh-surreal . --revision $(git rev-parse HEAD)
```