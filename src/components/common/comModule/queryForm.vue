<template>
	<el-form :model="firstForm" :inline="true" ref="firstForm" class="searchFrame query-form" label-width="40%">
		<el-col :span='8' v-for="(item,index) in firstFormObject" :key="index">
			<el-form-item :label="item.label" :rules="item.rules" :class="item.type==4?'areablock':''" v-if="item.type!=0&&!item.isShow"
			 style="display: flex;">
				<el-input :class="item.error==true?'errorbox':''" v-if="item.type==1" v-model="item.model" size="medium" class="on_col"
				 :placeholder="item.placeholder" :title="item.placeholder" clearable></el-input>
				<el-select :class="item.error==true?'errorbox':''" v-else-if="item.type==2" v-model="item.model" size="medium" class="on_col"
				 filterable clearable :placeholder="item.placeholder">
					<el-option v-for="it in item.array" :key="it.code" :label="it.name" :value="it.code"></el-option>
				</el-select>
				<el-cascader :class="item.error==true?'errorbox':''" v-else-if="item.type==3" :placeholder="item.placeholder" size="medium"
				 class="on_col" :options="item.array" :props="item.publicProps" v-model="item.model" filterable clearable></el-cascader>
				<el-input :class="item.error==true?'errorbox':''" v-else-if="item.type==4" type="textarea" size="medium"
				 :placeholder="item.placeholder" :rows="3" clearable v-model="item.model"></el-input>
				<el-date-picker :class="item.error==true?'errorbox':''" v-else-if="item.type==5" v-model="item.model" value-format="yyyy-MM-dd" class="on_col"
				 :type="item.types" clearable :placeholder="item.placeholder"></el-date-picker>
				<el-radio-group v-else-if="item.type==6" v-model="item.model">
					<el-radio :label="it.label" v-for="(it,index) in item.list" :key="index"></el-radio>
				</el-radio-group>
				<el-radio-group class="eight" v-else-if="item.type==8" v-model="item.model">
					<el-radio :label="it.name" v-for="(it,index) in item.list" :key="index"></el-radio>
				</el-radio-group>
				<el-select :disabled="item.isEdit" class="on_col" size="medium" :class="item.error==true?'errorbox':''" v-else-if="item.type==9" 
				 v-model="item.model"
				 multiple collapse-tags filterable clearable :placeholder="item.placeholder">
					<el-option v-for="it in item.array" :key="it.code" :label="it.name" :value="it.code"></el-option>
				</el-select>
			</el-form-item>
		</el-col>
		<el-col :span='8' v-if="objLength%3==0" align="left">
			<el-form-item>

			</el-form-item>
		</el-col>
		<el-col :span='8' v-if="objLength%3==1||objLength%3==0">
			<el-form-item>

			</el-form-item>
		</el-col>
		<el-col :span='8'>
			<div align="right">
				<el-button :loading="isloading" class="addBtn" type="primary" @click="search">查询</el-button>
				<el-button class="portBtn" @click="rest()">重置</el-button>
			</div>
		</el-col>
	</el-form>
</template>

<script>
	export default {
		props: {
			provinceCityOptions: {
				type: Array
			},
			firstForm: {
				type: Object
			},
			firstFormObject: {
				type: Object, //type: 1:input 2:select 3:cascader 4:textarea 5:picker 6:radio
			},
			publicArrays: {
				type: Object
			},
			dictArrayObj: {
				type: Object
			},
			isloading: { //是否正在加载中
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				dicObj: {},
				//性别容器
				sexArr: [],
				//行政级联配置
			}
		},
		watch: {
			firstFormObject: {
				handler(val, oldName) {
					
				},
				immediate: true,
				deep: true
			},
			dictArrayObj: {
				handler(newName, oldName) {
					this.dicObj = newName;
				},
				immediate: true,
				deep: true
			}
		},
		computed: {
			firstForms() {
				var obj = {}
				for (var key in this.firstFormObject) {
					if (this.firstFormObject[key].type == 3 && this.firstFormObject[key].model) {
						obj[key] = this.firstFormObject[key].model.toString()
					}else if(this.firstFormObject[key].type == 9&& this.firstFormObject[key].model.length>0 &&typeof(this.firstFormObject[key].model) ==
						"object"){
						obj[key] = this.firstFormObject[key].model.join(' ')
					} else {
						obj[key] = this.firstFormObject[key].model
					}
				}
				console.log(obj)
				return obj
			},
			objLength() {
				var keys = []
				for (var key in this.firstFormObject) {
					keys.push(key);
				}
				return keys.length
			}
		},
		created() {
			this.rest()
		},
		methods: {
			number(item) {
				//console.log(item)
			},
			search() { //查询按钮
				let that = this;
				var obj = that.firstForms
				this.$emit("sendQuery", obj)
			},
			rest() { //重置按鈕
				let that = this;
				for (var i in that.firstFormObject) {
					that.firstFormObject[i].model = ""
				}
				var obj = that.firstForms;
				this.$emit("sendQuery", obj)
			}
		},
	}
</script>

<style lang="less">
	.query-form {
		overflow: hidden
	}

	.container-table .searchFrame .el-form-item {
		width: 100% !important;
	}

	.container-table .searchFrame .el-form-item {
		margin-bottom: 22px !important;
	}

	.el-form-item .is-required .areablock {
		width: 100% !important;
	}

	.el-form-item__content {
		width: 70% !important;
	}
	.on_col {
		width: 100% !important;
	}
</style>
