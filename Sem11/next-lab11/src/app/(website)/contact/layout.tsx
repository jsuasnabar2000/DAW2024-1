
export default function Layout({
 children
}: {
 children: React.ReactNode;
}) {
	return (
		<div>
			<h1>Hello Root Layout SECUNDARIO Root Name</h1>
			{children}
		</div>
	);
}