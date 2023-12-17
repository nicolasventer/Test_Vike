import { OnBeforeRouteAsync } from "vike/types";

const onBeforeRender: OnBeforeRouteAsync = async (pageContext) => {
	return {
		pageContext: {
			pageProps: {
				...pageContext.pageProps,
				id: pageContext.routeParams.id,
			},
		},
	};
};

export default onBeforeRender;
