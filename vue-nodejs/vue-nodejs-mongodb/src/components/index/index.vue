<template>
	<div>
	<x-header left-options.showBack="true" title="首页"></x-header>
	<swiper :list="pictureLists" auto height="180px"></swiper>
	<tab active-color="#e96900" bar-active-color="#e96900" custom-bar-width="50px" v-model='select'>
      <tab-item :selected="select === index" @on-item-click="changeTab(index)" v-for="(item, index) in tabList" :key='index'>{{item}}</tab-item>
  </tab>
	<my-tab-list :active='select'>
		<my-tab-item >
			<div class='flex cell-box border-b menu' v-for='(item, index) in articles' :key='index'>
				<div class='text-center flex-1 menu-list-1'>
					<a class='bg-red font-white btn-box btn-type'>{{item.type}}</a>
					<p>{{item.createTime | filterTime}}</p>
				</div>
				<div class='flex-3 menu-list-2' >
					<h3 class='text-over'>{{item.header}}</h3>
					<p class='text-over'>{{item.content}}</p>
				</div>
			</div>
		</my-tab-item>
		<my-tab-item>
			<div class='border-b cell-box'>
				<p class='font-fade'>{{selectedCalender.month}}月</p>
				<div class='flex'>
						 <div class='flex-1 text-center' v-for='(item, index) in calender' :key='index' @click='showCalenderList(index)'>
							 	<p :class='[{"font-red":index==toRed},"text-center"]'>{{item.week}}</p>
								<a :class='[{"btn-red":index==toRed},"text-center","btn-default"]'>{{item.date}}</a>
						 </div>
				</div>
			</div>
		</my-tab-item>
	</my-tab-list>
	</div>
</template>
<script type="text/javascript">
	import { XHeader, Swiper, Tab, TabItem } from 'vux'
	import myTabList from '../widget/myTabList'
	import myTabItem from '../widget/myTabItem'
	import util from '../../assets/js/util'
	import model from '../../assets/js/model'
	export default{
	  data () {
	    return {
	      pictureLists: [
        {
          url: '',
          img: 'https://static.vux.li/demo/1.jpg'},
        {
          url: '',
          img: 'https://static.vux.li/demo/2.jpg'},
        {
          url: '',
          img: 'https://static.vux.li/demo/3.jpg'
        }],
      tabList: ['重要消息', '日历'],
      select: 0,
      articles: [
        {
          type: '类型',
          createTime: 12345678,
          header: '文章的标题,注意文章标题过长的情况',
          content: '内容',
          url: 'http://...'
        },
        {
          type: '类型',
          createTime: 12345678,
          header: '文章的标题',
          content: '时间多数情况传过来的是毫秒，需要转换。文章内容有时候有有时候没有，看情况而定。一般文章都会有点击链接到某个url。以上的这些字段都是后台传过来的',
          url: 'http://...'
        }
			],
			calender: [],
			toRed: 6,
			selectedCalender:{}
    }
	  },

	  components: {
	    XHeader,
	    Swiper,
    Tab,
    TabItem,
    'my-tab-list': myTabList,
    'my-tab-item': myTabItem
		},
		computed: {
			
		},
		methods: {
			getCalender: function(){
				this.calender=util.getCalender();
					this.selectedCalender = this.calender[6];
			},
			showCalenderList: function(index){
				this.toRed = index;
				this.selectedCalender = this.calender[index];
			},
			changeTab(index){
				this.select = index;
			},
			getNews(){
				//console.log(model.getNews());
			}
		},
	  filters: {
		  filterTime: function(val){
			  return util.changeTimeHM(val)
			},
			
		},
		mounted(){
			this.getCalender();
			this.getNews();
		}
}
</script>
<style lang='less' scoped>
.menu{
	height:50px;
}
.menu-list-2{
	width:75%;
}

.btn-red{
	background-color: red;
	color:#fff;
}
.btn-default{
	width: 20px;
	height:20px;
	display:inline-block;
	text-align:center;
	border-radius:5px;
}

	
</style>

