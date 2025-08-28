import type { Block } from 'payload'

export const MentorUniversities: Block = {
  slug: 'mentorUniversities',
  interfaceName: 'MentorUniversitiesBlock',
  fields: [
    {
      name: 'displayType',
      type: 'select',
      defaultValue: 'all',
      options: [
        {
          label: 'All Universities',
          value: 'all',
        },
        {
          label: 'By Partnership Type',
          value: 'by-partnership-type',
        },
        {
          label: 'Featured Only',
          value: 'featured',
        },
      ],
      required: true,
    },
    {
      name: 'selectedPartnershipType',
      type: 'select',
      admin: {
        condition: (data, siblingData) => siblingData?.displayType === 'by-partnership-type',
      },
      options: [
        {
          label: "Bachelor's Programs",
          value: 'bachelors',
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
    },
    {
      name: 'showLogos',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showPrograms',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showContactInfo',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'grid',
      options: [
        {
          label: 'Grid',
          value: 'grid',
        },
        {
          label: 'Carousel',
          value: 'carousel',
        },
        {
          label: 'List',
          value: 'list',
        },
      ],
      required: true,
    },
    {
      name: 'itemsPerRow',
      type: 'number',
      defaultValue: 3,
      min: 1,
      max: 4,
      admin: {
        condition: (data, siblingData) => siblingData?.layout === 'grid',
        description: 'Number of universities to display per row (only for grid layout)',
      },
    },
  ],
}