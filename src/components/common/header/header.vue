<template>
    <div class="header">
        <div class="header-left">
            <img src="static/img/logo.jpg" />
            <div class="header-title">
                <p>{{ $global.sysName }}</p>
                <p></p>
            </div>
        </div>
        <ul class="top-navs">
            <li v-for="item in navList"><a @click="toGo(item.url)" :class="item.url==path?'liChoose':''">{{item.label}}</a></li>
        </ul>
        <div class="header-right">
            <img src="static/img/user_icon.png" />
            <p></p>
            <el-dropdown trigger="click">
                <div class="out-login-icon"><img src="static/img/out-login.png" /></div>
                <el-dropdown-menu slot="dropdown"><el-dropdown-item divided>退出登录</el-dropdown-item></el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            path: 'home',
            navList: [
                {
                    url: 'home',
                    label: '首页'
                },
                {
                    url: 'goods',
                    label: '商品信息'
                },
                {
                    url: 'active',
                    label: '活动专区'
                },
                {
                    url: 'article',
                    label: '品牌软文'
                },
                {
                    url: 'about',
                    label: '关于我们'
                }
            ]
        };
    },
    watch: {},
    methods: {
        toGo(path) {
            let that = this;
            that.path = path;
        }
    }
};
</script>
<style scoped lang="less">
.header {
    background: #fff;
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 55px;
    font-size: 22px;
    color: #6a7ffe;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
    .top-navs {
        width: 60%;
        li {
            width: 20%;
            float: left;
            text-align: center;
            a {
                padding: 5px 20px;
                font-size: 16px;
                color: #333333;
                border-radius: 30px;
                cursor: pointer;
            }
            .liChoose {
                background: #5680f9;
                color: #fff;
            }
        }
    }
    .header-left {
        display: flex;
        margin-left: 38px;

        .header-title {
            text-align: left;
            margin-left: 29px;

            p:nth-child(1) {
                font-size: 18px;
            }

            p:nth-child(2) {
                font-size: 7px;
                margin-top: -2px;
            }
        }

        img {
            width: 35px;
            height: 39px;
        }
    }
}

.header-right {
    display: flex;
    align-items: center;

    img {
        width: 22px;
        height: 22px;
        margin-right: 12px;
    }

    p {
        font-size: 14px;
        margin-right: 22px;
    }

    .out-login-icon {
        width: 70px;
        height: 30px;
        border-left: 1px solid #6a7ffe;
        text-align: center;
        cursor: pointer;

        img {
            width: 19px;
            height: 19px;
            margin-top: 5px;
        }
    }
}
</style>
