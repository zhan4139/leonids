/**
 * Created by WebStorm
 * Filename: built-it-visible
 * User: Ryan
 * Date: 12／29／2017
 * Time: 11:18 PM
 */

// const appRoot = document.getElementById('app');
// const info = 'Hey. These are some details you can now see!';
// const content = ['Hide details', 'show details'];
// let contents = '';
// let buttonContent = 'show details';
//
// const detailFunc = () => {
//     if (buttonContent == content[0]) {
//         buttonContent = content[1];
//         contents = '';
//         renderFunc();
//     } else {
//         buttonContent = content[0];
//         contents = info;
//         renderFunc();
//     }
// };

// const renderFunc = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={detailFunc}>{buttonContent}</button>
//             <p>{contents}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// let visible = false;
// const toggleVis = () => {
//     visible = !visible;
//     renderFunc();
// };
// const renderFunc = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVis}>{visible ? 'Hide details' : 'Show details'}</button>
//             {visible && (<p>Hey. These are some details you can now see!</p>)}
//         </div>
//     );
//     ReactDOM.render(template, document.getElementById('app'));
// };
//
// renderFunc();


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) =>{
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                {this.state.visibility && (<p>Hey. These are some details you can now see!</p>)}
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));