new Vue({
    el: '#app',
    data: {
        message: 'こんにちは。Vue.js!',
        color: {
            // キャメルケースで記述したものは、ハイフン区切りになる
            backgroundColor: 'Yellow',
            color: 'Red'
        },
        big: {
            // キャメルケースで記述したものは、ハイフン区切りになる
            fontSize: '1.5em'
        }
    }
})
