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

export const AcademicPrograms: CollectionConfig<'academic-programs'> = {
  slug: 'academic-programs',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    programType: true,
    department: true,
    duration: true,
    featuredImage: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'programType', 'department', 'duration', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'academic-programs',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'academic-programs',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
    {
      name: 'programType',
      type: 'select',
      required: true,
      options: [
        {
          label: 'Basic Program',
          value: 'Basic',
        },
        {
          label: 'Higher National Diploma (HND)',
          value: 'HND',
        },
        {
          label: 'Degree - Top-up',
          value: 'Degree-TopUp',
        },
        {
          label: 'Degree - Direct Entry',
          value: 'Degree-Direct',
        },
        {
          label: 'Masters',
          value: 'Masters',
        },
        {
          label: 'PhD',
          value: 'PhD',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'specialties',
      type: 'array',
      fields: [
        {
          name: 'specialty',
          type: 'text',
          required: true,
        },
      ],
      required: true,
      admin: {
        description: 'List of specialties offered in this program',
        position: 'sidebar',
        condition: (data, siblingData) => {
          return siblingData.programType === 'Masters' || siblingData.programType === 'PhD'
        },
      },
    },
    {
      name: 'department',
      type: 'relationship',
      relationTo: 'departments',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'duration',
      type: 'text',
      required: true,
      admin: {
        description: 'e.g., "3 years", "2 years", "18 months"',
      },
    },
    {
      name: 'mentorUniversity',
      type: 'relationship',
      relationTo: 'mentor-universities',
      admin: {
        condition: (data, siblingData) => {
          return siblingData.programType === 'masters' || siblingData.programType === 'phd'
        },
        description: 'Required for Masters and PhD programs',
        position: 'sidebar',
      },
    },
    {
      name: 'programCoordinator',
      type: 'relationship',
      relationTo: 'staff',
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
              name: 'featuredImage',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'entryRequirements',
              type: 'array',
              fields: [
                {
                  name: 'requirement',
                  type: 'text',
                  required: true,
                },
              ],
              required: true,
              admin: {
                description: 'List of entry requirements for this program',
              },
            },
            {
              name: 'curriculumOverview',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              required: false,
            },
            {
              name: 'careerProspects',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              required: false,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'tuitionFees',
              type: 'group',
              fields: [
                {
                  name: 'local',
                  type: 'text',
                  admin: {
                    description:
                      'Tuition fees for local students (e.g., "500,000 FCFA per semester")',
                  },
                },
                {
                  name: 'international',
                  type: 'text',
                  admin: {
                    description:
                      'Tuition fees for international students (e.g., "$2,000 per semester")',
                  },
                },
              ],
            },
            {
              name: 'applicationDeadline',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayOnly',
                },
              },
            },
            {
              name: 'intakePeriods',
              type: 'array',
              fields: [
                {
                  name: 'intakeDate',
                  type: 'date',
                  required: true,
                  admin: {
                    date: {
                      pickerAppearance: 'dayOnly',
                    },
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  admin: {
                    description: 'e.g., "Fall 2024", "Spring 2025"',
                  },
                },
              ],
              admin: {
                description: 'Available intake periods for this program',
              },
            },
            {
              name: 'brochure',
              type: 'upload',
              relationTo: 'media',
              admin: {
                description: 'Program brochure (PDF format recommended)',
              },
            },
          ],
          label: 'Program Details',
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
      ({ req, doc }) => {
        if (req.context.triggerAfterChange !== false) {
          // Revalidate the program page
          // This would be implemented based on your revalidation strategy
        }
      },
    ],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
