import type { Block } from 'payload'

export const AcademicCalendar: Block = {
  slug: 'academicCalendar',
  interfaceName: 'AcademicCalendarBlock',
  fields: [
    {
      name: 'academicYear',
      type: 'text',
      admin: {
        description: 'Academic year to display (e.g., "2024-2025"). Leave empty to show current year.',
      },
    },
    {
      name: 'viewType',
      type: 'select',
      defaultValue: 'overview',
      options: [
        {
          label: 'Academic Overview',
          value: 'overview',
        },
        {
          label: 'Calendar View',
          value: 'calendar',
        },
        {
          label: 'Timeline View',
          value: 'timeline',
        },
      ],
      admin: {
        description: 'Choose how to display the academic calendar',
      },
    },
    {
      name: 'filterByCalendarType',
      type: 'select',
      options: [
        {
          label: 'Academic',
          value: 'Academic',
        },
        {
          label: 'Administrative',
          value: 'Administrative',
        },
        {
          label: 'Examination',
          value: 'Examination',
        },
        {
          label: 'Holiday',
          value: 'Holiday',
        },
      ],
      admin: {
        description: 'Filter calendar items by type (optional)',
      },
    },
    {
      name: 'filterBySemester',
      type: 'select',
      options: [
        {
          label: 'First Semester',
          value: 'First Semester',
        },
        {
          label: 'Second Semester',
          value: 'Second Semester',
        },
        {
          label: 'Summer Session',
          value: 'Summer Session',
        },
      ],
      admin: {
        description: 'Filter by semester (optional)',
      },
    },
    {
      name: 'showFilters',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show filter options to users',
      },
    },
    {
      name: 'showSearch',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show search functionality',
      },
    },
    {
      name: 'highlightUpcoming',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Highlight upcoming important dates',
      },
    },
    {
      name: 'showPriority',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show priority indicators for calendar items',
      },
    },
    {
      name: 'itemsToShow',
      type: 'number',
      defaultValue: 20,
      min: 1,
      max: 100,
      admin: {
        description: 'Maximum number of calendar items to display',
      },
    },
  ],
}