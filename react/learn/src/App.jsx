import './App.css';
import About from './component/About';
import ShopList from './component/ShopList';
import Title from './component/Title';
import Option from './component/Option';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import TestStatus from './component/TestStatus';
import Test from './component/Test'

// list -> state in order to edit the info
class App extends React.Component {
	constructor(props) {
		super(props)
		this.list = [
			{
				key: 1,
				type: 'stationary',
				name: 'pen',
				price: 10
			},
			{
				key: 2,
				type: 'food',
				name: 'chip',
				price: 11
			},
			{
				key: 3,
				type: 'stationary',
				name: 'note-book',
				price: 15
			},
		]
		this.state = {

		}
	}
	componentWillUnmount() {
		console.log('unmount')
	}

	render() {
		return (
			<div className="App">
				<BrowserRouter>
				<div className="css">
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
					<Link to="/testStaus">Test Status</Link>
					<Link to="/option">option</Link>
					<Link to="/test">Test</Link>
				</div>
					<hr/>
					<Switch>
						<Route path="/about">
							<About />
						</Route>
						<Route path="/testStaus">
							<TestStatus />
						</Route>
						<Route path="/option">
							<Option />
						</Route>
						<Route path="/test">
							<Test />
						</Route>
						<Route path="/" exact>
							<Title>
								{this.list.map((item) => <ShopList key={item.key} type={item.type} name={item.name} price={item.price} />)}
							</Title>
						</Route>
						<Route path="/">
							<h5>404: Page not Found</h5>
						</Route>
					</Switch>
				</BrowserRouter>
			</div>
		)
	}
}


/*
function App() {
  let list = [
	{
	  key: 1,
	  type: 'stationary',
	  name: 'pen',
	  price: 10
	},
	{
	  key: 2,
	  type: 'food',
	  name: 'chip',
	  price: 11
	},
	{
	  key: 3,
	  type: 'stationary',
	  name: 'note-book',
	  price: 15
	},
  ]

  return (
	<div className="App">
	  <header className="App-header">
		<Title>
		  {list.map((item)=><ShopList key={item.key} type={item.type} name={item.name} price={item.price}/>)}
		</Title>
		<About />     
	  </header>
	</div>
  );
}
*/
export default App;
