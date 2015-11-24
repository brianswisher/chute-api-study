# Chute API Study

You will need `node` w/ `npm`.

```
# is node already installed (~v0.10.33)
node -v

# install with
brew install node

```

This app requires an API key (album id)

```
touch server/db/keys.json
```

The contents should look like:

```
[
  { "name": "chute", "value": "ALBUM_ID" }
]

```

When developing, do this:

```
npm install
npm run watch
```

The watch command will generate a file that loads conditionally in the `development` environment so that you can see your edits in a browser. When it's time to commit, you should run the bundle command:

```
npm run bundle
```
