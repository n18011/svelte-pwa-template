var fn=Array.isArray,an=Array.from,_n=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptors,cn=Object.prototype,vn=Array.prototype,Rt=Object.getPrototypeOf;function pn(t){return typeof t=="function"}const hn=()=>{};function dn(t){return t()}function yn(t){for(var n=0;n<t.length;n++)t[n]()}function wn(t,n,r=!1){return t===void 0?r?n():n:t}const x=2,ut=4,V=8,U=16,y=32,B=64,k=128,I=256,p=512,T=1024,A=2048,C=4096,N=8192,qt=16384,st=32768,En=65536,Nt=1<<18,ot=1<<19,nt=Symbol("$state");function it(t){return t===this.v}function St(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function ft(t){return!St(t,this.v)}function jt(t){throw new Error("effect_in_teardown")}function It(){throw new Error("effect_in_unowned_derived")}function Pt(t){throw new Error("effect_orphan")}function Mt(){throw new Error("effect_update_depth_exceeded")}function xn(t){throw new Error("props_invalid_value")}function mn(){throw new Error("state_descriptors_fixed")}function gn(){throw new Error("state_prototype_fixed")}function Yt(){throw new Error("state_unsafe_local_read")}function Vt(){throw new Error("state_unsafe_mutation")}function $(t){return{f:0,v:t,reactions:null,equals:it,version:0}}function Tn(t){return at($(t))}function Bt(t,n=!1){var e;const r=$(t);return n||(r.equals=ft),i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function kn(t,n=!1){return at(Bt(t,n))}function at(t){return f!==null&&f.f&x&&(d===null?Jt([t]):d.push(t)),t}function Lt(t,n){return f!==null&&J()&&f.f&(x|U)&&(d===null||!d.includes(t))&&Vt(),Ht(t,n)}function Ht(t,n){return t.equals(n)||(t.v=n,t.version=kt(),_t(t,T),J()&&o!==null&&o.f&p&&!(o.f&y)&&(_!==null&&_.includes(t)?(w(o,T),L(o)):g===null?Qt([t]):g.push(t))),n}function _t(t,n){var r=t.reactions;if(r!==null)for(var e=J(),l=r.length,u=0;u<l;u++){var s=r[u],a=s.f;a&T||!e&&s===o||(w(s,n),a&(p|k)&&(a&x?_t(s,A):L(s)))}}function Kt(t){var n=x|T;o===null?n|=k:o.f|=ot;const r={children:null,ctx:i,deps:null,equals:it,f:n,fn:t,reactions:null,v:null,version:0,parent:o};if(f!==null&&f.f&x){var e=f;(e.children??(e.children=[])).push(r)}return r}function Dn(t){const n=Kt(t);return n.equals=ft,n}function ct(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&x?G(e):F(e)}}}function vt(t){var n,r=o;Y(t.parent);try{ct(t),n=Dt(t)}finally{Y(r)}return n}function pt(t){var n=vt(t),r=(D||t.f&k)&&t.deps!==null?A:p;w(t,r),t.equals(n)||(t.v=n,t.version=kt())}function G(t){ct(t),q(t,0),w(t,N),t.v=t.children=t.deps=t.ctx=t.reactions=null}function ht(t){o===null&&f===null&&Pt(),f!==null&&f.f&k&&It(),z&&jt()}function Ut(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function S(t,n,r,e=!0){var l=(t&B)!==0,u=o,s={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|T,first:null,fn:n,last:null,next:null,parent:l?null:u,prev:null,teardown:null,transitions:null,version:0};if(r){var a=b;try{rt(!0),j(s),s.f|=qt}catch(c){throw F(s),c}finally{rt(a)}}else n!==null&&L(s);var E=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&ot)===0;if(!E&&!l&&e&&(u!==null&&Ut(s,u),f!==null&&f.f&x)){var m=f;(m.children??(m.children=[])).push(s)}return s}function bn(t){ht();var n=o!==null&&(o.f&y)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:f})}else{var e=dt(t);return e}}function Cn(t){return ht(),W(t)}function An(t){const n=S(B,t,!0);return()=>{F(n)}}function dt(t){return S(ut,t,!1)}function Fn(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=W(()=>{t(),!e.ran&&(e.ran=!0,Lt(r.l.r2,!0),un(n))})}function On(){var t=i;W(()=>{if(ln(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&w(r,A),O(r)&&j(r),n.ran=!1}t.l.r2.v=!1}})}function W(t){return S(V,t,!0)}function Rn(t){return $t(t)}function $t(t,n=0){return S(V|U|n,t,!0)}function qn(t,n=!0){return S(V|y,t,!0,n)}function yt(t){var n=t.teardown;if(n!==null){const r=z,e=f;et(!0),M(null);try{n.call(null)}finally{et(r),M(e)}}}function wt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)G(n[r])}}function Et(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;F(r,n),r=e}}function Gt(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||F(n),n=r}}function F(t,n=!0){var r=!1;if((n||t.f&Nt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var u=e===l?null:X(e);e.remove(),e=u}r=!0}Et(t,n&&!r),wt(t),q(t,0),w(t,N);var s=t.transitions;if(s!==null)for(const E of s)E.stop();yt(t);var a=t.parent;a!==null&&a.first!==null&&xt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function xt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Nn(t,n){var r=[];mt(t,r,!0),Wt(r,()=>{F(t),n&&n()})}function Wt(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function mt(t,n,r){if(!(t.f&C)){if(t.f^=C,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,u=(e.f&st)!==0||(e.f&y)!==0;mt(e,n,u?r:!1),e=l}}}function Sn(t){gt(t,!0)}function gt(t,n){if(t.f&C){O(t)&&j(t),t.f^=C;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&st)!==0||(r.f&y)!==0;gt(r,l?n:!1),r=e}if(t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&u.in()}}function zt(t){throw new Error("lifecycle_outside_component")}let P=!1,b=!1,z=!1;function rt(t){b=t}function et(t){z=t}let H=[],R=0;let f=null;function M(t){f=t}let o=null;function Y(t){o=t}let d=null;function Jt(t){d=t}let _=null,h=0,g=null;function Qt(t){g=t}let Tt=0,D=!1,i=null;function kt(){return++Tt}function J(){return i!==null&&i.l===null}function O(t){var s,a;var n=t.f;if(n&T)return!0;if(n&A){var r=t.deps,e=(n&k)!==0;if(r!==null){var l;if(n&I){for(l=0;l<r.length;l++)((s=r[l]).reactions??(s.reactions=[])).push(t);t.f^=I}for(l=0;l<r.length;l++){var u=r[l];if(O(u)&&pt(u),e&&o!==null&&!D&&!((a=u==null?void 0:u.reactions)!=null&&a.includes(t))&&(u.reactions??(u.reactions=[])).push(t),u.version>t.version)return!0}}e||w(t,p)}return!1}function Xt(t,n,r){throw t}function Dt(t){var Z;var n=_,r=h,e=g,l=f,u=D,s=d,a=i,E=t.f;_=null,h=0,g=null,f=E&(y|B)?null:t,D=!b&&(E&k)!==0,d=null,i=t.ctx;try{var m=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(q(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!D)for(v=h;v<c.length;v++)((Z=c[v]).reactions??(Z.reactions=[])).push(t)}else c!==null&&h<c.length&&(q(t,h),c.length=h);return m}finally{_=n,h=r,g=e,f=l,D=u,d=s,i=a}}function Zt(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&x&&(_===null||!_.includes(n))&&(w(n,A),n.f&(k|I)||(n.f^=I),q(n,0))}function q(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Zt(t,r[e])}function j(t){var n=t.f;if(!(n&N)){w(t,p);var r=o;o=t;try{n&U?Gt(t):Et(t),wt(t),yt(t);var e=Dt(t);t.teardown=typeof e=="function"?e:null,t.version=Tt}catch(l){Xt(l)}finally{o=r}}}function tn(){R>1e3&&(R=0,Mt()),R++}function nn(t){var n=t.length;if(n!==0){tn();var r=b;b=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var u=[];bt(l,u),rn(u)}}finally{b=r}}}function rn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(N|C))&&O(e)&&(j(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?xt(e):e.fn=null))}}function en(){if(P=!1,R>1001)return;const t=H;H=[],nn(t),P||(R=0)}function L(t){P||(P=!0,queueMicrotask(en));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(B|y)){if(!(r&p))return;n.f^=p}}H.push(n)}function bt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,u=(l&y)!==0,s=u&&(l&p)!==0;if(!s&&!(l&C))if(l&V){u?r.f^=p:O(r)&&j(r);var a=r.first;if(a!==null){r=a;continue}}else l&ut&&e.push(r);var E=r.next;if(E===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var m=v.next;if(m!==null){r=m;continue t}v=v.parent}}r=E}for(var c=0;c<e.length;c++)a=e[c],n.push(a),bt(a,n)}function ln(t){var a;var n=t.f,r=(n&x)!==0;if(r&&n&N){var e=vt(t);return G(t),e}if(f!==null){d!==null&&d.includes(t)&&Yt();var l=f.deps;_===null&&l!==null&&l[h]===t?h++:_===null?_=[t]:_.push(t),g!==null&&o!==null&&o.f&p&&!(o.f&y)&&g.includes(t)&&(w(o,T),L(o))}else if(r&&t.deps===null){var u=t,s=u.parent;s!==null&&!((a=s.deriveds)!=null&&a.includes(u))&&(s.deriveds??(s.deriveds=[])).push(u)}return r&&(u=t,O(u)&&pt(u)),t.v}function un(t){const n=f;try{return f=null,t()}finally{f=n}}const sn=~(T|A|p);function w(t,n){t.f=t.f&sn|n}function jn(t){return Q().get(t)}function In(t,n){return Q().set(t,n),n}function Pn(t){return Q().has(t)}function Q(t){return i===null&&zt(),i.c??(i.c=new Map(on(i)||void 0))}function on(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Mn(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},n||(i.l={s:null,u:null,r1:[],r2:$(!1)})}function Yn(t){const n=i;if(n!==null){const s=n.e;if(s!==null){var r=o,e=f;n.e=null;try{for(var l=0;l<s.length;l++){var u=s[l];Y(u.effect),M(u.reaction),dt(u.fn)}}finally{Y(r),M(e)}}i=n.p,n.m=!0}return{}}function Vn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(nt in t)K(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&nt in r&&K(r)}}}function K(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{K(t[e],n)}catch{}const r=Rt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Ot(r);for(let l in e){const u=e[l].get;if(u)try{u.call(t)}catch{}}}}}var lt,Ct,At;function Bn(){if(lt===void 0){lt=window;var t=Element.prototype,n=Node.prototype;Ct=tt(n,"firstChild").get,At=tt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Ln(t=""){return document.createTextNode(t)}function Ft(t){return Ct.call(t)}function X(t){return At.call(t)}function Hn(t,n){return Ft(t)}function Kn(t,n){{var r=Ft(t);return r instanceof Comment&&r.data===""?X(r):r}}function Un(t,n=1,r=!1){let e=t;for(;n--;)e=X(e);return e}export{F as $,Y as A,f as B,Ln as C,Ft as D,Bn as E,an as F,An as G,qn as H,$t as I,Sn as J,Nn as K,st as L,Cn as M,dn as N,yn as O,Vn as P,Kt as Q,xn as R,nt as S,En as T,ft as U,y as V,B as W,Dn as X,Bt as Y,pn as Z,hn as _,un as a,Pn as a0,Tn as a1,dt as a2,W as a3,Fn as a4,On as a5,wn as a6,Yn as b,i as c,Hn as d,In as e,Kn as f,jn as g,ln as h,Lt as i,vn as j,$ as k,zt as l,kn as m,mn as n,cn as o,Mn as p,tt as q,o as r,Un as s,Rn as t,bn as u,gn as v,Rt as w,fn as x,_n as y,M as z};
