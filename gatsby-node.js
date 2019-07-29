const { fmImagesToRelative } = require('gatsby-remark-relative-images');
exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
exports.createPages = async ({ graphql, actions: { createPage} }) => {
	const results = await graphql(`
		{
			articles: allArticlesJson {
				edges {
					node {
						slug
						category
					}
				}
				distinct(field: category)
			}
			tags: allArticlesJson {
				distinct(field: tags___slug)
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
			path: `case-study/${article.slug}`,
			component: require.resolve('./src/templates/articles-graphql.js'),
			context: {
				slug: article.slug,
			}
		})

		createPage({
			path: `case-study/${article.slug}/detail`,
			component: require.resolve('./src/templates/article-graphql.js'),
			context: {
				slug: article.slug,
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

