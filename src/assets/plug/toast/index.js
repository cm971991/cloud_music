import ToastComponent from '../../../components/common/toast.vue'

let $vm
let watcher

export default {
  install (vue, options) {
    const Toast = vue.extend(ToastComponent)
    if (!$vm) {
      $vm = new Toast({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }
    const toast = {
      show: function (options) {
        // destroy watcher
        watcher && watcher()
        if (typeof options === 'string') {
          $vm.text = options
        } else if (typeof options === 'object') {
          for (let i in options) {
            $vm[i] = options[i]
          }
        }
        if (!(typeof options !== 'object' || !options.onShow) || options.onHide) {
          watcher = $vm.$watch('show', (val) => {
            val && options.onShow && options.onShow($vm)
            val === false && options.onHide && options.onHide($vm)
          })
        }
        $vm.show = true
      },
      hide () {
        $vm.show = false
      }
    }
    vue.prototype.$toast = toast
  }
}
