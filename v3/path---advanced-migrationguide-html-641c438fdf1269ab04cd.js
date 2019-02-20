webpackJsonp([0x73e55b2b144a],{452:function(n,s){n.exports={data:{markdownRemark:{html:'<p>With the release of version 3.0 of reactivesearch, we are now fully compatible with React 16.6 and above. This release comes after the feedback we have gathered from the iterative deployment of reactivesearch in production for the dozens of our clients in the past 6–8 months. In this version, we have changed the way certain props behaved in the earlier versions. This guide will give you a brief about all the changes.</p>\n<h2 id="breaking-changes"><a href="#breaking-changes" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Breaking Changes</h2>\n<h3 id="controlled-and-uncontrolled-component-behaviors"><a href="#controlled-and-uncontrolled-component-behaviors" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Controlled and Uncontrolled component behaviors</h3>\n<p>To enable effective control over the components, we now support <code class="gatsby-code-text">defaultValue</code>, <code class="gatsby-code-text">value</code> &#x26; <code class="gatsby-code-text">onChange</code> props. These new props enable better controlled and uncontrolled usage for all the reactivesearch components. You can read all about it <a href="/reactive-manual/v3/componentsusage">here</a>.</p>\n<blockquote>\n<p>We don’t support <code class="gatsby-code-text">defaultSelected</code> prop anywhere.</p>\n</blockquote>\n<h3 id="new-render-props"><a href="#new-render-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>New Render Props</h3>\n<p>You can now customise the looks and behaviors of your components in much more flexible and declarative manner with the new render props added to reactivesearch components.</p>\n<ul>\n<li>\n<h4 id="result-components"><a href="#result-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Result Components</h4>\n</li>\n</ul>\n<p>In <strong>v3</strong>, you will need to use <code class="gatsby-code-text">renderData</code> &#x26; <code class="gatsby-code-text">renderAllData</code> to custom render the result UI.</p>\n<blockquote>\n<p>We’ve removed rendering support with <code class="gatsby-code-text">onData</code> and <code class="gatsby-code-text">onAllData</code>. Although onData still exists to enable side-effects handling on new data transmissions. They act as callback props which gets triggered whenever there is a change in the data.</p>\n</blockquote>\n<p><strong>v2.x:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n    <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CitySensor"</span><span class="token punctuation">,</span> <span class="token string">"SearchSensor"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchResult<span class="token punctuation">"</span></span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">onData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n</span><span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p><strong>v3.x:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n    <span class="token attr-name">react</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n        <span class="token string">"and"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"CitySensor"</span><span class="token punctuation">,</span> <span class="token string">"SearchSensor"</span><span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchResult<span class="token punctuation">"</span></span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">renderData</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">{</span>res<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span></span>\n</span><span class="token punctuation">/></span></span></code></pre>\n      </div>\n<blockquote>\n<p>Note: We have removed support for <code class="gatsby-code-text">onAllData</code> prop from all the result components.</p>\n</blockquote>\n<ul>\n<li>\n<h4 id="error-handling-and-rendering-control"><a href="#error-handling-and-rendering-control" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Error handling and rendering control</h4>\n</li>\n</ul>\n<p>We have added the support for <code class="gatsby-code-text">renderError</code> in all the data driven components which can be used to display error message whenever there is an error while fetching the data for that particular component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchSensor<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dataField</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token string">"group_venue"</span><span class="token punctuation">,</span> <span class="token string">"group_city"</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">renderError</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token operator">=></span>\n</span><span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">            Something went wrong <span class="token keyword">with</span> DataSearch<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>Error details<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span><span class="token punctuation">{</span>error<span class="token punctuation">}</span>\n</span>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">}</span></span><span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p>To allow managing the side-effects on error occurrence, we also support <code class="gatsby-code-text">onError</code> method which gets triggered whenever an error occurs.</p>\n<ul>\n<li>\n<h4 id="search-components"><a href="#search-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Search Components</h4>\n</li>\n</ul>\n<p>In <strong>v3</strong>, we have added support for <code class="gatsby-code-text">renderSuggestion</code> &#x26; <code class="gatsby-code-text">renderAllSuggestions</code> to customise the rendering of suggestions in the search components. This can effectively help you render custom UI in place of vanilla suggestions. We also support <code class="gatsby-code-text">onSuggestion</code> prop which can be used to listen for the changes in suggestions &#x26; trigger side effects if required.</p>\n<p><strong>v2.x:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token operator">&lt;</span>DataSearch\n  <span class="token operator">...</span>\n  onSuggestion<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>suggestion<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span>suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>original_title<span class="token punctuation">}</span> by\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'dodgerblue\'</span><span class="token punctuation">,</span> marginLeft<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    <span class="token punctuation">{</span>suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>authors<span class="token punctuation">}</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>original_title<span class="token punctuation">,</span>\n    source<span class="token punctuation">:</span> suggestion<span class="token punctuation">.</span>_source <span class="token comment">// for onValueSelected to work with onSuggestion</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">></span></code></pre>\n      </div>\n<p><strong>v3.x:</strong></p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token operator">&lt;</span>DataSearch\n  <span class="token operator">...</span>\n<span class="gatsby-highlight-code-line">  renderSuggestion<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>suggestion<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n</span>    label<span class="token punctuation">:</span> <span class="token punctuation">(</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span>suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>original_title<span class="token punctuation">}</span> by\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">:</span> <span class="token string">\'dodgerblue\'</span><span class="token punctuation">,</span> marginLeft<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                    <span class="token punctuation">{</span>suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>authors<span class="token punctuation">}</span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    value<span class="token punctuation">:</span> suggestion<span class="token punctuation">.</span>_source<span class="token punctuation">.</span>original_title<span class="token punctuation">,</span>\n    source<span class="token punctuation">:</span> suggestion<span class="token punctuation">.</span>_source  <span class="token comment">// for onValueSelected to work with renderSuggestion</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="gatsby-highlight-code-line">  renderNoSuggestion<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>No Suggestions <span class="token keyword">for</span> the search term<span class="token operator">!</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n</span>  <span class="token operator">/</span><span class="token operator">></span></code></pre>\n      </div>\n<p>We also added support for <code class="gatsby-code-text">renderNoSuggestion</code> to give feedback to the user when there are no suggestions for a given search query. Please check the relevant search component docs for further details.</p>\n<ul>\n<li>\n<h4 id="list-components"><a href="#list-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>List Components</h4>\n</li>\n</ul>\n<p>In <strong>v3</strong>, we have added support for <code class="gatsby-code-text">renderItem</code> to provide custom rendering for radio, checklist, dropdown list items UIs.</p>\n<blockquote>\n<p>We have removed support for <code class="gatsby-code-text">renderListItem</code> prop here. Use <code class="gatsby-code-text">renderItem</code> instead.</p>\n</blockquote>\n<p><strong>v2.x</strong>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MultiList</span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CitySensor<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>group.group_city.raw<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cities<span class="token punctuation">"</span></span>\n    <span class="token attr-name">renderListItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>label<span class="token punctuation">,</span> count<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n            <span class="token punctuation">{</span>label<span class="token punctuation">}</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'dodgerblue\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n                <span class="token punctuation">{</span>count<span class="token punctuation">}</span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span></code></pre>\n      </div>\n<p><strong>v3.x</strong>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MultiList</span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>CitySensor<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>group.group_city.raw<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Cities<span class="token punctuation">"</span></span>\n<span class="gatsby-highlight-code-line">    <span class="token attr-name">renderItem</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span>label<span class="token punctuation">,</span> count<span class="token punctuation">,</span> isChecked<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n</span><span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>isChecked <span class="token operator">?</span> <span class="token string">\'active\'</span> <span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">            <span class="token punctuation">{</span>label<span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginLeft<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span> color<span class="token punctuation">:</span> <span class="token string">\'dodgerblue\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">                <span class="token punctuation">{</span>count<span class="token punctuation">}</span>\n</span><span class="gatsby-highlight-code-line">            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n</span><span class="gatsby-highlight-code-line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</span>    <span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">/></span></span></code></pre>\n      </div>\n<h3 id="standardized-usage-of-custom-and-default-queries"><a href="#standardized-usage-of-custom-and-default-queries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Standardized usage of custom and default queries</h3>\n<p>ReactiveSearch now internally validates the user-provided queries and compute the aggregation, sort, or generic queries based on the input provided. This intents to provide a seamless development experience to the developers for customizing the behaviors of the reactivesearch components. You can catch the details of this enhancement <a href="https://github.com/appbaseio/reactivesearch/issues/546">here</a>.</p>\n<ul>\n<li>\n<h4 id="defaultquery"><a href="#defaultquery" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>defaultQuery</h4>\n</li>\n</ul>\n<p><code class="gatsby-code-text">defaultQuery</code> is ideally used with data-driven components to impact their own data.</p>\n<p>For example, in a <code class="gatsby-code-text">SingleList</code> component showing list of cities you may only want to render cities belonging to India.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">defaultQuery <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        query<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            terms<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                country<span class="token punctuation">:</span> <span class="token punctuation">[</span> <span class="token string">"India"</span> <span class="token punctuation">]</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<ul>\n<li>\n<h4 id="customquery"><a href="#customquery" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>customQuery</h4>\n</li>\n</ul>\n<p><code class="gatsby-code-text">customQuery</code> is used to change the component’s behavior for its subscribers. It gets triggered after an interaction on the component. Every component is shipped with a default behavior i.e. selecting a city on the SingleList component generates a term query. If you wish to change this behavior i.e. maybe perform additional query besides <code class="gatsby-code-text">term</code> query or do something else altogether, you can use <code class="gatsby-code-text">customQuery</code> prop.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx">customQuery <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    query<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        term<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                user <span class="token punctuation">:</span> <span class="token string">"Kimchy"</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>',
frontmatter:{title:"Migration Guide",next:"advancedguides.html",prev:"componentsusage.html",nextTitle:"Advanced Guides",prevTitle:"Components Usage"},fields:{path:"docs/advanced/MigrationGuide",slug:"advanced/migrationguide.html"}}},pathContext:{slug:"advanced/migrationguide.html"}}}});
//# sourceMappingURL=path---advanced-migrationguide-html-641c438fdf1269ab04cd.js.map