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
	RichText
} from '@wordpress/block-editor';

import {
	Icon,
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
	const blockProps = useBlockProps();
	const onChangeTitle = (newTitle) => {
		setAttributes({ title: newTitle });
	};
	const onChangeSubTitle = (newSubTitle) => {
		setAttributes({ subTitle: newSubTitle });
	};
	const onChangeDescription = (newDescription) => {
		setAttributes({ description: newDescription });
	};
	const onChangeChoiceOne = (newChoiceOne) => {
		setAttributes({ choiceOne: newChoiceOne });
	};
	const onChangeChoiceTwo = (newChoiceTwo) => {
		setAttributes({ choiceTwo: newChoiceTwo });
	};
	const onChangeFooter = (newFooter) => {
		setAttributes({ footer: newFooter });
	};



	return (
	<div {...blockProps}>
		<RichText
			tagName="h2"
			onChange={onChangeTitle}
			allowedFormats={['core/bold', 'core/italic']}
			value={attributes.title}
			placeholder={__('Write your title hier')}
			className="pom-card-title"
			/>

		
		<RichText
			tagName="h4"
			onChange={onChangeSubTitle}
			allowedFormats={['core/bold', 'core/italic']}
			value={attributes.subTitle}
			placeholder={__('Write your title hier')}
		/>
		<RichText
			tagName="p"
			onChange={onChangeDescription}
			allowedFormats={['core/bold', 'core/italic']}
			value={attributes.description}
			placeholder={__('Write your description hier')}
		/>
			<div className="pom-card-choice-one">
				
			<Icon
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z"/></svg>
			}
				/>
			<Icon
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
			}
				/>

			<Icon
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/></svg>
			}
				/>

				
			<RichText
				tagName="p"
				onChange={onChangeChoiceOne}
				allowedFormats={['core/bold', 'core/italic']}
				value={attributes.choiceOne}
				placeholder={__('Write your choice One hier')}
			/>
		</div>

		<p className="pom-card-delimiter">Of</p>

		<div className="pom-card-choice-two">

				
			<Icon
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/></svg>
			}
				/>

			<Icon
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>
			}
				/>

			<Icon
				icon={
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M320 128C328.8 128 336 135.2 336 144V160H352C360.8 160 368 167.2 368 176C368 184.8 360.8 192 352 192H320C311.2 192 304 184.8 304 176V144C304 135.2 311.2 128 320 128zM476.8 98.06L602.4 125.1C624.4 130.9 640 150.3 640 172.8V464C640 490.5 618.5 512 592 512H48C21.49 512 0 490.5 0 464V172.8C0 150.3 15.63 130.9 37.59 125.1L163.2 98.06L302.2 5.374C312.1-1.791 327-1.791 337.8 5.374L476.8 98.06zM256 512H384V416C384 380.7 355.3 352 320 352C284.7 352 256 380.7 256 416V512zM96 192C87.16 192 80 199.2 80 208V272C80 280.8 87.16 288 96 288H128C136.8 288 144 280.8 144 272V208C144 199.2 136.8 192 128 192H96zM496 272C496 280.8 503.2 288 512 288H544C552.8 288 560 280.8 560 272V208C560 199.2 552.8 192 544 192H512C503.2 192 496 199.2 496 208V272zM96 320C87.16 320 80 327.2 80 336V400C80 408.8 87.16 416 96 416H128C136.8 416 144 408.8 144 400V336C144 327.2 136.8 320 128 320H96zM496 400C496 408.8 503.2 416 512 416H544C552.8 416 560 408.8 560 400V336C560 327.2 552.8 320 544 320H512C503.2 320 496 327.2 496 336V400zM320 88C271.4 88 232 127.4 232 176C232 224.6 271.4 264 320 264C368.6 264 408 224.6 408 176C408 127.4 368.6 88 320 88z"/></svg>
			}
				/>

			<RichText
				tagName="p"
				onChange={onChangeChoiceTwo}
				allowedFormats={['core/bold', 'core/italic']}
				value={attributes.choiceTwo}
				placeholder={__('Write your choice Two hier')}
			/>
		</div>
		<RichText
			tagName="p"
			onChange={onChangeFooter}
			allowedFormats={['core/bold', 'core/italic']}
			value={attributes.footer}
			placeholder={__('Write your footer hier')}
		/>
	</div>
);
}
