const {slugify} = require('./src/util/UtilityFunctions');
const path = require('path');

exports.onCreateNode = ({node, actions}) => {
    const {createNodeField} = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slugFromTitle = slugify(node.frontmatter.title)
        createNodeField({
            node,
            name: 'slug',
            value: slugFromTitle,
        })
    }
}

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;
    const singlepostTemplate = path.resolve('src/templates/singlepost/Single-post.js');

    return graphql(`
    {
        allMarkdownRemark{
            edges{
                node{
                    frontmatter{
                        author
                        tags
                    }
                    fields{
                        slug
                    }
                }
            }
        }
    }`).then(res => {
        if(res.errors) return Promise.reject(res.errors);

        const posts = res.data.allMarkdownRemark.edges;

        posts.forEach(({node})=> {
            createPage({
                path: node.fields.slug,
                component: singlepostTemplate,
                context: {
                    // passing slug for template to use to get post
                    slug: node.fields.slug
                }
            })
        })
    })
}