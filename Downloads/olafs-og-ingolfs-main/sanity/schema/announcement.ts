export default {
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'pinned',
      title: 'Pinned',
      type: 'boolean',
      description: 'Pin this announcement to show it first',
    },
  ],
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [
        { field: 'pinned', direction: 'desc' },
        { field: 'date', direction: 'desc' }
      ],
    },
    {
      title: 'Date (Oldest First)',
      name: 'dateAsc',
      by: [
        { field: 'pinned', direction: 'desc' },
        { field: 'date', direction: 'asc' }
      ],
    },
  ],
}
