import React from 'react'

class Text extends React.Component {
    render() {
        return <p>some text</p>
    }
}

class Title extends React.Component {
    render() {
        const title = 'title'
        return <h1 onClick={() => alert('hi')}>{ title }</h1>
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="content">
                <Title/>
                <Text/>
            </div>
        )
    }
}

export default App
