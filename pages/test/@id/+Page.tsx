export { Page };

const Page = ({ id }: { id: string }) => (
	<>
		<div>Test</div>
		<div>{id ?? "invalid"}</div>
	</>
);
