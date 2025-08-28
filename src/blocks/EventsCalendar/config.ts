import type { Block } from 'payload'

export const EventsCalendar: Block = {
  slug: 'eventsCalendar',
  interfaceName: 'EventsCalendarBlock',
  fields: [
    {
      name: 'viewType',
      type: 'select',
      defaultValue: 'upcoming',
      options: [
        {
          label: 'Upcoming Events',
          value: 'upcoming',
        },
        {
          label: 'Calendar View',
          value: 'calendar',
        },
        {
          label: 'List View',
          value: 'list',
        },
      ],
      admin: {
        description: 'Choose how to display the events',
      },
    },
    {
      name: 'filterByDepartment',
      type: 'relationship',
      relationTo: 'departments',
      admin: {
        description: 'Filter events by specific department (optional)',
      },
    },
    {
      name: 'filterByEventType',
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
          label: 'Social',
          value: 'Social',
        },
        {
          label: 'Conference',
          value: 'Conference',
        },
        {
          label: 'Workshop',
          value: 'Workshop',
        },
        {
          label: 'Graduation',
          value: 'Graduation',
        },
        {
          label: 'Orientation',
          value: 'Orientation',
        },
      ],
      admin: {
        description: 'Filter events by type (optional)',
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
      name: 'showFilters',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show filter options to users',
      },
    },
    {
      name: 'itemsToShow',
      type: 'number',
      defaultValue: 10,
      min: 1,
      max: 50,
      admin: {
        description: 'Number of events to display',
      },
    },
    {
      name: 'dateRange',
      type: 'select',
      defaultValue: 'month',
      options: [
        {
          label: 'This Week',
          value: 'week',
        },
        {
          label: 'This Month',
          value: 'month',
        },
        {
          label: 'This Semester',
          value: 'semester',
        },
        {
          label: 'This Year',
          value: 'year',
        },
      ],
      admin: {
        description: 'Date range for displaying events',
      },
    },
    {
      name: 'showRegistrationStatus',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description: 'Show registration status and deadlines',
      },
    },
  ],
}