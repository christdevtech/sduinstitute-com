import type { Block } from 'payload'

export const AdmissionsInfo: Block = {
  slug: 'admissionsInfo',
  interfaceName: 'AdmissionsInfoBlock',
  fields: [
    {
      name: 'displayType',
      type: 'select',
      defaultValue: 'all-programs',
      options: [
        {
          label: 'All Programs',
          value: 'all-programs',
        },
        {
          label: 'By Department',
          value: 'by-department',
        },
        {
          label: 'By Program Type',
          value: 'by-program-type',
        },
      ],
      required: true,
    },
    {
      name: 'selectedDepartment',
      type: 'relationship',
      relationTo: 'departments',
      admin: {
        condition: (data, siblingData) => siblingData?.displayType === 'by-department',
      },
    },
    {
      name: 'selectedProgramType',
      type: 'select',
      options: [
        {
          label: 'Basic',
          value: 'Basic',
        },
        {
          label: 'HND',
          value: 'HND',
        },
        {
          label: 'Degree - Top-up',
          value: 'Degree-TopUp',
        },
        {
          label: 'Degree - Direct',
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
        condition: (data, siblingData) => siblingData?.displayType === 'by-program-type',
      },
    },
    {
      name: 'showDeadlines',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Application Deadlines',
    },
    {
      name: 'showFees',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Tuition Fees',
    },
    {
      name: 'showRequirements',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Entry Requirements',
    },
    {
      name: 'showApplicationSteps',
      type: 'checkbox',
      defaultValue: false,
      label: 'Show Application Process Steps',
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'cards',
      options: [
        {
          label: 'Cards',
          value: 'cards',
        },
        {
          label: 'Table',
          value: 'table',
        },
        {
          label: 'Accordion',
          value: 'accordion',
        },
      ],
      required: true,
    },
  ],
}
