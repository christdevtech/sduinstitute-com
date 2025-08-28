import type { Block } from 'payload'

export const DepartmentOverview: Block = {
  slug: 'departmentOverview',
  interfaceName: 'DepartmentOverviewBlock',
  fields: [
    {
      name: 'selectedDepartment',
      type: 'relationship',
      relationTo: 'departments',
      required: true,
      admin: {
        description: 'Select the department to display information for',
      },
    },
    {
      name: 'showStaffList',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display the list of staff members in this department',
      },
    },
    {
      name: 'showPrograms',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display the academic programs offered by this department',
      },
    },
    {
      name: 'showContactInfo',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display the department contact information',
      },
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Default',
          value: 'default',
        },
        {
          label: 'Compact',
          value: 'compact',
        },
        {
          label: 'Detailed',
          value: 'detailed',
        },
      ],
      admin: {
        description: 'Choose the layout style for the department overview',
      },
    },
    {
      name: 'maxStaffToShow',
      type: 'number',
      defaultValue: 6,
      min: 1,
      max: 20,
      admin: {
        description: 'Maximum number of staff members to display (1-20)',
        condition: (data, siblingData) => {
          return Boolean(siblingData?.showStaffList)
        },
      },
    },
  ],
}