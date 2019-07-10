exports.createPages = async ({ graphql, actions: { createPage} }) => {
	const results = await graphql(`
		{
			allArticlesJson {
				edges {
					node {
						slug
						category
					}
				}
				distinct(field: category)
			}
		}
	`);

	if (results.error) {
		console.log('Something went wrong');
		return;
	}

	results.data.allArticlesJson.edges.forEach(edge => {
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