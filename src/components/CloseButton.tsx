import Close from "../style/project/Close";
import { Underline } from "./Underline";

export const CloseButton = (props: { onClick: () => void }) => (
	<Close id="modal__headline_close-button" onClick={() => props.onClick()}>
		<Underline id="modal__headline_close_underline">Close</Underline>
	</Close>
);
