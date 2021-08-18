import React from 'react'
import './style.css'

class Text extends React.Component {
    render() {
        return <p>some text</p>
    }
}

class Title extends React.Component {
    render() {
        const title = 'title'
        return <h1 onClick={ () => alert('hi') }>{ title }</h1>
    }
}

class Counter extends React.Component {
    render() {
        return <p>{ this.props.number }</p>
    }
}

class CounterWrapper extends React.Component {
    render() {
        return <p>{ this.props.children }</p>
    }
}

function CounterAlt({ number }) {
    return (
        <div>{ number }</div>
    )
}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 1
        }

        // 為了讓 `this` 能在 callback 中被使用，這裡的綁定是必要的：
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div className="content">
                <Title/>
                <Text/>
                <Counter number={ this.state.counter }/>
                <CounterAlt number={ this.state.counter }/>
                <CounterWrapper>{ this.state.counter }</CounterWrapper>
                <button onClick={ this.handleClick }>click me</button>
            </div>
        )
    }
    handleClick() {
        this.setState({ counter: this.state.counter + 1 })
    }
}

export default App
