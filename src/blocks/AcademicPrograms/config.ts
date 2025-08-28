import type { Block } from 'payload'

export const AcademicPrograms: Block = {
  slug: 'academicPrograms',
  interfaceName: 'AcademicProgramsBlock',
  fields: [
    {
      name: 'displayType',
      type: 'select',
      defaultValue: 'all',
      options: [
        {
          label: 'All Programs',
          value: 'all',
        },
        {
          label: 'By Department',
          value: 'by-department',
        },
        {
          label: 'By Program Type',
          value: 'by-type',
        },
      ],
      admin: {
        description: 'Choose how to display academic programs',
      },
    },
    {
      name: 'selectedDepartment',
      type: 'relationship',
      relationTo: 'departments',
      admin: {
        condition: (data, siblingData) => {
          return siblingData?.displayType === 'by-department'
        },
        description: 'Select a specific department to display programs from',
      },
    },
    {
      name: 'selectedProgramType',
      type: 'select',
      options: [
        {
          label: 'Basic Programs',
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
        condition: (data, siblingData) => {
          return siblingData?.displayType === 'by-type'
        },
        description: 'Select a specific program type to display',
      },
    },
    {
      name: 'showFilters',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Allow users to filter programs by department and type',
      },
    },
    {
      name: 'showSearch',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show search functionality for programs',
      },
    },
    {
      name: 'itemsPerPage',
      type: 'number',
      defaultValue: 12,
      min: 1,
      max: 50,
      admin: {
        description: 'Number of programs to display per page',
      },
    },
    {
      name: 'showApplicationCTA',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show application call-to-action buttons on program cards',
      },
    },
  ],
}