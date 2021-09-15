import { Component } from "react";

class Option extends Component{
    //usage => give it title and content as props and svgs as children
    render = ()=>{
        return (
            <div>
                <div className="option">
                    <div className="right_container">
                        <h2 className="title">{this.props.title}</h2>
                        <div className="content">{this.props.content}</div>
                    </div>
                </div>
                <div className="iconsContainer">
                    {/* {this.props.icons.forEach(icon=>{
                        return (
                            <div className="icon" onClick={icon.handler}>{icon.svg}</div>
                        )
                    })} */}
                    {this.props.children}
                </div>
            </div>
        )
    }
}
export default Option;