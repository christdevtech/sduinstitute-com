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

export const Departments: CollectionConfig<'departments'> = {
  slug: 'departments',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    description: true,
    featuredImage: true,
    contactInfo: {
      email: true,
      phone: true,
      office: true,
    },
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['name', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'departments',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'departments',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'The official name of the department',
      },
    },
    ...slugField('name'),
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
              label: 'Department Description',
              admin: {
                description: 'Detailed description of the department, its mission, and objectives',
              },
            },
            {
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Main image representing the department',
              },
            },
            {
              name: 'contactInfo',
              type: 'group',
              label: 'Contact Information',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'email',
                      type: 'email',
                      admin: {
                        width: '50%',
                      },
                      label: 'Department Email',
                    },
                    {
                      name: 'phone',
                      type: 'text',
                      admin: {
                        width: '50%',
                      },
                      label: 'Phone Number',
                    },
                  ],
                },
                {
                  name: 'office',
                  type: 'text',
                  label: 'Office Location',
                  admin: {
                    description: 'Physical location of the department office',
                  },
                },
              ],
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'headOfDepartment',
              type: 'relationship',
              relationTo: 'staff',
              admin: {
                position: 'sidebar',
                description:
                  'Current head of department (will be available when Staff collection is created)',
              },
              label: 'Head of Department',
            },
            {
              name: 'programs',
              type: 'relationship',
              relationTo: 'academic-programs',
              hasMany: true,
              admin: {
                position: 'sidebar',
                description:
                  'Academic programs offered by this department (will be available when Academic Programs collection is created)',
              },
              label: 'Academic Programs',
            },
            {
              name: 'staffMembers',
              type: 'relationship',
              relationTo: 'staff',
              hasMany: true,
              admin: {
                position: 'sidebar',
                description:
                  'Staff members belonging to this department (will be available when Staff collection is created)',
              },
              label: 'Staff Members',
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
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },
  ],
  hooks: {
    afterChange: [
      ({ doc, req }) => {
        // Revalidate the department page and any related pages
        if (req.context.triggerAfterChange !== false) {
          // Add revalidation logic here when needed
        }
      },
    ],
  },
  versions: {
    drafts: true,
  },
}
