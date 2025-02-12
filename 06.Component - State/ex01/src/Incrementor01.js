import React, { Component } from 'react';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state={
            cnt : 0,
            cnt2 : 10
        }
    }

    render() {
        return (
            <div>
                <button
                    onClick={()=>{
                        this.setState({
                            cnt : cnt + 1,
                        });
                    }}
                >{'+'}</button>
                {' '}
                { cnt }
                {' '}
                <button
                    onClick={()=>{
                        this.setState({
                            cnt : cnt - 1,
                        });
                    }}
                >{'-'}</button>
            </div>
        );
    }
}