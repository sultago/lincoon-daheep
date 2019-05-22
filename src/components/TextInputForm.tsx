import * as React from 'react';
import {ChangeEvent} from "react";

export interface Props {
}

interface State {
	text: string;
}

class TextInputForm extends React.Component<Props, State> {	// react component는 props와 state 둘 다 있어야 한다
	constructor(props: Props) {
		super(props);
		this.state = { text: "" };

		// 함수 바인드 -> this를 잊어버리기 때문에 this값을 bind 해준다.
		// es6를 이용해서 우회해서 사용할 수 있다.
		this.handleChange = this.handleChange.bind(this);
		this.addItem = this.addItem.bind(this);
		this.getItem = this.getItem.bind(this);
	}

	render() {
		return (
			<div className="add-items">
				<div>
					<input placeholder="text를 입력해주세요." onChange={this.handleChange} />
					<input type="button" value="저장" onClick={this.addItem}></input>
				</div>

				<div>
					<p>뿌려봥</p>
					<input type="button" value="저장된 값을 뿌려보아요" onClick={this.getItem}></input>
					<br/>
					<input readOnly type="text"  name="testText"></input>
				</div>

			</div>
		);
	}

	handleChange(e: any) {
		this.setState({
			text: e.target.value
		});
	}

	addItem() {
		let data = this.state.text;
		localStorage.setItem('textData', data);
	}

	getItem() {
		let data = localStorage.getItem('textData');
		const outputItem : any = document.querySelector('input[name=testText]');
		outputItem.value = data;
	}
}

export default TextInputForm;