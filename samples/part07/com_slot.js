Vue.component('my-hello', {
    props: [ 'yourName' ],
    template: '<div>こんにちは、<slot>権兵衛</slot>さん！</div>'
});

new Vue({
    el: '#app'
});
