import type { Block } from 'payload'

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

export const MissionVision: Block = {
  slug: 'missionVision',
  interfaceName: 'MissionVisionBlock',
  fields: [
    {
      name: 'missionTitle',
      type: 'text',
      defaultValue: 'Our Mission',
      required: true,
      admin: {
        description: 'The title for the mission section',
      },
    },
    {
      name: 'missionContent',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      required: true,
      admin: {
        description: 'Rich text content for the mission statement',
      },
      defaultValue: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'To provide world-class healthcare education that prepares competent, compassionate, and ethical healthcare professionals who will serve communities across Cameroon and beyond.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    {
      name: 'missionImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Optional image to display with the mission section',
      },
    },
    {
      name: 'visionTitle',
      type: 'text',
      defaultValue: 'Our Vision',
      required: true,
      admin: {
        description: 'The title for the vision section',
      },
    },
    {
      name: 'visionContent',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ]
        },
      }),
      required: true,
      admin: {
        description: 'Rich text content for the vision statement',
      },
      defaultValue: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'To be the leading institution for nursing and biomedical sciences education in Central Africa, recognized for academic excellence, innovation, and graduate employability.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    {
      name: 'visionImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Optional image to display with the vision section',
      },
    },
    {
      name: 'layout',
      type: 'select',
      options: [
        {
          label: 'Side by Side',
          value: 'sideBySide',
        },
        {
          label: 'Stacked',
          value: 'stacked',
        },
      ],
      defaultValue: 'sideBySide',
      required: true,
      admin: {
        description: 'Choose how to display the mission and vision sections',
      },
    },
  ],
  labels: {
    singular: 'Mission & Vision Block',
    plural: 'Mission & Vision Blocks',
  },
}
