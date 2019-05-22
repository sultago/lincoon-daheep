import * as React from 'react';

export interface Props {
}

interface State {
	text: string;
}

class TextInputForm extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { text: "" };
		this.handleChange = this.handleChange.bind(this);
	}

	render() {
		return (
			<form>
				<input
					placeholder="text 입력해주세요."
					onChange={this.handleChange}
				/>
				<div>{this.state.text}</div>
			</form>
		);
	}

	handleChange(e: any) {
		console.log(e.target.value);
		this.setState({
			text: e.target.value
		});
	}
}

export default TextInputForm;