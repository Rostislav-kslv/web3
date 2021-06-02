export default class Controller{
    constructor(){
        this.qstnVue = new Vue({ 
            el: '#qstn',
            data: {
                qstn:{
                    question:'',
                    answerList: []
                },
                qstnList:[],
                create: true,
                pass: false,
                passTest: ()=>{
                // axios.get('https://localhost:44351/qstns/')
                // .then((response) =>{
                //     this.qstnList = {...response};                    
                // });
                this.qstnVue.create = false,
                this.qstnVue.pass = true;  
                },
                onCreate: ()=>{
                    this.qstnVue.qstnList.push({...this.qstnVue.qstn});
                    // axios.post('https://localhost:44351/qstns/', this.qstnVue.qstn);
                    console.log(this.qstnVue.qstnList);
                }
                
            }
        });
    }

   
}