const { fmImagesToRelative } = require('gatsby-remark-relative-images');
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
exports.createPages = async ({ graphql, actions: { createPage} }) => {
	const results = await graphql(`
		{
			articles: allMarkdownRemark {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
			tags: allMarkdownRemark {
				distinct(field: frontmatter___tags)
			}
		}
	`);

	if (results.error) {
		console.log('Something went wrong');
		return;
	}
	results.data.articles.edges.forEach(edge => {
		
		const article = edge.node;

		createPage({
			path: `case-study/${article.frontmatter.slug}`,
			component: require.resolve('./src/templates/articles-graphql.js'),
			context: {
				slug: article.frontmatter.slug,
			}
		})

		createPage({
			path: `case-study/${article.frontmatter.slug}/detail`,
			component: require.resolve('./src/templates/article-graphql.js'),
			context: {
				slug: article.frontmatter.slug,
			}
		})
	});

	results.data.tags.distinct.forEach(edge => {
		const tag = edge;

		createPage({
			path: `/tag/${tag}`,
			component: require.resolve('./src/templates/tag-graphql.js'),
			context: {
				slug: tag,
			}
		})
	});

	// results.data.allArticlesJson.distinct.forEach(edge => {
	// 	const category = edge;

	// 	createPage({
	// 		path: `${category}`,
	// 		component: require.resolve('./src/templates/category-graphql.js'),
	// 		context: {
	// 			slug: category,
	// 		}
	// 	})
	// });
};

