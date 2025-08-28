import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { slugField } from '../../fields/slug'
import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const MentorUniversities: CollectionConfig<'mentor-universities'> = {
  slug: 'mentor-universities',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    title: true,
    slug: true,
    country: true,
    logo: true,
    partnershipType: true,
  },
  admin: {
    defaultColumns: ['title', 'country', 'partnershipType', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      admin: {
        description: 'Full name of the mentor university',
      },
    },
    ...slugField('name'),
    {
      name: 'country',
      type: 'text',
      required: true,
      admin: {
        description: 'Country where the university is located',
      },
    },
    link({
      overrides: {
        name: 'website',
        admin: {
          description: 'Official website URL',
        },
      },
    }),
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'University logo or emblem',
      },
    },
    {
      name: 'partnershipStartDate',
      type: 'date',
      admin: {
        description: 'Date when the partnership began',
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'partnershipType',
      type: 'select',
      required: true,
      hasMany: true,
      options: [
        {
          label: "Bachelor's Programs",
          value: 'degree',
        },
        {
          label: 'Higher National Diploma',
          value: 'hnd',
        },
        {
          label: 'BTS',
          value: 'bts',
        },
        {
          label: 'Masters Programs',
          value: 'masters',
        },
        {
          label: 'PhD Programs',
          value: 'phd',
        },
      ],
      admin: {
        description:
          'Types of certification programs offered through this partnership (can select multiple)',
      },
    },
    {
      name: 'accreditationInfo',
      type: 'richText',
      editor: lexicalEditor({}),
      admin: {
        description: 'Information about university accreditation and recognition',
      },
    },
    {
      name: 'contactPerson',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
          admin: {
            description: 'Name of the primary contact person',
          },
        },
        {
          name: 'email',
          type: 'email',
          admin: {
            description: 'Email address of the contact person',
          },
        },
        {
          name: 'phone',
          type: 'text',
          admin: {
            description: 'Phone number of the contact person',
          },
        },
      ],
      admin: {
        description: 'Primary contact person for partnership matters',
      },
    },
    {
      name: 'programsOffered',
      type: 'relationship',
      relationTo: 'academic-programs',
      hasMany: true,
      admin: {
        description: 'Academic programs offered through this partnership',
        position: 'sidebar',
      },
    },
    {
      name: 'description',
      type: 'richText',
      editor: lexicalEditor({}),
      admin: {
        description: 'General description of the university and partnership',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Whether this partnership is currently active',
        position: 'sidebar',
      },
    },
    {
      name: 'meta',
      label: 'SEO',
      type: 'group',
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
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
