import React from 'react'

class Text extends React.Component {
    render() {
        return <p>some text</p>
    }
}

class Title extends React.Component {
    render() {
        return <h1>title</h1>
    }
}

class App extends React.Component {
    render() {
        return(
            <div>
                <Title/>
                <Text/>
            </div>
        )
    }
}

export default App
