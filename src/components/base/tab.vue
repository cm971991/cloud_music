<template>
    <div class="tab-container">
        <ul class="tab-title-container">
            <li class="tab-title"
                v-for="(title,index) in tabTitles"
                :class="{'active': index+1===currentPage}"
                :key="index"
                @click="setPage(index+1)">{{title}}
            </li>
        </ul>
        <!-- decide if bind touchstart -->
        <div v-if="slidable"
             class="tabswiper"
             :class="{ 'invisible' : invisible }"
             @touchstart="_onTouchStart">
            <div class="tabswiper-wrap"
                 ref="tabswiper-wrap"
                 :class="{ 'dragging' : dragging }"
                 :style="{ 'transform' : 'translate3d(' + translateX + 'px,0, 0)' }"
                 @transitionend="_onTransitionEnd">
                <slot></slot>
            </div>
        </div>
        <div v-else class="tabswiper"
             :class="{'invisible':invisible}">
            <div class="tabswiper-wrap"
                 ref="tabswiper-wrap"
                 :class="{'dragging': dragging}"
                 :style="{'transform' : 'translate3d(' + translateX + 'px,0, 0)'}"
                 @transitionend="_onTransitionEnd">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
  const JUDGE_INITIAL = 0
  const JUDGE_SLIDEING = 1
  const JUDGE_SCROLLING = 2
  const replaceAll = (str, target, replace) => {
    let regExp = new RegExp(target, 'g')
    return str.replace(regExp, replace)
  }
  
  /**
   *
   * @author bajian
   * @param  el 原生element
   * @param  className 允许多个，空格隔开
   * @return
   */
  const addClass = (el, className) => {
    if (!className) {
      return false
    }
    className = className.trim('').replace(/\s+/, ' ').split(' ')
    if (el.className.indexOf(className) !== -1) {
      return true
    } else {
      el.className += ' ' + className.join(' ')
      return true
    }
  }
  
  /**
   *
   * @author bajian
   * @param  el 原生element
   * @param  className 允许多个，空格隔开
   * @return
   */
  const removeClass = (el, className) => {
    if (!className) {
      return false
    }
    className = className.trim('').replace(/\s+/, ' ').split(' ')
    var cls = ' ' + el.className + ' '
    className.forEach(function (item) {
      item = ' ' + item
      cls = replaceAll(cls, item, ' ')
    })
    el.className = cls.trim()
    return true
  }
  
  export default {
    props: {
      tabTitles: {
        type: Array,
        default: []
      },
      curPage: {
        type: Number,
        default: 1
      },
      slidable: {
        type: Boolean,
        default: true
      }
    },
    watch: {
      curPage: function (val) {
        this.setPage(val)
      }
    },
    data () {
      return {
        lastPage: 1,
        currentPage: this.curPage,
        translateX: 0,
        startTranslateX: 0,
        delta: 0,
        deltaY: 0,
        dragging: false,
        startPos: null,
        startPosY: null,
        transitioning: false,
        slideEls: [],
        invisible: true,
        judge: JUDGE_INITIAL
      }
    },
    mounted () {
      this.$nextTick(function () {
        this._onTouchMove = this._onTouchMove.bind(this)
        this._onTouchEnd = this._onTouchEnd.bind(this)
        this.slideEls = this.$refs['tabswiper-wrap'].children
        this.dragging = true
        this.setPage(this.currentPage)
        let _this = this
        setTimeout(() => {
          _this.dragging = _this.invisible = false
        }, 100)
        window.onresize = () => {
          _this.setPage(_this.currentPage)
        }
      })
    },
    methods: {
      next () {
        let page = this.currentPage
        if (page < this.slideEls.length) {
          page++
          this.setPage(page)
        } else {
          this._revert()
        }
      },
      prev () {
        let page = this.currentPage
        if (page > 1) {
          page--
          this.setPage(page)
        } else {
          this._revert()
        }
      },
      setPage (page) {
        this.lastPage = this.currentPage
        this.currentPage = page
        this.translateX = -[].reduce.call(this.slideEls, function (total, el, i) {
          // previousValue,currentValue,currentIndex
          return i > page - 2 ? total : total + el['clientWidth']
        }, 0)
        this._onTransitionStart()
      },
      _onTouchStart (e) {
        let ev = e || window.event
        let target = ev.target || ev.srcElement
        let nodeName = target.nodeName.toLowerCase()
        // 防止滑动的是slide 导致tab滑动无效
        if (nodeName === 'img') {
          return
        }
        this.startPos = this._getTouchPos(e)
        this.startYPos = this._getTouchYPos(e)
        this.delta = 0
        this.startTranslateX = this.translateX
        this.startTime = new Date().getTime()
        this.dragging = true
        if (this.currentPage === 1) {
          console.log('11111:')
        }
        document.addEventListener('touchmove', this._onTouchMove, false)
        document.addEventListener('touchend', this._onTouchEnd, false)
      },
      _onTouchMove (e) {
        this.delta = this._getTouchPos(e) - this.startPos
        this.deltaY = Math.abs(this._getTouchYPos(e) - this.startYPos)
        switch (this.judge) {
          case JUDGE_INITIAL:
            // if (Math.abs(this.delta) > 20 && this.deltaY<25) {//judge to allow/prevent scroll
            if (Math.abs(this.delta) / this.deltaY > 1.5) { // judge to allow/prevent scroll
              this.judge = JUDGE_SLIDEING
              e.preventDefault()
              e.stopPropagation()
            } else {
              this.judge = JUDGE_SCROLLING
            }
            break
          case JUDGE_SCROLLING:
            break
          case JUDGE_SLIDEING:
            e.preventDefault()
            e.stopPropagation()
            this.translateX = this.startTranslateX + this.delta
            // 首页不能向右滑动 尾页不能向左滑动
            if ((this.currentPage === 1 && this.translateX > 0) || (this.currentPage === 3 && this.translateX < 0)) {
              this._revert()
            }
            break
          default:
            break
        }
      },
      _onTouchEnd (e) {
        this.dragging = false
        if (this.judge === JUDGE_SLIDEING) {
          let isQuickAction = new Date().getTime() - this.startTime < 1000
          if (this.delta < -100 || (isQuickAction && this.delta < -15 && this.deltaY / this.delta > -6)) {
            this.next()
          } else if (this.delta > 100 || (isQuickAction && this.delta > 15 && this.deltaY / this.delta < 6)) {
            this.prev()
          } else {
            this._revert()
          }
        }
        this.judge = JUDGE_INITIAL
        document.removeEventListener('touchmove', this._onTouchMove)
        document.removeEventListener('touchend', this._onTouchEnd)
      },
      _revert () {
        this.setPage(this.currentPage)
      },
      _getTouchPos (e) {
        let key = 'pageX'
        return e.changedTouches ? e.changedTouches[0][key] : e[key]
      },
      _getTouchYPos (e) {
        let key = 'pageY'
        return e.changedTouches ? e.changedTouches[0][key] : e[key]
      },
      _onTransitionStart () {
        this.transitioning = true
        if (this._isPageChanged()) {
          this.$emit('tab-change-start', this.currentPage);
          // FIX:remove the height of the hidden tab-items
          [].forEach.call(this.slideEls, (item, index) => {
            if (index === (this.currentPage - 1)) {
              removeClass(item, 'hide-height')
            } else {
              addClass(item, 'hide-height')
            }
          })
        } else {
          this.$emit('tab-revert-start', this.currentPage)
        }
      },
      _onTransitionEnd (e) {
        e.stopPropagation()
        if (e.target.className !== 'tabswiper-wrap') return
        this.transitioning = false
        if (this._isPageChanged()) {
          this.$emit('tab-change-end', this.currentPage)
        } else {
          this.$emit('tab-revert-end', this.currentPage)
        }
      },
      _isPageChanged () {
        return this.lastPage !== this.currentPage
      }
    }
  }
