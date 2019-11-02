export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5dbe07ab234e67989ab4a482',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jw67hvkp',
                  apiId: '99f074a2-97ff-4c61-98d1-ab1af98b4417'
                },
                {
                  buildHookId: '5dbe07abcaa4336e5447e4ae',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-yde1mov8',
                  apiId: 'd85a686f-5822-43cd-8f6f-d93b0fb455ac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dexter-stpierre/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-yde1mov8.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
