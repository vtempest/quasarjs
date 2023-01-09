
// uses Regex negative lookaheads to split search_term into words and "phrases" 
// returns true if all words found in base_text        
module.exports=function(base_text, search_term){
    return base_text.match(

        new RegExp("(?=(.|[\r\n])*" + search_term

        .match(/"([^"]+)"|[\w]+/gi)

        .join(")((.|[\?=r\n])*")
        
        .replace(/\"/g,'')+")(.|[\r\n])+", "ig")
    
    )!=null
}