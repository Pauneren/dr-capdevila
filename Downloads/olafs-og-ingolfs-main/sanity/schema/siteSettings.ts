export default {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  options: {
    id: 'siteSettings',
  },
  fields: [
    {
      name: 'publicName',
      title: 'Public name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'canonicalName',
      title: 'Canonical name',
      type: 'string',
      description: 'The official name used in page titles and SEO',
    },
    {
      name: 'domainPolicyText',
      title: 'Domain policy text',
      type: 'text',
      description: 'Small print text for domain policy information',
    },
    {
      name: 'locations',
      title: 'Locations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Location name',
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
              name: 'address',
              title: 'Address',
              type: 'text',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'mapLink',
              title: 'Map link',
              type: 'url',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
            },
            {
              name: 'email',
              title: 'Email',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
