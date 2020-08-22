import React, { Component } from 'react';

class Card extends Component {

    state = { quote: this.getRandomQuote(), color: this.getRandomColor() };

    componentDidMount(){
        document.getElementsByTagName("body")[0].style.backgroundColor = this.state.color;
    }

    getRandomColor() {
        return `rgb(${this.getRandomNumber255()}, ${this.getRandomNumber255()}, ${this.getRandomNumber255()})`;
    }

    getRandomNumber255(){
        return Math.floor(Math.random() * 256);
    }

    getRandomQuote() {
        return this.props.quotes[Math.trunc(Math.random() * 100)];
    }

    onButtonClick = () => {
        const color = this.getRandomColor();
        this.setState({
            quote: this.getRandomQuote(),
            color: color
        });

        document.getElementsByTagName("body")[0].style.backgroundColor = color;
    }

    render() {
        return (
            <div id={this.props.Id} className="card">
                <div className="card-body">
                    <div className="card-text">
                        <blockquote className="blockquote mb-0">
                            <p id="text">{this.state.quote.quote}</p>
                            <p id="author" className="blockquote-footer"><cite title="Source Title">{this.state.quote.author}</cite></p>
                        </blockquote>
                    </div>
                    <div className="d-inline">
                        <button className="float-right btn-md btn" onClick={() => this.onButtonClick()} id="new-quote" style={{ backgroundColor: this.state.color, color: 'white' }}>New Quote</button>
                        <a href="https://twitter.com/intent/tweet" id="tweet-quote"><i className="fa fa-twitter" style={{fontSize: '40px', color: this.state.color}}></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;
