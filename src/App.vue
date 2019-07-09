<template>
  <div id="app">
    <div class="nav-cnt">
        <div class="header__top">
            <ul>
                <li><a href="#" class="nav-item">Услуги и цены </a></li>
                <li><a href="#" class="nav-item">Доставка и оплата</a></li>
                <li><a href="#" class="nav-item"><i class="fa fa-paper-plane"></i>info@printut.ru</a></li>
                <li><a href="#" class="nav-item"><i class="fa fa-phone"></i>97 470 08 95</a></li>
            </ul>
            <div class="logo-cnt">
                <div class="hr-line">
                    <div class="logo">Logo</div>
                </div>
            </div>
        </div>
        <div class="bot_menu_cnt">
            <div class="header__center">
                <a href="#" class="shablon">Шаблоны визиток</a>
                <a href="#" class="cons">Конструктор</a>
            </div>
            <div class="center__icons">
                <div class="user"><i class="fa fa-user"></i></div>
                <a href="#" class="shop"><i class="fa fa-shopping-cart"></i></a>
                <button class="fa fa-search search"></button>
                <a href="#" class="question"><i class="fa fa-question-circle"></i></a>
            </div>
        </div>
        <div class="header__bottom">
            <h1>Конструктор визиток онлайн</h1>
            <div class="toolbar_rightbar">
                <button class="tool_item"><i class="fas fa-arrow-left"></i></button>
                <button class="tool_item"><i class="fas fa-arrow-right"></i></button>
                <div>
                    <button class="tool_item"><i class="fas fa-save"></i></button>
                </div>
            </div>
        </div>
    </div>

    <div class="scnt">
        <div class="constructor_area">
            <div class="constructor_page_wrapper">
                <div class="constructor_page_top">
                    <a href="#" class="line_safety">линия безопасности</a>
                </div>
                <div class="constuctor_page__square">
                    <!-- square lines -->
                    <div class="square__back__lines__cnt">
                        <div class="back__line"></div>
                        <div class="back__line"></div>
                        <div class="back__line"></div>
                        <div class="back__line"></div>
                    </div>


                    <div class="square__border"></div>

                    <div id="capture" class="constructor__inner__border__cnt">
                        <textInput v-for="(value, key) in inputsArr" :key="key"/>
                        <div class="center_square"></div>
                    </div>
                </div>

                <div class="constructor_continue">
                    <div class="continue_button" onClick="exportToPng()">Продолжить</div>
                </div>
            </div>
        </div>
    </div>


    <div class="side-ctn">
        <div :class="['aside-block', {active: isActive}]"  >
            <div class="aside-active-tab-cnt">
                <component :is="selectedComponent" @addText="pushElement"></component>
            </div>
          

            <div class="left_border">
                <button class="toggle-btn" @click="toggleAside">
                    <i :class="[`fas fa-chevron-${!this.isActive ? 'right' :'left'}`]"></i>
                </button>
            </div>
        </div>

        <div class="static-aside-block">
            <ul>
                <li v-for="(value, key) in asideTabs " :key="key"  >
                    <button :class="['tab-btn',`${value.btnClass}`]" @click="openAsideTop(value.name)" >
                        <i :class="[`fas ${value.icon} `]"></i>
                        <br>
                        <span class="nav-text">
                              {{value.text}}
                         </span>
                    </button>
                </li>
                </ul>
                

            <ul class="bottom">
                <li v-for="(value, key) in bottomTabs" :key="key">
                    <button :class="['tab-btn', `${value.btnClass}`]" @click="openAsideTop(value.name)">
                        <i :class="[`fas ${value.icon}`]"></i>
                        <br>
                        <span class="nav-text">
                            {{value.text}}
                        </span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>

import textTab from './components/text'
import searchTab from './components/search'
import imagesTab from './components/images'
import elementsTab from './components/elements'
import fontTab from './components/font'
import QrCodeTab from './components/qrCode'
import filesTab from './components/files'
import basicsTab from './components/basics'
import templatesTab from './components/templates'
import textInput from './components/text-input'
export default {
  name: 'app',
  data(){
      return {
        isActive: false,
        selectedComponent: '',
        inputsArr: [],
        asideTabs: [
            {
                name: 'search-tab', btnClass: 'search-btn', text: 'Search', icon: 'fa-search fa-2x'
            },
            {
                name: 'text-tab', btnClass: 'text-btn', text: 'Text', icon: 'fa-text-height fa-2x'
            },
            {
                name: 'images-tab', btnClass: 'images-btn', text: 'Images', icon: 'fa-images fa-2x'
            },
            {
                name: 'elements-tab', btnClass: 'elements-btn', text: 'elements', icon: 'fa-shapes fa-2x'
            },
            {
                name: 'font-tab', btnClass: 'Font-btn', text: 'Font', icon: 'fa-fill-drip fa-2x'
            },
            {
                name: 'Qr-code-tab', btnClass: 'QrCode-btn', text: 'QR-Code', icon: 'fa-qrcode fa-2x'
            },
            {
                name: 'files-tab', btnClass: 'Files-btn', text: 'Files', icon: 'fa-cloud-upload-alt fa-2x'
            },
           
        ],
        bottomTabs:[
            {
                name: 'basics-tab', btnClass: 'Basics-btn', text: 'Basics', icon: 'fa-paper-plane fa-2x'
            },
            {
                name: 'templates-tab', btnClass: 'Templates-btn', text: 'Templates', icon: 'fa-pen-square fa-2x'
            },
        ]
      }
  },
    
components: {
        textTab,
        searchTab,
        imagesTab,
        elementsTab,
        fontTab,
        QrCodeTab,
        filesTab,
        basicsTab,
        templatesTab,
        textInput
    },


  methods: {
      toggleAside(){
          this.isActive = !this.isActive;
      },

      openAsideTop(name){
        this.isActive = true;
        this.selectedComponent = name;
      },

      pushElement(){
          this.inputsArr.push(1)
      }


  },


}
</script>

<style>

</style>
