# pandoc-mermaid-filter

`pandoc-mermaid-filter` is [mermaid](http://knsv.github.io/mermaid/) filter for [pandoc](http://pandoc.org/).

### Feature

##### Input markdown

<pre>
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
</pre>

##### Output HTML

```html
<div class="mermaid">
graph LR
    A--&gt;B
    B--&gt;C
    C--&gt;A
    D--&gt;C
</div>
```

NOTICE: pandoc escaped `>` to `&gt;`. But no problem!

### Usage

##### Export and edit template

```shell
$ pandoc -D html5 > template.html
```

``` html
<link rel="stylesheet" href="css/mermaid.min.css">
<script src="js/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>
```

##### Global install with npm

``` shell
$ npm install --global git+https://github.com/nishimaki10/pandoc-mermaid-filter.git
```

Executable filename is `pandoc-mermaid`.

##### Run

``` shell
$ pandoc -f markdown -t html5 -F pandoc-mermaid --template=template.html -o output.html input.md
```
