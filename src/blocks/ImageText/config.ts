import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '../../fields/linkGroup'

export const ImageText: Block = {
  slug: 'imageText',
  interfaceName: 'ImageTextBlock',
  fields: [
    {
      name: 'layout',
      type: 'select',
      options: [
        {
          label: 'Image Left',
          value: 'imageLeft',
        },
        {
          label: 'Image Right',
          value: 'imageRight',
        },
      ],
      defaultValue: 'imageLeft',
      required: true,
      admin: {
        description: 'Choose whether the image appears on the left or right side',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        description: 'The image to display alongside the text content',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The main heading for this section',
      },
    },
    {
      name: 'richText',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      required: true,
      admin: {
        description: 'Rich text content to display alongside the image',
      },
    },
    linkGroup({
      appearances: ['default', 'outline'],
      overrides: {
        maxRows: 2,
        admin: {
          description: 'Optional link to include with this content',
        },
      },
    }),
  ],
  labels: {
    plural: 'Image Text Blocks',
    singular: 'Image Text Block',
  },
}
