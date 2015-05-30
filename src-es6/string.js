/**
 * String utilities
 */

export default {

    lower(text){
        return text.toLowerCase();
    },

    upper(text){
        return text.toUpperCase();
    },

    trim(text){
        if (text.trim){
            return text.trim();
        }
        return text.replace(/^\s*|\s*$/g, '');
    },

    isEmpty(text){
        return this.trim(text) === '';
    },

    rgxEsc(text){
        function escape(e){
            let a = new RegExp('\\'+e, 'g');
            text = text.replace(a, '\\'+e);
        }

        let chars = ['\\','[','^','$','.','|','?','*','+','(',')'];
        for(let e=0, len=chars.length; e<len; e++){
            escape(chars[e]);
        }
        return text;
    },

    matchCase(text, mc){
        if(!mc){
            return this.lower(text);
        }
        return text;
    }

};
