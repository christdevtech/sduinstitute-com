import type { Block } from 'payload'

export const ProgramPathway: Block = {
  slug: 'programPathway',
  interfaceName: 'ProgramPathwayBlock',
  fields: [
    {
      name: 'selectedDepartment',
      type: 'relationship',
      relationTo: 'departments',
      admin: {
        description: 'Select a department to show pathways for specific department programs',
      },
    },
    {
      name: 'showAllPathways',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show all available pathways or filter by department',
      },
    },
    {
      name: 'highlightedPathway',
      type: 'select',
      options: [
        {
          label: 'Basic to HND',
          value: 'basic-to-hnd',
        },
        {
          label: 'HND to Degree',
          value: 'hnd-to-degree',
        },
        {
          label: 'Degree to Masters',
          value: 'degree-to-masters',
        },
        {
          label: 'Masters to PhD',
          value: 'masters-to-phd',
        },
        {
          label: 'Full Pathway',
          value: 'full-pathway',
        },
      ],
      defaultValue: 'full-pathway',
      admin: {
        description: 'Highlight a specific pathway section',
      },
    },
    {
      name: 'showDuration',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Display program duration for each step',
      },
    },
    {
      name: 'showRequirements',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show entry requirements for each program level',
      },
    },
    {
      name: 'layout',
      type: 'select',
      options: [
        {
          label: 'Horizontal',
          value: 'horizontal',
        },
        {
          label: 'Vertical',
          value: 'vertical',
        },
        {
          label: 'Flowchart',
          value: 'flowchart',
        },
      ],
      defaultValue: 'horizontal',
      admin: {
        description: 'Choose the layout style for the pathway visualization',
      },
    },
    {
      name: 'enableInteractivity',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Enable interactive elements like hover effects and clickable steps',
      },
    },
  ],
}