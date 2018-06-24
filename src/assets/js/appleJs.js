import getapple from "../../components/apple.vue"

const apple = {
	install:function(Vue){
		Vue.component("apple",getapple);
	}
}
export default apple
