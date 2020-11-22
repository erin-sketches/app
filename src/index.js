import './style';
import { Component, createContext } from 'preact';
import { useContext } from 'preact/hooks/src';
// Use smol bundle instead
//import Plot from 'react-plotly.js';
//import Plotly from 'plotly-basic.js';
var Plotly = require('plotly.js-basic-dist');
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

import { DarkTheme } from './plotly-themes.js';

const DataCtx = createContext();
class DataMngr extends Component {
	state = {
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
		revision: 0
	};

	addData = () => {
		this.state.data[0].x.push(Math.random()*10);
		this.state.data[0].y.push(Math.random()*5);
		this.setState({
			data: [this.state.data[0], this.state.data[1]],
			revision: this.state.revision + 1
		});
	};

	render() {
		return (
			<DataCtx.Provider
			value={{
				...this.state,
				addData: this.addData
			}}>
				{this.props.children}
			</DataCtx.Provider>
		)
	};
}

const Button = (props) => {
	return (
		<DataCtx.Consumer>
			{(ctx) => {
				console.log(ctx)
				let addData = ctx.addData;
				return ( 
					<button onClick={() => {addData()}}>Add data point to trace 0</button>
				)
			}}
		</DataCtx.Consumer>
	)
}

class Plop extends Component {
	static contextType = DataCtx;
	constructor(props) {
		super(props);
		this.state = {
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
		let ctx = this.context;
		let layout = this.state.layout;
		layout.datarevision = ctx.revision;
		return (
			<Plot
				data={ctx.data}
				revision={ctx.revision}
				useResizeHandler={true}
				layout={layout}
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
				<DataMngr>
					<Button />
					<Plop />
				</DataMngr>
			</div>
		);
	}
}
