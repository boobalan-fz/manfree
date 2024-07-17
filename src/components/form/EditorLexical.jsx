import { useCallback, useEffect, useRef, useState } from "react";
import Theme from "../lexical/Theme";
import { $generateHtmlFromNodes, $generateJsonFromNodes } from "@lexical/html";
import { QuoteNode, HeadingNode } from "@lexical/rich-text";
import { $getRoot, $getSelection } from "lexical";
import { ListItemNode, ListNode } from "@lexical/list";
import { AutoLinkNode, LinkNode } from "@lexical/link";

import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";

import ToolbarPlugin from "../lexical/ToolbarPlugin";
import CodeHighlightPlugin from "../lexical/CodeHighlightPlugin";

const editorConfig = {
  theme: Theme,
  // Handling of errors during update
  onError(error) {
    throw error;
  },
  // Any custom nodes go here
  nodes: [
    HeadingNode,
    ListNode,
    ListItemNode,
    QuoteNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
  ],
};

function EditorLexical({ SetContent, content }) {
  const handleChange = (editorState, editor) => {
    editor.update(() => {
      const rawHTML = $generateHtmlFromNodes(editor, null);
      SetContent(rawHTML);
    });
  };
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="relative  overflow-hidden my-5 w-full  rounded-xl border border-gray-300 bg-white text-left font-normal leading-5 text-gray-900">
        <ToolbarPlugin />
        <div className="relative rounded-b-lg border-opacity-5 bg-white">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="lexical min-h-[280px] w-full resize-none px-8 py-2 text-base caret-gray-900 outline-none"
                dangerouslySetInnerHTML={{ __html: content }}
                onChange={handleChange}
              />
            }
            ErrorBoundary={null}
          />
          <OnChangePlugin onChange={handleChange} />
          <AutoFocusPlugin />
          <ListPlugin />
          <LinkPlugin />
          <CodeHighlightPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
export default EditorLexical;
