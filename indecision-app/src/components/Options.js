import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button
                className="button--link button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All
            </button>
        </div>

        {props.options.length === 0 && <p className="widget-header__message">Please add an option to get started!</p>}
        {props.options.map((option, index) =>
            (<Option
                key={option}
                optiontext={option}
                count={index + 1}
                handleDeleteOption={props.handleDeleteOption}
            />)
        )}

    </div>
);

export default Options;

// class Options extends React.Component {
//     //No need to bind this because we will use parents' props
//     // constructor(props) {
//     //     super(props);
//     //     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//     // }
//     // handleRemoveAll() {
//     //     this.props.handleDeleteOptions;
//     // }
//
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {/*{this.props.options.length}*/}
//                 {this.props.options.map((option) => <Option.js key={option} optiontext={option}/>)}
//                 <Option.js />
//             </div>
//         );
//     }
// }

