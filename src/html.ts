export class HTML
{
    public static parse<T extends HTMLElement>(htmlstr: string) : () => T
    {
        return function() : T
        {
            if (navigator.userAgent.includes('Edge')
             || navigator.userAgent.includes('MSIE')) {
                var div = document.createElement('div');
                div.innerHTML = htmlstr
                return <T>div.firstChild 
            }
            else {
                var template = document.createElement('template')
                template.innerHTML = htmlstr
                return <T>template.content.firstElementChild
            }
        }
    }

    //public static stringify() : (HTMLElement) => string
    //public static imageify() : (HTMLElement) => {} //Image
}





