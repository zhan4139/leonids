/**
 * Created by tingyuanzhang on 01／10／2018.
 */

console.log("App.js is running!");

// JSX - JS XML
const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hand of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();//stop full page refresh
    const option = e.target.elements.option.value;//target is form, elements are form elements

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderFunc();
    }
};

const wipe = () => {
    app.options = [];
    renderFunc();
};

const onMakeDecision = () => {
    const  randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);

};

const appRoot = document.getElementById('app');

const renderFunc = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options: ' : 'No option'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={wipe}>Remove All</button>

            <ol>
                {
                    //problem: option cannot be duplicate because of key
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}> {/*reference instead of calling, because the calling with() will return undefined*/}
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderFunc();