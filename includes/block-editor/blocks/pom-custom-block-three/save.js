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

import { Icon, Button } from '@wordpress/components';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const blockProps = useBlockProps.save({ "className": "card bg-primary text-light m-2" });
	const direction = (attributes.direction == "v") ? "row" : null;
	const line = (!direction) ? <hr /> : null;

	function SubTitle(props) {
		if (props.title) {
			return (
				<RichText.Content tagName="h5" value={props.title}
					className="card-subtitle mb-2 text-light"
					style="--bs-text-opacity: .5;"
				/>
			)
			} null
	}

	function Content(props) {
		return (
			<RichText.Content tagName="p" value={props.content}
				className="card-text"
			/>
		)
	}

	function Link(props) {
		return (
			props.link ? <a href={props.link}>Lees meer!</a> : null
		)
	}


	return (
		<div {...blockProps}>
			<div className="card-body">
				<RichText.Content tagName="h3" value={attributes.title}
					className="card-title text-light" />
				<div className={direction}>
					<div className="col-sm card_body_col">
						<SubTitle title={attributes.subTitleOne} />
						<Content content={attributes.partOne} />
						<Link link={attributes.linkOne} />
					</div>
					{line}
					<div className="col-sm card_body_col">
						<SubTitle title={attributes.subTitleTwo} />
						<Content content={attributes.partTwo} />
						<Link link={attributes.linkTwo} />
					</div>
				</div>
			</div>
		</div>
	);
}
