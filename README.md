# mantidrizzle

## What it is

Minimal example how to use manticore search with drizzle.
Since manticore offers a MySQL compatible interface and drizzle supports MySQL, they make a nice match. While I have not yet tried if makes sense to use drizzle kit to set up the schema via migrations, this example shows how to connect a local manticore instance, do a basic search and get a (partly) typesafe result.

## How to use

To prepare a manticore instance:

`docker run -e EXTRA=1 -p 127.0.0.1:9306:9306 --name manticore --rm -d manticoresearch/manticore && echo "Waiting for Manticore docker to start. Consider mapping the data_dir to make it start faster next time" && until docker logs manticore 2>&1 | grep -q "accepting connections"; do sleep 1; echo -n .; done && echo && docker exec -it manticore mysql && docker stop manticore`

To install dependencies:

```bash
`bun install`
```

To run:

```bash
`bun run index.ts`
```

This project was created using `bun init` in bun v0.6.7. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
