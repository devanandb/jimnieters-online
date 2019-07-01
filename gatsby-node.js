exports.createPages = async ({ graphql, actions: { createPage} }) => {
	const results = await graphql(`
		{
			allCategoriesJson {
				edges {
					node {
						id
						slug
						articles {
							slug
						}
					}
				}
			}
		}
	`);

	if (results.error) {
		console.log('Something went wrong');
		return;
	}

	results.data.allCategoriesJson.edges.forEach(edge => {
		const category = edge.node;

		createPage({
			path: `/${category.slug}`,
			component: require.resolve('./src/templates/category-graphql.js'),
			context: {
				slug: category.slug,
			}
		})

		// 
		category.articles.forEach(article => {
			createPage({
				path: `/content/${article.slug}`,
				component: require.resolve('./src/templates/article-graphql.js'),
				context: {
					catid: category.id,
					slug: article.slug,
				}
			})
		})
	});
};