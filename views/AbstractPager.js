'use strict';

//�����࣬��Ϊ��������ģ��
class AbstractPager{

    constructor(){

    }
    _render(){
        throw new Error('�������ʵ��');
    }

    render(){

        return `
        <!DOCTYPE html>
        <html>
        <head>
        <link rel='stylesheet' href='//cdn.bootcss.com/bootstrap/3.3.6/css/bootstrap.min.css'/>
        </head>
        <body>
            ${this._render()}
        </body>
        </html>
    `
    }



}

module.exports = AbstractPager;