import './style';
import { Component } from 'preact';
import Plot from 'react-plotly.js';
import { DarkTheme } from './plotly-themes.js';


class Plop extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
				type: 'scatter',
				mode: 'lines+points',
				x: [1, 2, 3],
				y: [2, 6, 3],
				marker: {color: 'red'}
				},
				{
				type: 'bar',
				x: [1, 2, 3],
				y: [2, 5, 3]
				}
			],
			layout: {
				template: DarkTheme,
				title: 'A Fancy Plot',
				autosize: true
			},
  			style: {width: "100%", height: "100%"},
			frames: [],
			config: {}
		};
	}

	render() {
		return (
			<Plot
				data={this.state.data}
				useResizeHandler={true}
				layout={this.state.layout}
				style={this.state.style}
				frames={this.state.frames}
				config={this.state.config}
				onInitialized={(figure) => this.setState(figure)}
				onUpdate={(figure) => this.setState(figure)}
			/>
		)
	}
}

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<Plop />
			</div>
		);
	}
}
