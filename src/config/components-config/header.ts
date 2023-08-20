import {ConfigRenderComponent} from 'model/etc/render-cmponent.model';

export function useRenderHeader() : any {
    const handleClickItem = () => {
        console.log('clicked')
    }
    
    const handleDivClicker = () => {
        console.log('clickerrrrrrrr')  
    }

    const headerConfig : ConfigRenderComponent  = {
        component : 'div',
        id:'header-div' ,
        className :'w-100 bg-black p-10 flex flex-row justify-between items-center',
        key:0 ,
        children :[
            {
                component:'div',
                key:1 ,
                className : 'text-white',
                styles :[
                   {
                    name :'fontsize',
                    value :'20px'
                   } ,
                   {
                    name : 'fontWeight',
                    value :'bold'
                   }
                ],
                children : [
                    {
                        component:'verticalDots',
                        key:2 ,
                        className : 'text-white',
                        cursor : 'pointer',
                        onClick: handleClickItem
                    }
                ]
            } , 
            {
                component:'div',
                key:3 ,
                className :'text-white p-8 flex flex-row gap-4',
                styles :[
                    {
                     name :'fontsize',
                     value :'20px'
                    } ,
                    {
                     name : 'fontWeight',
                     value :'bold'
                    }
                 ],
                children: [
                    {
                        component:'div', 
                        key:4, 
                        className : 'text-white',
                        onClick: handleDivClicker,
                        children :'div 1'
                    },
                    {
                        component:'h1',  
                        key:5, 
                        className : 'text-white',
                        onClick : handleDivClicker,
                        children :'div 2',
                        
                    }
                ],
                
            }
        ]
    }

    

    return headerConfig
    
}
