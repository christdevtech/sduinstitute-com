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

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'

export const Events: CollectionConfig<'events'> = {
  slug: 'events',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    eventType: true,
    startDate: true,
    endDate: true,
    location: true,
    department: true,
    organizer: true,
    isFeatured: true,
    eventImage: true,
    gallery: true,
    meta: {
      image: true,
      description: true,
    },
  },
  admin: {
    defaultColumns: ['title', 'eventType', 'startDate', 'location', 'isFeatured', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'events',
          req,
        })
        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'events',
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

    {
      name: 'eventType',
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
          label: 'Social',
          value: 'social',
        },
        {
          label: 'Conference',
          value: 'conference',
        },
        {
          label: 'Workshop',
          value: 'workshop',
        },
        {
          label: 'Graduation',
          value: 'graduation',
        },
        {
          label: 'Orientation',
          value: 'orientation',
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
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: 'Event Description',
              required: true,
            },
            {
              name: 'eventImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Event Image',
            },
            {
              name: 'gallery',
              type: 'upload',
              relationTo: 'media',
              hasMany: true,
              label: 'Event Gallery',
              admin: {
                description: 'Upload multiple images and media files for this event',
              },
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'startDate',
              type: 'date',
              required: true,
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
            {
              name: 'endDate',
              type: 'date',
              admin: {
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
            {
              name: 'isAllDay',
              type: 'checkbox',
              label: 'All Day Event',
              defaultValue: false,
            },
            {
              name: 'location',
              type: 'text',
              required: true,
            },
          ],
          label: 'Date, Time and Venue',
        },
        {
          fields: [
            {
              name: 'department',
              type: 'relationship',
              relationTo: 'departments',
              label: 'Associated Department',
            },
            {
              name: 'organizer',
              type: 'relationship',
              relationTo: 'staff',
              label: 'Event Organizer',
            },
            {
              name: 'targetAudience',
              type: 'select',
              required: true,
              options: [
                {
                  label: 'Students',
                  value: 'students',
                },
                {
                  label: 'Staff',
                  value: 'staff',
                },
                {
                  label: 'Public',
                  value: 'public',
                },
                {
                  label: 'Alumni',
                  value: 'alumni',
                },
                {
                  label: 'Prospective Students',
                  value: 'prospective-students',
                },
              ],
            },
            {
              name: 'contactInfo',
              type: 'group',
              label: 'Contact Information',
              fields: [
                {
                  name: 'email',
                  type: 'email',
                  label: 'Contact Email',
                },
                {
                  name: 'phone',
                  type: 'text',
                  label: 'Contact Phone',
                },
              ],
            },
          ],
          label: 'Organization',
        },
        {
          fields: [
            {
              name: 'registrationRequired',
              type: 'checkbox',
              label: 'Registration Required',
              defaultValue: false,
            },
            {
              name: 'registrationDeadline',
              type: 'date',
              label: 'Registration Deadline',
              admin: {
                condition: (data) => data.registrationRequired,
                date: {
                  pickerAppearance: 'dayAndTime',
                },
              },
            },
            {
              name: 'maxAttendees',
              type: 'number',
              label: 'Maximum Attendees',
              admin: {
                condition: (data) => data.registrationRequired,
                description: 'Leave empty for unlimited attendees',
              },
            },
            {
              name: 'isRecurring',
              type: 'checkbox',
              label: 'Recurring Event',
              defaultValue: false,
            },
            {
              name: 'recurrencePattern',
              type: 'select',
              label: 'Recurrence Pattern',
              options: [
                {
                  label: 'Daily',
                  value: 'daily',
                },
                {
                  label: 'Weekly',
                  value: 'weekly',
                },
                {
                  label: 'Monthly',
                  value: 'monthly',
                },
                {
                  label: 'Yearly',
                  value: 'yearly',
                },
              ],
              admin: {
                condition: (data) => data.isRecurring,
              },
            },
          ],
          label: 'Registration & Recurrence',
        },
        {
          fields: [
            {
              name: 'isFeatured',
              type: 'checkbox',
              label: 'Featured Event',
              defaultValue: false,
              admin: {
                position: 'sidebar',
              },
            },
          ],
          label: 'Settings',
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
    ...slugField('title'),
  ],
  hooks: {
    afterChange: [
      ({ req, doc }) => {
        if (req.context.triggerAfterChange !== false) {
          // Add any revalidation logic here if needed
        }
      },
    ],
    afterDelete: [
      ({ req, doc }) => {
        if (req.context.triggerAfterChange !== false) {
          // Add any revalidation logic here if needed
        }
      },
    ],
  },
}
