var template = 
`    
    <div id="support" class="content-container">
        <div class="row justify-content-center align-items-center mt-3">
            <div class="col-6">
                <h1 class="text-primary" style="direction: rtl;text-align:center;">به بخش پشتیبانی ما خوش آمدید</h1>
            </div>
        </div>
        
        <div class="row justify-content-center align-items-center">
            <div class="col-10">
                <h4 class="text-secondary" style="direction: rtl;text-align:center;">ما منتظر درخواست های پشتیبانی شما هستیم!</h4>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9 ">
                <hr class="bg-light">
            </div>
        </div>

        <div class="container">
            <div class="row support-option-header mb-2" dir='rtl'>
                <div class="align-items-center col-2 d-flex justify-content-center"><img src="./archive/bootstrap-icons/link-45deg-white.svg"></div>
                <div class="col p-0"><h1 class='text-light p-2'>اطلاعات خود موسسه</h1></div>
            </div>
            
            <div class="row px-2">
                <div class="col-4">
                    <h3 class="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div class="col d-flex justify-content-start align-items-center">
                    <h3 class="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <div class="row px-2">
                <div class="col-4">
                    <h3 class="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div class="col d-flex justify-content-start align-items-center">
                    <h3 class="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <div class="row px-2">
                <div class="col-4">
                    <h3 class="text-secondary" dir="rtl">نام کاربری:</h3>
                </div>
                <div class="col d-flex justify-content-start align-items-center">
                    <h3 class="text-info">حامد یاقوت پور</h3>
                </div>
            </div>
            
            <hr>

            <div class="row support-option-header mb-2" dir='rtl'>
                <div class="align-items-center col-2 d-flex justify-content-center"><img src="./archive/bootstrap-icons/mailbox2-white.svg"></div>
                <div class="col p-0"><h1 class='text-light p-2'>ثبت درخواست پشتیبانی جدید</h1></div>
            </div>
           
            <support-option icon_src='./archive/bootstrap-icons/bug-fill-white.svg'><h5 class='text-info'>گزارش اشکال نرم افزاری</h5></support-option>
            <support-option icon_src='./archive/bootstrap-icons/lightning-fill-white.svg'><h5 class='text-info'>درخواست پشتیبانی سریع</h5></support-option>
            
        </div>
        
    </div>
`;

Vue.component("support",{
    template
})