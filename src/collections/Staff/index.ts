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
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { slugField } from '../../fields/slug'
import { linkGroup } from '../../fields/linkGroup'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { anyone } from '@/access/anyone'

export const Staff: CollectionConfig<'staff'> = {
  slug: 'staff',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  defaultPopulate: {
    fullName: true,
    slug: true,
    position: true,
    department: true,
    hierarchyLevel: true,
    profileImage: true,
    isActive: true,
  },
  admin: {
    defaultColumns: [
      'fullName',
      'position',
      'department',
      'hierarchyLevel',
      'isActive',
      'updatedAt',
    ],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'staff',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'staff',
        req,
      }),
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name of the staff member',
      },
    },
    ...slugField('fullName'),

    {
      name: 'employeeId',
      type: 'text',
      unique: true,
      admin: {
        description: 'Unique employee identification number',
      },
    },
    {
      name: 'position',
      type: 'text',
      admin: {
        description: 'Job title or position (e.g., Professor, Lecturer, Assistant Lecturer)',
      },
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'departments',
      admin: {
        description: 'Department this staff member belongs to',
      },
    },
    {
      name: 'hierarchyLevel',
      type: 'select',
      options: [
        {
          label: 'Vice-Chancellor',
          value: 'vice-chancellor',
        },
        {
          label: 'Deputy Vice-Chancellor',
          value: 'deputy-vc',
        },
        {
          label: 'Registrar',
          value: 'registrar',
        },
        {
          label: 'Dean',
          value: 'dean',
        },
        {
          label: 'Head of Department (HOD)',
          value: 'hod',
        },
        {
          label: 'Senior Lecturer',
          value: 'senior-lecturer',
        },
        {
          label: 'Lecturer',
          value: 'lecturer',
        },
        {
          label: 'Assistant Lecturer',
          value: 'assistant-lecturer',
        },
        {
          label: 'Administrative Staff',
          value: 'admin-staff',
        },
      ],
      admin: {
        description: 'Hierarchical level within the university structure',
      },
    },
    {
      name: 'qualifications',
      type: 'array',
      fields: [
        {
          name: 'qualification',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Academic qualifications and degrees',
      },
    },
    {
      name: 'specializations',
      type: 'array',
      fields: [
        {
          name: 'specialization',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Areas of specialization and expertise',
      },
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'bio',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              admin: {
                description: 'Professional biography and background',
              },
            },
            {
              name: 'publications',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              admin: {
                description: 'Research publications and academic works',
              },
            },
            {
              name: 'officeHours',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              admin: {
                description: 'Office hours and availability for students',
              },
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'contactInfo',
              type: 'group',
              fields: [
                {
                  name: 'email',
                  type: 'email',
                  admin: {
                    description: 'Official email address',
                  },
                },
                {
                  name: 'phone',
                  type: 'text',
                  admin: {
                    description: 'Phone number',
                  },
                },
                {
                  name: 'office',
                  type: 'text',
                  admin: {
                    description: 'Office location or room number',
                  },
                },
              ],
              admin: {
                description: 'Contact information',
              },
            },
            {
              name: 'profileImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Professional profile photo',
              },
            },
            {
              name: 'cv',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Curriculum Vitae (PDF format)',
              },
            },
            {
              name: 'researchInterests',
              type: 'array',
              fields: [
                {
                  name: 'interest',
                  type: 'text',
                  required: true,
                },
              ],
              admin: {
                description: 'Research interests and focus areas',
              },
            },
            {
              name: 'socialLinks',
              type: 'array',
              fields: [
                linkGroup({
                  appearances: false,
                }),
              ],
              admin: {
                description: 'Social media and professional links',
              },
            },
            {
              name: 'isActive',
              type: 'checkbox',
              defaultValue: true,
              admin: {
                description: 'Whether this staff member is currently active',
                position: 'sidebar',
              },
            },
          ],
          label: 'Details',
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
  ],
  timestamps: true,
}
