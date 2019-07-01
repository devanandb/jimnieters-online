exports.createPages = async ({ graphql, actions: { createPage} }) => {
	const results = await graphql(`
		{
			allArticlesJson {
				edges {
					node {
						slug
					}
				}
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
			path: `/content/${article.slug}`,
			component: require.resolve('./src/templates/article-graphql.js'),
			context: {
				slug: article.slug,
			}
		})
	});
};