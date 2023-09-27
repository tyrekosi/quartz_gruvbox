import { QuartzTransformerPlugin } from "../types";
import { Root, Strong } from "mdast";
import { visit } from "unist-util-visit";

export const StrongDepth: QuartzTransformerPlugin = () => {
  return {
    name: "StrongDepth",
    markdownPlugins() {
      return [
        () => {
          return (tree: Root) => {
            let currentDepth = 0;

            visit(tree, (node, _, parent) => {
              if (node.type === 'heading') {
                currentDepth = node.depth;
              }

              if (node.type === 'strong' && currentDepth > 0) {
                node.data = node.data || {};
                if (typeof node.data.hProperties === 'object' && node.data.hProperties !== null) {
                  (node.data.hProperties as any).depth = currentDepth;
                } else {
                  node.data.hProperties = { depth: currentDepth };
                }
              }
            });
          };
        },
      ];
    },
  };
};