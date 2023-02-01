import{_ as o,c as t,a as p,w as n,b as e,r as c,o as r,d as s,e as a}from"./app.66be0d31.js";const V=JSON.parse('{"title":"vitepress-plugin-tabs","description":"","frontmatter":{"title":"vitepress-plugin-tabs","outline":"deep"},"headers":[],"relativePath":"tabs/index.md","lastUpdated":1675222345000}'),i={name:"tabs/index.md"},y=e('<h1 id="vitepress-plugin-tabs" tabindex="-1">vitepress-plugin-tabs <a class="header-anchor" href="#vitepress-plugin-tabs" aria-hidden="true">#</a></h1><blockquote><p>A plugin that adds syntax for showing content in tabs.</p></blockquote><p><a href="https://www.npmjs.com/package/@elonehoo/vitepress-plugin-tabs" target="_blank" rel="noreferrer"><img src="https://img.shields.io/npm/v/@elonehoo/vitepress-plugin-tabs?color=42d392&amp;label=" alt="NPM version"></a></p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2>',4),A=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki vitesse-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#80A665"}},"npm"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D"}},"i"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C99076"}},"-D"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D"}},"@elonehoo/vitepress-plugin-tabs")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki vitesse-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#59873A"}},"npm"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"i"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"-D"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"@elonehoo/vitepress-plugin-tabs")]),a(`
`),s("span",{class:"line"})])])],-1),d=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki vitesse-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#80A665"}},"yarn"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D"}},"add"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C99076"}},"-D"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D"}},"@elonehoo/vitepress-plugin-tabs")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki vitesse-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#59873A"}},"yarn"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"add"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"-D"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"@elonehoo/vitepress-plugin-tabs")]),a(`
`),s("span",{class:"line"})])])],-1),D=s("div",{class:"language-sh"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"sh"),s("pre",{class:"shiki vitesse-dark vp-code-dark"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#80A665"}},"pnpm"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D"}},"add"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C99076"}},"-D"),s("span",{style:{color:"#DBD7CAEE"}}," "),s("span",{style:{color:"#C98A7D"}},"@elonehoo/vitepress-plugin-tabs")]),a(`
`),s("span",{class:"line"})])]),s("pre",{class:"shiki vitesse-light vp-code-light"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#59873A"}},"pnpm"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"add"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#A65E2B"}},"-D"),s("span",{style:{color:"#393A34"}}," "),s("span",{style:{color:"#B56959"}},"@elonehoo/vitepress-plugin-tabs")]),a(`
`),s("span",{class:"line"})])])],-1),h=e(`<h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h2><p>After installing the plugin, you&#39;ll need to edit both <a href="https://vitepress.vuejs.org/config/app-configs" target="_blank" rel="noreferrer">App Config</a> and <a href="https://vitepress.vuejs.org/config/theme-configs" target="_blank" rel="noreferrer">Theme Config</a>.</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// .vitepress/config.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineConfig</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitepress</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">tabsMarkdownPlugin</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@elonehoo/vitepress-plugin-tabs</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineConfig</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#B8A965;">markdown</span><span style="color:#666666;">: {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">config</span><span style="color:#666666;">(</span><span style="color:#BD976A;">md</span><span style="color:#666666;">) {</span></span>
<span class="line"><span style="color:#666666;">      </span><span style="color:#BD976A;">md</span><span style="color:#666666;">.</span><span style="color:#80A665;">use</span><span style="color:#666666;">(</span><span style="color:#BD976A;">tabsMarkdownPlugin</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">    }</span></span>
<span class="line"><span style="color:#666666;">  }</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// .vitepress/config.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineConfig</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitepress</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">tabsMarkdownPlugin</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@elonehoo/vitepress-plugin-tabs</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineConfig</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#998418;">markdown</span><span style="color:#999999;">: {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">config</span><span style="color:#999999;">(</span><span style="color:#B07D48;">md</span><span style="color:#999999;">) {</span></span>
<span class="line"><span style="color:#999999;">      </span><span style="color:#B07D48;">md</span><span style="color:#999999;">.</span><span style="color:#59873A;">use</span><span style="color:#999999;">(</span><span style="color:#B07D48;">tabsMarkdownPlugin</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">    }</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#758575DD;">// .vitepress/theme/index.ts</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">Theme</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">vitepress/theme</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">enhanceAppWithTabs</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7D99;">&#39;</span><span style="color:#C98A7D;">@elonehoo/vitepress-plugin-tabs/client</span><span style="color:#C98A7D99;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#666666;">  ...</span><span style="color:#BD976A;">Theme</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#666666;">  </span><span style="color:#80A665;">enhanceApp</span><span style="color:#666666;">({ </span><span style="color:#BD976A;">app</span><span style="color:#666666;"> }) {</span></span>
<span class="line"><span style="color:#666666;">    </span><span style="color:#80A665;">enhanceAppWithTabs</span><span style="color:#666666;">(</span><span style="color:#BD976A;">app</span><span style="color:#666666;">)</span></span>
<span class="line"><span style="color:#666666;">  }</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#A0ADA0;">// .vitepress/theme/index.ts</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">Theme</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">vitepress/theme</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">enhanceAppWithTabs</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B5695999;">&#39;</span><span style="color:#B56959;">@elonehoo/vitepress-plugin-tabs/client</span><span style="color:#B5695999;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#999999;">  ...</span><span style="color:#B07D48;">Theme</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#999999;">  </span><span style="color:#59873A;">enhanceApp</span><span style="color:#999999;">({ </span><span style="color:#B07D48;">app</span><span style="color:#999999;"> }) {</span></span>
<span class="line"><span style="color:#999999;">    </span><span style="color:#59873A;">enhanceAppWithTabs</span><span style="color:#999999;">(</span><span style="color:#B07D48;">app</span><span style="color:#999999;">)</span></span>
<span class="line"><span style="color:#999999;">  }</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="syntax" tabindex="-1">Syntax <a class="header-anchor" href="#syntax" aria-hidden="true">#</a></h2><h3 id="tabs-with-non-shared-selection-state" tabindex="-1">Tabs with non-shared selection state <a class="header-anchor" href="#tabs-with-non-shared-selection-state" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">:::=tabs</span></span>
<span class="line"><span style="color:#DBD7CAEE;">::a</span></span>
<span class="line"><span style="color:#DBD7CAEE;">a content</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">::b</span></span>
<span class="line"><span style="color:#DBD7CAEE;">b content</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">:::=tabs</span></span>
<span class="line"><span style="color:#DBD7CAEE;">::a</span></span>
<span class="line"><span style="color:#DBD7CAEE;">a content 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">::b</span></span>
<span class="line"><span style="color:#DBD7CAEE;">b content 2</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;">:::=tabs</span></span>
<span class="line"><span style="color:#393A34;">::a</span></span>
<span class="line"><span style="color:#393A34;">a content</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">::b</span></span>
<span class="line"><span style="color:#393A34;">b content</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">:::=tabs</span></span>
<span class="line"><span style="color:#393A34;">::a</span></span>
<span class="line"><span style="color:#393A34;">a content 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">::b</span></span>
<span class="line"><span style="color:#393A34;">b content 2</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span>
<span class="line"></span></code></pre></div>`,7),E=s("p",null,"a content",-1),b=s("p",null,"b content",-1),C=s("p",null,"a content 2",-1),B=s("p",null,"b content 2",-1),g=e(`<h3 id="tabs-with-shared-selection-state" tabindex="-1">Tabs with shared selection state <a class="header-anchor" href="#tabs-with-shared-selection-state" aria-hidden="true">#</a></h3><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki vitesse-dark vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">:::=tabs=ab</span></span>
<span class="line"><span style="color:#DBD7CAEE;">::a</span></span>
<span class="line"><span style="color:#DBD7CAEE;">a content</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">::b</span></span>
<span class="line"><span style="color:#DBD7CAEE;">b content</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">:::=tabs=ab</span></span>
<span class="line"><span style="color:#DBD7CAEE;">::a</span></span>
<span class="line"><span style="color:#DBD7CAEE;">a content 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">::b</span></span>
<span class="line"><span style="color:#DBD7CAEE;">b content 2</span></span>
<span class="line"><span style="color:#DBD7CAEE;">:::</span></span>
<span class="line"></span></code></pre><pre class="shiki vitesse-light vp-code-light"><code><span class="line"><span style="color:#393A34;">:::=tabs=ab</span></span>
<span class="line"><span style="color:#393A34;">::a</span></span>
<span class="line"><span style="color:#393A34;">a content</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">::b</span></span>
<span class="line"><span style="color:#393A34;">b content</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">:::=tabs=ab</span></span>
<span class="line"><span style="color:#393A34;">::a</span></span>
<span class="line"><span style="color:#393A34;">a content 2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">::b</span></span>
<span class="line"><span style="color:#393A34;">b content 2</span></span>
<span class="line"><span style="color:#393A34;">:::</span></span>
<span class="line"></span></code></pre></div>`,2),_=s("p",null,"a content",-1),u=s("p",null,"b content",-1),v=s("p",null,"a content 2",-1),m=s("p",null,"b content 2",-1);function f(k,T,x,w,S,P){const l=c("PluginTabs");return r(),t("div",null,[y,p(l,{tabLabels:["npm","yarn","pnpm"],sharedStateKey:"~npm-commands"},{npm:n(()=>[A]),yarn:n(()=>[d]),pnpm:n(()=>[D]),_:1}),h,p(l,{tabLabels:["a","b"]},{a:n(()=>[E]),b:n(()=>[b]),_:1}),p(l,{tabLabels:["a","b"]},{a:n(()=>[C]),b:n(()=>[B]),_:1}),g,p(l,{tabLabels:["a","b"],sharedStateKey:"ab"},{a:n(()=>[_]),b:n(()=>[u]),_:1}),p(l,{tabLabels:["a","b"],sharedStateKey:"ab"},{a:n(()=>[v]),b:n(()=>[m]),_:1})])}const N=o(i,[["render",f]]);export{V as __pageData,N as default};
