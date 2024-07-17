import {
  HeadingNode,
  QuoteNode,
  ListNode,
  ListItemNode,
  CodeNode,
} from "@lexical/rich-text";
import { LinkNode } from "@lexical/link";

const theme = {
  ltr: "ltr",
  rtl: "rtl",
  paragraph: "text-base mb-4",
  quote: "border-l-4 border-gray-300 pl-4 text-gray-600 italic",
  heading: {
    h1: "text-3xl font-bold mb-4",
    h2: "text-2xl font-bold mb-3",
    h3: "text-xl font-bold mb-2",
  },
  list: {
    nested: {
      listitem: "list-disc list-inside ml-6",
    },
    ol: "list-decimal list-inside",
    ul: "list-disc list-inside",
    listitem: "mb-2",
  },
  code: "bg-gray-100 text-red-500 font-mono p-1 rounded",
  link: "text-blue-500 underline cursor-pointer",
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through",
    underlineStrikethrough: "underline line-through",
  },
};

export const initialConfig = {
  namespace: "MyEditor",
  nodes: [HeadingNode, QuoteNode, ListNode, ListItemNode, CodeNode, LinkNode],
  theme,
  onError: (error) => {
    console.error(error);
  },
};
