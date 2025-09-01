"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2170],{92170:(e,t,i)=>{i.r(t),i.d(t,{W3mConnectSocialsView:()=>x,W3mConnectingFarcasterView:()=>q,W3mConnectingSocialView:()=>T});var o=i(83138),r=i(98410),s=i(78964),a=i(75751),n=i(55480),c=i(36211);i(40575),i(82886);var l=i(10899),d=i(67869),u=i(28977),h=i(52502),p=i(30112),w=i(12319);i(1507);var m=i(56362);let g=(0,c.AH)`
  :host {
    margin-top: ${({spacing:e})=>e["1"]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e["3"]} calc(${({spacing:e})=>e["3"]} * -1)
      ${({spacing:e})=>e["2"]} calc(${({spacing:e})=>e["3"]} * -1);
    width: calc(100% + ${({spacing:e})=>e["3"]} * 2);
  }
`;var f=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let v=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=l.a.state.connectors,this.authConnector=this.connectors.find(e=>"AUTH"===e.type),this.remoteFeatures=n.H.state.remoteFeatures,this.isPwaLoading=!1,this.unsubscribe.push(l.a.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>"AUTH"===e.type)}),n.H.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.remoteFeatures?.socials||[],t=!!this.authConnector,i=e?.length,r="ConnectSocials"===d.I.state.view;return t&&i||r?(r&&!i&&(e=u.oU.DEFAULT_SOCIALS),(0,o.qy)` <wui-flex flexDirection="column" gap="2">
      ${e.map(e=>(0,o.qy)`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`):null}async onSocialClick(e){e&&await (0,p.Up)(e)}async handlePwaFrameLoad(){if(w.w.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof m.Y&&await this.authConnector.provider.init()}catch(e){h.h.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:e.message},"error")}finally{this.isPwaLoading=!1}}}};v.styles=g,f([(0,r.MZ)()],v.prototype,"tabIdx",void 0),f([(0,r.wk)()],v.prototype,"connectors",void 0),f([(0,r.wk)()],v.prototype,"authConnector",void 0),f([(0,r.wk)()],v.prototype,"remoteFeatures",void 0),f([(0,r.wk)()],v.prototype,"isPwaLoading",void 0),v=f([(0,c.EM)("w3m-social-login-list")],v);let y=(0,c.AH)`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.md}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var b=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let x=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.checked=a.o.state.isLegalCheckboxChecked,this.unsubscribe.push(a.o.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=n.H.state,i=n.H.state.features?.legalCheckbox,r=!!(e||t)&&!!i&&!this.checked;return(0,o.qy)`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${(0,s.J)(r?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,s.J)(r?-1:void 0)}></w3m-social-login-list>
      </wui-flex>
    `}};x.styles=y,b([(0,r.wk)()],x.prototype,"checked",void 0),x=b([(0,c.EM)("w3m-connect-socials-view")],x);var C=i(58051),$=i(97418),k=i(93481),P=i(70417),E=i(58653),S=i(65374),I=i(81701),W=i(45069);i(90721),i(64731),i(47824),i(41163);var L=i(89600),U=i(91867);let O=(0,c.AH)`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e["8"]};
  }
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }
  wui-flex:first-child:not(:only-child) {
    position: relative;
  }
  wui-loading-thumbnail {
    position: absolute;
  }
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:e})=>e["ease-out-power-2"]}
      ${({durations:e})=>e.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e["4"]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var R=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let T=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.socialProvider=C.U.state.socialProvider,this.socialWindow=C.U.state.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=n.H.state.remoteFeatures,this.address=C.U.state.address,this.connectionsByNamespace=$.x.getConnections(k.W.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=l.a.getAuthConnector(),this.handleSocialConnection=async e=>{if(e.data?.resultUri)if(e.origin===U.o.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.socialWindow&&(this.socialWindow.close(),C.U.setSocialWindow(void 0,k.W.state.activeChain)),this.connecting=!0,this.updateMessage();let t=e.data.resultUri;this.socialProvider&&P.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await $.x.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:t},this.authConnector.chain),this.socialProvider&&(E.i.setConnectedSocialProvider(this.socialProvider),P.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(e){this.error=!0,this.updateMessage(),this.socialProvider&&P.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})}}else d.I.goBack(),S.P.showError("Untrusted Origin"),this.socialProvider&&P.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}})},L.R.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.socialWindow&&(this.socialWindow.close(),C.U.setSocialWindow(void 0,k.W.state.activeChain))}),this.unsubscribe.push(C.U.subscribe(e=>{e.socialProvider&&(this.socialProvider=e.socialProvider),e.socialWindow&&(this.socialWindow=e.socialWindow)}),n.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e}),C.U.subscribeKey("address",e=>{let t=this.remoteFeatures?.multiWallet;e&&e!==this.address&&(this.hasMultipleConnections&&t?(d.I.replace("ProfileWallets"),S.P.showSuccess("New Wallet Added")):(I.W.state.open||n.H.state.enableEmbedded)&&I.W.close())})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),window.removeEventListener("message",this.handleSocialConnection,!1),this.socialWindow?.close(),C.U.setSocialWindow(void 0,k.W.state.activeChain)}render(){return(0,o.qy)`
      <wui-flex
        data-error=${(0,s.J)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,s.J)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){let e=W.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,o.qy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}connectSocial(){let e=setInterval(()=>{this.socialWindow?.closed&&(this.connecting||"ConnectingSocial"!==d.I.state.view||(this.socialProvider&&P.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),d.I.goBack()),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}};T.styles=O,R([(0,r.wk)()],T.prototype,"socialProvider",void 0),R([(0,r.wk)()],T.prototype,"socialWindow",void 0),R([(0,r.wk)()],T.prototype,"error",void 0),R([(0,r.wk)()],T.prototype,"connecting",void 0),R([(0,r.wk)()],T.prototype,"message",void 0),R([(0,r.wk)()],T.prototype,"remoteFeatures",void 0),T=R([(0,c.EM)("w3m-connecting-social-view")],T),i(41028),i(77237),i(34563),i(41699);let F=(0,c.AH)`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:e})=>e["8"]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e["1"]} * -1);
    bottom: calc(${({spacing:e})=>e["1"]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var A=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let q=class extends o.WF{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=C.U.state.socialProvider,this.uri=C.U.state.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=n.H.state.remoteFeatures,this.authConnector=l.a.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(C.U.subscribeKey("farcasterUrl",e=>{e&&(this.uri=e,this.connectFarcaster())}),C.U.subscribeKey("socialProvider",e=>{e&&(this.socialProvider=e)}),n.H.subscribeKey("remoteFeatures",e=>{this.remoteFeatures=e})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),(0,o.qy)`${this.platformTemplate()}`}platformTemplate(){return w.w.isMobile()?(0,o.qy)`${this.mobileTemplate()}`:(0,o.qy)`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?(0,o.qy)`${this.loadingTemplate()}`:(0,o.qy)`${this.qrTemplate()}`}qrTemplate(){return(0,o.qy)` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return(0,o.qy)`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return(0,o.qy)` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){let e=W.W.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return(0,o.qy)`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{await this.authConnector?.provider.connectFarcaster(),this.socialProvider&&(E.i.setConnectedSocialProvider(this.socialProvider),P.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;let e=$.x.getConnections(this.authConnector.chain).length>0;await $.x.connectExternal(this.authConnector,this.authConnector.chain);let t=this.remoteFeatures?.multiWallet;this.socialProvider&&P.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,e&&t?(d.I.replace("ProfileWallets"),S.P.showSuccess("New Wallet Added")):I.W.close()}catch(e){this.socialProvider&&P.E.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider}}),d.I.goBack(),S.P.showError(e)}}mobileLinkTemplate(){return(0,o.qy)`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&w.w.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40;return(0,o.qy)` <wui-qr-code
      size=${e}
      theme=${W.W.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,s.J)(W.W.state.themeVariables["--w3m-qr-color"])}
    ></wui-qr-code>`}copyTemplate(){let e=!this.uri||!this.ready;return(0,o.qy)`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(w.w.copyToClopboard(this.uri),S.P.showSuccess("Link copied"))}catch{S.P.showError("Failed to copy")}}};q.styles=F,A([(0,r.wk)()],q.prototype,"socialProvider",void 0),A([(0,r.wk)()],q.prototype,"uri",void 0),A([(0,r.wk)()],q.prototype,"ready",void 0),A([(0,r.wk)()],q.prototype,"loading",void 0),A([(0,r.wk)()],q.prototype,"remoteFeatures",void 0),q=A([(0,c.EM)("w3m-connecting-farcaster-view")],q)}}]);