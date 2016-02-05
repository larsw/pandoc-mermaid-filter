# pandoc-mermaid-filter

`pandoc-mermaid-filter` is [mermaid](http://knsv.github.io/mermaid/) filter for [pandoc](http://pandoc.org/).

Tested on pandoc `1.16.0.2` and Node.js `v5.5.0`.

### Feature

##### Input markdown

<pre><code>
```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```
</code></pre>

##### Output HTML

```html
<div>
<!-- htmlmin:ignore -->
<div class="mermaid">
graph TD;
    A--&gt;B;
    A--&gt;C;
    B--&gt;D;
    C--&gt;D;
</div>
<!-- htmlmin:ignore -->
</div>
```

pandoc escaped `>` to `&gt;` but no problem.

`<!-- htmlmin:ignore -->` prevent that [HTMLMinifier](https://kangax.github.io/html-minifier/) remove the whitespaces.

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
$ npm install --global pandoc-mermaid-filter
```

Executable filename is `pandoc-mermaid`.

##### Run

``` shell
$ pandoc -f markdown -t html5 -F pandoc-mermaid --template=template.html -o output.html input.md
```
