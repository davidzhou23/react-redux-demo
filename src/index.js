import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configStore from './common/configStore';

import PlusOne from './features/PlusOne';
import MinusOne from './features/MinusOne';

const store = configStore();

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: 0
        }
    }

    componentDidMount() {
        console.log(store);
        store.subscribe(() => {
            console.log('store.subscribe');
            this.setState({
                result: store.getState().plus.number
            })
        });
    }

    render() {
        console.log('App render');
        console.log(this.state.result);
        return (<Provider store={store}>
            <div>
                <PlusOne number={this.state.result} />
                <div>{this.state.result}</div>
                <MinusOne number={this.state.result} />
            </div>
        </Provider>);
    }
}

ReactDOM.render(<App />, document.getElementById('root'));