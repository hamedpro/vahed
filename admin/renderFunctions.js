renderSettingOption = function(title,targetEl,handler){
    renderPlan({
        title:title,
        icons:[
            {
                svg:arrow_left_white_svg,
                handler:handler
            }
        ],
        targetEl:targetEl
    })
}
renderPlanOption = function (title,content,plan_id){
    renderPlan({
        title:title,
        content:content,
        icons:[
            {
                svg:delete_svg,
                handler:function(){
                    api_operations.delete_handler(plan_id)
                }
            },
            {
                svg:finish_svg,
                handler:function(){
                    api_operations.finish_handler(plan_id)
                }
            }
        ],
        targetEl:els.container
    })
}
renderTr = function(username,tr_id){
    //renders transaction option
    renderPlan({
        title:username,
        icons:[
            {
                svg:delete_svg,
                handler:function(){
                    api_operations.delete_transaction(tr_id)
                }
            }
        ],
        targetEl:els.container
    })
}
renderUser = function(username,is_admin){
    renderPlan({
        title:username+(is_admin?"(ادمین)":""),
        icons:[
            {
                svg:delete_svg,
                handler:function(){
                    api_operations.delete_user(username)
                }
            },
            {
                svg:person_plus_white_svg,
                handler:function(){
                    api_operations.make_user_admin(username)
                }
            }
        ],
        targetEl:els.container
    })
}
renderSM = function(subject,id){
    //renders support message option
    renderPlan({
        title:subject,
        icons:[
            {
                svg:delete_svg,
                handler:function(){
                    api_operations.delete_support_message(id)
                }
            },
            {
               
                svg:box_arrow_up_left_white,
                handler:function(){
                    window.location.replace('../supportMessageShower/index.php?sm_id='+id)
                }
            }
        ],
        targetEl:els.container
    })
}