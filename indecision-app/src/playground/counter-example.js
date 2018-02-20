/**
 * Created by WebStorm
 * Filename: counter-example
 * User: Ryan
 * Date: 12／29／2017
 * Time: 10:12 PM
 */

// let count = 0;
// const user = {
//     name: 'Ryan',
//     age: 19,
//     location: 'Seattle'
// };
//
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     }
// }
//
// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-id" className="button" onClick={() => {count++;renderCounterApp();}}>+1</button>
//             <button onClick={() => {count--;renderCounterApp();}}>-1</button>
//             <button onClick={() => {count = 0;renderCounterApp();}}>reset</button>
//             {/*{user.age && user.age >= 18 && <p>Age: {user.age}</p>}*/}
//             {/*/!*<p>Location: {getLocation(user.location)}</p>*!/*/}
//             {/*{getLocation(user.location)}*/}
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };
//
// renderCounterApp();


//    Add default props value for counter
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handlePlusOne = this.handlePlusOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        const num = localStorage.getItem('num');
        const n = parseInt(num, 10);
        if (!isNaN(n)) {
            this.setState(() => ({count: n}));
        } else {
            this.setState(() => ({count: 0}));
        }

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const num = this.state.count;
            localStorage.setItem('num', num);
            console.log("saving data");
        }
    }

    handlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count+1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        });
    }

    handleReset() {
        //not pass an object to setState in case of synchronizing issue
        //always pass a function
        // this.setState( {
        //             count: 0
        //         }
        //
        // );

        this.setState((prevState) => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Counter.defaultProps = {
//     count: 0
// };

ReactDOM.render(<Counter count={100}/>, document.getElementById('app'));