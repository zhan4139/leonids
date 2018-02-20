import React from 'react';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options:[],
        selectedOption: undefined
    };

    // constructor(props) {
    //     super(props);
    //     this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //     this.state = {
    //         options: []
    //     };
    // }

    handleClearSelectedOption = () => {
        this.setState({selectedOption: undefined});
    };

    handleDeleteOptions = () => {
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

        //arrow function return an empty object (need to be wrapped by parentheses)
        this.setState( () => ({options: []}) );
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) =>
            ({
                options: prevState.options.filter(option => optionToRemove !== option)
            })
        );
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);
        this.setState( () => ({selectedOption: option}) );
    };

    handleAddOption = (option) => {
        if (!option) {
            return ('Please enter valid value!');
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!'
        }

        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     }
        // });

        this.setState( (prevState) => ({options: prevState.options.concat(option)}) );
    };


    //life cycle method of class based components
    componentDidMount() {
        //try catch block to prevent local storage not valid data
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {

        }
    }

    //triggered once state updated
    componentDidUpdate(prevProps, prevState) {
        //has access to this.state/props
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log("saving data");
        }

    }

    //triggered right before unmount, could try re-render to test
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                {/*<h1>Title</h1>*/}

                <Header title={title} subtitle={subtitle}/>
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>

                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
