export default {
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'startDateTime',
      title: 'Start date and time',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'Ólafsvík', value: 'Ólafsvík' },
          { title: 'Ingjaldshóll', value: 'Ingjaldshóll' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'isCanceled',
      title: 'Canceled',
      type: 'boolean',
    },
  ],
  orderings: [
    {
      title: 'Start Date & Time',
      name: 'startDateTimeAsc',
      by: [{ field: 'startDateTime', direction: 'asc' }],
    },
    {
      title: 'Start Date & Time (Descending)',
      name: 'startDateTimeDesc',
      by: [{ field: 'startDateTime', direction: 'desc' }],
    },
  ],
}
