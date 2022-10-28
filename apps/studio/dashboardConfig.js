export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'rrsartpl/sanity-angular-tailwindcss-website2'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '635c2cdf1f72162aca3f1474',
                  title: 'Sanity Studio',
                  name: 'sanity-angular-tailwindcss-website-2-studio-21jjvutr',
                  apiId: '93ebb7a3-f2ad-418c-9811-41c598d9e9b2'
                },
                {
                  buildHookId: '635c2cdf686fae323284a275',
                  title: 'Website',
                  name: 'sanity-angular-tailwindcss-website-2-web',
                  apiId: '52ef9f4f-d852-49a9-a6d9-85d6e69bac61'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rrsartpl/sanity-angular-tailwindcss-website2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-angular-tailwindcss-website-2-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
