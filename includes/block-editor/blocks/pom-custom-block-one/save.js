/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @param  root0
 * @param  root0.attributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save( {"className":"row"});

	return (
		<div {...blockProps}>
			<RichText.Content tagName="h2" value={attributes.title} />

			<div className="pom-card-section col-md-6">
				<div className="pom-card-one p-3">
					<RichText.Content tagName="h3" value={attributes.subTitleOne} />
					<RichText.Content tagName="p" value={attributes.contentOne} />
				</div>
				<div className="pom-card-two p-3">
					<RichText.Content tagName="h3" value={attributes.subTitleTwo} />
					<RichText.Content tagName="p" value={attributes.contentTwo} />
				</div>
			</div>
			<img className="feature-icon pom-card-section col-md-6" src={ attributes.mediaUrl } />
		</div>
	);
}