</script>

<style type="text/css">
    .tab-container {
        width: 100%;
    }

    .invisible {
        visibility: hidden;
    }

    .tabswiper {
        position: relative;
        overflow: hidden;
    }

    .tabswiper-wrap {
        display: flex;
        display: inline-flex;
        width: 100%;
        height: 100%;
        transition: all 0.2s ease;
        flex-direction: row;
    }

    .tabswiper-wrap.dragging {
        transition: none;
    }

    .tabswiper-wrap > div {
        overflow-x: hidden;
        flex-shrink: 0;
        width: 100%;
        margin: 0px;
        padding: 0px;
        height: inherit;
    }

    .tabswiper-wrap > .hide-height {
        height: 0px;
    }

    ::-webkit-scrollbar {
        width: 0px;
    }

    .tab-title-container {
        position: relative;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        margin: 0 auto;
        list-style: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-decoration: none;
        -webkit-user-select: none;
        outline: none;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: center;
        width: 100%;
        -webkit-appearance: none;
        text-decoration: none;
    }

    .tab-title {
        border-bottom: 2px solid #232323;
        -webkit-appearance: none;
        height: 35px;
        line-height: 35px;
        position: relative;
        text-align: center;
        cursor: pointer;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        text-decoration: none;
        -webkit-user-select: none;
        outline: none;
        outline-style: none;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        /*    display: block;*/
    }

    .tab-title.active, .tab-title:active {
        border-bottom: 2px solid #FE1D49;
        color: #FE1D49;
    }
</style>
