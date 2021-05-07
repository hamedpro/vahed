var template = 
`
<div id="payment-success" class="content-container">
    <div class="row justify-content-center d-flex mt-3">
        <div class="col-8">
        <h1 class="text-success" dir="rtl" style="text-align:center;">پرداخت شما با موفقیت انجام شد</h1> 
        </div>
    </div>
    <div class="row justify-content-center d-flex mt-1">
        <div class="col-10">
            <h5 class="text-secondary" dir="rtl" style="text-align:center;">اطلاعات پرداخت شما به شرح زیر است :</h5>
        </div>
    </div>
    <div class="row mx-2 mt-4" dir="rtl">
        <div class="col-4">
            <h4 class="text-secondary" dir="rtl">نام کاربری:</h4>
        </div>
        <div class="col">
            <h2 class="text-warning" dir="rtl">{{username}}</h2>
        </div>
    </div>
    <div class="row mx-2" dir="rtl">
        <div class="col-4">
            <h4 class="text-secondary" dir="rtl">مبلغ:</h4>
        </div>
        <div class="col">
            <h2 class="text-warning" dir="rtl">{{amount}}</h2>
        </div>
    </div>
    <div class="row mx-2" dir="rtl">
        <div class="col-4">
            <h4 class="text-secondary" dir="rtl">کد تراکنش:</h4>
        </div>
        <div class="col">
            <h2 class="text-warning" dir="rtl">{{id}}</h2>
        </div>
    </div>
    <div class="row mx-2" dir="rtl">
        <div class="col-4">
            <h4 class="text-secondary" dir="rtl">برای:</h4>
        </div>
        <div class="col">
            <h2 class="text-warning" dir="rtl">{{category}}</h2>
        </div>
    </div>
    <div class="row m-3" dir="rtl">
        <div class="col-4 d-grid p-1">
            <button class="btn btn-outline-danger btn-sm" @click="go_to_support">گزارش خطا</button>
        </div>
        <div class="col d-grid p-1">
            <button class="btn btn-success" @click='go_to_home'>بازگشت به صفحه اصلی</button>
        </div>
    </div>
</div>
`;

Vue.component('payment-success',{
    template,
    data:function(){
        return{

        }
    },
    created:function(){
        let transaction_id = this.$route.params.transaction_id
        //update page data with transaction data => 
       this.username = "username";
       this.amount = "amount";
       this.id =22;
       this.category = "anese";


    },
    methods:{
        go_to_home:function(){
            window.location.replace('#/');
        },
        go_to_support:function(){
            window.location.replace('#/support')
        }
    }
})