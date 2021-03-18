import BackTop from "@/components/content/BackTop/BackTop"

export const BACK_TOP = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false
        }
    },
    methods: {
        showBackTop(position) {
            this.isShowBackTop = -position.y > 1000
        },
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 300)
        }
    }
}