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
	AlignmentControl,
	BlockControls,
	MediaUpload,
	MediaUploadCheck,
	InspectorControls,
} from '@wordpress/block-editor';

import { Button, PanelBody, FormToggle } from '@wordpress/components';

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
 * @param  root0
 * @param  root0.attributes
 * @param  root0.setAttributes
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const blockProps = useBlockProps();
	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};
	const onChangeSubTitleOne = (newSubTitleOne) => {
		setAttributes({ subTitleOne: newSubTitleOne });
	};

	const onChangeContentOne = (newContentOne) => {
		setAttributes({ contentOne: newContentOne });
	};


	const onChangeSubTitleTwo = (newSubTitleTwo) => {
		setAttributes({ subTitleTwo: newSubTitleTwo });
	};

	const onChangeContentTwo = (newContentTwo) => {
		setAttributes({ contentTwo: newContentTwo });
	};

	const onChangeAlign = (newAlign) => {
		setAttributes({
			align: newAlign === undefined ? 'none' : newAlign,
		});
	};

	const ALLOWED_MEDIA_TYPES = ['image'];
	
	const blockStyle = {
		backgroundImage: attributes.mediaUrl != 0 ? 'url("' + attributes.mediaUrl + '")' : 'none'
	};

	const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'image-selector-example' ) }</p>;

	return (
		<div {...blockProps}>
			<BlockControls>
				<AlignmentControl
					value={attributes.align}
					onChange={onChangeAlign}
				/>
			</BlockControls>
			<InspectorControls>
                    <PanelBody
                        title={ __( 'Background settings', 'image-selector-example' ) }
                        initialOpen={ true }
                    >
                        <div className="wp-block-image-selector-example-image">
                            <MediaUploadCheck fallback={ instructions }>
                                <MediaUpload
                                    title={ __( 'Background image', 'image-selector-example' ) }
                                    onSelect={ ( media ) => {
										setAttributes({
											mediaId: media.id,
											mediaUrl: media.url
										});
									}}
                                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                                    value={ attributes.mediaId }
                                    render={ ( { open } ) => (
                                        <Button
                                            className={ 'editor-post-featured-image__toggle' }
                                            onClick={ open }>
                                            { __( 'Set background image', 'image-selector-example' ) }
                                        </Button>
                                    ) }
                                />
                            </MediaUploadCheck>
                        </div>
                    </PanelBody>
                </InspectorControls>
			<RichText
				tagName="h2"
				onChange={onChangeTitle}
				allowedFormats={['core/bold', 'core/italic']}
				value={attributes.title}
				placeholder={__('Title')}
			/>
			<div className="pom-card-one">
				<RichText
					tagName="h3"
					onChange={onChangeSubTitleOne}
					allowedFormats={['core/bold', 'core/italic']}
					value={attributes.subTitleOne}
					placeholder={__('subTitleOne')}
				/>
				<RichText
					tagName="p"
					onChange={onChangeContentOne}
					allowedFormats={['core/bold', 'core/italic']}
					value={attributes.contentOne}
					placeholder={__('ContentOne')}
				/>
			</div>

			
			<div className="pom-card-two">
				<RichText
					tagName="h3"
					onChange={onChangeSubTitleTwo}
					allowedFormats={['core/bold', 'core/italic']}
					value={attributes.subTitleTwo}
					placeholder={__('subTitleTwo')}
				/>
				<RichText
					tagName="p"
					onChange={onChangeContentTwo}
					allowedFormats={['core/bold', 'core/italic']}
					value={attributes.contentTwo}
					placeholder={__('contentTwo')}
				/>
			</div>
			<MediaUploadCheck>
				<MediaUpload
						onSelect={ ( media ) => {
							setAttributes({
								mediaId: media.id,
								mediaUrl: media.url
							});
						}}
						allowedTypes={ALLOWED_MEDIA_TYPES}
						value={attributes.mediaId}
						render={ ( { open } ) => (
							<Button onClick={ open } >Open Media Library</Button>
						) }
				/>
			</MediaUploadCheck>

			<img class="feature-icon" src={ attributes.mediaUrl } />
		</div>
	);
}
