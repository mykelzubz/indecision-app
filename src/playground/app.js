console.log("App.js is running!");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your hands in the life of a computer',
    options: []
}

const onFormSubmit = (e) => {

    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        renderApp();
    }
}

const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];

    alert(option);
}

const renderApp = () => {

    var template = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>

            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);

}



var appRoot = document.getElementById('app');

renderApp();