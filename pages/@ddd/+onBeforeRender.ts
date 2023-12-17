import { OnBeforeRouteAsync } from "vike/types";

const onBeforeRender: OnBeforeRouteAsync = async (pageContext) => {
	const value = await fetch("http://localhost:3000/oee").then((res) => res.text());
	return {
		pageContext: {
			pageProps: {
				...pageContext.pageProps,
				value,
			},
		},
	};
};

export default onBeforeRender;
