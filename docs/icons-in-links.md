# Icons in Link Fields and Buttons

## Overview

This document explains how icons are added to link fields in the CMS configuration and how they are rendered and placed in buttons or links in the frontend.

## Link Field Configuration (`src/fields/link.ts`)

The link field is defined as a group field in `src/fields/link.ts`. It includes subfields for selecting an icon and its placement. These fields are added conditionally and appear in the CMS admin interface for content editors.

### Key Fields for Icons:
- **Icon Field**:
  - Name: `icon`
  - Type: Select
  - Default Value: `''` (None)
  - Options: Sourced from `materialIconOptions` in `src/utilities/materialIcons.ts`
  - Admin Description: "Choose an icon to display with the link."
  - Width: 70%
  - This field allows users to select a Material Design icon (e.g., MdHome, MdSearch) to associate with the link.

- **Icon Placement Field**:
  - Name: `iconPlacement`
  - Type: Select
  - Default Value: `'right'`
  - Options: 
    - `{ label: 'Right', value: 'right' }`
    - `{ label: 'Left', value: 'left' }`
  - Condition: Only appears if an icon is selected (i.e., `icon` is not empty).
  - Admin Description: "Choose where to place the icon."
  - Width: 30%
  - This determines whether the icon appears to the left or right of the link label/text.

These fields are placed in a row layout for better usability in the admin panel. The icon options are imported from `materialIcons.ts`, providing a list of available Material Icons.

## Available Icons (`src/utilities/materialIcons.ts`)

This utility file imports icons from `react-icons/md` and exports:
- `materialIcons`: An object mapping icon names (e.g., `MdHome`, `MdSearch`) to their React components.
- `materialIconOptions`: An array of select options, starting with `{ label: 'None', value: '' }`, followed by labeled options like `{ label: 'Home', value: 'MdHome' }`.
- `iconPlacementOptions`: Options for left or right placement.

This file centralizes the icon definitions, making it easy to add or modify available icons.

## Rendering Icons in Buttons/Links (`src/components/Link/index.tsx`)

The `CMSLink` component in `src/components/Link/index.tsx` is responsible for rendering the link with the selected icon. It supports different appearances (e.g., inline link or button) and handles icon placement.

### Relevant Props:
- `icon`: The selected icon name (e.g., `'MdHome'`).
- `iconPlacement`: `'left'` or `'right'` (defaults to `'right'`).
- Other props like `label`, `children`, `appearance`, `size`, etc., influence the rendering.

### Rendering Logic:
1. **Icon Retrieval**:
   - If an `icon` is provided, it looks up the corresponding React component from `materialIcons` (e.g., `materialIcons['MdHome']`).
   - Renders the icon with appropriate classes (e.g., size adjustments based on button size).

2. **Content Composition (`renderContent()` function)**:
   - Combines the icon with the link text (from `label` or `children`).
   - If `iconPlacement` is `'left'`:
     ```
     <span className="flex items-center gap-2">
       {renderIcon}
       {textContent}
     </span>
     ```
   - If `iconPlacement` is `'right'` (default):
     ```
     <span className="flex items-center gap-2">
       {textContent}
       {renderIcon}
     </span>
     ```
   - Uses flexbox for alignment and adds a gap between icon and text.

3. **Overall Rendering**:
   - If `appearance` is `'inline'`, it renders as a simple Next.js `<Link>` with the composed content.
   - Otherwise, it renders as a Shadcn `<Button>` (with variant and size props), wrapping a `<Link>`.
   - Adds `rel="noopener noreferrer" target="_blank"` if `newTab` is true.

This ensures the icon is correctly positioned within the button or link element, providing a consistent UI experience.

## Usage Example
In the CMS:
- Select an icon like "Search" (`MdSearch`).
- Choose placement as "left".
- The rendered button might look like: [Search Icon] Apply Now

This integration enhances the visual appeal and usability of links and buttons throughout the site.