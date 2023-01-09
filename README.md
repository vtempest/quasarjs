[![NPM](https://nodei.co/npm/quasarjs.png?compact=true)](https://npmjs.org/package/quasarjs)

Search base_text for matching-all words of search_term, case-insensitive in any order, except treat "words in quotes" as if a single word like in Google search.

Copy as Function Directly into Code
```javascript

var search_term_is_found = base_text.match(

new RegExp("(?=(.|[\r\n])*" + search_term

.match(/"([^"]+)"|[\w]+/gi)

.join(")((.|[\?=r\n])*")

.replace(/\"/g,'')+")(.|[\r\n])+", "ig")

)!=null
```

### Built Using RegEx Negative Lookaheads (?=
>bar(?=bar)     finds the 1st bar ("bar" which has "bar" after it)

>bar(?!bar)     finds the 2nd bar ("bar" which does not have "bar" after it)

>(?<=foo)bar    finds the 1st bar ("bar" which has "foo" before it)

>(?<!foo)bar    finds the 2nd bar ("bar" which does not have "foo" before it)