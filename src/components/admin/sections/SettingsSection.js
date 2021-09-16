import { Component } from "react";
import {custom_ajax, custom_ajax_default_path} from "../../../api_client/custom_ajax"
import Option from "../../Option/Option"
import IntroBox from "../../IntroBox/component"
import box_arrow_up_white from "../../../common/bootstrap-icons/box-arrow-up-white.svg"
var options = [
    {
        title:'new plan',
        info:"some info about create new plan option",
        handler(){
            var starter_username = window.prompt('enter starter username')
            var final_amount_as_rial = window.prompt('enter final amount as rial')
            var title = window.prompt('enter its title')
            var description = window.prompt('enter its description')
            custom_ajax({
                params:{
                    func:'new_plan',
                    starter_username,
                    final_amount_as_rial,
                    title,
                    description
                }
            })
            .then(r=>{
                alert('new plan saved successfuly !')
            })
        }
    }
]
export default class SettingsSection extends Component{
    render(){
        return(
            <div>
                <IntroBox title="settings" info="you can modify settings here" />
                {options.map(option=>{
                    return (
                        <Option title={option.title} content={option.info}>
                            <img className="" alt="arrow white svg" src={box_arrow_up_white} onClick={option.handler}/>
                        </Option>
                    )
                })}
            </div>
        )
    }
}