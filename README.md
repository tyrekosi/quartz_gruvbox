# quartz_gruvbox
Partial (read: very rough) adaption of [insanum/obsidian_gruvbox](https://github.com/insanum/obsidian_gruvbox) theme to learn Quartz. 

Light mode is "functional" but barely works. Feel free to fix it up :)

Disclaimer: I am bad at READMEs.

# Make It Work
Note: if you've already made modifications to your custom.css or callouts.scss, what I recommend is to view the files side-by-side by using Git or something like [TextCompare](https://www.textcompare.org/css/) to figure out how to piece 'em together.

1. Replace your files in the ./quartz/styles directory with those in the styles folder here.
2. Replace ./quartz/components/ExplorerNode.tsx with the version provided here.
3. Go into ./quartz/plugins/transformers and drop "strongdepth.ts" (provided in this repo as well, big surprise, very insane) in there.
4. Still in ./quartz/plugins/transformers, go to index.ts (the index.ts INSIDE transformers) and append this at the end:
   
```ts
export { StrongDepth } from "./strongdepth"
```

5. Return to ./ and navigate to quartz.config.ts, and do the following
   1. Replace colors
      ```ts
      colors: {
        lightMode: {
          light: "#fbf1c7",
          lightgray: "#f9f5d7",
          gray: "#665c54",
          darkgray: "#282828",
          dark: "#9d0006",
          secondary: "#af3a03",
          tertiary: "#458588",
          highlight: "rgba(189, 174, 147, 0.15)",
        },
        darkMode: {
          light: "#282828",
          lightgray: "#1d2021",
          gray: "#bdae93",
          darkgray: "#fbf1c7",
          dark: "#cc241d",
          secondary: "#d65d0e",
          tertiary: "#d79921",
          highlight: "rgba(168, 153, 132, 0.15);",
        },
      },
      ```
   2. Append `Plugin.StrongDepth()` to the end of the transformer plugins section:
      ```ts
        plugins: {
          transformers: [
            ...,
            Plugin.StrongDepth(),
          ],
          ...    
      ```
