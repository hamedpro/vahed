import {Component} from 'react'
import "./header.css";
class CustomHeader extends Component{
    handle_secret_door = ()=>{
        if(Number(localStorage.getItem('title_click_count')) === 6){
            localStorage.removeItem('title_click_count')
            if(window.confirm('are you sure you want to open admin page?')){

            }else{
                return
            } 
            window.location.replace("../admin")
        }else if(localStorage.getItem('title_click_count') === null){
            localStorage.setItem('title_click_count',1)
        }else{
            localStorage.setItem('title_click_count',Number(localStorage.getItem('title_click_count'))+1)
        }
    }
    render(){
        return (
            <div className="header">
                <h2 onClick={this.handle_secret_door}>mouj</h2>
                
                <a href='#/home'>
                    <svg viewBox="0 0 16 16" className="bi bi-house person_icon" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                        <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                    </svg>
                </a>
            </div>
        )
    }
}

export default CustomHeader;