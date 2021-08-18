import React from 'react'
import './style.css'
import styled from 'styled-components'


const RedP = styled.p`
    color: red;
    font-size: 2em;
`


class Text extends React.Component {
    render() {
        return <p>some text</p>
    }
}

class Title extends React.Component {
    constructor(props) {
        super(props)
        console.log('title created')
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.title === this.props.title
    }

    render() {
        return <h1 onClick={ () => alert('hi') }>{ this.props.title }</h1>
    }
}

class Counter extends React.Component {
    render() {
        return <p>{ this.props.number }</p>
    }
}

class CounterWrapper extends React.Component {
    render() {
        return <RedP>{ this.props.children }</RedP>
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
                <Title title='some text'/>
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
