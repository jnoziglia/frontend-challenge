/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import { useState } from "react";

function Image({ src, onRemove }) {
	const [isRemoved, setIsRemoved] = useState(false);

	if (isRemoved) {
		return null;
	}
	else {
		return (
			<div className="image">
				<img src={src} /> 
				<button className="remove" onClick={() => setIsRemoved(true)}>X</button>
			</div>
		);
	}
}

export function ImageGallery({ links }) {
	return (
		<div>
			{ links.map((link, index) => <Image src={link} key={link+index} />) }
		</div>
	);
}
