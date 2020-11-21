import './style';
import { Component, createContext } from 'preact';
import { useContext } from 'preact/hooks/src';
import Plot from 'react-plotly.js';
import { DarkTheme } from './plotly-themes.js';

const DataContext = createContext();
const DataProvider = DataContext.Provider;
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

	render() {
		return (
			<DataProvider
			value={{
				...this.state
			}}>
				{this.props.children}
			</DataProvider>
		)
	};
}

class Plop extends Component {
	static contextType = DataContext;
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
		return (
			<Plot
				data={ctx.data}
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
				<DataMngr>
					<Plop />
				</DataMngr>
			</div>
		);
	}
}
