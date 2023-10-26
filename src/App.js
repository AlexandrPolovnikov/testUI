import {
    CheckboxInput,
    EmailInput,
    PlainButton,
    RadioInput,
    SearchInput,
} from "@prometey/ui-kit-test-lib";

function App() {
    const buttons = [];
    const inputs = [];
    const searchInput = [];
    const checkboxInput = [];
    const radioInput = [];

    for (let i = 1; i <= 500; i++) {
        buttons.push(<PlainButton buttonText="Button" key={i} />);
    }

    for (let i = 1; i <= 500; i++) {
        inputs.push(<EmailInput placeholder="Basic usage" key={i} />);
    }
    for (let i = 1; i <= 500; i++) {
        searchInput.push(<SearchInput key={i} />);
    }
    for (let i = 1; i <= 500; i++) {
        checkboxInput.push(<CheckboxInput key={i} />);
    }
    for (let i = 1; i <= 500; i++) {
        radioInput.push(<RadioInput key={i} />);
    }
    return (
        <div className="App">
            {buttons}
            {inputs}
            {searchInput}
            {checkboxInput}
            {radioInput}
        </div>
    );
}

export default App;
