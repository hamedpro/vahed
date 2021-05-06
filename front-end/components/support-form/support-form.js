var template = 
`
<div id="support-form" class="content-container">
    <div class="row justify-content-center d-flex">
        <div class="col-9">
            <div class="row mt-4">
                <div class="col">
                    <h1 class="text-primary">بخش ثبت مسئله جدید</h1>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col">
                    <h5 class="text-secondary">پیام شما را در اسرع وقت پاسخگو خواهیم بود .</h5>
                </div>
            </div>
            <div class="row">
                <div class="col" dir="rtl">
                    <label for="username" class="text-light mb-1">نام کاربری :</label>
                    <input type="text" class="form-control" id="username">
                </div>
            </div>
            <div class="row">
                <div class="col" dir="rtl">
                    <label for="subject" class="text-light mb-1">موضوع :</label>
                    <input type="text" class="form-control" id="subject">
                </div>
            </div>
            <div class="row">
                <div class="col" dir="rtl">
                    <label for="content" class="text-light mb-1">متن درخواست</label>
                    <input type="text" class="form-control" id="content">
                </div>
            </div>
            <div class="row mt-2">
                <div class="col d-grid gap-2">
                    <button class="btn btn-success" @click="submit_data">ثبت اطلاعات</button>
                </div>
            </div>
            <hr class="bg-light">
            <div class="row tips_container">
                <tip>درخواست پشتیبانی شما ان شاء الله به زودی بررسی خواهد شد</tip>
            </div>
        </div>
    </div>
    

   
   

</div>
`;

Vue.component('support-form',{
    template,
    methods:{
        submit_data:function(){
            if(!confirm('آیا صحت اطلاعات را تایید می کنید؟')) return 
            //build object for send into our api =>
            let data_object = {
                function_name : 'new_issue',
                username:$('#username').val(),
                subject:$('#subject').val(),
                content:$('#content').val()
            } 
            //send data to api =>
            take_action(data_object).then(message =>{
                if(message == 'true'){
                    alert('با موفقیت ثبت شد.')
                    window.location.assign('#/support')
                }else{
                    alert('مشکلی پیش آمد ، لطفا دوباره امتحان کنید.')
                };
            })

        }
    }
})