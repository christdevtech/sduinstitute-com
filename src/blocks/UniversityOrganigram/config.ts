import type { Block } from 'payload'

export const UniversityOrganigram: Block = {
  slug: 'universityOrganigram',
  interfaceName: 'UniversityOrganigramBlock',
  fields: [
    {
      name: 'displayType',
      type: 'select',
      defaultValue: 'full-hierarchy',
      options: [
        {
          label: 'Full Hierarchy',
          value: 'full-hierarchy',
        },
        {
          label: 'By Department',
          value: 'by-department',
        },
        {
          label: 'Leadership Only',
          value: 'leadership-only',
        },
      ],
      required: true,
    },
    {
      name: 'selectedDepartment',
      type: 'relationship',
      relationTo: 'departments',
      admin: {
        condition: (data, siblingData) => {
          return siblingData?.displayType === 'by-department'
        },
      },
    },
    {
      name: 'showContactInfo',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'showPhotos',
      type: 'checkbox',
      defaultValue: true,
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'tree',
      options: [
        {
          label: 'Tree View',
          value: 'tree',
        },
        {
          label: 'Grid View',
          value: 'grid',
        },
        {
          label: 'Compact View',
          value: 'compact',
        },
      ],
      required: true,
    },
    {
      name: 'maxLevels',
      type: 'number',
      defaultValue: 5,
      min: 1,
      max: 10,
      admin: {
        description: 'Maximum hierarchy levels to display',
      },
    },
  ],
}
