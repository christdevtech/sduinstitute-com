import type { DefaultTypedEditorState } from '@payloadcms/richtext-lexical'

/**
 * Extracts plain text from Lexical rich text content for search purposes
 * @param richTextContent - The rich text content from Lexical editor
 * @returns Plain text string or empty string if no content
 */
export function extractTextFromRichText(richTextContent: any): string {
  if (!richTextContent) return ''
  
  // Handle string content (fallback)
  if (typeof richTextContent === 'string') {
    return richTextContent
  }
  
  // Handle Lexical editor state
  if (richTextContent.root && richTextContent.root.children) {
    return extractTextFromNodes(richTextContent.root.children)
  }
  
  return ''
}

/**
 * Recursively extracts text from Lexical nodes
 * @param nodes - Array of Lexical nodes
 * @returns Concatenated plain text
 */
function extractTextFromNodes(nodes: any[]): string {
  if (!Array.isArray(nodes)) return ''
  
  return nodes
    .map((node) => {
      // Text nodes
      if (node.type === 'text' && node.text) {
        return node.text
      }
      
      // Paragraph nodes
      if (node.type === 'paragraph' && node.children) {
        return extractTextFromNodes(node.children)
      }
      
      // Heading nodes
      if (node.type === 'heading' && node.children) {
        return extractTextFromNodes(node.children)
      }
      
      // List nodes
      if (node.type === 'list' && node.children) {
        return extractTextFromNodes(node.children)
      }
      
      // List item nodes
      if (node.type === 'listitem' && node.children) {
        return extractTextFromNodes(node.children)
      }
      
      // Quote nodes
      if (node.type === 'quote' && node.children) {
        return extractTextFromNodes(node.children)
      }
      
      // Link nodes
      if (node.type === 'link' && node.children) {
        return extractTextFromNodes(node.children)
      }
      
      // Block nodes (like media blocks) - skip content but check for children
      if (node.children && Array.isArray(node.children)) {
        return extractTextFromNodes(node.children)
      }
      
      return ''
    })
    .filter(Boolean)
    .join(' ')
    .trim()
}