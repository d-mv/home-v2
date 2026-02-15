import React, { useEffect, useState } from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
	src: string;
}

export const SvgIcon: React.FC<SvgIconProps> = ({ src, ...props }) => {
	const [svgContent, setSvgContent] = useState<string | null>(null);

	useEffect(() => {
		fetch(src)
			.then((res) => res.text())
			.then((text) => setSvgContent(text))
			.catch((err) => console.error("Failed to load SVG", src, err));
	}, [src]);

	if (!svgContent) return null;

	// Extract content from SVG string to avoid nested svg tags if needed,
	// or just render it using a wrapper.
	// However, styled-components usually target `svg`.
	// If I use a span wrapper with dangerouslySetInnerHTML, styled-components
	// targeting `svg` inside the parent will work IF the fetched content has an `svg` tag.
	// The fetched content IS an <svg> tag.
	// So we need to render it.
	// Warning: attributes on the component props (like className, id) won't be applied to the inner SVG
	// automatically unless we parse/manipulate it, OR we wrap it.
	// Existing code uses `id` on the icon component.

	// Simplest way: Wrap in a span (or div) and pass props to wrapper?
	// But `Arrow` styles `svg` directly inside `Arrow`.
	// `Arrow` -> `svg`.
	// If I wrap in span: `Arrow` -> `span` -> `svg`.
	// This might break styles if strict direct child selector is used, or if `Arrow` is a button and we put a div inside.

	// `Arrow` is `styled(DefaultButton)`. `DefaultButton` is a `button`.
	// `Arrow` style: `svg { width: 2rem; ... }`. This is a descendant selector, so `Arrow span svg` is fine.

	// `Line` style: `svg { ... }`. Descendant selector. Fine.

	// We need to pass `id` and `className` etc.
	// The `props` passed to `FaGithubAlt` include `id`.

	return (
		<span
			{...props}
			style={{ display: "inline-flex", lineHeight: 0, ...props.style }}
			dangerouslySetInnerHTML={{ __html: svgContent }}
		/>
	);
};
