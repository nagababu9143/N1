(this["webpackJsonpmeme-generator"]=this["webpackJsonpmeme-generator"]||[]).push([[0],{23:function(e,t,o){},24:function(e,t,o){"use strict";o.r(t);var n=o(0),i=o.n(n),a=o(8),r=o.n(a),p=o(9),c=o(14),d=o(15),s=o(13),l=o(2),m=l.a.div.withConfig({displayName:"BgContainerComponent",componentId:"sc-10fx1oe-0"})(["margin:20px;min-height:100vh;display:flex;"]),x=l.a.form.withConfig({displayName:"FormComponent",componentId:"sc-10fx1oe-1"})(["display:flex;flex-direction:column;margin:20px;min-width:50vw;"]),h=l.a.h1.withConfig({displayName:"HeadingComponent",componentId:"sc-10fx1oe-2"})(["font-family:'Open Sans';color:#35469c;"]),f=l.a.label.withConfig({displayName:"LabelComponent",componentId:"sc-10fx1oe-3"})(["font-family:'Open Sans';color:#7e858e;margin-bottom:5px;"]),g=l.a.input.withConfig({displayName:"InputComponent",componentId:"sc-10fx1oe-4"})(["margin-bottom:15px;height:30px;width:250px;border:1px solid #d7dfe9;color:#7e858e;border-radius:5px;padding:5px;outline:none;"]),u=l.a.select.withConfig({displayName:"OptionComponent",componentId:"sc-10fx1oe-5"})(["margin-bottom:15px;height:30px;width:250px;border:1px solid #d7dfe9;color:#7e858e;border-radius:5px;padding:5px;outline:none;"]),b=l.a.button.withConfig({displayName:"ButtonComponent",componentId:"sc-10fx1oe-6"})(["background-color:#0b69ff;color:#ffffff;font-family:'Open Sans';border:0;border-radius:5px;height:30px;width:100px;cursor:pointer;"]),j=l.a.div.withConfig({displayName:"OutputContainer",componentId:"sc-10fx1oe-7"})(["display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:500px;height:500px;background-image:url(",");background-size:cover;"],(function(e){return e.bgImage})),C=l.a.p.withConfig({displayName:"Paragraph",componentId:"sc-10fx1oe-8"})(["font-size:","px;color:white;font-family:'Open Sans';"],(function(e){return e.size})),T=o(1),y=[{optionId:"8",displayText:"8"},{optionId:"12",displayText:"12"},{optionId:"16",displayText:"16"},{optionId:"20",displayText:"20"},{optionId:"24",displayText:"24"},{optionId:"28",displayText:"28"},{optionId:"32",displayText:"32"}],O=function(e){Object(d.a)(o,e);var t=Object(s.a)(o);function o(){var e;Object(p.a)(this,o);for(var n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).state={bottomText:"",topText:"",imageUrl:"",fontSize:y[0].optionId,isGenerated:!1},e.onImageUrlChange=function(t){e.setState({imageUrl:t.target.value})},e.onTopTextChange=function(t){e.setState({topText:t.target.value})},e.onBottomTextChange=function(t){e.setState({bottomText:t.target.value})},e.onFontSizeChange=function(t){e.setState({fontSize:t.target.value})},e.onSubmitForm=function(t){t.preventDefault(),e.setState({isGenerated:!0})},e}return Object(c.a)(o,[{key:"render",value:function(){var e=this.state,t=e.fontSize,o=e.bottomText,n=e.topText,i=e.imageUrl,a=e.isGenerated;return Object(T.jsxs)(m,{children:[Object(T.jsxs)(x,{onSubmit:this.onSubmitForm,children:[Object(T.jsx)(h,{children:"Meme Generator"}),Object(T.jsx)(f,{htmlFor:"image",children:"Image Url"}),Object(T.jsx)(g,{id:"image",placeholder:"Enter Image Url",onChange:this.onImageUrlChange,value:i}),Object(T.jsx)(f,{htmlFor:"topText",children:"Top Text"}),Object(T.jsx)(g,{id:"topText",placeholder:"Enter Top Text",onChange:this.onTopTextChange,value:n}),Object(T.jsx)(f,{htmlFor:"bottomText",children:"Bottom Text"}),Object(T.jsx)(g,{id:"bottomText",placeholder:"Enter Bottom Text",onChange:this.onBottomTextChange,value:o}),Object(T.jsx)(f,{htmlFor:"bottomText",children:"Font Size"}),Object(T.jsx)(u,{onChange:this.onFontSizeChange,value:t,children:y.map((function(e){return Object(T.jsx)("option",{children:e.displayText},e.optionId)}))}),Object(T.jsx)(b,{type:"submit",children:"Generate"})]}),a&&Object(T.jsxs)(j,{bgImage:i,"data-testid":"meme",children:[Object(T.jsx)(C,{size:t,children:n}),Object(T.jsx)(C,{size:t,children:o})]})]})}}]),o}(n.Component),I=O,v=(o(23),function(){return Object(T.jsx)(I,{})});r.a.render(Object(T.jsx)(i.a.StrictMode,{children:Object(T.jsx)(v,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.510427a8.chunk.js.map