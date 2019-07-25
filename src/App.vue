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
                <div class="constuctor_page__square" >
                    <!-- square lines -->
                    <div class="square__back__lines__cnt">
                        <div class="back__line"></div>
                        <div class="back__line"></div>
                        <div class="back__line"></div>
                        <div class="back__line"></div>
                    </div>


                    <div class="square__border"></div>

                    <div id="paper" class="constructor__inner__border__cnt" >
                        <!-- <textInput v-for="(value1, ke) in inputsArr.text" ></textInput>
                        <imgInput v-for="(value2, k) in inputsArr.img"  :imgSrc="value2"></imgInput> -->
                        
                        <div class="printingBody" ref="printMe">
                            <div key="text-drr">
                                <dr v-for="(value2, k) in inputsArr.img" :key="k" 
                                 :imgSrc="value2" 
                                @coordinate="coorStickImg" :coImg="coorImg" :coText="coorText" :kal="k" ></dr>
                            </div>                            
                            <div key="image-drr">
                                <dr v-for="(value1, ke) in inputsArr.text" :key="ke" 
                                @coordinate="coorStickText" :coText="coorText" :coImg="coorImg"  :kal="ke">text</dr>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>

                <div class="constructor_continue">
                    <div class="continue_button" >
                        <a type="button" @click="print">Продолжить</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="side-ctn">
        <div :class="['aside-block', {active: isActive}]"  >
            <div class="aside-active-tab-cnt">
                <component :is="selectedComponent" @addText="pushElement" :lalala="output"></component>
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
                    <button :class="['tab-btn',`${value.btnClass}`]" @click="openAsideTop(value.name, value.text)" >
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
                    <button :class="['tab-btn', `${value.btnClass}`]" @click="openAsideTop(value.name, value.text)">
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
export default {
  name: 'app',
//   watch: {
//       baza() {
//           localStorage.setItem('template', JSON.stringify(this.baza))
//           console.log("baza ozgardi")
//       },

//       inputsArr() {
//           localStorage.setItem('template', JSON.stringify(this.inputsArr))
//           console.log("inputsArr ozgardi")
//       },

//       coorText() {
//           localStorage.setItem('template', JSON.stringify(this.coorText))
//           console.log("coortext ozgardi")
//       },

//       coorImg() {
//           localStorage.setItem('template', JSON.stringify(this.coorImg))
//           console.log("coorImg ozgardi")
//       }
//   },
  mounted() {
      if (this.activeElemType) {
          console.log(this.activeElemType)
        if(this.activeElemType=='img') {
            window.addEventListener('keydown', (e) => {
                console.log(e.key)
                if (e.key == 'ArrowUp') {
                    this.coorImg[this.activeElemArrIndex].y -= 1
                    e.preventDefault()
                }
                else if (e.key == 'ArrowDown'){
                    this.coorImg[this.activeElemArrIndex].y += 1
                    e.preventDefault()
                }
                else if (e.key == 'ArrowRight'){
                    this.coorImg[this.activeElemArrIndex].x += 1
                    e.preventDefault()
                }
                else if (e.key == 'ArrowLeft') {
                    this.coorImg[this.activeElemArrIndex].x -= 1
                    e.preventDefault()
                }
            });
        } else {
            window.addEventListener('keydown', (e) => {
                console.log(e.key)
                if (e.key == 'ArrowUp') {
                    this.coorText[this.activeElemArrIndex].y -= 1
                    e.preventDefault()
                }
                else if (e.key == 'ArrowDown'){
                    this.coorText[this.activeElemArrIndex].y += 1
                    e.preventDefault()
                }
                else if (e.key == 'ArrowRight'){
                    this.coorText[this.activeElemArrIndex].x += 1
                    e.preventDefault()
                }
                else if (e.key == 'ArrowLeft') {
                    this.coorText[this.activeElemArrIndex].x -= 1
                    e.preventDefault()
                }
            });
        }
          
      }
      
      let lastTemplate = localStorage.getItem('template')
      let inputsArr = localStorage.getItem('inputsArr')
      let coorText = localStorage.getItem('coorText')
      let coorImg = localStorage.getItem('coorImg')

      if(lastTemplate){
          this.baza = JSON.parse(lastTemplate)
      }

      if(inputsArr){
          this.inputsArr = JSON.parse(inputsArr)
      }

      if(coorText){
          this.coorText = JSON.parse(coorText)
      }

      if(coorImg){
          this.coorImg = JSON.parse(coorImg)
      }
  },
  data(){
      return {
        isActive: false,
        selectedComponent: '',
        componentInput: '',
        inputsArr: {
            img: [],
            text: [],
        },
        coorText: [],
        coorImg: [],
        xNum: 500,
        yNum: 300,
        img: [],
        type:'',
        output: null,
        isActiveEl: {
            img: false,
            text: false
        },
        activeElemType: '',
        activeElemArrIndex: 0,
        asideTabs: [
            {
                name: 'search-tab', btnClass: 'search-btn', text: 'Search', icon: 'fa-search fa-2x'
            },
            {
                name: 'text-tab', btnClass: 'text-btn', text: 'textInput', icon: 'fa-text-height fa-2x'
            },
            {
                name: 'images-tab', btnClass: 'images-btn', text: 'imgInput', icon: 'fa-images fa-2x'
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
        ],

        baza: {
            default: {
                text: [
                    {src: '123', x: 0, y: 0, angle: 0, w: 0, h: 0}
                ],  
                img: [
                    {src: '@/assets/dsd.jpg', x: 1, y: 24, angle: 0, w: 0, h: 0}
                ]
            },
            'qoraLayout': {
                text: [
                    {}
                ],
                img: [
                    {}
                ]
            }
        }
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
    },


methods: {
    activeEl(type, key) {
        for (let xtype in this.isActiveEl) {
            this.isActiveEl[xtype] = false
        }
        this.isActiveEl[type] = true
        this.activeElemType = type
        this.activeElemArrIndex = key
        console.log(type)
    },

    async print() {

        for (let item=0; item < this.inputsArr.text.length; item++) {
            if(!this.baza.template) {
                this.$set(this.baza, 'template', {})
            }

            if(!this.baza.template.text) {
                this.$set(this.baza.template, 'text', [])
            }

            this.baza.template.text.push({
                src: this.inputsArr.text[item],
                x: this.coorText[item].x,
                y: this.coorText[item].y,
                w: this.coorText[item].w,
                h: this.coorText[item].h,
                angle: this.coorText[item].angle
            })
            console.log("text "+item)
        }
        for (let item=0; item < this.inputsArr.img.length; item++) {
            if(!this.baza.template) {
                this.$set(this.baza, 'template', {})
            }

            if(!this.baza.template.img) {
                this.$set(this.baza.template, 'img', [])
            }

            this.baza.template.img.push({
                src: this.inputsArr.img[item],
                x: this.coorImg[item].x,
                y: this.coorImg[item].y,
                w: this.coorImg[item].w,
                h: this.coorImg[item].h,
                angle: this.coorImg[item].angle
            })
            console.log("img "+item)
        }
        

        const el = this.$refs.printMe
        const options = {
            type: 'dataURL'
        }
        let outputlocal = await this.$html2canvas(el, options)
        this.output = outputlocal
        let link = document.createElement('a')
        link.href = outputlocal
        link.download= "filename.jpg"
        document.body.appendChild(link)
        link.click()
    },

    toggleAside(){
        this.isActive = !this.isActive;
    },
    
    openAsideTop(name, text){
        this.isActive = true;
        this.selectedComponent = name;
        this.componentInput = text;
    },

    pushElement(value, type){
        this.inputsArr[type].push(value)
    },
    updateLocalStorage(){
        console.log('updating coordinates arrays')
        localStorage.setItem('template', JSON.stringify(this.baza))
        localStorage.setItem('inputsArr', JSON.stringify(this.inputsArr))
        localStorage.setItem('coorText', JSON.stringify(this.coorText))
        localStorage.setItem('coorImg', JSON.stringify(this.coorImg))
    },

    coorStickText(x,y,k,w,h,angle){
        this.coorText[k]={x:x,y:y,w:w,h:h,angle:angle}
        this.updateLocalStorage()
    },

    coorStickImg(x,y,k,w,h,angle){
        this.coorImg[k]={x:x,y:y,w:w,h:h,angle:angle}
        this.updateLocalStorage()
    }
},

}
</script>

<style>
*{
    user-select: none;
}
.hori{
    border-top: 2px dashed;
    width: 100%;
    position: absolute;
}
.printingBody {
    width: 784px;
    height: 484px;
    margin-left: 8px;
    margin-top: 8px;
}
.continue_button{
    cursor: pointer;
}
</style>
