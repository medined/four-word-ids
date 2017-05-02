# Using Four Words As Unique Identifier

This project uses a set of four words to identify a thing. The idea is that words are easier to remember and say then a UUID.

## Running Javascript inside Node Container

```
docker run \
  -it --rm \
  --name my-running-script \
  -v $PWD:/usr/src/app \
  -w /usr/src/app \
  node:7.9.0-alpine node generate-id.js
```
