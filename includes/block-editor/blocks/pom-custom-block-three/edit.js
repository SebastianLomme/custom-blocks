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
import {
	useBlockProps,
	RichText,
	InspectorControls,
	__experimentalLinkControlSearchInput as LinkControlSearchInput,
	__experimentalLinkControl as LinkControl

} from '@wordpress/block-editor';

import {
	PanelBody,
	Button,
	TextControl,
	RadioControl
} from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps({"className":["card", "bg-primary", "text-light", "m-2"]});
	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};
	const onChangeSubTitleOne = (newSubTitleOne) => {
		setAttributes({ subTitleOne: newSubTitleOne });
	};
	const onChangePartOne = (newPartOne) => {
		setAttributes({ partOne: newPartOne });
	};
	const onChangeSubTitleTwo = (newSubTitleTwo) => {
		setAttributes({ subTitleTwo: newSubTitleTwo });
	};
	const onChangePartTwo = (newPartTwo) => {
		setAttributes({ partTwo: newPartTwo });
	};
	const onChangeUrlLinkOne = (newLinkOne) => {
		setAttributes({ linkOne: newLinkOne });
	};
	const onChangeUrlLinkTwo = (newLinkTwo) => {
		setAttributes({ linkTwo: newLinkTwo });
	};
	const onChangeDirection = (newDirection) => {
		setAttributes({ direction: newDirection });
	};


	const suggestionsRender = (props) => (
		<div className="components-dropdown-menu__menu">
			{ props.suggestions.map( ( suggestion, index ) => {
					return (
						<div onClick={ () => props.handleSuggestionClick( suggestion ) } className="components-button components-dropdown-menu__menu-item is-active has-text has-icon">{suggestion.title}</div>
					)
				} )
			}
		</div>
	)



	return (
		<div {...blockProps}>
			<InspectorControls>
				<PanelBody>
					<TextControl
						label="Link 1"
						value={ attributes.linkOne }
						onChange={onChangeUrlLinkOne}
						type="text"
					/>
					<TextControl
						label="Link 2"
						value={ attributes.linkTwo }
						onChange={onChangeUrlLinkTwo}
						type="text"
					/>
					<RadioControl
						label="direction"
						help="direction of the cells"
						selected={ attributes.direction }
						options={ [
							{ label: 'horizontel', value: 'h' },
							{ label: 'vertival', value: 'v' },
						] }
						onChange={ onChangeDirection }
					/>
					

				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="h3"
				onChange={onChangeTitle}
				allowedFormats={['core/bold', 'core/italic']}
				value={attributes.title}
				placeholder={__('Title')}
				className="pom-card-title"
			/>
			<RichText
				tagName="h5"
				onChange={onChangeSubTitleOne}
				allowedFormats={['core/bold', 'core/italic']}
				value={attributes.subTitleOne}
				placeholder={__('subTitleOne')}
			/>
			<RichText
				tagName="p"
				onChange={onChangePartOne}
				allowedFormats={['core/bold', 'core/italic']}
				value={attributes.partOne}
				placeholder={__('parteOne')}
			/>
			{attributes.linkOne ? <a href={attributes.linkOne}>Lees meer!</a> : null }
			<RichText
				tagName="h5"
				onChange={onChangeSubTitleTwo}
				allowedFormats={['core/bold', 'core/italic']}
				value={attributes.subTitleTwo}
				placeholder={__('subTitleTwo')}
			/>
				<RichText
				tagName="p"
				onChange={onChangePartTwo}
				allowedFormats={['core/bold', 'core/italic']}
				value={attributes.partTwo}
				placeholder={__('parteTwo')}
			/>
			{attributes.linkTwo ? <a href={attributes.linkTwo}>Lees meer!</a> : null }

		
	</div>
);
}
