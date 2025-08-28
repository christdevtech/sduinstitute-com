import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { slugField } from '../../fields/slug'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'

export const SchoolCalendar: CollectionConfig<'school-calendar'> = {
  slug: 'school-calendar',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    academicYear: true,
    semester: true,
    calendarType: true,
    startDate: true,
    endDate: true,
    priority: true,
    isPublic: true,
  },
  admin: {
    defaultColumns: [
      'title',
      'academicYear',
      'semester',
      'calendarType',
      'startDate',
      'endDate',
      'priority',
    ],
    useAsTitle: 'title',
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'school-calendar',
        req,
      }),
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'academicYear',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "2024-2025"',
      },
    },
    {
      name: 'semester',
      type: 'select',
      options: [
        {
          label: 'First Semester',
          value: 'first-semester',
        },
        {
          label: 'Second Semester',
          value: 'second-semester',
        },
        {
          label: 'Summer Session',
          value: 'summer-session',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'calendarType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Academic',
          value: 'academic',
        },
        {
          label: 'Administrative',
          value: 'administrative',
        },
        {
          label: 'Examination',
          value: 'examination',
        },
        {
          label: 'Holiday',
          value: 'holiday',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'description',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'startDate',
                  type: 'date',
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: 'dayOnly',
                    },
                    width: '50%',
                  },
                },
                {
                  name: 'endDate',
                  type: 'date',
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: 'dayOnly',
                    },
                    width: '50%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'isPublic',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'priority',
                  type: 'select',
                  defaultValue: 'medium',
                  options: [
                    {
                      label: 'High',
                      value: 'high',
                    },
                    {
                      label: 'Medium',
                      value: 'medium',
                    },
                    {
                      label: 'Low',
                      value: 'low',
                    },
                  ],
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              name: 'color',
              type: 'select',
              options: [
                {
                  label: 'Red',
                  value: '#FF5733',
                },
                {
                  label: 'Green',
                  value: '#33FF57',
                },
                {
                  label: 'Blue',
                  value: '#3357FF',
                },
              ],
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'affectedPrograms',
              type: 'relationship',
              relationTo: 'academic-programs',
              hasMany: true,
              admin: {
                description: 'Academic programs affected by this calendar entry',
              },
            },
            {
              name: 'departments',
              type: 'relationship',
              relationTo: 'departments',
              hasMany: true,
              admin: {
                description: 'Departments affected by this calendar entry',
              },
            },
          ],
          label: 'Relationships',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),
            MetaDescriptionField({}),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    ...slugField(),
  ],
}
